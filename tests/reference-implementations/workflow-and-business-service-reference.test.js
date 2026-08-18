import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import { WORKFLOW_AND_BUSINESS_SERVICE_REFERENCE_ERROR_CODE, WORKFLOW_ARCHITECTURAL_RULES, WORKFLOW_REFERENCE_BOUNDED_SERVICES, WorkflowAndBusinessServiceReferenceDescriptor, WorkflowAndBusinessServiceReferenceProfile, addReferenceImplementations } from '../../src/reference-implementations/index.js';

const METADATA_KEYS = ['workflowReferenceBoundedServices', 'serviceOwnershipResponsibilities', 'commandFields', 'commandProviderValidations', 'queryCharacteristics', 'eventFields', 'reservationWorkflowSteps', 'workflowStateElements', 'idempotencyExamples', 'concurrencyControls', 'failureScenarios', 'reconciliationCheckedRecords', 'observabilityTraceCorrelationPoints', 'referenceAcceptanceCriteria', 'architecturalRules'];

test('ARCH-020-06 exposes bounded-service, ownership, and command metadata', () => { const descriptor = new WorkflowAndBusinessServiceReferenceDescriptor(); assert.ok(descriptor.workflowReferenceBoundedServices().includes(WORKFLOW_REFERENCE_BOUNDED_SERVICES.PRICING)); assert.ok(descriptor.serviceOwnershipResponsibilities().includes('repository')); assert.ok(descriptor.commandFields().includes('expected-version')); });

test('ARCH-020-06 exposes command-validation, query, and event metadata', () => { const descriptor = new WorkflowAndBusinessServiceReferenceDescriptor(); assert.ok(descriptor.commandProviderValidations().includes('concurrency')); assert.ok(descriptor.queryCharacteristics().includes('explicit-about-freshness')); assert.ok(descriptor.eventFields().includes('minimal-payload')); });

test('ARCH-020-06 exposes reservation-workflow, workflow-state, idempotency, and concurrency metadata', () => { const descriptor = new WorkflowAndBusinessServiceReferenceDescriptor(); assert.ok(descriptor.reservationWorkflowSteps().includes('expire-or-compensate-incomplete-work')); assert.ok(descriptor.workflowStateElements().includes('compensation-status')); assert.ok(descriptor.idempotencyExamples().includes('payment-callback')); assert.ok(descriptor.concurrencyControls().includes('optimistic-versioning')); });

test('ARCH-020-06 exposes failure, reconciliation, observability, acceptance, and architectural-rule metadata', () => {
  const descriptor = new WorkflowAndBusinessServiceReferenceDescriptor();
  assert.ok(descriptor.failureScenarios().includes('hold-conflict'));
  assert.ok(descriptor.reconciliationCheckedRecords().includes('event-projections'));
  assert.ok(descriptor.observabilityTraceCorrelationPoints().includes('workflow'));
  assert.ok(descriptor.referenceAcceptanceCriteria().includes('events-correspond-to-committed-facts'));
  assert.ok(descriptor.architecturalRules().includes(WORKFLOW_ARCHITECTURAL_RULES.WORKFLOWS_COORDINATE_BUT_DO_NOT_OWN_DOMAIN_TRUTH));
});

test('ARCH-020-06 validates profiles and rejects consistency shortcuts', () => {
  const descriptor = new WorkflowAndBusinessServiceReferenceDescriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);
  const validation = descriptor.validateProfile({ duplicateCommandsDoNotDuplicateMaterialEffects: false, tenantContextRemainsPresentInEveryBoundary: false, distributedSharedDatabaseTransactionIsUsed: true, readModelsActAsAlternativeAuthorities: true, reconciliationDifferencesSilentlyOverwriteData: true });
  assert.equal(validation.isValid, false);
  assert.match(validation.errors.join('\n'), /must have a name/);
  assert.match(validation.errors.join('\n'), /not duplicate material effects/);
  assert.match(validation.errors.join('\n'), /present in every boundary/);
  assert.match(validation.errors.join('\n'), /shared-database transaction/);
  assert.match(validation.errors.join('\n'), /alternative authorities/);
  assert.match(validation.errors.join('\n'), /silently overwriting data/);
});

test('ARCH-020-06 detects incomplete workflow and business service reference metadata', () => { class IncompleteDescriptor extends WorkflowAndBusinessServiceReferenceDescriptor { concurrencyControls() { return []; } } assert.throws(() => new IncompleteDescriptor().assertArchitecture(), (error) => error instanceof PlatformError && error.code === WORKFLOW_AND_BUSINESS_SERVICE_REFERENCE_ERROR_CODE); });

test('ARCH-020-06 profile is immutable and descriptor is registered', () => {
  const descriptor = addReferenceImplementations(new ServiceCollection()).buildServiceProvider().getRequiredService('WorkflowAndBusinessServiceReferenceDescriptor');
  assert.ok(descriptor instanceof WorkflowAndBusinessServiceReferenceDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
  const profile = complete(descriptor);
  assert.ok(Object.isFrozen(profile));
  assert.throws(() => profile.reservationWorkflowSteps.push('other'), TypeError);
});

function complete(descriptor) { const metadata = {}; for (const key of METADATA_KEYS) metadata[key] = descriptor[key](); return new WorkflowAndBusinessServiceReferenceProfile({ referenceName: 'Workflow and Business Service Reference', ...metadata }); }
