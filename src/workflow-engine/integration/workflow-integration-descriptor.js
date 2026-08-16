import { PlatformError } from '../../foundation/errors/platform-error.js';
import { WorkflowIntegrationProfile } from '../contracts/workflow-integration-profile.js';
import { WorkflowEngineValidationResult } from '../contracts/workflow-engine-validation-result.js';
import {
  WORKFLOW_CHILD_VERSION_BINDINGS,
  WORKFLOW_COMMAND_OUTCOMES,
  WORKFLOW_COMMUNICATION_MODELS,
  WORKFLOW_INITIATORS,
  WORKFLOW_INTEGRATION_BOUNDARIES,
  WORKFLOW_INTEGRATION_CONTRACT_FIELDS,
  WORKFLOW_INTEGRATION_DOMAINS,
  WORKFLOW_INTEGRATION_ERROR_CODE,
  WORKFLOW_INTEGRATION_ERRORS,
  WORKFLOW_INTEGRATION_OPERATIONS,
  WORKFLOW_INTEGRATION_QUALITY_ATTRIBUTES,
  WORKFLOW_INTEGRATION_RULES
} from '../integration-constants.js';

const METADATA = Object.freeze({
  communicationModels: WORKFLOW_COMMUNICATION_MODELS,
  integrationDomains: WORKFLOW_INTEGRATION_DOMAINS,
  contractFields: WORKFLOW_INTEGRATION_CONTRACT_FIELDS,
  initiators: WORKFLOW_INITIATORS,
  commandOutcomes: WORKFLOW_COMMAND_OUTCOMES,
  childVersionBindings: WORKFLOW_CHILD_VERSION_BINDINGS,
  normalizedErrors: WORKFLOW_INTEGRATION_ERRORS,
  operations: WORKFLOW_INTEGRATION_OPERATIONS,
  qualityAttributes: WORKFLOW_INTEGRATION_QUALITY_ATTRIBUTES,
  architecturalRules: WORKFLOW_INTEGRATION_RULES,
  architectureBoundaries: WORKFLOW_INTEGRATION_BOUNDARIES
});

const REQUIRED_TRUE = Object.freeze({
  contractDriven: 'ARCH-015-07 requires contractDriven.',
  serviceOwnershipPreserved: 'ARCH-015-07 requires serviceOwnershipPreserved.',
  domainAuthorityExternal: 'ARCH-015-07 requires domainAuthorityExternal.',
  publishedInterfacesOnly: 'ARCH-015-07 requires publishedInterfacesOnly.',
  durableOrchestrationSeparate: 'ARCH-015-07 requires durableOrchestrationSeparate.',
  requestBoundaryPreserved: 'ARCH-015-07 requires requestBoundaryPreserved.',
  conversationNonAuthoritative: 'ARCH-015-07 requires conversationNonAuthoritative.',
  versionedContracts: 'ARCH-015-07 requires versionedContracts.',
  effectiveVersionBound: 'ARCH-015-07 requires effectiveVersionBound.',
  stableOperationIdentity: 'ARCH-015-07 requires stableOperationIdentity.',
  targetAuthorizesIndependently: 'ARCH-015-07 requires targetAuthorizesIndependently.',
  tenantPropertyIsolation: 'ARCH-015-07 requires tenantPropertyIsolation.',
  providerAntiCorruption: 'ARCH-015-07 requires providerAntiCorruption.',
  childIdentityPreserved: 'ARCH-015-07 requires childIdentityPreserved.',
  humanAgentContractBound: 'ARCH-015-07 requires humanAgentContractBound.',
  credentialsExcluded: 'ARCH-015-07 requires credentialsExcluded.',
  consistencyExplicit: 'ARCH-015-07 requires consistencyExplicit.',
  endToEndEvidence: 'ARCH-015-07 requires endToEndEvidence.',
  vendorNeutral: 'ARCH-015-07 requires vendorNeutral.',
  technologyIndependent: 'ARCH-015-07 requires technologyIndependent.'
});

const REQUIRED_FALSE = Object.freeze({
  ownsDomainLogic: 'ARCH-015-07 prohibits ownsDomainLogic.',
  directDatabaseAccess: 'ARCH-015-07 prohibits directDatabaseAccess.',
  conversationOwnsState: 'ARCH-015-07 prohibits conversationOwnsState.',
  transportSuccessMeansCompletion: 'ARCH-015-07 prohibits transportSuccessMeansCompletion.',
  workflowDecidesBusinessValidity: 'ARCH-015-07 prohibits workflowDecidesBusinessValidity.',
  providerPayloadsDefineWorkflow: 'ARCH-015-07 prohibits providerPayloadsDefineWorkflow.',
  credentialsInDefinitions: 'ARCH-015-07 prohibits credentialsInDefinitions.',
  correlationIsCredential: 'ARCH-015-07 prohibits correlationIsCredential.',
  gatewayOwnsState: 'ARCH-015-07 prohibits gatewayOwnsState.',
  selectsProviderProduct: 'ARCH-015-07 prohibits selectsProviderProduct.',
  definesAdjacentDetails: 'ARCH-015-07 prohibits definesAdjacentDetails.'
});

export class WorkflowIntegrationDescriptor {
  communicationModels() { return values(METADATA.communicationModels); }
  integrationDomains() { return values(METADATA.integrationDomains); }
  contractFields() { return values(METADATA.contractFields); }
  initiators() { return values(METADATA.initiators); }
  commandOutcomes() { return values(METADATA.commandOutcomes); }
  childVersionBindings() { return values(METADATA.childVersionBindings); }
  normalizedErrors() { return values(METADATA.normalizedErrors); }
  operations() { return values(METADATA.operations); }
  qualityAttributes() { return values(METADATA.qualityAttributes); }
  architecturalRules() { return values(METADATA.architecturalRules); }
  architectureBoundaries() { return values(METADATA.architectureBoundaries); }

  validateProfile(input) {
    const profile = input instanceof WorkflowIntegrationProfile
      ? input
      : new WorkflowIntegrationProfile(input);
    const errors = [];
    if (!profile.profileName) errors.push('Workflow integration profile must have a name.');
    for (const [key, source] of Object.entries(METADATA)) {
      for (const item of values(source)) {
        if (!profile[key].includes(item)) errors.push(`${key} must include ${item}.`);
      }
    }
    for (const [key, message] of Object.entries(REQUIRED_TRUE)) {
      if (profile[key] !== true) errors.push(message);
    }
    for (const [key, message] of Object.entries(REQUIRED_FALSE)) {
      if (profile[key] === true) errors.push(message);
    }
    return result(errors);
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(METADATA)) {
      if (this[key]().length !== Object.keys(source).length) {
        errors.push(`Workflow Integration and Orchestration must include documented ${key}.`);
      }
    }
    if (errors.length) {
      throw new PlatformError(
        WORKFLOW_INTEGRATION_ERROR_CODE,
        'Workflow Integration and Orchestration violates ARCH-015-07.',
        { errors }
      );
    }
    return result(errors);
  }
}

function values(source) {
  return Object.freeze(Object.values(source));
}

function result(errors) {
  return new WorkflowEngineValidationResult({ isValid: errors.length === 0, errors });
}
