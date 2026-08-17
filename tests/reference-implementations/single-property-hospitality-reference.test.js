import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import { RESERVATION_WORKFLOW_STATES, SCENARIO_ACTORS, SINGLE_PROPERTY_ARCHITECTURAL_RULES, SINGLE_PROPERTY_HOSPITALITY_REFERENCE_ERROR_CODE, SinglePropertyHospitalityReferenceDescriptor, SinglePropertyHospitalityReferenceProfile, addReferenceImplementations } from '../../src/reference-implementations/index.js';

const METADATA_KEYS = ['scenarioActors', 'businessCapabilities', 'domainOwnershipMappings', 'requestFlowSteps', 'configurableValues', 'availabilityModelDimensions', 'pricingModelOutputFields', 'reservationWorkflowStates', 'reservationWorkflowConcerns', 'dataPrivacyControls', 'knowledgeTopicAreas', 'businessFactQuerySources', 'observabilitySignals', 'failureScenarios', 'referenceAcceptanceCriteria', 'architecturalRules'];

test('ARCH-020-03 exposes actor, capability, and domain-ownership metadata', () => { const descriptor = new SinglePropertyHospitalityReferenceDescriptor(); assert.ok(descriptor.scenarioActors().includes(SCENARIO_ACTORS.AI_ORCHESTRATOR)); assert.ok(descriptor.businessCapabilities().includes('pool-ticket-handling')); assert.ok(descriptor.domainOwnershipMappings().includes('reservation-state:reservation-service')); });

test('ARCH-020-03 exposes request-flow, configuration, and availability/pricing metadata', () => { const descriptor = new SinglePropertyHospitalityReferenceDescriptor(); assert.ok(descriptor.requestFlowSteps().includes('reservation-command-uses-idempotency-and-current-availability-version')); assert.ok(descriptor.configurableValues().includes('deposit-policy')); assert.ok(descriptor.availabilityModelDimensions().includes('maintenance-block')); assert.ok(descriptor.pricingModelOutputFields().includes('policy-version')); });

test('ARCH-020-03 exposes reservation workflow, privacy, and knowledge metadata', () => { const descriptor = new SinglePropertyHospitalityReferenceDescriptor(); assert.ok(descriptor.reservationWorkflowStates().includes(RESERVATION_WORKFLOW_STATES.AWAITING_GUEST_DETAILS)); assert.ok(descriptor.reservationWorkflowConcerns().includes('operator-escalation')); assert.ok(descriptor.dataPrivacyControls().includes('excluded-from-logs-prompts-fixtures-and-source-control')); assert.ok(descriptor.knowledgeTopicAreas().includes('check-in-guidance')); });

test('ARCH-020-03 exposes observability, failure, acceptance, and architectural-rule metadata', () => { const descriptor = new SinglePropertyHospitalityReferenceDescriptor(); assert.ok(descriptor.observabilitySignals().includes('tenant-safe-service-health')); assert.ok(descriptor.failureScenarios().includes('ai-tool-request-lacks-authority')); assert.ok(descriptor.referenceAcceptanceCriteria().includes('a-booked-interval-cannot-be-confirmed-twice')); assert.ok(descriptor.architecturalRules().includes(SINGLE_PROPERTY_ARCHITECTURAL_RULES.FIRST_PRODUCTION_SHAPED_SLICE)); });

test('ARCH-020-03 validates profiles and rejects Casa Lluvia shortcuts', () => {
  const descriptor = new SinglePropertyHospitalityReferenceDescriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);
  const validation = descriptor.validateProfile({ occupancyPolicyEnforcedByABusinessService: false, aiOutputCannotChangeReservationStateDirectly: false, configurationBypassesOccupancySecurityPrivacyAuthorizationOrPlatformControls: true, integrationFeedUpdatesAvailabilityRepositoryDirectly: true, aiCalculatesOrInventsTheTotal: true });
  assert.equal(validation.isValid, false);
  assert.match(validation.errors.join('\n'), /must have a name/);
  assert.match(validation.errors.join('\n'), /occupancy policy to be enforced/);
  assert.match(validation.errors.join('\n'), /unable to change reservation state directly/);
  assert.match(validation.errors.join('\n'), /bypassing occupancy, security, privacy/);
  assert.match(validation.errors.join('\n'), /updating the availability repository directly/);
  assert.match(validation.errors.join('\n'), /calculating or inventing the total/);
});

test('ARCH-020-03 detects incomplete single-property hospitality reference metadata', () => { class IncompleteDescriptor extends SinglePropertyHospitalityReferenceDescriptor { reservationWorkflowStates() { return []; } } assert.throws(() => new IncompleteDescriptor().assertArchitecture(), (error) => error instanceof PlatformError && error.code === SINGLE_PROPERTY_HOSPITALITY_REFERENCE_ERROR_CODE); });

test('ARCH-020-03 profile is immutable and descriptor is registered', () => {
  const descriptor = addReferenceImplementations(new ServiceCollection()).buildServiceProvider().getRequiredService('SinglePropertyHospitalityReferenceDescriptor');
  assert.ok(descriptor instanceof SinglePropertyHospitalityReferenceDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
  const profile = complete(descriptor);
  assert.ok(Object.isFrozen(profile));
  assert.throws(() => profile.reservationWorkflowStates.push('other'), TypeError);
});

function complete(descriptor) { const metadata = {}; for (const key of METADATA_KEYS) metadata[key] = descriptor[key](); return new SinglePropertyHospitalityReferenceProfile({ referenceName: 'Single-Property Hospitality Reference', ...metadata }); }
