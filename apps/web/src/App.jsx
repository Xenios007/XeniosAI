import React, { useEffect, useMemo, useState } from 'react';
import { NavLink, Navigate, Route, Routes, useNavigate } from 'react-router-dom';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

async function api(path, options = {}) {
  const response = await fetch(`${API_URL}${path}`, {
    credentials: 'include',
    headers: options.body ? { 'Content-Type': 'application/json', ...(options.headers || {}) } : options.headers,
    ...options
  });
  const body = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(body.error || `Request failed (${response.status})`);
  return body;
}

export default function App() {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    api('/api/auth/me').then(({ user }) => setUser(user)).catch(() => setUser(null));
  }, []);

  if (user === undefined) return <div className="center-screen">Loading XeniosAI…</div>;
  if (!user) return <AuthScreen onAuthenticated={setUser} />;
  return <ProductShell user={user} onLogout={() => setUser(null)} />;
}

function AuthScreen({ onAuthenticated }) {
  const [mode, setMode] = useState('login');
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  async function submit(event) {
    event.preventDefault();
    setBusy(true); setError('');
    try {
      const { user } = await api(`/api/auth/${mode}`, { method: 'POST', body: JSON.stringify(form) });
      onAuthenticated(user);
    } catch (err) { setError(err.message); }
    finally { setBusy(false); }
  }

  return <div className="auth-page">
    <div className="auth-card">
      <div className="brand-mark">X</div>
      <h1>XeniosAI</h1>
      <p className="muted">Build and test an AI that actually knows your business.</p>
      <div className="segmented">
        <button className={mode === 'login' ? 'active' : ''} onClick={() => setMode('login')}>Sign in</button>
        <button className={mode === 'register' ? 'active' : ''} onClick={() => setMode('register')}>Create account</button>
      </div>
      <form onSubmit={submit} className="stack">
        {mode === 'register' && <input placeholder="Full name" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />}
        <input type="email" placeholder="Email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
        <input type="password" placeholder="Password" minLength="8" required value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} />
        {error && <div className="error">{error}</div>}
        <button className="primary" disabled={busy}>{busy ? 'Please wait…' : mode === 'login' ? 'Sign in' : 'Create account'}</button>
      </form>
      <GoogleLogin onAuthenticated={onAuthenticated} onError={setError} />
    </div>
  </div>;
}

function GoogleLogin({ onAuthenticated, onError }) {
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!clientId) return;
    const existing = document.querySelector('script[data-xenios-google]');
    if (existing) { setReady(true); return; }
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true; script.defer = true; script.dataset.xeniosGoogle = '1';
    script.onload = () => setReady(true);
    document.head.appendChild(script);
  }, [clientId]);

  useEffect(() => {
    if (!clientId || !ready || !window.google) return;
    window.google.accounts.id.initialize({
      client_id: clientId,
      callback: async ({ credential }) => {
        try {
          const { user } = await api('/api/auth/google', { method: 'POST', body: JSON.stringify({ credential }) });
          onAuthenticated(user);
        } catch (err) { onError(err.message); }
      }
    });
    window.google.accounts.id.renderButton(document.getElementById('google-login'), { theme: 'outline', size: 'large', width: 360 });
  }, [clientId, ready, onAuthenticated, onError]);

  if (!clientId) return <div className="oauth-note">Google login activates when VITE_GOOGLE_CLIENT_ID is configured.</div>;
  return <div id="google-login" className="google-login" />;
}

const nav = [
  ['/', 'Dashboard'], ['/chat', 'AI Chat'], ['/knowledge', 'Business Knowledge'], ['/models', 'AI Models'],
  ['/agents', 'Agents'], ['/tasks', 'Tasks'], ['/workflows', 'Workflows'], ['/memory', 'Memory'],
  ['/analytics', 'Analytics'], ['/billing', 'Billing'], ['/logs', 'Logs'], ['/system', 'System'], ['/settings', 'Settings']
];

function ProductShell({ user, onLogout }) {
  const [businesses, setBusinesses] = useState([]);
  const [businessId, setBusinessId] = useState('');
  const navigate = useNavigate();

  async function loadBusinesses() {
    const { businesses } = await api('/api/businesses');
    setBusinesses(businesses);
    setBusinessId(current => current || businesses[0]?.id || '');
  }
  useEffect(() => { loadBusinesses().catch(console.error); }, []);

  async function createBusiness() {
    const name = window.prompt('Business name');
    if (!name?.trim()) return;
    const { business } = await api('/api/businesses', { method: 'POST', body: JSON.stringify({ name: name.trim(), category: 'Business' }) });
    await loadBusinesses(); setBusinessId(business.id); navigate('/knowledge');
  }

  async function logout() {
    await api('/api/auth/logout', { method: 'POST' }).catch(() => {});
    onLogout();
  }

  const selectedBusiness = businesses.find(item => item.id === businessId) || null;

  return <div className="app-shell">
    <aside className="sidebar">
      <div className="sidebar-brand"><span className="brand-mark small">X</span><strong>XeniosAI</strong></div>
      <nav>{nav.map(([to, label]) => <NavLink key={to} to={to} end={to === '/'}>{label}</NavLink>)}</nav>
    </aside>
    <main className="workspace">
      <header className="topbar">
        <div className="business-picker">
          <select value={businessId} onChange={e => setBusinessId(e.target.value)}>
            <option value="">No business selected</option>
            {businesses.map(b => <option key={b.id} value={b.id}>{b.name}</option>)}
          </select>
          <button onClick={createBusiness}>+ Business</button>
        </div>
        <div className="user-menu"><span>{user.name || user.email}</span><button onClick={logout}>Logout</button></div>
      </header>
      <section className="content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/chat" element={<Chat business={selectedBusiness} />} />
          <Route path="/knowledge" element={<Knowledge business={selectedBusiness} />} />
          <Route path="/models" element={<Models />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/agents" element={<Placeholder title="Agents" text="ARCH-014 becomes persisted, user-configurable agents here." />} />
          <Route path="/tasks" element={<Placeholder title="Tasks" text="Agent and workflow tasks will appear here." />} />
          <Route path="/workflows" element={<Placeholder title="Workflows" text="ARCH-015 becomes real configurable workflows here." />} />
          <Route path="/memory" element={<Placeholder title="Memory" text="Conversation memory remains separate from authoritative Business Knowledge." />} />
          <Route path="/analytics" element={<Placeholder title="Analytics" text="Usage, token, latency, provider and business metrics will live here." />} />
          <Route path="/logs" element={<Placeholder title="Logs" text="Operational and AI request logs will live here." />} />
          <Route path="/system" element={<SystemPage />} />
          <Route path="/settings" element={<Placeholder title="Settings" text="Account, AI defaults, security, workspace and preferences." />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </section>
    </main>
  </div>;
}

function Dashboard() {
  const [data, setData] = useState(null);
  useEffect(() => { api('/api/dashboard').then(setData).catch(console.error); }, []);
  if (!data) return <PanelTitle title="Dashboard" subtitle="Loading account and platform summary…" />;
  return <>
    <PanelTitle title="Dashboard" subtitle="Your XeniosAI product control center." />
    <div className="card-grid">
      {Object.entries(data.cards).map(([label, value]) => <div className="stat-card" key={label}><span>{humanize(label)}</span><strong>{value}</strong></div>)}
    </div>
    <div className="panel"><h3>Product-first status</h3><p>The architecture remains underneath the product. User journeys now define completion.</p></div>
  </>;
}

function Chat({ business }) {
  const [providers, setProviders] = useState([]);
  const [provider, setProvider] = useState('mock');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [busy, setBusy] = useState(false);
  useEffect(() => { api('/api/ai/providers').then(({ providers }) => setProviders(providers)); }, []);

  async function send(event) {
    event.preventDefault(); if (!message.trim() || !business) return;
    const input = message.trim(); setMessages(x => [...x, { role: 'user', text: input }]); setMessage(''); setBusy(true);
    try {
      const result = await api('/api/chat', { method: 'POST', body: JSON.stringify({ businessId: business.id, provider, message: input }) });
      setMessages(x => [...x, { role: 'assistant', text: result.text, meta: `${result.provider} · ${result.latencyMs} ms · ${result.sourcesUsed} knowledge sources` }]);
    } catch (err) { setMessages(x => [...x, { role: 'assistant', text: `Error: ${err.message}` }]); }
    finally { setBusy(false); }
  }

  return <>
    <PanelTitle title="XeniosAI Chat" subtitle={business ? `Testing against ${business.name}` : 'Create or select a business first.'} />
    <div className="chat-panel">
      <div className="chat-toolbar"><select value={provider} onChange={e => setProvider(e.target.value)}>{providers.map(p => <option key={p.id} value={p.id}>{p.name}{p.connected ? ' · connected' : ''}</option>)}</select><span>Customer Simulation</span></div>
      <div className="chat-messages">{messages.length === 0 && <div className="empty">Ask how XeniosAI would answer using the selected business knowledge.</div>}{messages.map((m, i) => <div className={`message ${m.role}`} key={i}><strong>{m.role === 'user' ? 'You' : 'XeniosAI'}</strong><p>{m.text}</p>{m.meta && <small>{m.meta}</small>}</div>)}</div>
      <form className="chat-compose" onSubmit={send}><input disabled={!business || busy} value={message} onChange={e => setMessage(e.target.value)} placeholder={business ? `Ask about ${business.name}…` : 'Create a business first'} /><button className="primary" disabled={!business || busy}>Send</button></form>
    </div>
  </>;
}

function Knowledge({ business }) {
  const [entries, setEntries] = useState([]);
  const [form, setForm] = useState({ title: '', category: 'General', content: '' });
  async function load() { if (!business) { setEntries([]); return; } const { knowledge } = await api(`/api/businesses/${business.id}/knowledge`); setEntries(knowledge); }
  useEffect(() => { load().catch(console.error); }, [business?.id]);
  async function add(event) { event.preventDefault(); if (!business) return; await api(`/api/businesses/${business.id}/knowledge`, { method: 'POST', body: JSON.stringify(form) }); setForm({ title: '', category: 'General', content: '' }); await load(); }
  async function remove(id) { await api(`/api/knowledge/${id}`, { method: 'DELETE' }); await load(); }
  return <>
    <PanelTitle title="Business Knowledge" subtitle={business ? `Teach XeniosAI about ${business.name}.` : 'Create or select a business first.'} />
    <div className="two-column">
      <form className="panel stack" onSubmit={add}>
        <h3>Add knowledge</h3>
        <input disabled={!business} placeholder="Title, e.g. Weekend rates" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} required />
        <select disabled={!business} value={form.category} onChange={e => setForm({ ...form, category: e.target.value })}><option>General</option><option>Rates</option><option>Policies</option><option>FAQ</option><option>Services</option><option>Parking</option></select>
        <textarea disabled={!business} rows="9" placeholder="Paste business information here…" value={form.content} onChange={e => setForm({ ...form, content: e.target.value })} required />
        <button className="primary" disabled={!business}>Save Knowledge</button>
      </form>
      <div className="panel"><h3>Knowledge entries</h3>{entries.length === 0 ? <div className="empty">No knowledge yet.</div> : entries.map(entry => <div className="knowledge-row" key={entry.id}><div><strong>{entry.title}</strong><small>{entry.category} · {entry.source}</small><p>{entry.content}</p></div><button onClick={() => remove(entry.id)}>Delete</button></div>)}</div>
    </div>
  </>;
}

function Models() {
  const [providers, setProviders] = useState([]);
  useEffect(() => { api('/api/ai/providers').then(({ providers }) => setProviders(providers)); }, []);
  return <><PanelTitle title="AI Models" subtitle="XeniosAI is provider-independent. Connect providers server-side and select them per chat/agent." /><div className="provider-grid">{providers.map(p => <div className="panel provider" key={p.id}><div><strong>{p.name}</strong><p>{p.type}</p></div><span className={p.connected ? 'badge good' : 'badge'}>{p.connected ? 'Connected' : 'Available adapter target'}</span></div>)}</div></>;
}

function Billing() {
  const [plans, setPlans] = useState([]);
  const [subscription, setSubscription] = useState(null);
  const [error, setError] = useState('');
  async function load() { const [p, s] = await Promise.all([api('/api/billing/plans'), api('/api/billing/subscription')]); setPlans(p.plans); setSubscription(s.subscription); }
  useEffect(() => { load().catch(err => setError(err.message)); }, []);
  async function checkout(planId) { try { const { url } = await api('/api/billing/checkout', { method: 'POST', body: JSON.stringify({ planId }) }); window.location.assign(url); } catch (err) { setError(err.message); } }
  async function portal() { try { const { url } = await api('/api/billing/portal', { method: 'POST' }); window.location.assign(url); } catch (err) { setError(err.message); } }
  return <><PanelTitle title="Billing" subtitle="XeniosAI account subscription and plan management." />{error && <div className="error">{error}</div>}<div className="panel billing-current"><div><span className="muted">Current subscription</span><h3>{subscription?.planId || 'free'} · {subscription?.status || 'active'}</h3></div>{subscription?.customerId && <button onClick={portal}>Manage billing</button>}</div><div className="pricing-grid">{plans.map(plan => <div className="price-card" key={plan.id}><h3>{plan.name}</h3><div className="price">{plan.amountPHP === 0 ? 'Free' : `₱${plan.amountPHP.toLocaleString()}`}<small>{plan.amountPHP > 0 ? '/month' : ''}</small></div><p>{plan.description}</p><button className={plan.id === subscription?.planId ? '' : 'primary'} disabled={plan.id === subscription?.planId} onClick={() => checkout(plan.id)}>{plan.id === subscription?.planId ? 'Current plan' : plan.amountPHP === 0 ? 'Use Free' : 'Choose plan'}</button></div>)}</div></>;
}

function SystemPage() {
  const [data, setData] = useState(null); useEffect(() => { api('/api/system').then(setData); }, []);
  return <><PanelTitle title="System" subtitle="API runtime status." /><div className="panel"><pre>{JSON.stringify(data, null, 2)}</pre></div></>;
}
function Placeholder({ title, text }) { return <><PanelTitle title={title} subtitle={text} /><div className="panel"><p>This surface is reserved in the product shell and will be connected to its existing ARCH capability instead of creating another metadata-only phase.</p></div></>; }
function PanelTitle({ title, subtitle }) { return <div className="page-title"><h1>{title}</h1><p>{subtitle}</p></div>; }
function humanize(value) { return value.replace(/([A-Z])/g, ' $1').replace(/^./, c => c.toUpperCase()); }
