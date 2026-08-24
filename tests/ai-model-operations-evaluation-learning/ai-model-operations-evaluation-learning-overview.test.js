import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError } from '../../src/foundation/index.js';
import { AI_MODEL_OPERATIONS_EVALUATION_LEARNING_OVERVIEW_ERROR_CODE, AiModelOperationsEvaluationLearningOverviewDescriptor as Descriptor, AiModelOperationsEvaluationLearningOverviewProfile as Profile } from '../../src/ai-model-operations-evaluation-learning/index.js';

const keys = ['responsibilities', 'authorities', 'capabilities', 'contractFields', 'assetFields', 'lifecycleStates', 'learningLoop', 'casaLluviaObjectives', 'governanceControls', 'failureRecovery', 'observabilityFields', 'assuranceEvidence', 'invariants'];
const complete = descriptor => { const profile = {}; for (const key of keys) profile[key] = descriptor[key](); return new Profile({ profileName: 'Casa Lluvia AI operations', ...profile }); };

test('ARCH-029-01 exposes AI operations authority lifecycle learning loop and Casa Lluvia objectives', () => {
  const descriptor = new Descriptor();
  assert.ok(descriptor.authorities().includes('evaluation-definition-and-result-authority'));
  assert.ok(descriptor.capabilities().includes('shadow-canary-experiment-and-promotion'));
  assert.ok(descriptor.learningLoop().includes('separation-of-duties-approval'));
  assert.ok(descriptor.casaLluviaObjectives().includes('grounded-rate-and-policy-responses'));
  assert.ok(descriptor.governanceControls().includes('provider-neutral-capability-contracts'));
});

test('ARCH-029-01 validates evaluation promotion and privacy boundaries', () => {
  const descriptor = new Descriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);
  const result = descriptor.validateProfile({ directLearningFromInteraction: true, customerMessageUpdatesProduction: true, ratingUpdatesProduction: true, providerLockIn: true, protectedPayloadInTelemetry: true, unapprovedPromotion: true });
  assert.equal(result.isValid, false);
  assert.match(result.errors.join('\n'), /direct learning from interactions/);
  assert.match(result.errors.join('\n'), /customer messages updating production/);
  assert.match(result.errors.join('\n'), /provider lock-in/);
  assert.match(result.errors.join('\n'), /unapproved promotion/);
});

test('ARCH-029-01 detects incomplete metadata and preserves immutability', () => {
  class Incomplete extends Descriptor { learningLoop() { return []; } }
  assert.throws(() => new Incomplete().assertArchitecture(), error => error instanceof PlatformError && error.code === AI_MODEL_OPERATIONS_EVALUATION_LEARNING_OVERVIEW_ERROR_CODE);
  assert.throws(() => complete(new Descriptor()).capabilities.push('x'), TypeError);
});
