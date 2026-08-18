import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import { CONVERSATIONAL_AI_AGENT_AND_KNOWLEDGE_REFERENCE_ERROR_CODE, CONVERSATIONAL_ARCHITECTURAL_RULES, ConversationalAiAgentAndKnowledgeReferenceDescriptor, ConversationalAiAgentAndKnowledgeReferenceProfile, TOOL_EXAMPLES, addReferenceImplementations } from '../../src/reference-implementations/index.js';

const METADATA_KEYS = ['referenceFlowSteps', 'normalizedRequestFields', 'orchestratorResponsibilities', 'orchestratorExclusions', 'toolAttributes', 'toolExamples', 'agentAttributes', 'knowledgeSources', 'knowledgeIngestionLineageFields', 'memoryQualities', 'groundingCategories', 'humanSupervisionMaterialActions', 'safetyCases', 'evaluationDimensions', 'evaluationDatasetCategories', 'referenceAcceptanceCriteria', 'architecturalRules'];

test('ARCH-020-05 exposes reference-flow, normalized-request, and orchestrator metadata', () => { const descriptor = new ConversationalAiAgentAndKnowledgeReferenceDescriptor(); assert.ok(descriptor.referenceFlowSteps().includes('deterministic-validation-authorizes-and-executes-tools')); assert.ok(descriptor.normalizedRequestFields().includes('consent')); assert.ok(descriptor.orchestratorResponsibilities().includes('reasoning-budget')); assert.ok(descriptor.orchestratorExclusions().includes('payments')); });

test('ARCH-020-05 exposes tool and agent metadata', () => { const descriptor = new ConversationalAiAgentAndKnowledgeReferenceDescriptor(); assert.ok(descriptor.toolAttributes().includes('idempotency')); assert.ok(descriptor.toolExamples().includes(TOOL_EXAMPLES.SUPPORT_ESCALATION)); assert.ok(descriptor.agentAttributes().includes('stop-conditions')); });

test('ARCH-020-05 exposes knowledge, memory, and grounding metadata', () => { const descriptor = new ConversationalAiAgentAndKnowledgeReferenceDescriptor(); assert.ok(descriptor.knowledgeSources().includes('local-guides')); assert.ok(descriptor.knowledgeIngestionLineageFields().includes('deletion-lineage')); assert.ok(descriptor.memoryQualities().includes('correctable')); assert.ok(descriptor.groundingCategories().includes('unknown-or-conflicting-information')); });

test('ARCH-020-05 exposes human-supervision, safety, evaluation, acceptance, and architectural-rule metadata', () => {
  const descriptor = new ConversationalAiAgentAndKnowledgeReferenceDescriptor();
  assert.ok(descriptor.humanSupervisionMaterialActions().includes('financial-commitments'));
  assert.ok(descriptor.safetyCases().includes('prompt-injection-in-retrieved-content'));
  assert.ok(descriptor.evaluationDimensions().includes('tenant-isolation'));
  assert.ok(descriptor.evaluationDatasetCategories().includes('adversarial'));
  assert.ok(descriptor.referenceAcceptanceCriteria().includes('memory-admission-is-explicit'));
  assert.ok(descriptor.architecturalRules().includes(CONVERSATIONAL_ARCHITECTURAL_RULES.KNOWLEDGE_RETRIEVAL_IS_NOT_AUTHORITY));
});

test('ARCH-020-05 validates profiles and rejects grounding shortcuts', () => {
  const descriptor = new ConversationalAiAgentAndKnowledgeReferenceDescriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);
  const validation = descriptor.validateProfile({ aiCannotAlterBusinessStateWithoutGovernedToolOrWorkflow: false, retrievalCannotCrossTenantOrPropertyPolicy: false, orchestratorOwnsBookingsRatesPaymentsPropertyDataIdentityOrAuthorization: true, conversationTextIsAutomaticallyDurableMemory: true });
  assert.equal(validation.isValid, false);
  assert.match(validation.errors.join('\n'), /must have a name/);
  assert.match(validation.errors.join('\n'), /unable to alter business state/);
  assert.match(validation.errors.join('\n'), /unable to cross tenant or property policy/);
  assert.match(validation.errors.join('\n'), /owning bookings, rates, payments/);
  assert.match(validation.errors.join('\n'), /automatically being durable memory/);
});

test('ARCH-020-05 detects incomplete conversational AI, agent, and knowledge reference metadata', () => { class IncompleteDescriptor extends ConversationalAiAgentAndKnowledgeReferenceDescriptor { safetyCases() { return []; } } assert.throws(() => new IncompleteDescriptor().assertArchitecture(), (error) => error instanceof PlatformError && error.code === CONVERSATIONAL_AI_AGENT_AND_KNOWLEDGE_REFERENCE_ERROR_CODE); });

test('ARCH-020-05 profile is immutable and descriptor is registered', () => {
  const descriptor = addReferenceImplementations(new ServiceCollection()).buildServiceProvider().getRequiredService('ConversationalAiAgentAndKnowledgeReferenceDescriptor');
  assert.ok(descriptor instanceof ConversationalAiAgentAndKnowledgeReferenceDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
  const profile = complete(descriptor);
  assert.ok(Object.isFrozen(profile));
  assert.throws(() => profile.safetyCases.push('other'), TypeError);
});

function complete(descriptor) { const metadata = {}; for (const key of METADATA_KEYS) metadata[key] = descriptor[key](); return new ConversationalAiAgentAndKnowledgeReferenceProfile({ referenceName: 'Conversational AI, Agent, and Knowledge Reference', ...metadata }); }
