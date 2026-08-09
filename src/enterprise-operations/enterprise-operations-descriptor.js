import { PlatformError } from '../foundation/errors/platform-error.js';
import {
  ENTERPRISE_OPERATIONS_CHAPTERS,
  ENTERPRISE_OPERATIONS_DOMAINS,
  ENTERPRISE_OPERATIONS_ERROR_CODES,
  ENTERPRISE_OPERATIONS_EXPECTED_OUTCOMES,
  ENTERPRISE_OPERATIONS_OBJECTIVES,
  ENTERPRISE_OPERATIONS_PRINCIPLES,
  ENTERPRISE_OPERATIONS_RELATIONSHIP_STAGES,
  OPERATIONAL_COMMAND_CONTROL_CAPABILITIES,
  OPERATIONAL_CONTROL_LOOP_STAGES
} from './constants.js';
import { EnterpriseOperationsProfile } from './contracts/enterprise-operations-profile.js';
import { EnterpriseOperationsValidationResult } from './contracts/enterprise-operations-validation-result.js';

const CONTROL_LOOP = Object.freeze(Object.values(OPERATIONAL_CONTROL_LOOP_STAGES));
const RELATIONSHIP_FLOW = Object.freeze(Object.values(ENTERPRISE_OPERATIONS_RELATIONSHIP_STAGES));

export class EnterpriseOperationsDescriptor {
  objectives() {
    return Object.freeze(Object.values(ENTERPRISE_OPERATIONS_OBJECTIVES));
  }

  principles() {
    return Object.freeze(Object.values(ENTERPRISE_OPERATIONS_PRINCIPLES));
  }

  domains() {
    return Object.freeze(Object.values(ENTERPRISE_OPERATIONS_DOMAINS));
  }

  controlLoopStages() {
    return CONTROL_LOOP;
  }

  commandControlCapabilities() {
    return Object.freeze(Object.values(OPERATIONAL_COMMAND_CONTROL_CAPABILITIES));
  }

  relationshipFlow() {
    return RELATIONSHIP_FLOW;
  }

  plannedChapters() {
    return Object.freeze(Object.values(ENTERPRISE_OPERATIONS_CHAPTERS));
  }

  expectedOutcomes() {
    return Object.freeze(Object.values(ENTERPRISE_OPERATIONS_EXPECTED_OUTCOMES));
  }

  validateProfile(profileInput) {
    const profile = profileInput instanceof EnterpriseOperationsProfile
      ? profileInput
      : new EnterpriseOperationsProfile(profileInput);
    const errors = [];

    if (!profile.operationsName) errors.push('Enterprise operations profile must have a name.');
    appendMissing(errors, profile.objectives, this.objectives(), 'Enterprise operations objectives must include');
    appendMissing(errors, profile.principles, this.principles(), 'Enterprise operations principles must include');
    appendMissing(errors, profile.domains, this.domains(), 'Enterprise operations domains must include');
    appendMissing(errors, profile.controlLoopStages, this.controlLoopStages(), 'Operational control loop must include');
    appendMissing(errors, profile.commandControlCapabilities, this.commandControlCapabilities(), 'Operational command and control must support');
    appendMissing(errors, profile.relationshipStages, this.relationshipFlow(), 'Enterprise operations relationship flow must include');
    appendMissing(errors, profile.chapters, this.plannedChapters(), 'ARCH-011 planned architecture structure should include');
    appendMissing(errors, profile.expectedOutcomes, this.expectedOutcomes(), 'Enterprise operations expected outcomes should include');
    if (profile.businessFirst !== true) errors.push('Operations must protect and improve business outcomes.');
    if (profile.unifiedOperatingModel !== true) errors.push('Enterprise operations must maintain one coordinated operating model.');
    if (profile.operationsByDesign !== true) errors.push('Operational ownership and recovery expectations are architecture concerns.');
    if (profile.observableSignalsActionable !== true) errors.push('Observable conditions must lead to governed operational decisions and actions.');
    if (profile.automationAccountable !== true) errors.push('Operational automation must remain policy-controlled, observable, and accountable.');
    if (profile.serviceOwnershipRequired !== true) errors.push('Every operational capability and production service must have an accountable owner.');
    if (profile.resiliencePreferredOverReaction !== true) errors.push('Enterprise operations should favor resilience over emergency reaction.');
    if (profile.tenantPropertyIsolationPreserved !== true) errors.push('Operational activity must preserve tenant and property isolation.');
    if (profile.policyDrivenControl !== true) errors.push('Operational decisions must follow explicit policies.');
    if (profile.technologyIndependent !== true) errors.push('Enterprise operations must remain technology independent.');
    if (profile.vendorNeutral !== true) errors.push('Enterprise operations must remain vendor neutral.');
    if (profile.implementationTechnologySpecific === true) errors.push('Implementation technologies are outside ARCH-011 scope.');
    if (profile.serviceManagementProductSpecific === true) errors.push('Service-management products are outside ARCH-011 scope.');
    if (profile.orchestrationPlatformSpecific === true) errors.push('Orchestration platforms are outside ARCH-011 scope.');
    if (profile.monitoringVendorSpecific === true) errors.push('Monitoring vendors are outside ARCH-011 scope.');
    if (profile.ticketingSystemSpecific === true) errors.push('Ticketing systems are outside ARCH-011 scope.');
    if (profile.deploymentToolSpecific === true) errors.push('Deployment tools are outside ARCH-011 scope.');
    if (profile.infrastructureProviderSpecific === true) errors.push('Infrastructure providers are outside ARCH-011 scope.');
    if (profile.organizationalChartSpecific === true) errors.push('Specific organizational charts are outside ARCH-011 scope.');
    if (profile.implementationRunbookSpecific === true) errors.push('Implementation-level runbooks are outside ARCH-011 scope.');
    if (profile.propertyProcedureSpecific === true) errors.push('Property-specific operating procedures are outside ARCH-011 scope.');

    return validation(errors);
  }

  assertArchitecture() {
    const errors = [];

    if (this.objectives().length !== 12) errors.push('Enterprise Operations must include all documented objectives.');
    if (this.principles().length !== 10) errors.push('Enterprise Operations must include documented principles.');
    if (this.domains().length !== 9) errors.push('Enterprise Operations must include documented domains.');
    if (this.controlLoopStages().length !== 8) errors.push('Enterprise Operations must include the documented operational control loop.');
    if (this.commandControlCapabilities().length !== 10) errors.push('Enterprise Operations must include documented command and control capabilities.');
    if (this.relationshipFlow().length !== 11) errors.push('Enterprise Operations must include documented relationship flow.');
    if (this.plannedChapters().length !== 10) errors.push('Enterprise Operations must include documented planned architecture structure.');
    if (this.expectedOutcomes().length !== 12) errors.push('Enterprise Operations must include documented expected outcomes.');

    if (errors.length > 0) {
      throw new PlatformError(
        ENTERPRISE_OPERATIONS_ERROR_CODES.ENTERPRISE_OPERATIONS_INVALID,
        'Enterprise Operations violates ARCH-011.',
        { errors }
      );
    }

    return validation(errors);
  }
}

function appendMissing(errors, actual, expected, message) {
  for (const item of expected) {
    if (!actual.includes(item)) errors.push(`${message} ${item}.`);
  }
}

function validation(errors) {
  return new EnterpriseOperationsValidationResult({
    isValid: errors.length === 0,
    errors
  });
}
