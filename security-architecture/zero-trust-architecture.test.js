import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  AI_TRUST_REQUIREMENTS,
  DATA_TRUST_RESOURCES,
  DEVICE_TRUST_FACTORS,
  FUTURE_ZERO_TRUST_CAPABILITIES,
  HUMAN_TRUST_REQUIREMENTS,
  SECURITY_ARCHITECTURE_ERROR_CODES,
  SERVICE_TO_SERVICE_TRUST_REQUIREMENTS,
  SERVICE_TRUST_REQUIREMENTS,
  TRUST_LIFECYCLE_STAGES,
  WORKLOAD_TRUST_IDENTITIES,
  ZERO_TRUST_BOUNDARY_NAMES,
  ZERO_TRUST_CONTEXT_GROUPS,
  ZERO_TRUST_DECISION_FLOW_STAGES,
  ZERO_TRUST_GOVERNANCE_ACTIVITIES,
  ZERO_TRUST_OBJECTIVES,
  ZERO_TRUST_OBSERVABILITY_EVENTS,
  ZERO_TRUST_PRINCIPLES,
  ZERO_TRUST_RISK_FACTORS,
  ZERO_TRUST_SESSION_REQUIREMENTS,
  ZERO_TRUST_SUBJECT_TYPES,
  ZeroTrustArchitectureDescriptor,
  ZeroTrustBoundary,
  ZeroTrustEvaluation,
  addSecurityArchitecture
} from '../../src/security-architecture/index.js';

test('zero trust architecture exposes philosophy, objectives, principles, lifecycle, and decision flow', () => {
  const descriptor = new ZeroTrustArchitectureDescriptor();

  assert.equal(descriptor.philosophy(), 'Never trust. Always verify.');
  assert.ok(descriptor.objectives().includes(ZERO_TRUST_OBJECTIVES.CONTINUOUS_VERIFICATION));
  assert.ok(descriptor.objectives().includes(ZERO_TRUST_OBJECTIVES.ENTERPRISE_RESILIENCE));
  assert.ok(descriptor.principles().includes(ZERO_TRUST_PRINCIPLES.VERIFY_EXPLICITLY));
  assert.ok(descriptor.trustLifecycle().includes(TRUST_LIFECYCLE_STAGES.REVOKED));
  assert.deepEqual(descriptor.decisionFlow(), [
    ZERO_TRUST_DECISION_FLOW_STAGES.REQUEST,
    ZERO_TRUST_DECISION_FLOW_STAGES.IDENTITY_VERIFICATION,
    ZERO_TRUST_DECISION_FLOW_STAGES.AUTHENTICATION,
    ZERO_TRUST_DECISION_FLOW_STAGES.AUTHORIZATION,
    ZERO_TRUST_DECISION_FLOW_STAGES.CONTEXT_EVALUATION,
    ZERO_TRUST_DECISION_FLOW_STAGES.RISK_ASSESSMENT,
    ZERO_TRUST_DECISION_FLOW_STAGES.POLICY_DECISION,
    ZERO_TRUST_DECISION_FLOW_STAGES.ACCESS_OUTCOME
  ]);
});

test('zero trust architecture exposes boundaries, subjects, and trust requirements', () => {
  const descriptor = new ZeroTrustArchitectureDescriptor();

  assert.ok(descriptor.trustBoundaries().includes(ZERO_TRUST_BOUNDARY_NAMES.CLIENT_EDGE));
  assert.ok(descriptor.trustBoundaries().includes(ZERO_TRUST_BOUNDARY_NAMES.AI_KNOWLEDGE_SOURCES));
  assert.ok(descriptor.subjectTypes().includes(ZERO_TRUST_SUBJECT_TYPES.AI_COMPONENT));
  assert.ok(descriptor.humanTrustRequirements().includes(HUMAN_TRUST_REQUIREMENTS.SESSION_VALIDATION));
  assert.ok(descriptor.serviceTrustRequirements().includes(SERVICE_TRUST_REQUIREMENTS.COMMUNICATION_INTEGRITY));
  assert.ok(descriptor.aiTrustRequirements().includes(AI_TRUST_REQUIREMENTS.AUDITABLE_ACTIONS));
  assert.ok(descriptor.deviceTrustFactors().includes(DEVICE_TRUST_FACTORS.PLATFORM_INTEGRITY));
  assert.ok(descriptor.workloadTrustIdentities().includes(WORKLOAD_TRUST_IDENTITIES.EVENT_PROCESSORS));
  assert.ok(descriptor.dataTrustResources().includes(DATA_TRUST_RESOURCES.AI_KNOWLEDGE));
  assert.ok(descriptor.sessionRequirements().includes(ZERO_TRUST_SESSION_REQUIREMENTS.EXPLICIT_TERMINATION));
  assert.ok(descriptor.serviceToServiceRequirements().includes(SERVICE_TO_SERVICE_TRUST_REQUIREMENTS.VERIFIED_CALLER_IDENTITY));
});

test('zero trust architecture validates protected request evaluations', () => {
  const descriptor = new ZeroTrustArchitectureDescriptor();
  const valid = descriptor.validateEvaluation(
    new ZeroTrustEvaluation({
      request: 'Retrieve reservation insight',
      subject: 'AI Orchestrator',
      subjectType: ZERO_TRUST_SUBJECT_TYPES.AI_COMPONENT,
      boundary: ZERO_TRUST_BOUNDARY_NAMES.SERVICE_AI,
      decisionFlow: descriptor.decisionFlow(),
      principles: Object.values(ZERO_TRUST_PRINCIPLES),
      contextGroups: Object.values(ZERO_TRUST_CONTEXT_GROUPS),
      riskFactors: Object.values(ZERO_TRUST_RISK_FACTORS),
      observabilityEvents: Object.values(ZERO_TRUST_OBSERVABILITY_EVENTS),
      governanceActivities: Object.values(ZERO_TRUST_GOVERNANCE_ACTIVITIES)
    })
  );
  const invalid = descriptor.validateEvaluation({
    request: '',
    subject: '',
    subjectType: 'trusted-network-device',
    boundary: 'Internal LAN',
    decisionFlow: [ZERO_TRUST_DECISION_FLOW_STAGES.REQUEST],
    principles: [ZERO_TRUST_PRINCIPLES.VERIFY_EXPLICITLY],
    contextGroups: [ZERO_TRUST_CONTEXT_GROUPS.IDENTITY_CONTEXT],
    riskFactors: [ZERO_TRUST_RISK_FACTORS.SENSITIVE_RESOURCES],
    observabilityEvents: [ZERO_TRUST_OBSERVABILITY_EVENTS.AUTHENTICATION_EVENTS],
    governanceActivities: [ZERO_TRUST_GOVERNANCE_ACTIVITIES.TRUST_POLICY_MANAGEMENT],
    explicitlyVerified: false,
    leastPrivilege: false,
    assumesBreach: false,
    continuouslyValidated: false,
    authorizationEvaluated: false,
    policyDriven: false,
    auditable: false,
    networkTrusted: true,
    permanentTrust: true,
    vendorSpecific: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /identify the request/);
  assert.match(invalid.errors.join('\n'), /Unsupported Zero Trust subject type/);
  assert.match(invalid.errors.join('\n'), /Identity Verification/);
  assert.match(invalid.errors.join('\n'), /least privilege/);
  assert.match(invalid.errors.join('\n'), /Network location alone/);
  assert.match(invalid.errors.join('\n'), /not permanent/);
});

test('zero trust architecture validates trust boundary crossings', () => {
  const descriptor = new ZeroTrustArchitectureDescriptor();
  const valid = descriptor.validateBoundary(
    new ZeroTrustBoundary({
      name: 'Service to AI',
      crossing: ZERO_TRUST_BOUNDARY_NAMES.SERVICE_AI,
      subjects: Object.values(ZERO_TRUST_SUBJECT_TYPES)
    })
  );
  const invalid = descriptor.validateBoundary({
    name: '',
    crossing: 'Private Subnet',
    subjects: [ZERO_TRUST_SUBJECT_TYPES.SERVICE],
    requiresPolicyEvaluation: false,
    verifiesIdentity: false,
    evaluatesContext: false,
    assessesRisk: false,
    enforcesLeastPrivilege: false,
    auditable: false,
    networkLocationTrusted: true,
    infrastructurePlacementTrusted: true,
    vendorSpecific: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must have a name/);
  assert.match(invalid.errors.join('\n'), /Unsupported trust boundary crossing/);
  assert.match(invalid.errors.join('\n'), /ai-component/);
  assert.match(invalid.errors.join('\n'), /policy evaluation/);
  assert.match(invalid.errors.join('\n'), /Infrastructure placement/);
});

test('zero trust architecture reports future capabilities without implementing them', () => {
  const descriptor = new ZeroTrustArchitectureDescriptor();

  assert.ok(descriptor.futureCapabilities().includes(FUTURE_ZERO_TRUST_CAPABILITIES.CONTINUOUS_ADAPTIVE_TRUST_SCORING));
  assert.ok(descriptor.futureCapabilities().includes(FUTURE_ZERO_TRUST_CAPABILITIES.DYNAMIC_MICRO_SEGMENTATION));
  assert.ok(descriptor.futureCapabilities().includes(FUTURE_ZERO_TRUST_CAPABILITIES.POST_QUANTUM_TRUST_MECHANISMS));
});

test('zero trust architecture assertion rejects incomplete metadata', () => {
  class IncompleteZeroTrustDescriptor extends ZeroTrustArchitectureDescriptor {
    trustBoundaries() {
      return [];
    }
  }

  assert.throws(
    () => new IncompleteZeroTrustDescriptor().assertModel(),
    error =>
      error instanceof PlatformError &&
      error.code === SECURITY_ARCHITECTURE_ERROR_CODES.ZERO_TRUST_ARCHITECTURE_INVALID &&
      error.details.errors.some(message => message.includes('trust boundaries'))
  );
});

test('zero trust architecture descriptor is available through DI registration', () => {
  const services = new ServiceCollection();

  addSecurityArchitecture(services);
  const provider = services.buildServiceProvider();
  const descriptor = provider.getRequiredService('ZeroTrustArchitectureDescriptor');

  assert.ok(descriptor instanceof ZeroTrustArchitectureDescriptor);
  assert.equal(descriptor.assertModel().isValid, true);
});
