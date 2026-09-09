import crypto from 'node:crypto';

const direct = 'direct';
const review = 'review-required';
const partner = 'partner-required';
const indirect = 'via-platform';
const META_GRAPH_VERSION = process.env.META_GRAPH_VERSION || 'v26.0';

export const CHANNEL_CATALOG = Object.freeze([
  channel('webchat', 'XeniosAI Web Chat', 'Owned', direct, 'Native website widget / API chat.', [], []),
  channel('email', 'Email', 'Owned', direct, 'SMTP/IMAP or provider API integration.', ['smtpHost', 'smtpPort', 'username'], ['password']),
  channel('sms', 'SMS / MMS', 'Owned', direct, 'Connect through Twilio or another SMS provider.', ['accountSid', 'fromNumber'], ['authToken']),
  channel('facebook-messenger', 'Facebook Page Messenger', 'Meta', review, 'Messenger Platform for Facebook Pages.', ['pageId'], ['pageAccessToken', 'appSecret', 'verifyToken'], true),
  channel('instagram', 'Instagram Messaging', 'Meta', review, 'Messaging for eligible Instagram professional accounts.', ['instagramAccountId'], ['accessToken', 'appSecret', 'verifyToken']),
  channel('whatsapp', 'WhatsApp Business', 'Meta', review, 'WhatsApp Cloud API.', ['phoneNumberId'], ['accessToken', 'appSecret', 'verifyToken'], true),
  channel('telegram', 'Telegram', 'Social', direct, 'Telegram Bot API.', [], ['botToken', 'webhookSecret'], true),
  channel('line', 'LINE', 'Social', direct, 'LINE Official Account Messaging API.', [], ['channelAccessToken', 'channelSecret'], true),
  channel('wechat-official', 'WeChat Official Account', 'Social', review, 'WeChat Official Account customer-service messaging.', ['appId', 'token'], ['appSecret', 'encodingAesKey']),
  channel('wecom', 'WeCom / Enterprise WeChat', 'Social', review, 'Enterprise WeChat customer/contact messaging.', ['corpId', 'agentId', 'token'], ['secret', 'encodingAesKey']),
  channel('x-dm', 'X Direct Messages', 'Social', direct, 'X API v2 Direct Messages with user OAuth.', [], ['userAccessToken'], true),
  channel('viber', 'Rakuten Viber', 'Social', review, 'Viber bot / Business Messages; new bots are commercial.', [], ['authToken'], true),
  channel('kakao-cs', 'KakaoTalk CS / Channel', 'Social', review, 'Kakao Business customer-support channel integration.', ['channelId'], ['accessToken']),
  channel('discord', 'Discord', 'Community', direct, 'Discord bot using Gateway/HTTP APIs.', ['applicationId'], ['botToken'], true),
  channel('slack', 'Slack', 'Workplace', direct, 'Slack app / bot messaging.', [], ['botToken', 'signingSecret'], true),
  channel('microsoft-teams', 'Microsoft Teams', 'Workplace', review, 'Teams bot / Microsoft Bot Framework.', ['appId'], ['appPassword']),
  channel('google-chat', 'Google Chat', 'Workplace', review, 'Google Chat app integration.', ['projectId'], ['serviceAccountJson']),
  channel('apple-messages', 'Apple Messages for Business', 'Business Messaging', partner, 'Requires Apple Messages for Business enrollment and an approved messaging service provider.', ['brandId'], ['providerCredentials']),
  channel('airbnb', 'Airbnb Guest Messaging', 'Travel', partner, 'Requires Airbnb API/software-program access and approved scopes. Not a self-serve host API token.', ['partnerAccountId'], ['partnerCredentials']),
  channel('booking-com', 'Booking.com Guest Messaging', 'Travel', partner, 'Booking.com Connectivity Partner with MESSAGING connection type.', ['machineAccountId'], ['apiToken']),
  channel('expedia-vrbo', 'Expedia / Vrbo Messaging', 'Travel', partner, 'Expedia Group lodging connectivity messaging.', ['partnerId'], ['partnerCredentials']),
  channel('zendesk', 'Zendesk Messaging', 'Support', indirect, 'Zendesk Messaging / Sunshine Conversations.', ['subdomain', 'appId', 'keyId'], ['secret']),
  channel('intercom', 'Intercom', 'Support', indirect, 'Intercom Messenger / Conversations API.', [], ['accessToken']),
  channel('hubspot', 'HubSpot Conversations', 'Support', indirect, 'HubSpot Conversations inbox/custom channel API.', [], ['privateAppToken']),
  channel('freshchat', 'Freshchat', 'Support', indirect, 'Freshchat conversation APIs and bot integrations.', ['accountUrl'], ['apiToken']),
  channel('salesforce', 'Salesforce Digital Engagement', 'Support', indirect, 'Salesforce enhanced messaging channels.', ['instanceUrl'], ['accessToken']),
  channel('twilio-conversations', 'Twilio Conversations', 'Aggregator', indirect, 'Cross-channel conversations including chat, SMS and WhatsApp.', ['accountSid', 'serviceSid'], ['authToken']),
  channel('custom-webhook', 'Custom Webhook / API', 'Developer', direct, 'Bring any channel through an inbound/outbound webhook contract.', ['outboundUrl'], ['webhookSecret'], true)
]);

function channel(id, name, group, access, description, settingsFields, credentialFields, sendImplemented = false) {
  return Object.freeze({ id, name, group, access, description, settingsFields, credentialFields, sendImplemented, inbound: true, outbound: true });
}

export function getChannel(id) {
  return CHANNEL_CATALOG.find(item => item.id === id) || null;
}

export function publicConnection(connection) {
  if (!connection) return null;
  const { encryptedCredentials, ...safe } = connection;
  return { ...safe, hasCredentials: Boolean(encryptedCredentials) };
}

export function createCredentialVault(secret) {
  if (!secret) throw new Error('Integration credential encryption secret is required.');
  const key = crypto.createHash('sha256').update(String(secret)).digest();
  return Object.freeze({
    seal(value = {}) {
      const iv = crypto.randomBytes(12);
      const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
      const plaintext = Buffer.from(JSON.stringify(value));
      const ciphertext = Buffer.concat([cipher.update(plaintext), cipher.final()]);
      const tag = cipher.getAuthTag();
      return Buffer.concat([iv, tag, ciphertext]).toString('base64url');
    },
    open(token) {
      if (!token) return {};
      const packed = Buffer.from(token, 'base64url');
      const iv = packed.subarray(0, 12);
      const tag = packed.subarray(12, 28);
      const ciphertext = packed.subarray(28);
      const decipher = crypto.createDecipheriv('aes-256-gcm', key, iv);
      decipher.setAuthTag(tag);
      return JSON.parse(Buffer.concat([decipher.update(ciphertext), decipher.final()]).toString('utf8'));
    }
  });
}

export function parseInbound(channelId, payload) {
  switch (channelId) {
    case 'telegram': {
      const message = payload?.message || payload?.edited_message;
      return message?.text ? [{ senderId: String(message.chat.id), text: message.text, externalMessageId: String(message.message_id) }] : [];
    }
    case 'line':
      return (payload?.events || []).filter(event => event.type === 'message' && event.message?.type === 'text')
        .map(event => ({ senderId: event.source?.userId || event.source?.groupId || event.source?.roomId, text: event.message.text, externalMessageId: event.message.id, replyToken: event.replyToken }));
    case 'facebook-messenger':
    case 'instagram':
      return (payload?.entry || []).flatMap(entry => (entry.messaging || []))
        .filter(event => event.message?.text && !event.message?.is_echo)
        .map(event => ({ senderId: event.sender?.id, text: event.message.text, externalMessageId: event.message.mid }));
    case 'whatsapp':
      return (payload?.entry || []).flatMap(entry => entry.changes || []).flatMap(change => change.value?.messages || [])
        .filter(message => message.type === 'text')
        .map(message => ({ senderId: message.from, text: message.text?.body || '', externalMessageId: message.id }));
    case 'slack': {
      if (payload?.type === 'url_verification') return [];
      const event = payload?.event;
      return event?.type === 'message' && event.text && !event.bot_id
        ? [{ senderId: event.channel, userId: event.user, text: event.text, externalMessageId: event.ts }]
        : [];
    }
    case 'custom-webhook':
    case 'webchat':
      return payload?.text ? [{ senderId: String(payload.senderId || payload.userId || 'anonymous'), text: String(payload.text), externalMessageId: payload.messageId || null }] : [];
    default:
      return [];
  }
}

export function verifyInboundRequest(channelId, { rawBody, headers = {}, credentials = {} }) {
  const body = Buffer.isBuffer(rawBody) ? rawBody : Buffer.from(rawBody || '');
  if (['facebook-messenger', 'instagram', 'whatsapp'].includes(channelId) && credentials.appSecret) {
    const received = header(headers, 'x-hub-signature-256');
    const expected = `sha256=${crypto.createHmac('sha256', credentials.appSecret).update(body).digest('hex')}`;
    return secureEqual(received, expected);
  }
  if (channelId === 'line' && credentials.channelSecret) {
    const received = header(headers, 'x-line-signature');
    const expected = crypto.createHmac('sha256', credentials.channelSecret).update(body).digest('base64');
    return secureEqual(received, expected);
  }
  if (channelId === 'slack' && credentials.signingSecret) {
    const timestamp = header(headers, 'x-slack-request-timestamp');
    const received = header(headers, 'x-slack-signature');
    if (!timestamp || Math.abs(Date.now() / 1000 - Number(timestamp)) > 300) return false;
    const expected = `v0=${crypto.createHmac('sha256', credentials.signingSecret).update(`v0:${timestamp}:${body.toString('utf8')}`).digest('hex')}`;
    return secureEqual(received, expected);
  }
  if (channelId === 'telegram' && credentials.webhookSecret) {
    return secureEqual(header(headers, 'x-telegram-bot-api-secret-token'), credentials.webhookSecret);
  }
  if (channelId === 'custom-webhook' && credentials.webhookSecret) {
    return secureEqual(header(headers, 'x-xenios-webhook-secret'), credentials.webhookSecret);
  }
  return true;
}

export async function testConnection(channelId, connection, credentials) {
  switch (channelId) {
    case 'telegram': return checkedJson(`https://api.telegram.org/bot${credentials.botToken}/getMe`);
    case 'line': return checkedJson('https://api.line.me/v2/bot/info', { headers: { Authorization: `Bearer ${credentials.channelAccessToken}` } });
    case 'slack': return checkedJson('https://slack.com/api/auth.test', { method: 'POST', headers: { Authorization: `Bearer ${credentials.botToken}` } }, body => body.ok !== false);
    case 'x-dm': return checkedJson('https://api.x.com/2/users/me', { headers: { Authorization: `Bearer ${credentials.userAccessToken}` } });
    case 'facebook-messenger': return checkedJson(`https://graph.facebook.com/${META_GRAPH_VERSION}/${encodeURIComponent(connection.settings.pageId)}?fields=id,name&access_token=${encodeURIComponent(credentials.pageAccessToken)}`);
    case 'whatsapp': return checkedJson(`https://graph.facebook.com/${META_GRAPH_VERSION}/${encodeURIComponent(connection.settings.phoneNumberId)}`, { headers: { Authorization: `Bearer ${credentials.accessToken}` } });
    case 'viber': return checkedJson('https://chatapi.viber.com/pa/get_account_info', { method: 'POST', headers: { 'X-Viber-Auth-Token': credentials.authToken } });
    case 'custom-webhook': return { ok: Boolean(connection.settings.outboundUrl), detail: 'Custom webhook configured.' };
    default: return { ok: true, detail: 'Connection saved. This channel requires provider/app approval or a specialized adapter before live traffic.' };
  }
}

export async function sendChannelMessage(channelId, connection, credentials, recipient, text) {
  const id = typeof recipient === 'string' ? recipient : recipient?.id || recipient?.senderId;
  if (!id && channelId !== 'custom-webhook') throw new Error('Recipient id is required.');
  switch (channelId) {
    case 'facebook-messenger':
      return checkedJson(`https://graph.facebook.com/${META_GRAPH_VERSION}/${encodeURIComponent(connection.settings.pageId)}/messages?access_token=${encodeURIComponent(credentials.pageAccessToken)}`, jsonPost({ recipient: { id }, messaging_type: 'RESPONSE', message: { text } }));
    case 'whatsapp':
      return checkedJson(`https://graph.facebook.com/${META_GRAPH_VERSION}/${encodeURIComponent(connection.settings.phoneNumberId)}/messages`, jsonPost({ messaging_product: 'whatsapp', to: id, type: 'text', text: { body: text } }, { Authorization: `Bearer ${credentials.accessToken}` }));
    case 'telegram':
      return checkedJson(`https://api.telegram.org/bot${credentials.botToken}/sendMessage`, jsonPost({ chat_id: id, text }));
    case 'line':
      return checkedJson('https://api.line.me/v2/bot/message/push', jsonPost({ to: id, messages: [{ type: 'text', text }] }, { Authorization: `Bearer ${credentials.channelAccessToken}` }));
    case 'x-dm':
      return checkedJson(`https://api.x.com/2/dm_conversations/with/${encodeURIComponent(id)}/messages`, jsonPost({ text }, { Authorization: `Bearer ${credentials.userAccessToken}` }));
    case 'slack':
      return checkedJson('https://slack.com/api/chat.postMessage', jsonPost({ channel: id, text }, { Authorization: `Bearer ${credentials.botToken}` }), body => body.ok !== false);
    case 'discord':
      return checkedJson(`https://discord.com/api/v10/channels/${encodeURIComponent(id)}/messages`, jsonPost({ content: text }, { Authorization: `Bot ${credentials.botToken}` }));
    case 'viber':
      return checkedJson('https://chatapi.viber.com/pa/send_message', jsonPost({ receiver: id, type: 'text', text }, { 'X-Viber-Auth-Token': credentials.authToken }));
    case 'custom-webhook':
      return checkedJson(connection.settings.outboundUrl, jsonPost({ recipient: id || null, text, integrationId: connection.id }, credentials.webhookSecret ? { 'X-Xenios-Webhook-Secret': credentials.webhookSecret } : {}));
    default:
      throw new Error(`${getChannel(channelId)?.name || channelId} outbound adapter is not live yet. The channel is cataloged for configuration/approval tracking.`);
  }
}

function jsonPost(body, headers = {}) {
  return { method: 'POST', headers: { 'Content-Type': 'application/json', ...headers }, body: JSON.stringify(body) };
}

async function checkedJson(url, options = {}, validate = () => true) {
  const response = await fetch(url, options);
  const body = await response.json().catch(() => ({}));
  if (!response.ok || !validate(body)) throw new Error(body?.error?.message || body?.description || body?.error || `Channel request failed (${response.status})`);
  return { ok: true, body };
}

function header(headers, name) {
  if (typeof headers.get === 'function') return headers.get(name) || '';
  return headers[name] || headers[name.toLowerCase()] || '';
}

function secureEqual(left, right) {
  const a = Buffer.from(String(left || ''));
  const b = Buffer.from(String(right || ''));
  return a.length === b.length && a.length > 0 && crypto.timingSafeEqual(a, b);
}
