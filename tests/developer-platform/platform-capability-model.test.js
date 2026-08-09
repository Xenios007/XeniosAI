import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  CAPABILITY_ANTI_PATTERNS,
  CAPABILITY_CONTRACT_FIELDS,
  CAPABILITY_DEPENDENCY_RULES,
  CAPABILITY_LIFECYCLE_STAGES,
  CAPABILITY_MATURITY_LEVELS,
  CONTROL_PLANE_CAPABILITIES,
  CORE_PLATFORM_CAPABILITIES,
  DEVELOPER_PLATFORM_PLANES,
  EXECUTION_PLANE_CAPABILITIES,
  FUTURE_CAPABILITY_MODEL_CAPABILITIES,
  PLATFORM_CAPABILITY_ARCHITECTURAL_RULES,
  PLATFORM_CAPABILITY_DOMAINS,
  PLATFORM_CAPABILITY_MODEL_ERROR_CODE,
  PLATFORM_CAPABILITY_MODEL_OBJECTIVES,
  PLATFORM_CAPABILITY_PRINCIPLES,
  PLATFORM_REQUEST_FIELDS,
  PLATFORM_REQUEST_STATES,
  PlatformCapabilityModelDescriptor,
  PlatformCapabilityModelProfile,
  RESOURCE_PLANE_RESOURCES,
  STATE_AUTHORITY_ASSIGNMENTS,
  addDeveloperPlatform
} from '../../src/developer-platform/index.js';

test('platform capability model exposes objectives, principles, planes, domains, and core capability maps', () => {
  const descriptor = new PlatformCapabilityModelDescriptor();
  assert.deepEqual(descriptor.objectives(), Object.values(PLATFORM_CAPABILITY_MODEL_OBJECTIVES));
  assert.deepEqual(descriptor.principles(), Object.values(PLATFORM_CAPABILITY_PRINCIPLES));
  assert.ok(descriptor.planes().includes(DEVELOPER_PLATFORM_PLANES.EVIDENCE_INTELLIGENCE));
  assert.ok(descriptor.domains().includes(PLATFORM_CAPABILITY_DOMAINS.SECURITY_GOVERNANCE_EVIDENCE));
  assert.ok(descriptor.controlCapabilities().includes(CONTROL_PLANE_CAPABILITIES.READINESS_EVALUATION));
  assert.ok(descriptor.executionCapabilities().includes(EXECUTION_PLANE_CAPABILITIES.CLEANUP));
  assert.ok(descriptor.resourceTypes().includes(RESOURCE_PLANE_RESOURCES.SECRET_REFERENCES));
  assert.ok(descriptor.coreCapabilities().includes(CORE_PLATFORM_CAPABILITIES.AI_AGENT_IDENTITY_DELEGATION));
});

test('platform capability model exposes requests, contracts, authority, identity, ownership, and failure metadata', () => {
  const descriptor = new PlatformCapabilityModelDescriptor();
  assert.ok(descriptor.requestLifecycle().includes('Complete, Compensate, Escalate, or Stop'));
  assert.ok(descriptor.requestFields().includes(PLATFORM_REQUEST_FIELDS.IDEMPOTENCY_IDENTITY));
  assert.ok(descriptor.requestStates().includes(PLATFORM_REQUEST_STATES.PARTIALLY_COMPLETED));
  assert.ok(descriptor.collaborationModes().includes('workflows'));
  assert.ok(descriptor.contractFields().includes(CAPABILITY_CONTRACT_FIELDS.CONTINUITY));
  assert.ok(descriptor.authorityAssignments().includes(STATE_AUTHORITY_ASSIGNMENTS.EVIDENCE_RECORD));
  assert.ok(descriptor.metadataIdentifiers().includes('incident'));
  assert.ok(descriptor.scopeTypes().includes('cross-tenant'));
  assert.ok(descriptor.environmentTypes().includes('temporary-or-ephemeral'));
  assert.ok(descriptor.humanAiFields().includes('human-only-decisions'));
  assert.ok(descriptor.ownershipFields().includes('lifecycle-authority'));
  assert.ok(descriptor.failureFields().includes('compensation'));
});

test('platform capability model exposes governance, lifecycle, maturity, anti-pattern, rule, and future metadata', () => {
  const descriptor = new PlatformCapabilityModelDescriptor();
  assert.ok(descriptor.dependencyRules().includes(CAPABILITY_DEPENDENCY_RULES.CONTEXT_SURVIVES_BOUNDARIES));
  assert.ok(descriptor.observabilitySignals().includes('tenant-and-property-impact-where-authorized'));
  assert.ok(descriptor.securityFields().includes('threat-model'));
  assert.ok(descriptor.costCapacityFields().includes('budget-thresholds'));
  assert.ok(descriptor.portfolioFields().includes('roadmap'));
  assert.ok(descriptor.lifecycleStages().includes(CAPABILITY_LIFECYCLE_STAGES.STRATEGIC));
  assert.ok(descriptor.maturityLevels().includes(CAPABILITY_MATURITY_LEVELS.ADAPTIVE));
  assert.ok(descriptor.buildBuyIntegrateFactors().includes('exit-strategy'));
  assert.ok(descriptor.measures().includes('deprecation-progress'));
  assert.ok(descriptor.governanceAreas().includes('investment-prioritization'));
  assert.ok(descriptor.antiPatterns().includes(CAPABILITY_ANTI_PATTERNS.VENDOR_INTERNALS_AS_CONTRACTS));
  assert.ok(descriptor.architecturalRules().includes(PLATFORM_CAPABILITY_ARCHITECTURAL_RULES.PREVENT_CONTROL_PLANE_MONOLITH));
  assert.ok(descriptor.futureCapabilities().includes(FUTURE_CAPABILITY_MODEL_CAPABILITIES.CAPABILITY_DIGITAL_TWINS));
});

test('platform capability model validates complete profiles and rejects boundary violations', () => {
  const descriptor = new PlatformCapabilityModelDescriptor();
  assert.equal(descriptor.validateProfile(completeProfile(descriptor)).isValid, true);
  const invalid = descriptor.validateProfile({
    modelName: '',
    ...partialProfile(descriptor),
    capabilityBeforeTool: false,
    productOwnershipRequired: false,
    explicitBoundariesRequired: false,
    replaceableContractsRequired: false,
    controlPlaneNotMonolith: false,
    evidenceByDesign: false,
    contextPreserved: false,
    oneStateAuthorityRequired: false,
    deterministicControlRequired: false,
    aiRecommendationsNotAuthority: false,
    tenantPropertyScopeExplicit: false,
    failureIsolationRequired: false,
    lifecycleGoverned: false,
    vendorNeutral: false,
    technologyIndependent: false,
    prescribesPortal: true,
    prescribesSourceControl: true,
    prescribesBuildSystem: true,
    prescribesCloud: true,
    prescribesArtifactRegistry: true,
    treatsToolAsCapability: true,
    duplicatesStateWithoutAuthority: true,
    grantsAiAuthorityFromCredentials: true
  });
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must have a name/);
  assert.match(invalid.errors.join('\n'), /preserve-architecture-driven-development/);
  assert.match(invalid.errors.join('\n'), /deterministic-control/);
  assert.match(invalid.errors.join('\n'), /evidence-and-intelligence-plane/);
  assert.match(invalid.errors.join('\n'), /readiness-evaluation/);
  assert.match(invalid.errors.join('\n'), /Capability contracts must remain distinct/);
  assert.match(invalid.errors.join('\n'), /must orchestrate without becoming a platform monolith/);
  assert.match(invalid.errors.join('\n'), /does not prescribe a build system/);
  assert.match(invalid.errors.join('\n'), /not the capability model/);
  assert.match(invalid.errors.join('\n'), /AI agents must not gain authority/);
});

test('platform capability model assertion detects incomplete architecture metadata', () => {
  class IncompleteDescriptor extends PlatformCapabilityModelDescriptor { objectives() { return []; } }
  assert.throws(() => new IncompleteDescriptor().assertArchitecture(), error =>
    error instanceof PlatformError && error.code === PLATFORM_CAPABILITY_MODEL_ERROR_CODE &&
    error.details.errors.some(message => message.includes('documented objectives')));
});

test('platform capability model descriptor is available through dependency injection', () => {
  const services = new ServiceCollection();
  addDeveloperPlatform(services);
  const descriptor = services.buildServiceProvider().getRequiredService('PlatformCapabilityModelDescriptor');
  assert.ok(descriptor instanceof PlatformCapabilityModelDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
});

function completeProfile(descriptor) {
  const values = {};
  for (const key of ['objectives', 'principles', 'planes', 'domains', 'experienceCapabilities', 'controlCapabilities',
    'executionCapabilities', 'resourceTypes', 'evidenceCapabilities', 'coreCapabilities', 'requestLifecycle', 'requestFields',
    'requestStates', 'collaborationModes', 'contractFields', 'authorityAssignments', 'metadataIdentifiers', 'scopeTypes',
    'environmentTypes', 'humanAiFields', 'ownershipFields', 'serviceCommitments', 'criticalityClasses', 'dependencyRules',
    'failureFields', 'observabilitySignals', 'securityFields', 'costCapacityFields', 'portfolioFields', 'lifecycleStages',
    'maturityLevels', 'introductionFields', 'buildBuyIntegrateFactors', 'deprecationFields', 'measures', 'governanceAreas',
    'antiPatterns', 'architecturalRules', 'futureCapabilities']) values[key] = descriptor[key]();
  return new PlatformCapabilityModelProfile({ modelName: 'Platform Capability Model', ...values });
}

function partialProfile(descriptor) {
  const profile = completeProfile(descriptor);
  const result = {};
  for (const [key, value] of Object.entries(profile)) if (Array.isArray(value)) result[key] = value.slice(0, 1);
  return result;
}
