import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  ENTERPRISE_OPERATIONS_CHAPTERS,
  ENTERPRISE_OPERATIONS_DOMAINS,
  ENTERPRISE_OPERATIONS_ERROR_CODES,
  ENTERPRISE_OPERATIONS_EXPECTED_OUTCOMES,
  ENTERPRISE_OPERATIONS_OBJECTIVES,
  ENTERPRISE_OPERATIONS_PRINCIPLES,
  ENTERPRISE_OPERATIONS_RELATIONSHIP_STAGES,
  EnterpriseOperationsDescriptor,
  EnterpriseOperationsProfile,
  OPERATIONAL_COMMAND_CONTROL_CAPABILITIES,
  OPERATIONAL_CONTROL_LOOP_STAGES,
  addEnterpriseOperations
} from '../../src/enterprise-operations/index.js';

test('enterprise operations exposes documented objectives, principles, domains, and control loop', () => {
  const descriptor = new EnterpriseOperationsDescriptor();

  assert.deepEqual(descriptor.objectives(), Object.values(ENTERPRISE_OPERATIONS_OBJECTIVES));
  assert.deepEqual(descriptor.principles(), Object.values(ENTERPRISE_OPERATIONS_PRINCIPLES));
  assert.deepEqual(descriptor.domains(), Object.values(ENTERPRISE_OPERATIONS_DOMAINS));
  assert.deepEqual(descriptor.controlLoopStages(), Object.values(OPERATIONAL_CONTROL_LOOP_STAGES));
});

test('enterprise operations exposes command and control, relationship, chapter, and outcome metadata', () => {
  const descriptor = new EnterpriseOperationsDescriptor();

  assert.ok(descriptor.commandControlCapabilities().includes(OPERATIONAL_COMMAND_CONTROL_CAPABILITIES.RECOVERY_COORDINATION));
  assert.ok(descriptor.relationshipFlow().includes(ENTERPRISE_OPERATIONS_RELATIONSHIP_STAGES.OBSERVABILITY));
  assert.ok(descriptor.plannedChapters().includes(ENTERPRISE_OPERATIONS_CHAPTERS.OPERATIONS_COMMAND_AND_CONTROL));
  assert.ok(descriptor.expectedOutcomes().includes(ENTERPRISE_OPERATIONS_EXPECTED_OUTCOMES.SAFE_AI_AND_WORKFLOW_SUPERVISION));
});

test('enterprise operations validates complete business-first operations profiles', () => {
  const descriptor = new EnterpriseOperationsDescriptor();
  const valid = descriptor.validateProfile(
    new EnterpriseOperationsProfile({
      operationsName: 'Enterprise Operations',
      objectives: Object.values(ENTERPRISE_OPERATIONS_OBJECTIVES),
      principles: Object.values(ENTERPRISE_OPERATIONS_PRINCIPLES),
      domains: Object.values(ENTERPRISE_OPERATIONS_DOMAINS),
      controlLoopStages: Object.values(OPERATIONAL_CONTROL_LOOP_STAGES),
      commandControlCapabilities: Object.values(OPERATIONAL_COMMAND_CONTROL_CAPABILITIES),
      relationshipStages: Object.values(ENTERPRISE_OPERATIONS_RELATIONSHIP_STAGES),
      chapters: Object.values(ENTERPRISE_OPERATIONS_CHAPTERS),
      expectedOutcomes: Object.values(ENTERPRISE_OPERATIONS_EXPECTED_OUTCOMES)
    })
  );
  const invalid = descriptor.validateProfile({
    operationsName: '',
    objectives: [ENTERPRISE_OPERATIONS_OBJECTIVES.RELIABLE_BUSINESS_AND_PLATFORM_OPERATIONS],
    principles: [ENTERPRISE_OPERATIONS_PRINCIPLES.BUSINESS_FIRST_OPERATIONS],
    domains: [ENTERPRISE_OPERATIONS_DOMAINS.BUSINESS_OPERATIONS],
    controlLoopStages: [OPERATIONAL_CONTROL_LOOP_STAGES.OBSERVE],
    commandControlCapabilities: [OPERATIONAL_COMMAND_CONTROL_CAPABILITIES.OPERATIONAL_PRIORITIZATION],
    relationshipStages: [ENTERPRISE_OPERATIONS_RELATIONSHIP_STAGES.SYSTEM_OVERVIEW],
    chapters: [ENTERPRISE_OPERATIONS_CHAPTERS.ENTERPRISE_OPERATIONS_OVERVIEW],
    expectedOutcomes: [ENTERPRISE_OPERATIONS_EXPECTED_OUTCOMES.CONSISTENT_ENTERPRISE_AND_PROPERTY_OPERATIONS],
    businessFirst: false,
    unifiedOperatingModel: false,
    operationsByDesign: false,
    observableSignalsActionable: false,
    automationAccountable: false,
    serviceOwnershipRequired: false,
    resiliencePreferredOverReaction: false,
    tenantPropertyIsolationPreserved: false,
    policyDrivenControl: false,
    technologyIndependent: false,
    vendorNeutral: false,
    implementationTechnologySpecific: true,
    serviceManagementProductSpecific: true,
    orchestrationPlatformSpecific: true,
    monitoringVendorSpecific: true,
    ticketingSystemSpecific: true,
    deploymentToolSpecific: true,
    infrastructureProviderSpecific: true,
    organizationalChartSpecific: true,
    implementationRunbookSpecific: true,
    propertyProcedureSpecific: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must have a name/);
  assert.match(invalid.errors.join('\n'), /unified-operational-control/);
  assert.match(invalid.errors.join('\n'), /one-enterprise-operating-model/);
  assert.match(invalid.errors.join('\n'), /platform-operations/);
  assert.match(invalid.errors.join('\n'), /Assess/);
  assert.match(invalid.errors.join('\n'), /business-and-technical-impact-assessment/);
  assert.match(invalid.errors.join('\n'), /ARCH-002 Platform Layers/);
  assert.match(invalid.errors.join('\n'), /02-operating-model.md/);
  assert.match(invalid.errors.join('\n'), /reliable-business-capability-execution/);
  assert.match(invalid.errors.join('\n'), /business outcomes/);
  assert.match(invalid.errors.join('\n'), /one coordinated operating model/);
  assert.match(invalid.errors.join('\n'), /policy-controlled/);
  assert.match(invalid.errors.join('\n'), /tenant and property isolation/);
  assert.match(invalid.errors.join('\n'), /Service-management products are outside ARCH-011 scope/);
  assert.match(invalid.errors.join('\n'), /Property-specific operating procedures are outside ARCH-011 scope/);
});

test('enterprise operations assertion rejects incomplete metadata', () => {
  class IncompleteEnterpriseOperationsDescriptor extends EnterpriseOperationsDescriptor {
    principles() {
      return [];
    }
  }

  assert.throws(
    () => new IncompleteEnterpriseOperationsDescriptor().assertArchitecture(),
    error =>
      error instanceof PlatformError &&
      error.code === ENTERPRISE_OPERATIONS_ERROR_CODES.ENTERPRISE_OPERATIONS_INVALID &&
      error.details.errors.some(message => message.includes('documented principles'))
  );
});

test('enterprise operations descriptor is available through DI registration', () => {
  const services = new ServiceCollection();

  addEnterpriseOperations(services);
  const provider = services.buildServiceProvider();
  const descriptor = provider.getRequiredService('EnterpriseOperationsDescriptor');

  assert.ok(descriptor instanceof EnterpriseOperationsDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
});
