import { PlatformError } from '../../foundation/errors/platform-error.js';
import { ApiSdkValidationResult } from '../../api-sdk/contracts/api-sdk-validation-result.js';
import { TenantDomainIsolationProfile } from '../contracts/tenant-domain-isolation-profile.js';
import * as constants from '../tenant-domain-isolation-constants.js';

const METADATA = Object.freeze({
  domainPrinciples: constants.TENANT_DOMAIN_PRINCIPLES, domainConcepts: constants.TENANT_DOMAIN_CONCEPTS,
  aggregateRules: constants.TENANT_AGGREGATE_RULES, identifierRequirements: constants.TENANT_IDENTIFIER_REQUIREMENTS,
  aliasTypes: constants.TENANT_ALIAS_TYPES, hierarchyLevels: constants.TENANT_HIERARCHY_LEVELS,
  propertyTransferConcerns: constants.PROPERTY_TRANSFER_CONCERNS, registryFields: constants.TENANT_REGISTRY_FIELDS,
  isolationObjectives: constants.TENANT_ISOLATION_OBJECTIVES, isolationDimensions: constants.TENANT_ISOLATION_DIMENSIONS,
  isolationModels: constants.TENANT_ISOLATION_MODELS, isolationProfileCategories: constants.ISOLATION_PROFILE_CATEGORIES,
  isolationSelectionFactors: constants.ISOLATION_SELECTION_FACTORS, placementAttributes: constants.TENANT_PLACEMENT_ATTRIBUTES,
  ownershipChecks: constants.TENANT_OWNERSHIP_CHECKS, dataModelRules: constants.TENANT_DATA_MODEL_RULES,
  scopeClassifications: constants.TENANT_SCOPE_CLASSIFICATIONS, crossTenantScenarios: constants.CROSS_TENANT_SCENARIOS,
  recoveryUnits: constants.TENANT_RECOVERY_UNITS, operationalControls: constants.TENANT_OPERATIONAL_CONTROLS,
  assuranceMethods: constants.TENANT_ASSURANCE_METHODS, failureConditions: constants.TENANT_FAILURE_CONDITIONS,
  architecturalRules: constants.TENANT_DOMAIN_ISOLATION_RULES, architectureBoundaries: constants.TENANT_DOMAIN_ISOLATION_BOUNDARIES
});

const REQUIRED_TRUE = Object.freeze({
  stableOpaqueIdentifiers: 'ARCH-018-02 requires stable, opaque, immutable, never-recycled identifiers.',
  propertyOwnedByOneTenantAtBusinessTime: 'ARCH-018-02 requires a property to have one owning tenant at a point in business time.',
  ownershipEffectiveDated: 'ARCH-018-02 requires authoritative, effective-dated ownership.',
  hierarchyAcyclicBounded: 'ARCH-018-02 requires organizational hierarchy to be acyclic and bounded.',
  aliasesAuthoritativeMapped: 'ARCH-018-02 requires aliases and external identifiers to use authoritative mappings.',
  registryAuthoritative: 'ARCH-018-02 requires the Tenant Registry to be authoritative for routing and control-plane facts.',
  registryEventsVersioned: 'ARCH-018-02 requires registry changes to publish versioned events.',
  staleStateFailsSafe: 'ARCH-018-02 requires consumers to tolerate propagation delay safely.',
  isolationProfilesVersioned: 'ARCH-018-02 requires approved, versioned isolation profiles.',
  placementTrusted: 'ARCH-018-02 requires routing to consume trusted placement state.',
  placementMigrationControlled: 'ARCH-018-02 requires controlled placement migration windows.',
  providerOwnershipValidation: 'ARCH-018-02 requires providers to validate tenant ownership.',
  dedicatedRetainsApplicationControls: 'ARCH-018-02 requires dedicated deployments to retain application tenant controls.',
  crossTenantSegregated: 'ARCH-018-02 requires cross-tenant operations to use segregated capabilities.',
  historicalOwnershipPreserved: 'ARCH-018-02 requires reorganization to preserve historical ownership and obligations.',
  recoveryPreservesBoundaries: 'ARCH-018-02 requires recovery to preserve tenant boundaries.',
  negativeMultiTenantTests: 'ARCH-018-02 requires negative tests with distinct tenant fixtures.',
  technologyNeutral: 'ARCH-018-02 requires technology-neutral tenant and isolation semantics.'
});

const REQUIRED_FALSE = Object.freeze({
  aliasIsIdentity: 'ARCH-018-02 prohibits treating aliases as tenant identity.',
  hierarchyGrantsAccess: 'ARCH-018-02 prohibits business hierarchy from granting access.',
  relationshipGrantsAccess: 'ARCH-018-02 prohibits tenant relationships from granting access by themselves.',
  clientChoosesPlacement: 'ARCH-018-02 prohibits business clients from choosing arbitrary placement targets.',
  defaultPartitionFallback: 'ARCH-018-02 prohibits fallback to a default partition.',
  dedicatedBypassesContext: 'ARCH-018-02 prohibits dedicated infrastructure from bypassing tenant context.',
  resourceIdProvesOwnership: 'ARCH-018-02 prohibits using a resource identifier as proof of ownership.',
  registryStoresSecrets: 'ARCH-018-02 prohibits using the Tenant Registry as a secret store.',
  ordinaryApiCrossTenantQuery: 'ARCH-018-02 prohibits general cross-tenant queries through ordinary tenant APIs.',
  singleTenantTestsProveIsolation: 'ARCH-018-02 rejects single-tenant tests as proof of isolation.',
  transferRewritesHistory: 'ARCH-018-02 prohibits property transfer from rewriting historical ownership.'
});

export class TenantDomainIsolationDescriptor {
  domainPrinciples() { return values(METADATA.domainPrinciples); } domainConcepts() { return values(METADATA.domainConcepts); }
  aggregateRules() { return values(METADATA.aggregateRules); } identifierRequirements() { return values(METADATA.identifierRequirements); }
  aliasTypes() { return values(METADATA.aliasTypes); } hierarchyLevels() { return values(METADATA.hierarchyLevels); }
  propertyTransferConcerns() { return values(METADATA.propertyTransferConcerns); } registryFields() { return values(METADATA.registryFields); }
  isolationObjectives() { return values(METADATA.isolationObjectives); } isolationDimensions() { return values(METADATA.isolationDimensions); }
  isolationModels() { return values(METADATA.isolationModels); } isolationProfileCategories() { return values(METADATA.isolationProfileCategories); }
  isolationSelectionFactors() { return values(METADATA.isolationSelectionFactors); } placementAttributes() { return values(METADATA.placementAttributes); }
  ownershipChecks() { return values(METADATA.ownershipChecks); } dataModelRules() { return values(METADATA.dataModelRules); }
  scopeClassifications() { return values(METADATA.scopeClassifications); } crossTenantScenarios() { return values(METADATA.crossTenantScenarios); }
  recoveryUnits() { return values(METADATA.recoveryUnits); } operationalControls() { return values(METADATA.operationalControls); }
  assuranceMethods() { return values(METADATA.assuranceMethods); } failureConditions() { return values(METADATA.failureConditions); }
  architecturalRules() { return values(METADATA.architecturalRules); } architectureBoundaries() { return values(METADATA.architectureBoundaries); }

  validateProfile(input) {
    const profile = input instanceof TenantDomainIsolationProfile ? input : new TenantDomainIsolationProfile(input);
    const errors = [];
    if (!profile.profileName) errors.push('Tenant domain and isolation profile must have a name.');
    for (const [key, source] of Object.entries(METADATA)) for (const item of values(source)) if (!profile[key].includes(item)) errors.push(`${key} must include ${item}.`);
    for (const [key, message] of Object.entries(REQUIRED_TRUE)) if (profile[key] !== true) errors.push(message);
    for (const [key, message] of Object.entries(REQUIRED_FALSE)) if (profile[key] === true) errors.push(message);
    return result(errors);
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(METADATA)) if (this[key]().length !== Object.keys(source).length) errors.push(`Tenant Domain and Isolation Model must include documented ${key}.`);
    if (errors.length) throw new PlatformError(constants.TENANT_DOMAIN_ISOLATION_ERROR_CODE, 'Tenant Domain and Isolation Model violates ARCH-018-02.', { errors });
    return result(errors);
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
function result(errors) { return new ApiSdkValidationResult({ isValid: errors.length === 0, errors }); }
