import { PlatformError } from '../../foundation/errors/platform-error.js';
import { ReferenceImplementationValidationResult } from '../contracts/reference-implementation-validation-result.js';
import { MultiPropertyEnterpriseReferenceProfile } from '../contracts/multi-property-enterprise-reference-profile.js';
import * as constants from '../multi-property-enterprise-reference-constants.js';

const METADATA = Object.freeze({
  enterpriseActors: constants.ENTERPRISE_ACTORS, hierarchyLevels: constants.HIERARCHY_LEVELS,
  enterpriseCapabilities: constants.ENTERPRISE_CAPABILITIES, accessModelDimensions: constants.ACCESS_MODEL_DIMENSIONS,
  configurationPrecedenceLevels: constants.CONFIGURATION_PRECEDENCE_LEVELS, dataIsolationControls: constants.DATA_ISOLATION_CONTROLS,
  knowledgeAndMemoryScopes: constants.KNOWLEDGE_AND_MEMORY_SCOPES, crossPropertyWorkflowSteps: constants.CROSS_PROPERTY_WORKFLOW_STEPS,
  integrationTopologyDimensions: constants.INTEGRATION_TOPOLOGY_DIMENSIONS, resourceGovernanceScopes: constants.RESOURCE_GOVERNANCE_SCOPES,
  deploymentVariants: constants.DEPLOYMENT_VARIANTS, operationsVisibilityDimensions: constants.OPERATIONS_VISIBILITY_DIMENSIONS,
  failureScenarios: constants.ENTERPRISE_FAILURE_SCENARIOS, referenceAcceptanceCriteria: constants.ENTERPRISE_REFERENCE_ACCEPTANCE_CRITERIA,
  architecturalRules: constants.MULTI_PROPERTY_ARCHITECTURAL_RULES
});

const REQUIRED_TRUE = Object.freeze({
  tenantAndPropertyContextsSurviveAllSyncAndAsyncBoundaries: 'ARCH-020-04 requires tenant and property contexts to survive all sync and async boundaries.',
  providerServicesRejectCrossTenantResources: 'ARCH-020-04 requires provider services to reject cross-tenant resources.',
  tenantConfigurationCannotChangePlatformPolicyFloors: 'ARCH-020-04 requires tenant configuration to be unable to change platform policy floors.',
  workloadContentionRemainsBounded: 'ARCH-020-04 requires workload contention to remain bounded.',
  incidentsIdentifyAffectedTenantScope: 'ARCH-020-04 requires incidents to identify affected tenant scope.',
  tenantRestoreAndMigrationPreserveOtherTenants: 'ARCH-020-04 requires tenant restore and migration to preserve other tenants.',
  crossPropertyAccessIsAnExplicitPortfolioGrant: 'ARCH-020-04 requires cross-property access to be an explicit portfolio grant.',
  isolationTopologyIsReplaceableBehindStableTenantContracts: 'ARCH-020-04 requires isolation topology to be replaceable behind stable tenant contracts.'
});

const REQUIRED_FALSE = Object.freeze({
  portfolioHierarchyAutomaticallyGrantsDataAccess: 'ARCH-020-04 prohibits portfolio hierarchy from automatically granting data access.',
  lowerScopesCanWeakenMandatoryControls: 'ARCH-020-04 prohibits lower scopes from weakening mandatory controls.',
  oneFailingPropertyIntegrationConsumesAnotherPropertysRetryBudget: 'ARCH-020-04 prohibits one failing property integration from consuming another property\'s retry budget.',
  tenantSpecificRestoreCanOverwriteAnotherTenant: 'ARCH-020-04 prohibits tenant-specific restore from overwriting another tenant.',
  sharedServicesSkipProviderSideTenantValidation: 'ARCH-020-04 prohibits shared services from skipping provider-side tenant validation.'
});

export class MultiPropertyEnterpriseReferenceDescriptor {
  enterpriseActors() { return values(METADATA.enterpriseActors); } hierarchyLevels() { return values(METADATA.hierarchyLevels); }
  enterpriseCapabilities() { return values(METADATA.enterpriseCapabilities); } accessModelDimensions() { return values(METADATA.accessModelDimensions); }
  configurationPrecedenceLevels() { return values(METADATA.configurationPrecedenceLevels); } dataIsolationControls() { return values(METADATA.dataIsolationControls); }
  knowledgeAndMemoryScopes() { return values(METADATA.knowledgeAndMemoryScopes); } crossPropertyWorkflowSteps() { return values(METADATA.crossPropertyWorkflowSteps); }
  integrationTopologyDimensions() { return values(METADATA.integrationTopologyDimensions); } resourceGovernanceScopes() { return values(METADATA.resourceGovernanceScopes); }
  deploymentVariants() { return values(METADATA.deploymentVariants); } operationsVisibilityDimensions() { return values(METADATA.operationsVisibilityDimensions); }
  failureScenarios() { return values(METADATA.failureScenarios); } referenceAcceptanceCriteria() { return values(METADATA.referenceAcceptanceCriteria); }
  architecturalRules() { return values(METADATA.architecturalRules); }

  validateProfile(input) {
    const profile = input instanceof MultiPropertyEnterpriseReferenceProfile ? input : new MultiPropertyEnterpriseReferenceProfile(input);
    const errors = [];
    if (!profile.referenceName) errors.push('Multi-Property Enterprise Reference profile must have a name.');
    for (const [key, source] of Object.entries(METADATA)) for (const item of values(source)) if (!profile[key].includes(item)) errors.push(`${key} must include ${item}.`);
    for (const [key, message] of Object.entries(REQUIRED_TRUE)) if (profile[key] !== true) errors.push(message);
    for (const [key, message] of Object.entries(REQUIRED_FALSE)) if (profile[key] === true) errors.push(message);
    return result(errors);
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(METADATA)) if (this[key]().length !== Object.keys(source).length) errors.push(`Multi-Property Enterprise Reference must include documented ${key}.`);
    if (errors.length) throw new PlatformError(constants.MULTI_PROPERTY_ENTERPRISE_REFERENCE_ERROR_CODE, 'Multi-Property Enterprise Reference violates ARCH-020-04.', { errors });
    return result(errors);
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
function result(errors) { return new ReferenceImplementationValidationResult({ isValid: errors.length === 0, errors }); }
