import test from 'node:test';
import assert from 'node:assert/strict';

import { AI_DECISIONS } from '../../src/ai/index.js';
import { CHANNEL_TYPES } from '../../src/experience/index.js';
import { PlatformError } from '../../src/foundation/index.js';
import {
  CANONICAL_REQUEST_FLOW,
  INTERACTION_ERROR_CODES,
  PLATFORM_LAYERS,
  LayerInteractionPolicy,
  RequestFlowDescriptor,
  composePlatformLayers
} from '../../src/layer-interactions/index.js';

test('layer interaction policy allows only documented dependencies', () => {
  const policy = new LayerInteractionPolicy();

  const allowed = policy.validate({
    sourceLayer: PLATFORM_LAYERS.GATEWAY,
    destinationLayer: PLATFORM_LAYERS.CONVERSATION
  });
  const foundation = policy.validate({
    sourceLayer: PLATFORM_LAYERS.AI_INTELLIGENCE,
    destinationLayer: PLATFORM_LAYERS.FOUNDATION
  });
  const forbidden = policy.validate({
    sourceLayer: PLATFORM_LAYERS.GATEWAY,
    destinationLayer: PLATFORM_LAYERS.AI_INTELLIGENCE
  });

  assert.equal(allowed.isAllowed, true);
  assert.equal(foundation.isAllowed, true);
  assert.equal(forbidden.isAllowed, false);
  assert.equal(forbidden.errors[0].code, INTERACTION_ERROR_CODES.FORBIDDEN_INTERACTION);
});

test('layer interaction policy raises platform errors for invalid bypasses', () => {
  const policy = new LayerInteractionPolicy();

  assert.throws(
    () =>
      policy.assertAllowed({
        sourceLayer: PLATFORM_LAYERS.EXPERIENCE,
        destinationLayer: PLATFORM_LAYERS.INTEGRATION
      }),
    error =>
      error instanceof PlatformError &&
      error.code === INTERACTION_ERROR_CODES.FORBIDDEN_INTERACTION
  );
});

test('request flow descriptor validates canonical traversal order', () => {
  const descriptor = new RequestFlowDescriptor();
  const steps = descriptor.describe();

  assert.deepEqual(
    steps.map(step => step.layer),
    CANONICAL_REQUEST_FLOW
  );
  assert.equal(
    descriptor.validateTraversal([
      PLATFORM_LAYERS.EXPERIENCE,
      PLATFORM_LAYERS.GATEWAY,
      PLATFORM_LAYERS.CONVERSATION,
      PLATFORM_LAYERS.AI_INTELLIGENCE
    ]).isAllowed,
    true
  );
  assert.equal(
    descriptor.validateTraversal([
      PLATFORM_LAYERS.EXPERIENCE,
      PLATFORM_LAYERS.AI_INTELLIGENCE
    ]).isAllowed,
    false
  );
});

test('platform composer wires completed layers through documented ports', async () => {
  const services = composePlatformLayers();
  const provider = services.buildServiceProvider();

  const policy = provider.getRequiredService('LayerInteractionPolicy');
  const experience = provider.getRequiredService('ExperienceService');
  const response = await experience.handleInbound(CHANNEL_TYPES.WEBSITE, {
    userId: 'guest-layer-1',
    messageText: 'What is the price per night?'
  });

  assert.equal(policy.listAllowedDestinations(PLATFORM_LAYERS.AI_INTELLIGENCE).includes(
    PLATFORM_LAYERS.BUSINESS_SERVICES
  ), true);
  assert.equal(response.accepted, true);
  assert.equal(response.metadata.downstreamResult.accepted, true);
  assert.equal(
    response.metadata.downstreamResult.downstreamResult.response.decision,
    AI_DECISIONS.EXECUTE
  );
  assert.equal(
    response.metadata.downstreamResult.downstreamResult.response.toolResults[0].capability,
    'pricing.compute'
  );
});
