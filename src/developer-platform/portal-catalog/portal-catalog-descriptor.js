import { PlatformError } from '../../foundation/errors/platform-error.js';
import { DeveloperPlatformValidationResult } from '../contracts/developer-platform-validation-result.js';
import { PortalCatalogProfile } from '../contracts/portal-catalog-profile.js';
import {
  AI_ANSWER_PROVENANCE_FIELDS, AI_DISCOVERY_REQUIREMENTS, CATALOG_AUTHORITY_SOURCES,
  CATALOG_RECONCILIATION_FINDINGS, CATALOG_RECORD_TYPES, CATALOG_REGISTRATION_STEPS,
  CATALOG_RELATIONSHIP_TYPES, DOCUMENTATION_LIFECYCLE_STATES, DOCUMENTATION_RECORD_FIELDS,
  DOCUMENTATION_TYPES, FUTURE_PORTAL_CATALOG_CAPABILITIES, OWNERSHIP_DISCOVERY_FIELDS,
  PORTAL_ACTORS, PORTAL_CATALOG_ANTI_PATTERNS, PORTAL_CATALOG_ARCHITECTURAL_RULES,
  PORTAL_CATALOG_ERROR_CODE, PORTAL_CATALOG_GOVERNANCE_AREAS, PORTAL_CATALOG_MATURITY_LEVELS,
  PORTAL_CATALOG_MEASURES, PORTAL_CATALOG_OBJECTIVES, PORTAL_CATALOG_PRINCIPLES,
  PORTAL_CHANNELS, PORTAL_CONTEXT_FIELDS, PORTAL_INFORMATION_AREAS, PORTAL_SECURITY_FIELDS,
  PORTAL_SELF_SERVICE_ACTION_FIELDS, PORTAL_SELF_SERVICE_ACTIONS, SEARCH_DOMAINS, SEARCH_INDEXING_REQUIREMENTS,
  SERVICE_CATALOG_RECORD_FIELDS
} from '../portal-catalog-constants.js';

const MAP = Object.freeze({
  objectives: PORTAL_CATALOG_OBJECTIVES,
  principles: PORTAL_CATALOG_PRINCIPLES,
  actors: PORTAL_ACTORS,
  channels: PORTAL_CHANNELS,
  contextFields: PORTAL_CONTEXT_FIELDS,
  informationAreas: PORTAL_INFORMATION_AREAS,
  selfServiceActions: PORTAL_SELF_SERVICE_ACTIONS,
  selfServiceActionFields: PORTAL_SELF_SERVICE_ACTION_FIELDS,
  catalogRecordTypes: CATALOG_RECORD_TYPES,
  serviceRecordFields: SERVICE_CATALOG_RECORD_FIELDS,
  relationshipTypes: CATALOG_RELATIONSHIP_TYPES,
  authoritySources: CATALOG_AUTHORITY_SOURCES,
  registrationSteps: CATALOG_REGISTRATION_STEPS,
  reconciliationFindings: CATALOG_RECONCILIATION_FINDINGS,
  ownershipFields: OWNERSHIP_DISCOVERY_FIELDS,
  documentationTypes: DOCUMENTATION_TYPES,
  documentationRecordFields: DOCUMENTATION_RECORD_FIELDS,
  documentationStates: DOCUMENTATION_LIFECYCLE_STATES,
  searchDomains: SEARCH_DOMAINS,
  searchIndexingRequirements: SEARCH_INDEXING_REQUIREMENTS,
  aiDiscoveryRequirements: AI_DISCOVERY_REQUIREMENTS,
  aiProvenanceFields: AI_ANSWER_PROVENANCE_FIELDS,
  securityFields: PORTAL_SECURITY_FIELDS,
  governanceAreas: PORTAL_CATALOG_GOVERNANCE_AREAS,
  maturityLevels: PORTAL_CATALOG_MATURITY_LEVELS,
  measures: PORTAL_CATALOG_MEASURES,
  antiPatterns: PORTAL_CATALOG_ANTI_PATTERNS,
  architecturalRules: PORTAL_CATALOG_ARCHITECTURAL_RULES,
  futureCapabilities: FUTURE_PORTAL_CATALOG_CAPABILITIES
});

const REQUIRED_TRUE = Object.freeze({
  portalExperienceNotAuthority: 'Portal must remain an experience capability, not authority for every domain.',
  catalogDiscoveryAuthority: 'Service Catalog must be an authoritative discovery view.',
  sourceFreshnessVisible: 'Source, version, freshness, ownership, and access must be preserved.',
  accessAwareDiscovery: 'Search, navigation, relationships, and AI assistance must be access aware.',
  architectureFirstClass: 'Architecture, ADRs, ownership, interfaces, dependencies, and lifecycle must be first-class.',
  ownershipProminent: 'Ownership must be prominent and accountable.',
  governedSelfService: 'Self-service must use governed control-plane contracts.',
  tenantPropertyIsolation: 'Tenant and property isolation must be preserved.',
  documentationOwnedVersioned: 'Documentation must be an owned, versioned, accessible lifecycle resource.',
  aiCitesSources: 'AI-assisted discovery must cite authoritative sources and identify inference.',
  alternateCriticalPaths: 'Critical actions require alternate paths during portal degradation.',
  privacyAndSecretProtection: 'Privacy must be protected and secret indexing prevented.',
  vendorNeutral: 'Portal and Service Catalog must remain vendor neutral.',
  replaceableImplementations: 'Portal and Service Catalog implementations must remain replaceable.'
});

const REQUIRED_FALSE = Object.freeze({
  prescribesPortalProduct: 'ARCH-013-07 does not prescribe a portal product.',
  catalogSourceOfEveryField: 'Catalog must not be treated as the source of every field.',
  createsMetadataMonolith: 'Portal and catalog must not create one monolithic metadata database.',
  hidesSourceVersion: 'Source and version must not be hidden.',
  presentsStaleDataAsCurrent: 'Stale data must not be presented as current.',
  automatedDiscoveryAssignsOwnership: 'Automated discovery must not assign business ownership.',
  collapsesRecordTypes: 'Repositories, projects, components, and services must remain distinct record types.',
  indexesSecrets: 'Secret values must not be indexed.',
  leaksTenantPropertyExistence: 'Tenant or property existence must not leak through search or counts.',
  writesAiInferenceAsFact: 'AI inference must not be written back as authoritative fact.',
  selfServiceBypassesControlPlane: 'Self-service actions must not bypass control-plane contracts.'
});

export class PortalCatalogDescriptor {
  objectives() { return values(MAP.objectives); }
  principles() { return values(MAP.principles); }
  actors() { return values(MAP.actors); }
  channels() { return values(MAP.channels); }
  contextFields() { return values(MAP.contextFields); }
  informationAreas() { return values(MAP.informationAreas); }
  selfServiceActions() { return values(MAP.selfServiceActions); }
  selfServiceActionFields() { return values(MAP.selfServiceActionFields); }
  catalogRecordTypes() { return values(MAP.catalogRecordTypes); }
  serviceRecordFields() { return values(MAP.serviceRecordFields); }
  relationshipTypes() { return values(MAP.relationshipTypes); }
  authoritySources() { return values(MAP.authoritySources); }
  registrationSteps() { return values(MAP.registrationSteps); }
  reconciliationFindings() { return values(MAP.reconciliationFindings); }
  ownershipFields() { return values(MAP.ownershipFields); }
  documentationTypes() { return values(MAP.documentationTypes); }
  documentationRecordFields() { return values(MAP.documentationRecordFields); }
  documentationStates() { return values(MAP.documentationStates); }
  searchDomains() { return values(MAP.searchDomains); }
  searchIndexingRequirements() { return values(MAP.searchIndexingRequirements); }
  aiDiscoveryRequirements() { return values(MAP.aiDiscoveryRequirements); }
  aiProvenanceFields() { return values(MAP.aiProvenanceFields); }
  securityFields() { return values(MAP.securityFields); }
  governanceAreas() { return values(MAP.governanceAreas); }
  maturityLevels() { return values(MAP.maturityLevels); }
  measures() { return values(MAP.measures); }
  antiPatterns() { return values(MAP.antiPatterns); }
  architecturalRules() { return values(MAP.architecturalRules); }
  futureCapabilities() { return values(MAP.futureCapabilities); }

  validateProfile(profileInput) {
    const profile = profileInput instanceof PortalCatalogProfile ? profileInput : new PortalCatalogProfile(profileInput);
    const errors = [];
    if (!profile.catalogName) errors.push('Portal and Service Catalog profile must have a name.');
    for (const [key, source] of Object.entries(MAP)) appendMissing(errors, profile[key], values(source), `${key} must include`);
    for (const [key, message] of Object.entries(REQUIRED_TRUE)) if (profile[key] !== true) errors.push(message);
    for (const [key, message] of Object.entries(REQUIRED_FALSE)) if (profile[key] === true) errors.push(message);
    return validation(errors);
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(MAP)) {
      if (this[key]().length !== Object.keys(source).length) errors.push(`Portal and Service Catalog must include documented ${key}.`);
    }
    if (errors.length) {
      throw new PlatformError(PORTAL_CATALOG_ERROR_CODE, 'Portal and Service Catalog violates ARCH-013-07.', { errors });
    }
    return validation(errors);
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
function appendMissing(errors, actual, expected, message) {
  for (const item of expected) if (!actual.includes(item)) errors.push(`${message} ${item}.`);
}
function validation(errors) { return new DeveloperPlatformValidationResult({ isValid: errors.length === 0, errors }); }
