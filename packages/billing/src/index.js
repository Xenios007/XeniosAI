import Stripe from 'stripe';

const PLANS = Object.freeze([
  { id: 'free', name: 'Free', amountPHP: 0, description: 'Explore XeniosAI with basic local testing.' },
  { id: 'starter', name: 'Starter', amountPHP: 499, description: 'For one small business starting with AI customer support.' },
  { id: 'pro', name: 'Pro', amountPHP: 999, description: 'For active businesses using multiple AI models and more automation.' },
  { id: 'business', name: 'Business', amountPHP: 2499, description: 'For teams, higher usage, agents, workflows and advanced operations.' }
]);

export class BillingService {
  constructor({ provider = 'mock', stripeSecretKey, webhookSecret, appUrl, currency = 'php' }) {
    this.providerName = provider;
    this.appUrl = appUrl || 'http://localhost:5173';
    this.currency = currency;
    this.webhookSecret = webhookSecret;
    this.stripe = provider === 'stripe' && stripeSecretKey ? new Stripe(stripeSecretKey) : null;
    if (provider === 'stripe' && !this.stripe) throw new Error('BILLING_PROVIDER=stripe requires STRIPE_SECRET_KEY.');
  }
  plans() { return PLANS.map(x => ({ ...x })); }
  plan(planId) { const plan = PLANS.find(x => x.id === planId); if (!plan) throw new Error('Unknown billing plan.'); return plan; }

  async createCheckout({ planId, user }) {
    const plan = this.plan(planId); if (plan.amountPHP === 0) return { url: `${this.appUrl}/billing` };
    if (this.providerName === 'mock') return { url: `${this.appUrl}/billing?mockCheckout=success&plan=${encodeURIComponent(plan.id)}` };
    const session = await this.stripe.checkout.sessions.create({
      mode: 'subscription', customer_email: user.email,
      success_url: `${this.appUrl}/billing?checkout=success`, cancel_url: `${this.appUrl}/billing?checkout=cancelled`,
      line_items: [{ quantity: 1, price_data: { currency: this.currency, unit_amount: plan.amountPHP * 100, recurring: { interval: 'month' }, product_data: { name: `XeniosAI ${plan.name}`, description: plan.description } } }],
      metadata: { xeniosUserId: user.id, xeniosPlanId: plan.id },
      subscription_data: { metadata: { xeniosUserId: user.id, xeniosPlanId: plan.id } }
    });
    return { url: session.url, checkoutSessionId: session.id };
  }

  async createPortal({ customerId }) {
    if (this.providerName === 'mock') return { url: `${this.appUrl}/billing` };
    const portal = await this.stripe.billingPortal.sessions.create({ customer: customerId, return_url: `${this.appUrl}/billing` });
    return { url: portal.url };
  }

  async parseWebhook({ rawBody, signature }) {
    if (this.providerName !== 'stripe') return null;
    if (!this.webhookSecret) throw new Error('STRIPE_WEBHOOK_SECRET is required for live billing webhooks.');
    const event = this.stripe.webhooks.constructEvent(rawBody, signature, this.webhookSecret);
    const object = event.data.object;
    if (event.type === 'checkout.session.completed') return { provider: 'stripe', userId: object.metadata?.xeniosUserId, planId: object.metadata?.xeniosPlanId, status: 'active', customerId: stringId(object.customer), subscriptionId: stringId(object.subscription) };
    if (event.type === 'customer.subscription.updated') return { provider: 'stripe', userId: object.metadata?.xeniosUserId, planId: object.metadata?.xeniosPlanId, status: object.status, customerId: stringId(object.customer), subscriptionId: object.id };
    if (event.type === 'customer.subscription.deleted') return { provider: 'stripe', userId: object.metadata?.xeniosUserId, planId: object.metadata?.xeniosPlanId, status: 'canceled', customerId: stringId(object.customer), subscriptionId: object.id };
    return null;
  }
}
function stringId(value) { return typeof value === 'string' ? value : value?.id || null; }
