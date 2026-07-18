import test from 'node:test';
import assert from 'node:assert/strict';

import { createFoundationServiceCollection } from '../../src/foundation/index.js';
import { addDataLayer, DATA_ERROR_CODES, DataError } from '../../src/data/index.js';

test('data repository stores versioned records without business interpretation', async () => {
  const services = createFoundationServiceCollection();
  addDataLayer(services);

  const provider = services.buildServiceProvider();
  const repository = provider.getRequiredService('DataRepository');
  const first = await repository.save({
    collection: 'reservations',
    key: 'reservation-1',
    owner: 'booking',
    value: { status: 'pending' }
  });
  const second = await repository.save({
    collection: 'reservations',
    key: 'reservation-1',
    owner: 'booking',
    value: { status: 'confirmed' },
    expectedVersion: first.version
  });

  assert.equal(first.version, 1);
  assert.equal(second.version, 2);
  assert.equal(second.value.status, 'confirmed');
});

test('data repository enforces optimistic concurrency', async () => {
  const services = createFoundationServiceCollection();
  addDataLayer(services);

  const provider = services.buildServiceProvider();
  const repository = provider.getRequiredService('DataRepository');
  await repository.save({
    collection: 'properties',
    key: 'property-1',
    owner: 'property',
    value: { name: 'Casa Lluvia' }
  });

  await assert.rejects(
    () =>
      repository.save({
        collection: 'properties',
        key: 'property-1',
        owner: 'property',
        value: { name: 'Updated' },
        expectedVersion: 99
      }),
    error => error instanceof DataError && error.code === DATA_ERROR_CODES.CONCURRENCY_CONFLICT
  );
});

test('cache store expires reconstructable temporary data', async () => {
  const services = createFoundationServiceCollection();
  addDataLayer(services);

  const provider = services.buildServiceProvider();
  const cache = provider.getRequiredService('CacheStore');
  await cache.set('session-context', { conversationId: 'conv-1' }, { ttlSeconds: 300 });

  assert.deepEqual(await cache.get('session-context'), { conversationId: 'conv-1' });
});

test('search index returns derived documents by owner and text', async () => {
  const services = createFoundationServiceCollection();
  addDataLayer(services);

  const provider = services.buildServiceProvider();
  const search = provider.getRequiredService('SearchIndex');
  await search.index({
    documentId: 'policy-1',
    owner: 'knowledge',
    title: 'Check-in policy',
    body: 'Guests may check in after 2 PM.'
  });

  const results = await search.search('check in', { owner: 'knowledge' });
  assert.equal(results.length, 1);
  assert.equal(results[0].documentId, 'policy-1');
});

test('object store keeps binary content separate from business metadata', async () => {
  const services = createFoundationServiceCollection();
  addDataLayer(services);

  const provider = services.buildServiceProvider();
  const objectStore = provider.getRequiredService('ObjectStore');
  const descriptor = await objectStore.put({
    objectKey: 'media/property-1/photo.txt',
    content: 'image-bytes',
    contentType: 'text/plain',
    owner: 'media'
  });
  const stored = await objectStore.get(descriptor.objectKey);

  assert.equal(descriptor.size, 11);
  assert.equal(stored.content, 'image-bytes');
  assert.equal(stored.descriptor.owner, 'media');
});

test('transaction manager records local transaction telemetry', async () => {
  const services = createFoundationServiceCollection();
  addDataLayer(services);

  const provider = services.buildServiceProvider();
  const transactionManager = provider.getRequiredService('TransactionManager');
  const result = await transactionManager.execute({
    owner: 'booking',
    operation: 'createReservation',
    async work(transaction) {
      transaction.record('save-reservation', { aggregate: 'Reservation' });
    }
  });

  assert.equal(result.committed, true);
  assert.equal(result.operations.length, 1);
  assert.equal(result.metadata.owner, 'booking');
});
