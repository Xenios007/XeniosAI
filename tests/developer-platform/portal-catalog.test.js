import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  AI_DISCOVERY_REQUIREMENTS,
  CATALOG_AUTHORITY_SOURCES,
  CATALOG_RECONCILIATION_FINDINGS,
  CATALOG_RECORD_TYPES,
  CATALOG_RELATIONSHIP_TYPES,
  DOCUMENTATION_TYPES,
  FUTURE_PORTAL_CATALOG_CAPABILITIES,
  PORTAL_ACTORS,
  PORTAL_CATALOG_ANTI_PATTERNS,
  PORTAL_CATALOG_ARCHITECTURAL_RULES,
  PORTAL_CATALOG_ERROR_CODE,
  PORTAL_CATALOG_GOVERNANCE_AREAS,
  PORTAL_CATALOG_MEASURES,
  PORTAL_CATALOG_OBJECTIVES,
  PORTAL_CATALOG_PRINCIPLES,
  PORTAL_CHANNELS,
  PORTAL_SECURITY_FIELDS,
  PORTAL_SELF_SERVICE_ACTIONS,
  PortalCatalogDescriptor,
  PortalCatalogProfile,
  SEARCH_DOMAINS,
  SEARCH_INDEXING_REQUIREMENTS,
  SERVICE_CATALOG_RECORD_FIELDS,
  addDeveloperPlatform
} from '../../src/developer-platform/index.js';

test('portal catalog exposes objectives, principles, actors, channels, context, information, and self-service metadata', () => {
  const descriptor = new PortalCatalogDescriptor();
  assert.deepEqual(descriptor.objectives(), Object.values(PORTAL_CATALOG_OBJECTIVES));
  assert.deepEqual(descriptor.principles(), Object.values(PORTAL_CATALOG_PRINCIPLES));
  assert.ok(descriptor.actors().includes(PORTAL_ACTORS.AUTHORIZED_AI_AGENTS));
  assert.ok(descriptor.channels().includes(PORTAL_CHANNELS.CONVERSATIONAL));
  assert.ok(descriptor.contextFields().includes('tenant'));
  assert.ok(descriptor.informationAreas().includes('governance-and-evidence'));
  assert.ok(descriptor.selfServiceActions().includes(PORTAL_SELF_SERVICE_ACTIONS.REQUEST_DELIVERY));
  assert.ok(descriptor.selfServiceActionFields().includes('failure-and-recovery'));
});

test('portal catalog exposes catalog model, authority, registration, reconciliation, and ownership metadata', () => {
  const descriptor = new PortalCatalogDescriptor();
  assert.ok(descriptor.catalogRecordTypes().includes(CATALOG_RECORD_TYPES.AI_AGENTS));
  assert.ok(descriptor.serviceRecordFields().includes(SERVICE_CATALOG_RECORD_FIELDS.SOURCE_FRESHNESS));
  assert.ok(descriptor.relationshipTypes().includes(CATALOG_RELATIONSHIP_TYPES.AI_AGENT_USES_TOOL));
  assert.ok(descriptor.authoritySources().includes(CATALOG_AUTHORITY_SOURCES.ARCHITECTURE_REPOSITORY));
  assert.ok(descriptor.registrationSteps().includes('apply-access-controls'));
  assert.ok(descriptor.reconciliationFindings().includes(CATALOG_RECONCILIATION_FINDINGS.UNREGISTERED_PRODUCTION_SERVICES));
  assert.ok(descriptor.ownershipFields().includes('ownership-history'));
});

test('portal catalog exposes documentation, search, AI, security, governance, measure, anti-pattern, rule, and future metadata', () => {
  const descriptor = new PortalCatalogDescriptor();
  assert.ok(descriptor.documentationTypes().includes(DOCUMENTATION_TYPES.RUNBOOKS));
  assert.ok(descriptor.documentationRecordFields().includes('expected-freshness'));
  assert.ok(descriptor.documentationStates().includes('published'));
  assert.ok(descriptor.searchDomains().includes(SEARCH_DOMAINS.GOVERNANCE_EVIDENCE));
  assert.ok(descriptor.searchIndexingRequirements().includes(SEARCH_INDEXING_REQUIREMENTS.NO_SECRET_VALUES));
  assert.ok(descriptor.aiDiscoveryRequirements().includes(AI_DISCOVERY_REQUIREMENTS.CITE_AUTHORITATIVE_SOURCES));
  assert.ok(descriptor.aiProvenanceFields().includes('uncertainty'));
  assert.ok(descriptor.securityFields().includes(PORTAL_SECURITY_FIELDS.SECRET_EXCLUSION));
  assert.ok(descriptor.governanceAreas().includes(PORTAL_CATALOG_GOVERNANCE_AREAS.AI_DISCOVERY_RULES));
  assert.ok(descriptor.maturityLevels().includes('adaptive'));
  assert.ok(descriptor.measures().includes(PORTAL_CATALOG_MEASURES.AI_CITATION_COMPLETENESS));
  assert.ok(descriptor.antiPatterns().includes(PORTAL_CATALOG_ANTI_PATTERNS.AI_ANSWERS_WITHOUT_CITATIONS));
  assert.ok(descriptor.architecturalRules().includes(PORTAL_CATALOG_ARCHITECTURAL_RULES.AI_CITES_AND_IDENTIFIES_INFERENCE));
  assert.ok(descriptor.futureCapabilities().includes(FUTURE_PORTAL_CATALOG_CAPABILITIES.SEMANTIC_DISCOVERY));
});

test('portal catalog validates complete profiles and rejects boundary violations', () => {
  const descriptor = new PortalCatalogDescriptor();
  assert.equal(descriptor.validateProfile(completeProfile(descriptor)).isValid, true);
  const invalid = descriptor.validateProfile({
    catalogName: '',
    ...partialProfile(descriptor),
    portalExperienceNotAuthority: false,
    catalogDiscoveryAuthority: false,
    sourceFreshnessVisible: false,
    accessAwareDiscovery: false,
    architectureFirstClass: false,
    ownershipProminent: false,
    governedSelfService: false,
    tenantPropertyIsolation: false,
    documentationOwnedVersioned: false,
    aiCitesSources: false,
    alternateCriticalPaths: false,
    privacyAndSecretProtection: false,
    vendorNeutral: false,
    replaceableImplementations: false,
    prescribesPortalProduct: true,
    catalogSourceOfEveryField: true,
    createsMetadataMonolith: true,
    hidesSourceVersion: true,
    presentsStaleDataAsCurrent: true,
    automatedDiscoveryAssignsOwnership: true,
    collapsesRecordTypes: true,
    indexesSecrets: true,
    leaksTenantPropertyExistence: true,
    writesAiInferenceAsFact: true,
    selfServiceBypassesControlPlane: true
  });
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must have a name/);
  assert.match(invalid.errors.join('\n'), /make-architecture-discoverable-before-implementation/);
  assert.match(invalid.errors.join('\n'), /catalog-is-a-discovery-authority/);
  assert.match(invalid.errors.join('\n'), /authorized-ai-implementation-agents/);
  assert.match(invalid.errors.join('\n'), /Portal must remain an experience capability/);
  assert.match(invalid.errors.join('\n'), /does not prescribe a portal product/);
  assert.match(invalid.errors.join('\n'), /Secret values must not be indexed/);
  assert.match(invalid.errors.join('\n'), /AI inference must not be written back as authoritative fact/);
  assert.match(invalid.errors.join('\n'), /Self-service actions must not bypass control-plane contracts/);
});

test('portal catalog assertion detects incomplete architecture metadata', () => {
  class IncompleteDescriptor extends PortalCatalogDescriptor { objectives() { return []; } }
  assert.throws(() => new IncompleteDescriptor().assertArchitecture(), error =>
    error instanceof PlatformError && error.code === PORTAL_CATALOG_ERROR_CODE &&
    error.details.errors.some(message => message.includes('documented objectives')));
});

test('portal catalog descriptor is available through dependency injection', () => {
  const services = new ServiceCollection();
  addDeveloperPlatform(services);
  const descriptor = services.buildServiceProvider().getRequiredService('PortalCatalogDescriptor');
  assert.ok(descriptor instanceof PortalCatalogDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
});

function completeProfile(descriptor) {
  const values = {};
  for (const key of ['objectives', 'principles', 'actors', 'channels', 'contextFields', 'informationAreas',
    'selfServiceActions', 'selfServiceActionFields', 'catalogRecordTypes', 'serviceRecordFields',
    'relationshipTypes', 'authoritySources', 'registrationSteps', 'reconciliationFindings', 'ownershipFields',
    'documentationTypes', 'documentationRecordFields', 'documentationStates', 'searchDomains',
    'searchIndexingRequirements', 'aiDiscoveryRequirements', 'aiProvenanceFields', 'securityFields',
    'governanceAreas', 'maturityLevels', 'measures', 'antiPatterns', 'architecturalRules',
    'futureCapabilities']) values[key] = descriptor[key]();
  return new PortalCatalogProfile({ catalogName: 'Developer Portal and Service Catalog', ...values });
}

function partialProfile(descriptor) {
  const profile = completeProfile(descriptor);
  const result = {};
  for (const [key, value] of Object.entries(profile)) if (Array.isArray(value)) result[key] = value.slice(0, 1);
  return result;
}
