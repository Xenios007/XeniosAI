import crypto from 'node:crypto';
import test from 'node:test';
import assert from 'node:assert/strict';
import { CHANNEL_CATALOG, createCredentialVault, getChannel, parseInbound, publicConnection, verifyInboundRequest } from '../../packages/integrations/src/index.js';

test('channel catalog includes core social travel workplace and business integrations', () => {
  const ids = new Set(CHANNEL_CATALOG.map(channel => channel.id));
  for (const id of ['facebook-messenger', 'instagram', 'whatsapp', 'telegram', 'line', 'wechat-official', 'x-dm', 'airbnb', 'booking-com', 'expedia-vrbo', 'rcs-business', 'twitch', 'matrix', 'zoom-chat', 'mattermost', 'rocket-chat', 'zulip']) {
    assert.ok(ids.has(id), `expected ${id} in channel catalog`);
  }
  assert.equal(getChannel('airbnb').access, 'partner-required');
  assert.equal(getChannel('booking-com').access, 'partner-required');
  assert.equal(getChannel('rcs-business').access, 'partner-required');
  assert.equal(getChannel('telegram').outboundImplemented, true);
  assert.equal(getChannel('telegram').inboundImplemented, true);
  assert.equal(getChannel('x-dm').outboundImplemented, true);
  assert.equal(getChannel('x-dm').inboundImplemented, false);
});

test('integration credential vault encrypts and decrypts connection credentials', () => {
  const vault = createCredentialVault('test-only-secret');
  const credentials = { accessToken: 'super-secret-token', pageAccessToken: 'page-token' };
  const sealed = vault.seal(credentials);
  assert.notEqual(sealed, JSON.stringify(credentials));
  assert.deepEqual(vault.open(sealed), credentials);
});

test('public integration metadata never exposes encrypted credential payload', () => {
  const safe = publicConnection({ id: '1', channelId: 'telegram', encryptedCredentials: 'ciphertext', settings: {} });
  assert.equal(safe.encryptedCredentials, undefined);
  assert.equal(safe.hasCredentials, true);
});

test('telegram inbound payload is normalized', () => {
  assert.deepEqual(parseInbound('telegram', { message: { message_id: 9, chat: { id: 77 }, text: 'hello' } }), [
    { senderId: '77', text: 'hello', externalMessageId: '9' }
  ]);
});

test('whatsapp inbound payload is normalized', () => {
  const payload = { entry: [{ changes: [{ value: { messages: [{ id: 'wamid.1', from: '639171234567', type: 'text', text: { body: 'available?' } }] } }] }] };
  assert.deepEqual(parseInbound('whatsapp', payload), [
    { senderId: '639171234567', text: 'available?', externalMessageId: 'wamid.1' }
  ]);
});

test('facebook messenger inbound payload ignores echoes', () => {
  const payload = { entry: [{ messaging: [
    { sender: { id: 'guest-1' }, message: { mid: 'm1', text: 'rates?' } },
    { sender: { id: 'page-1' }, message: { mid: 'm2', text: 'reply', is_echo: true } }
  ] }] };
  assert.deepEqual(parseInbound('facebook-messenger', payload), [
    { senderId: 'guest-1', text: 'rates?', externalMessageId: 'm1' }
  ]);
});

test('Meta webhook verification checks raw-body HMAC', () => {
  const rawBody = Buffer.from('{"object":"page"}');
  const appSecret = 'meta-secret';
  const signature = `sha256=${crypto.createHmac('sha256', appSecret).update(rawBody).digest('hex')}`;
  assert.equal(verifyInboundRequest('facebook-messenger', { rawBody, headers: { 'x-hub-signature-256': signature }, credentials: { appSecret } }), true);
  assert.equal(verifyInboundRequest('facebook-messenger', { rawBody, headers: { 'x-hub-signature-256': 'sha256=bad' }, credentials: { appSecret } }), false);
  assert.equal(verifyInboundRequest('facebook-messenger', { rawBody, headers: {}, credentials: {} }), false);
});

test('LINE webhook verification checks channel-secret signature', () => {
  const rawBody = Buffer.from('{"events":[]}');
  const channelSecret = 'line-secret';
  const signature = crypto.createHmac('sha256', channelSecret).update(rawBody).digest('base64');
  assert.equal(verifyInboundRequest('line', { rawBody, headers: { 'x-line-signature': signature }, credentials: { channelSecret } }), true);
  assert.equal(verifyInboundRequest('line', { rawBody, headers: { 'x-line-signature': 'bad' }, credentials: { channelSecret } }), false);
});

test('custom webhook requires configured secret', () => {
  const request = { rawBody: Buffer.from('{}'), headers: { 'x-xenios-webhook-secret': 'private' }, credentials: { webhookSecret: 'private' } };
  assert.equal(verifyInboundRequest('custom-webhook', request), true);
  assert.equal(verifyInboundRequest('custom-webhook', { ...request, headers: {} }), false);
});
