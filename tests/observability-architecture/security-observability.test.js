import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  AI_SECURITY_OBSERVABILITY_ACTIVITIES,
  AUTHORIZATION_OBSERVABILITY_ACTIVITIES,
  FUTURE_SECURITY_OBSERVABILITY_CAPABILITIES,
  IDENTITY_OBSERVABILITY_ACTIVITIES,
  INTEGRATION_SECURITY_OBSERVABILITY_ACTIVITIES,
  LEAST_PRIVILEGE_OBSERVATIONS,
  OBSERVABILITY_ARCHITECTURE_ERROR_CODES,
  SECURITY_AUDITABILITY_SUPPORTS,
  SECURITY_BUSINESS_CONTEXT_ELEMENTS,
  SECURITY_DECISION_OUTCOMES,
  SECURITY_INCIDENT_OBSERVABILITY_CHARACTERISTICS,
  SECURITY_OBSERVABILITY_ARCHITECTURAL_RULES,
  SECURITY_OBSERVABILITY_GOVERNANCE_ACTIVITIES,
  SECURITY_OBSERVABILITY_MODEL_STAGES,
  SECURITY_OBSERVABILITY_OBJECTIVES,
  SECURITY_OBSERVABILITY_PRINCIPLES,
  SECURITY_OBSERVABILITY_QUALITY_ATTRIBUTES,
  SECURITY_OBSERVABILITY_RELATIONSHIP_STAGES,
  SECURITY_OPERATIONAL_EVIDENCE_TYPES,
  SECURITY_RISK_VISIBILITY_TYPES,
  SECURITY_VISIBILITY_AREAS,
  SecurityObservabilityDescriptor,
  SecurityObservabilityProfile,
  SecurityOperationalEvidence,
  ZERO_TRUST_OBSERVABILITY_ACTIVITIES,
  addObservabilityArchitecture
} from '../../src/observability-architecture/index.js';

test('security observability exposes documented objectives, model, principles, and relationship flow', () => {
  const descriptor = new SecurityObservabilityDescriptor();

  assert.deepEqual(descriptor.objectives(), Object.values(SECURITY_OBSERVABILITY_OBJECTIVES));
  assert.deepEqual(descriptor.modelStages(), Object.values(SECURITY_OBSERVABILITY_MODEL_STAGES));
  assert.deepEqual(descriptor.principles(), Object.values(SECURITY_OBSERVABILITY_PRINCIPLES));
  assert.deepEqual(descriptor.relationshipFlow(), Object.values(SECURITY_OBSERVABILITY_RELATIONSHIP_STAGES));
});

test('security observability exposes identity, authorization, Zero Trust, incident, risk, governance, and future metadata', () => {
  const descriptor = new SecurityObservabilityDescriptor();

  assert.ok(descriptor.visibilityAreas().includes(SECURITY_VISIBILITY_AREAS.ADMINISTRATIVE_ACTIONS));
  assert.ok(descriptor.businessContextElements().includes(SECURITY_BUSINESS_CONTEXT_ELEMENTS.AI_ACTIVITY));
  assert.ok(descriptor.zeroTrustActivities().includes(ZERO_TRUST_OBSERVABILITY_ACTIVITIES.CONTINUOUS_AUTHORIZATION));
  assert.ok(descriptor.decisionOutcomes().includes(SECURITY_DECISION_OUTCOMES.CONDITIONAL_APPROVAL));
  assert.ok(descriptor.leastPrivilegeObservations().includes(LEAST_PRIVILEGE_OBSERVATIONS.PRIVILEGE_ELEVATION));
  assert.ok(descriptor.identityActivities().includes(IDENTITY_OBSERVABILITY_ACTIVITIES.IDENTITY_FEDERATION));
  assert.ok(descriptor.authorizationActivities().includes(AUTHORIZATION_OBSERVABILITY_ACTIVITIES.POLICY_CHANGES));
  assert.ok(descriptor.aiSecurityActivities().includes(AI_SECURITY_OBSERVABILITY_ACTIVITIES.PROMPT_GOVERNANCE));
  assert.ok(descriptor.integrationSecurityActivities().includes(INTEGRATION_SECURITY_OBSERVABILITY_ACTIVITIES.PARTNER_INTERACTIONS));
  assert.ok(descriptor.incidentCharacteristics().includes(SECURITY_INCIDENT_OBSERVABILITY_CHARACTERISTICS.CONTAINMENT));
  assert.ok(descriptor.auditabilitySupports().includes(SECURITY_AUDITABILITY_SUPPORTS.HISTORICAL_ANALYSIS));
  assert.ok(descriptor.riskVisibilityTypes().includes(SECURITY_RISK_VISIBILITY_TYPES.AI_MISUSE));
  assert.ok(descriptor.operationalEvidenceTypes().includes(SECURITY_OPERATIONAL_EVIDENCE_TYPES.INCIDENT_RECORDS));
  assert.ok(descriptor.governanceActivities().includes(SECURITY_OBSERVABILITY_GOVERNANCE_ACTIVITIES.AUDIT_READINESS));
  assert.ok(descriptor.qualityAttributes().includes(SECURITY_OBSERVABILITY_QUALITY_ATTRIBUTES.ENTERPRISE_RESILIENCE));
  assert.ok(descriptor.architecturalRules().includes(SECURITY_OBSERVABILITY_ARCHITECTURAL_RULES.SUPPORT_ZERO_TRUST));
  assert.ok(descriptor.futureCapabilities().includes(FUTURE_SECURITY_OBSERVABILITY_CAPABILITIES.ADAPTIVE_ZERO_TRUST_TELEMETRY));
});

test('security observability validates complete continuous security profiles', () => {
  const descriptor = new SecurityObservabilityDescriptor();
  const valid = descriptor.validateProfile(
    new SecurityObservabilityProfile({
      observabilityName: 'Enterprise Security Visibility',
      objectives: Object.values(SECURITY_OBSERVABILITY_OBJECTIVES),
      modelStages: Object.values(SECURITY_OBSERVABILITY_MODEL_STAGES),
      principles: Object.values(SECURITY_OBSERVABILITY_PRINCIPLES),
      visibilityAreas: Object.values(SECURITY_VISIBILITY_AREAS),
      businessContextElements: Object.values(SECURITY_BUSINESS_CONTEXT_ELEMENTS),
      zeroTrustActivities: Object.values(ZERO_TRUST_OBSERVABILITY_ACTIVITIES),
      decisionOutcomes: Object.values(SECURITY_DECISION_OUTCOMES),
      leastPrivilegeObservations: Object.values(LEAST_PRIVILEGE_OBSERVATIONS),
      identityActivities: Object.values(IDENTITY_OBSERVABILITY_ACTIVITIES),
      authorizationActivities: Object.values(AUTHORIZATION_OBSERVABILITY_ACTIVITIES),
      aiSecurityActivities: Object.values(AI_SECURITY_OBSERVABILITY_ACTIVITIES),
      integrationSecurityActivities: Object.values(INTEGRATION_SECURITY_OBSERVABILITY_ACTIVITIES),
      incidentCharacteristics: Object.values(SECURITY_INCIDENT_OBSERVABILITY_CHARACTERISTICS),
      auditabilitySupports: Object.values(SECURITY_AUDITABILITY_SUPPORTS),
      riskVisibilityTypes: Object.values(SECURITY_RISK_VISIBILITY_TYPES),
      operationalEvidenceTypes: Object.values(SECURITY_OPERATIONAL_EVIDENCE_TYPES),
      governanceActivities: Object.values(SECURITY_OBSERVABILITY_GOVERNANCE_ACTIVITIES),
      qualityAttributes: Object.values(SECURITY_OBSERVABILITY_QUALITY_ATTRIBUTES),
      relationshipStages: Object.values(SECURITY_OBSERVABILITY_RELATIONSHIP_STAGES),
      architecturalRules: Object.values(SECURITY_OBSERVABILITY_ARCHITECTURAL_RULES),
      futureCapabilities: Object.values(FUTURE_SECURITY_OBSERVABILITY_CAPABILITIES)
    })
  );
  const invalid = descriptor.validateProfile({
    observabilityName: '',
    objectives: [SECURITY_OBSERVABILITY_OBJECTIVES.CONTINUOUS_SECURITY_VISIBILITY],
    modelStages: [SECURITY_OBSERVABILITY_MODEL_STAGES.IDENTITY],
    principles: [SECURITY_OBSERVABILITY_PRINCIPLES.CONTINUOUS_SECURITY_VISIBILITY],
    visibilityAreas: [SECURITY_VISIBILITY_AREAS.IDENTITY],
    businessContextElements: [SECURITY_BUSINESS_CONTEXT_ELEMENTS.BUSINESS_CAPABILITY],
    zeroTrustActivities: [ZERO_TRUST_OBSERVABILITY_ACTIVITIES.IDENTITY_VERIFICATION],
    decisionOutcomes: [SECURITY_DECISION_OUTCOMES.ACCESS_GRANTED],
    leastPrivilegeObservations: [LEAST_PRIVILEGE_OBSERVATIONS.PERMISSION_USAGE],
    identityActivities: [IDENTITY_OBSERVABILITY_ACTIVITIES.AUTHENTICATION],
    authorizationActivities: [AUTHORIZATION_OBSERVABILITY_ACTIVITIES.POLICY_EVALUATION],
    aiSecurityActivities: [AI_SECURITY_OBSERVABILITY_ACTIVITIES.AGENT_IDENTITY],
    integrationSecurityActivities: [INTEGRATION_SECURITY_OBSERVABILITY_ACTIVITIES.API_AUTHORIZATION],
    incidentCharacteristics: [SECURITY_INCIDENT_OBSERVABILITY_CHARACTERISTICS.DETECTION],
    auditabilitySupports: [SECURITY_AUDITABILITY_SUPPORTS.AUDIT_READINESS],
    riskVisibilityTypes: [SECURITY_RISK_VISIBILITY_TYPES.UNAUTHORIZED_ACCESS],
    operationalEvidenceTypes: [SECURITY_OPERATIONAL_EVIDENCE_TYPES.AUTHENTICATION_EVENTS],
    governanceActivities: [SECURITY_OBSERVABILITY_GOVERNANCE_ACTIVITIES.COMPLIANCE],
    qualityAttributes: [SECURITY_OBSERVABILITY_QUALITY_ATTRIBUTES.TRACEABILITY],
    relationshipStages: [SECURITY_OBSERVABILITY_RELATIONSHIP_STAGES.IDENTITY],
    architecturalRules: [SECURITY_OBSERVABILITY_ARCHITECTURAL_RULES.OBSERVE_SECURITY_CONTINUOUSLY],
    futureCapabilities: [FUTURE_SECURITY_OBSERVABILITY_CAPABILITIES.AI_ASSISTED_THREAT_ANALYSIS],
    continuouslyObservable: false,
    businessContextPreserved: false,
    zeroTrustSupported: false,
    decisionsExplainable: false,
    leastPrivilegeVerifiable: false,
    auditabilityEnabled: false,
    governanceEvidenceReliable: false,
    trustworthyCorrelatedGoverned: false,
    technologyNeutral: false,
    vendorNeutral: false,
    securityProductSpecific: true,
    siemPlatformSpecific: true,
    endpointTechnologySpecific: true,
    securityToolingSpecific: true,
    implementationMechanismSpecific: true,
    exposesSensitiveImplementationDetails: true,
    disruptsBusinessCapabilities: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must have a name/);
  assert.match(invalid.errors.join('\n'), /enterprise-traceability/);
  assert.match(invalid.errors.join('\n'), /Access Request/);
  assert.match(invalid.errors.join('\n'), /business-correlated-security/);
  assert.match(invalid.errors.join('\n'), /authentication/);
  assert.match(invalid.errors.join('\n'), /customer-interaction/);
  assert.match(invalid.errors.join('\n'), /access-evaluation/);
  assert.match(invalid.errors.join('\n'), /access-denied/);
  assert.match(invalid.errors.join('\n'), /administrative-actions/);
  assert.match(invalid.errors.join('\n'), /session-establishment/);
  assert.match(invalid.errors.join('\n'), /permission-checks/);
  assert.match(invalid.errors.join('\n'), /tool-authorization/);
  assert.match(invalid.errors.join('\n'), /event-authorization/);
  assert.match(invalid.errors.join('\n'), /impact/);
  assert.match(invalid.errors.join('\n'), /compliance-verification/);
  assert.match(invalid.errors.join('\n'), /policy-violations/);
  assert.match(invalid.errors.join('\n'), /authorization-decisions/);
  assert.match(invalid.errors.join('\n'), /risk-management/);
  assert.match(invalid.errors.join('\n'), /accountability/);
  assert.match(invalid.errors.join('\n'), /Security Controls/);
  assert.match(invalid.errors.join('\n'), /preserve-business-context/);
  assert.match(invalid.errors.join('\n'), /predictive-security-diagnostics/);
  assert.match(invalid.errors.join('\n'), /Security should be continuously observable/);
  assert.match(invalid.errors.join('\n'), /SIEM platforms are outside ARCH-010-07 scope/);
  assert.match(invalid.errors.join('\n'), /Endpoint technologies are outside ARCH-010-07 scope/);
  assert.match(invalid.errors.join('\n'), /disrupting business capabilities/);
});

test('security observability validates operational evidence with identity, action, decision, context, and correlation', () => {
  const descriptor = new SecurityObservabilityDescriptor();
  const valid = descriptor.validateOperationalEvidence(
    new SecurityOperationalEvidence({
      evidenceType: SECURITY_OPERATIONAL_EVIDENCE_TYPES.AUTHORIZATION_DECISIONS,
      identity: 'user-1',
      action: 'booking.approve',
      affectedResource: 'booking-1',
      securityDecision: SECURITY_DECISION_OUTCOMES.ACCESS_GRANTED,
      businessContext: {
        businessCapability: 'booking',
        transaction: 'txn-1'
      },
      correlationId: 'corr-security-1',
      riskType: SECURITY_RISK_VISIBILITY_TYPES.POLICY_VIOLATIONS,
      zeroTrustActivity: ZERO_TRUST_OBSERVABILITY_ACTIVITIES.ACCESS_EVALUATION
    })
  );
  const invalid = descriptor.validateOperationalEvidence({
    evidenceType: 'firewall-vendor-log',
    identity: '',
    action: '',
    affectedResource: '',
    securityDecision: 'unknown',
    businessContext: {},
    correlationId: '',
    riskType: 'packet-loss',
    zeroTrustActivity: 'agent-plugin',
    technologyNeutral: false,
    exposesSensitiveImplementationDetails: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /Unsupported security operational evidence type/);
  assert.match(invalid.errors.join('\n'), /who performed the action/);
  assert.match(invalid.errors.join('\n'), /what action occurred/);
  assert.match(invalid.errors.join('\n'), /affected resources/);
  assert.match(invalid.errors.join('\n'), /Unsupported security decision outcome/);
  assert.match(invalid.errors.join('\n'), /business capability context/);
  assert.match(invalid.errors.join('\n'), /transaction context/);
  assert.match(invalid.errors.join('\n'), /correlation identity/);
  assert.match(invalid.errors.join('\n'), /Unsupported security risk type/);
  assert.match(invalid.errors.join('\n'), /Unsupported Zero Trust activity/);
  assert.match(invalid.errors.join('\n'), /technology neutral/);
  assert.match(invalid.errors.join('\n'), /sensitive implementation details/);
});

test('security observability assertion rejects incomplete metadata', () => {
  class IncompleteSecurityObservabilityDescriptor extends SecurityObservabilityDescriptor {
    principles() {
      return [];
    }
  }

  assert.throws(
    () => new IncompleteSecurityObservabilityDescriptor().assertArchitecture(),
    error =>
      error instanceof PlatformError &&
      error.code === OBSERVABILITY_ARCHITECTURE_ERROR_CODES.SECURITY_OBSERVABILITY_INVALID &&
      error.details.errors.some(message => message.includes('documented principles'))
  );
});

test('security observability descriptor is available through DI registration', () => {
  const services = new ServiceCollection();

  addObservabilityArchitecture(services);
  const provider = services.buildServiceProvider();
  const descriptor = provider.getRequiredService('SecurityObservabilityDescriptor');

  assert.ok(descriptor instanceof SecurityObservabilityDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
});
