import test from 'node:test';
import assert from 'node:assert/strict';
import { CHANNEL_CATALOG, createCredentialVault, getChannel, parseInbound, publicConnection } from '../../packages/integrations/src/index.js';

test('channel catalog includes core social and travel integrations', () => {
  const ids = new Set(CHANNEL_CATALOG.map(channel => channel.id));
  for (const id of ['facebook-messenger', 'instagram', 'whatsapp', 'telegram', 'line', 'wechat-official', 'x-dm', 'airbnb', 'booking-com', 'expedia-vrbo']) {
    assert.ok(ids.has(id), `expected ${id} in channel catalog`);
  }
  assert.equal(getChannel('airbnb').access, 'partner-required');
  assert.equal(getChannel('booking-com').access, 'partner-required');
  assert.equal(getChannel('telegram').sendImplemented, true);
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
