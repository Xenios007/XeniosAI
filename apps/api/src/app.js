import crypto from 'node:crypto';
import os from 'node:os';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';
import { OAuth2Client } from 'google-auth-library';
import { hashPassword, verifyPassword } from '@xeniosai/auth';
import { buildKnowledgeContext } from '@xeniosai/knowledge';
import { AIService, providerCatalog } from '@xeniosai/ai';
import { BillingService } from '@xeniosai/billing';
import { JsonStore } from './store.js';

const COOKIE = 'xenios_session';

export async function createApp(config = process.env) {
  const app = express();
  const store = await new JsonStore(config.DATA_FILE).init();
  const sessionSecret = config.SESSION_SECRET || 'dev-only-change-me';
  const appUrl = config.APP_URL || 'http://localhost:5173';
  const google = config.GOOGLE_CLIENT_ID ? new OAuth2Client(config.GOOGLE_CLIENT_ID) : null;
  const ai = new AIService(config);
  const billing = new BillingService({
    provider: config.BILLING_PROVIDER || (config.STRIPE_SECRET_KEY ? 'stripe' : 'mock'),
    stripeSecretKey: config.STRIPE_SECRET_KEY,
    webhookSecret: config.STRIPE_WEBHOOK_SECRET,
    appUrl,
    currency: config.BILLING_CURRENCY || 'php'
  });

  // Webhook must receive the unparsed body for payment-signature verification.
  app.post('/api/billing/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
    try {
      const change = await billing.parseWebhook({ rawBody: req.body, signature: req.headers['stripe-signature'] });
      if (change?.userId) await upsertSubscription(store, change.userId, change);
      res.json({ received: true });
    } catch (error) { res.status(400).json({ error: error.message }); }
  });

  app.use(cors({ origin: config.CORS_ORIGIN || appUrl, credentials: true }));
  app.use(cookieParser());
  app.use(express.json({ limit: '2mb' }));

  function issueSession(res, user) {
    const token = jwt.sign({ sub: user.id, email: user.email }, sessionSecret, { expiresIn: '7d' });
    res.cookie(COOKIE, token, { httpOnly: true, sameSite: 'lax', secure: config.NODE_ENV === 'production', maxAge: 7 * 24 * 3600 * 1000 });
  }
  function auth(req, res, next) {
    try {
      const decoded = jwt.verify(req.cookies[COOKIE], sessionSecret);
      const user = store.snapshot().users.find(item => item.id === decoded.sub);
      if (!user) throw new Error('User not found');
      req.user = publicUser(user); next();
    } catch { res.status(401).json({ error: 'Authentication required' }); }
  }

  app.get('/api/health', (_req, res) => res.json({ ok: true, product: 'XeniosAI', mode: 'product-first' }));

  app.post('/api/auth/register', async (req, res) => {
    const name = String(req.body.name || '').trim(); const email = String(req.body.email || '').trim().toLowerCase(); const password = String(req.body.password || '');
    if (!name || !email || password.length < 8) return res.status(400).json({ error: 'Name, valid email, and an 8+ character password are required.' });
    if (store.snapshot().users.some(u => u.email === email)) return res.status(409).json({ error: 'An account with that email already exists.' });
    const user = { id: crypto.randomUUID(), name, email, passwordHash: await hashPassword(password), authProvider: 'password', createdAt: new Date().toISOString() };
    await store.mutate(state => state.users.push(user)); issueSession(res, user); res.status(201).json({ user: publicUser(user) });
  });

  app.post('/api/auth/login', async (req, res) => {
    const email = String(req.body.email || '').trim().toLowerCase(); const password = String(req.body.password || '');
    const user = store.snapshot().users.find(u => u.email === email);
    if (!user?.passwordHash || !(await verifyPassword(password, user.passwordHash))) return res.status(401).json({ error: 'Invalid email or password.' });
    issueSession(res, user); res.json({ user: publicUser(user) });
  });

  app.post('/api/auth/google', async (req, res) => {
    if (!google) return res.status(503).json({ error: 'Google login is not configured.' });
    try {
      const ticket = await google.verifyIdToken({ idToken: req.body.credential, audience: config.GOOGLE_CLIENT_ID });
      const payload = ticket.getPayload(); const email = payload.email?.toLowerCase();
      if (!email || !payload.email_verified) return res.status(401).json({ error: 'Verified Google email is required.' });
      let user = store.snapshot().users.find(u => u.email === email);
      if (!user) {
        user = { id: crypto.randomUUID(), name: payload.name || email, email, authProvider: 'google', googleSubject: payload.sub, avatarUrl: payload.picture || null, createdAt: new Date().toISOString() };
        await store.mutate(state => state.users.push(user));
      }
      issueSession(res, user); res.json({ user: publicUser(user) });
    } catch { res.status(401).json({ error: 'Google authentication failed.' }); }
  });

  app.get('/api/auth/me', auth, (req, res) => res.json({ user: req.user }));
  app.post('/api/auth/logout', (_req, res) => { res.clearCookie(COOKIE); res.json({ ok: true }); });

  app.get('/api/businesses', auth, (req, res) => res.json({ businesses: store.snapshot().businesses.filter(b => b.ownerUserId === req.user.id) }));
  app.post('/api/businesses', auth, async (req, res) => {
    const name = String(req.body.name || '').trim(); if (!name) return res.status(400).json({ error: 'Business name is required.' });
    const business = { id: crypto.randomUUID(), ownerUserId: req.user.id, name, category: String(req.body.category || 'Business'), createdAt: new Date().toISOString() };
    await store.mutate(state => state.businesses.push(business)); res.status(201).json({ business });
  });

  app.get('/api/businesses/:id/knowledge', auth, (req, res) => {
    if (!ownsBusiness(store, req.user.id, req.params.id)) return res.status(404).json({ error: 'Business not found.' });
    res.json({ knowledge: store.snapshot().knowledge.filter(k => k.businessId === req.params.id) });
  });
  app.post('/api/businesses/:id/knowledge', auth, async (req, res) => {
    if (!ownsBusiness(store, req.user.id, req.params.id)) return res.status(404).json({ error: 'Business not found.' });
    const content = String(req.body.content || '').trim(); if (!content) return res.status(400).json({ error: 'Knowledge content is required.' });
    const entry = { id: crypto.randomUUID(), businessId: req.params.id, title: String(req.body.title || 'Knowledge'), category: String(req.body.category || 'General'), content, source: 'manual', enabled: true, createdAt: new Date().toISOString() };
    await store.mutate(state => state.knowledge.push(entry)); res.status(201).json({ entry });
  });
  app.delete('/api/knowledge/:id', auth, async (req, res) => {
    const entry = store.snapshot().knowledge.find(k => k.id === req.params.id); if (!entry || !ownsBusiness(store, req.user.id, entry.businessId)) return res.status(404).json({ error: 'Knowledge entry not found.' });
    await store.mutate(state => { state.knowledge = state.knowledge.filter(k => k.id !== req.params.id); }); res.json({ ok: true });
  });

  app.get('/api/ai/providers', auth, (_req, res) => res.json({ providers: providerCatalog(config) }));
  app.post('/api/chat', auth, async (req, res) => {
    const { businessId, provider = 'mock' } = req.body; const message = String(req.body.message || '').trim();
    if (!message || !ownsBusiness(store, req.user.id, businessId)) return res.status(400).json({ error: 'A valid business and message are required.' });
    const entries = store.snapshot().knowledge.filter(k => k.businessId === businessId && k.enabled !== false);
    const context = buildKnowledgeContext(entries, message); const start = Date.now();
    try {
      const result = await ai.chat({ provider, message, knowledgeContext: context.text });
      res.json({ ...result, latencyMs: Date.now() - start, sourcesUsed: context.entries.length });
    } catch (error) { res.status(502).json({ error: error.message }); }
  });

  app.get('/api/billing/plans', auth, (_req, res) => res.json({ plans: billing.plans() }));
  app.get('/api/billing/subscription', auth, (req, res) => res.json({ subscription: subscriptionFor(store, req.user.id) }));
  app.post('/api/billing/checkout', auth, async (req, res) => {
    try {
      const planId = String(req.body.planId || '');
      if (planId === 'free') { await upsertSubscription(store, req.user.id, { planId: 'free', status: 'active', provider: billing.providerName }); return res.json({ url: `${appUrl}/billing` }); }
      const result = await billing.createCheckout({ planId, user: req.user });
      if (billing.providerName === 'mock') await upsertSubscription(store, req.user.id, { planId, status: 'active', provider: 'mock', subscriptionId: `mock_${crypto.randomUUID()}` });
      res.json({ url: result.url });
    } catch (error) { res.status(400).json({ error: error.message }); }
  });
  app.post('/api/billing/portal', auth, async (req, res) => {
    try {
      const subscription = subscriptionFor(store, req.user.id); if (!subscription.customerId) throw new Error('No billing customer exists yet.');
      res.json({ url: (await billing.createPortal({ customerId: subscription.customerId })).url });
    } catch (error) { res.status(400).json({ error: error.message }); }
  });

  app.get('/api/dashboard', auth, (req, res) => {
    const state = store.snapshot(); const businessIds = state.businesses.filter(b => b.ownerUserId === req.user.id).map(b => b.id);
    const sub = subscriptionFor(store, req.user.id);
    res.json({ cards: { businesses: businessIds.length, knowledgeEntries: state.knowledge.filter(k => businessIds.includes(k.businessId)).length, connectedProviders: providerCatalog(config).filter(p => p.connected).length, activeAgents: 0, runningTasks: 0, plan: sub.planId } });
  });

  app.get('/api/system', auth, (_req, res) => res.json({ platform: os.platform(), release: os.release(), node: process.version, cpus: os.cpus().length, memoryTotalMB: Math.round(os.totalmem()/1024/1024), memoryFreeMB: Math.round(os.freemem()/1024/1024), uptimeSeconds: Math.round(process.uptime()) }));
  app.get('/api/agents', auth, (_req, res) => res.json({ agents: [] }));
  app.get('/api/tasks', auth, (_req, res) => res.json({ tasks: [] }));
  app.get('/api/workflows', auth, (_req, res) => res.json({ workflows: [] }));
  app.get('/api/memory', auth, (_req, res) => res.json({ memory: [] }));
  app.get('/api/logs', auth, (_req, res) => res.json({ logs: [] }));

  return app;
}

function publicUser(user) { return { id: user.id, name: user.name, email: user.email, authProvider: user.authProvider, avatarUrl: user.avatarUrl || null, createdAt: user.createdAt }; }
function ownsBusiness(store, userId, businessId) { return store.snapshot().businesses.some(b => b.id === businessId && b.ownerUserId === userId); }
function subscriptionFor(store, userId) { return store.snapshot().subscriptions.find(s => s.userId === userId) || { userId, planId: 'free', status: 'active', provider: 'internal' }; }
async function upsertSubscription(store, userId, change) {
  await store.mutate(state => {
    const existing = state.subscriptions.find(s => s.userId === userId);
    const next = { userId, planId: change.planId || existing?.planId || 'free', status: change.status || existing?.status || 'active', provider: change.provider || existing?.provider || 'stripe', customerId: change.customerId || existing?.customerId || null, subscriptionId: change.subscriptionId || existing?.subscriptionId || null, updatedAt: new Date().toISOString() };
    if (existing) Object.assign(existing, next); else state.subscriptions.push(next);
  });
}
