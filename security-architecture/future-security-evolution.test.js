import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  EMERGING_SECURITY_TECHNOLOGIES,
  FUTURE_CONTINUOUS_VERIFICATION_FACTORS,
  FUTURE_SECURE_DEFAULTS,
  FUTURE_SECURITY_AUTOMATION_AREAS,
  FUTURE_SECURITY_RELATIONSHIP_FLOW_STAGES,
  LONG_TERM_SECURITY_VISION_CHARACTERISTICS,
  SECURITY_AI_EVOLUTION_CAPABILITIES,
  SECURITY_AUTHORIZATION_EVOLUTION_CAPABILITIES,
  SECURITY_CRYPTOGRAPHY_EVOLUTION_CAPABILITIES,
  SECURITY_EVOLUTION_OBJECTIVES,
  SECURITY_EVOLUTION_PRINCIPLES,
  SECURITY_GOVERNANCE_EVOLUTION_CAPABILITIES,
  SECURITY_IDENTITY_EVOLUTION_CAPABILITIES,
  SECURITY_MATURITY_STAGES,
  SECURITY_OPERATIONAL_EVOLUTION_CAPABILITIES,
  SECURITY_PLATFORM_EVOLUTION_CAPABILITIES,
  SECURITY_SECRETS_EVOLUTION_CAPABILITIES,
  SECURITY_ZERO_TRUST_EVOLUTION_CAPABILITIES,
  SECURITY_ARCHITECTURE_ERROR_CODES,
  EmergingSecurityTechnologyProfile,
  FutureSecurityEvolutionDescriptor,
  SecurityEvolutionRoadmap,
  addSecurityArchitecture
} from '../../src/security-architecture/index.js';

test('future security evolution exposes objectives, principles, maturity, vision, and relationship flow', () => {
  const descriptor = new FutureSecurityEvolutionDescriptor();

  assert.ok(descriptor.objectives().includes(SECURITY_EVOLUTION_OBJECTIVES.ADAPTIVE_TRUST));
  assert.ok(descriptor.objectives().includes(SECURITY_EVOLUTION_OBJECTIVES.LONG_TERM_CRYPTOGRAPHIC_READINESS));
  assert.ok(descriptor.principles().includes(SECURITY_EVOLUTION_PRINCIPLES.AUTOMATION_FIRST));
  assert.deepEqual(descriptor.maturityStages(), Object.values(SECURITY_MATURITY_STAGES));
  assert.ok(descriptor.visionCharacteristics().includes(LONG_TERM_SECURITY_VISION_CHARACTERISTICS.POLICY_DRIVEN));
  assert.deepEqual(descriptor.relationshipFlow(), Object.values(FUTURE_SECURITY_RELATIONSHIP_FLOW_STAGES));
});

test('future security evolution exposes domain-specific future capabilities and emerging technologies', () => {
  const descriptor = new FutureSecurityEvolutionDescriptor();

  assert.ok(descriptor.secureDefaults().includes(FUTURE_SECURE_DEFAULTS.STRONG_AUTHENTICATION));
  assert.ok(descriptor.automationAreas().includes(FUTURE_SECURITY_AUTOMATION_AREAS.INCIDENT_RESPONSE));
  assert.ok(descriptor.continuousVerificationFactors().includes(FUTURE_CONTINUOUS_VERIFICATION_FACTORS.AI_ACTIVITY));
  assert.ok(descriptor.identityCapabilities().includes(SECURITY_IDENTITY_EVOLUTION_CAPABILITIES.VERIFIABLE_CREDENTIALS));
  assert.ok(descriptor.authorizationCapabilities().includes(SECURITY_AUTHORIZATION_EVOLUTION_CAPABILITIES.CONTINUOUS_AUTHORIZATION));
  assert.ok(descriptor.zeroTrustCapabilities().includes(SECURITY_ZERO_TRUST_EVOLUTION_CAPABILITIES.DYNAMIC_WORKLOAD_VERIFICATION));
  assert.ok(descriptor.secretsCapabilities().includes(SECURITY_SECRETS_EVOLUTION_CAPABILITIES.SHORT_LIVED_CREDENTIALS));
  assert.ok(descriptor.cryptographyCapabilities().includes(SECURITY_CRYPTOGRAPHY_EVOLUTION_CAPABILITIES.POST_QUANTUM_CRYPTOGRAPHY));
  assert.ok(descriptor.aiCapabilities().includes(SECURITY_AI_EVOLUTION_CAPABILITIES.VERIFIABLE_REASONING));
  assert.ok(descriptor.platformCapabilities().includes(SECURITY_PLATFORM_EVOLUTION_CAPABILITIES.SECURE_SOFTWARE_FACTORIES));
  assert.ok(descriptor.governanceCapabilities().includes(SECURITY_GOVERNANCE_EVOLUTION_CAPABILITIES.CONTINUOUS_COMPLIANCE));
  assert.ok(descriptor.operationalCapabilities().includes(SECURITY_OPERATIONAL_EVOLUTION_CAPABILITIES.SELF_HEALING_INFRASTRUCTURE));
  assert.ok(descriptor.emergingTechnologies().includes(EMERGING_SECURITY_TECHNOLOGIES.CONFIDENTIAL_AI));
});

test('future security evolution validates incremental roadmap evolution', () => {
  const descriptor = new FutureSecurityEvolutionDescriptor();
  const valid = descriptor.validateRoadmap(
    new SecurityEvolutionRoadmap({
      roadmapName: 'Security Evolution Roadmap',
      objectives: Object.values(SECURITY_EVOLUTION_OBJECTIVES),
      principles: Object.values(SECURITY_EVOLUTION_PRINCIPLES),
      secureDefaults: Object.values(FUTURE_SECURE_DEFAULTS),
      automationAreas: Object.values(FUTURE_SECURITY_AUTOMATION_AREAS),
      verificationFactors: Object.values(FUTURE_CONTINUOUS_VERIFICATION_FACTORS),
      maturityStages: Object.values(SECURITY_MATURITY_STAGES),
      visionCharacteristics: Object.values(LONG_TERM_SECURITY_VISION_CHARACTERISTICS),
      relationshipFlow: Object.values(FUTURE_SECURITY_RELATIONSHIP_FLOW_STAGES)
    })
  );
  const invalid = descriptor.validateRoadmap({
    roadmapName: '',
    objectives: [SECURITY_EVOLUTION_OBJECTIVES.ADAPTIVE_TRUST],
    principles: [SECURITY_EVOLUTION_PRINCIPLES.SECURITY_BY_DEFAULT],
    secureDefaults: [FUTURE_SECURE_DEFAULTS.STRONG_AUTHENTICATION],
    automationAreas: [FUTURE_SECURITY_AUTOMATION_AREAS.CREDENTIAL_ROTATION],
    verificationFactors: [FUTURE_CONTINUOUS_VERIFICATION_FACTORS.BEHAVIORAL_PATTERNS],
    maturityStages: [SECURITY_MATURITY_STAGES.FOUNDATIONAL],
    visionCharacteristics: [LONG_TERM_SECURITY_VISION_CHARACTERISTICS.IDENTITY_CENTRIC],
    relationshipFlow: [FUTURE_SECURITY_RELATIONSHIP_FLOW_STAGES.SECURITY_OVERVIEW],
    preservesPrinciples: false,
    minimizesDisruption: false,
    technologyIndependent: false,
    supportsIncrementalAdoption: false,
    improvesResilience: false,
    replacesEstablishedResponsibilities: true,
    productRoadmapSpecific: true,
    vendorStrategySpecific: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must have a name/);
  assert.match(invalid.errors.join('\n'), /increased-automation/);
  assert.match(invalid.errors.join('\n'), /automation-first/);
  assert.match(invalid.errors.join('\n'), /incident-response/);
  assert.match(invalid.errors.join('\n'), /Managed/);
  assert.match(invalid.errors.join('\n'), /product roadmaps are outside/);
});

test('future security evolution validates emerging technology adoption', () => {
  const descriptor = new FutureSecurityEvolutionDescriptor();
  const valid = descriptor.validateEmergingTechnology(
    new EmergingSecurityTechnologyProfile({
      technologyName: 'Confidential AI Evaluation',
      technologies: Object.values(EMERGING_SECURITY_TECHNOLOGIES),
      identityCapabilities: Object.values(SECURITY_IDENTITY_EVOLUTION_CAPABILITIES),
      authorizationCapabilities: Object.values(SECURITY_AUTHORIZATION_EVOLUTION_CAPABILITIES),
      zeroTrustCapabilities: Object.values(SECURITY_ZERO_TRUST_EVOLUTION_CAPABILITIES),
      secretsCapabilities: Object.values(SECURITY_SECRETS_EVOLUTION_CAPABILITIES),
      cryptographyCapabilities: Object.values(SECURITY_CRYPTOGRAPHY_EVOLUTION_CAPABILITIES),
      aiCapabilities: Object.values(SECURITY_AI_EVOLUTION_CAPABILITIES),
      platformCapabilities: Object.values(SECURITY_PLATFORM_EVOLUTION_CAPABILITIES),
      governanceCapabilities: Object.values(SECURITY_GOVERNANCE_EVOLUTION_CAPABILITIES),
      operationalCapabilities: Object.values(SECURITY_OPERATIONAL_EVOLUTION_CAPABILITIES)
    })
  );
  const invalid = descriptor.validateEmergingTechnology({
    technologyName: '',
    technologies: [EMERGING_SECURITY_TECHNOLOGIES.CONFIDENTIAL_AI],
    identityCapabilities: [SECURITY_IDENTITY_EVOLUTION_CAPABILITIES.PASSWORDLESS_AUTHENTICATION],
    authorizationCapabilities: [SECURITY_AUTHORIZATION_EVOLUTION_CAPABILITIES.POLICY_AS_CODE],
    zeroTrustCapabilities: [SECURITY_ZERO_TRUST_EVOLUTION_CAPABILITIES.CONTINUOUS_TRUST_SCORING],
    secretsCapabilities: [SECURITY_SECRETS_EVOLUTION_CAPABILITIES.DYNAMIC_SECRETS],
    cryptographyCapabilities: [SECURITY_CRYPTOGRAPHY_EVOLUTION_CAPABILITIES.CONFIDENTIAL_COMPUTING],
    aiCapabilities: [SECURITY_AI_EVOLUTION_CAPABILITIES.AI_TRUST_SCORING],
    platformCapabilities: [SECURITY_PLATFORM_EVOLUTION_CAPABILITIES.CONTINUOUS_SOFTWARE_PROVENANCE],
    governanceCapabilities: [SECURITY_GOVERNANCE_EVOLUTION_CAPABILITIES.POLICY_AS_CODE],
    operationalCapabilities: [SECURITY_OPERATIONAL_EVOLUTION_CAPABILITIES.AUTONOMOUS_INCIDENT_TRIAGE],
    followsArchitecturalEvaluation: false,
    preservesInteroperability: false,
    preservesGovernance: false,
    preservesHumanOversight: false,
    grantsAiUnrestrictedAuthority: true,
    requiresApplicationArchitectureChangeForCryptography: true,
    implementationScheduleSpecific: true,
    vendorSpecific: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must have a name/);
  assert.match(invalid.errors.join('\n'), /quantum-resistant-systems/);
  assert.match(invalid.errors.join('\n'), /continuous-authentication/);
  assert.match(invalid.errors.join('\n'), /secure-multi-agent-coordination/);
  assert.match(invalid.errors.join('\n'), /unrestricted authority/);
  assert.match(invalid.errors.join('\n'), /Implementation schedules are outside/);
});

test('future security evolution assertion rejects incomplete metadata', () => {
  class IncompleteFutureSecurityDescriptor extends FutureSecurityEvolutionDescriptor {
    maturityStages() {
      return [];
    }
  }

  assert.throws(
    () => new IncompleteFutureSecurityDescriptor().assertModel(),
    error =>
      error instanceof PlatformError &&
      error.code === SECURITY_ARCHITECTURE_ERROR_CODES.FUTURE_SECURITY_EVOLUTION_INVALID &&
      error.details.errors.some(message => message.includes('maturity progression'))
  );
});

test('future security evolution descriptor is available through DI registration', () => {
  const services = new ServiceCollection();

  addSecurityArchitecture(services);
  const provider = services.buildServiceProvider();
  const descriptor = provider.getRequiredService('FutureSecurityEvolutionDescriptor');

  assert.ok(descriptor instanceof FutureSecurityEvolutionDescriptor);
  assert.equal(descriptor.assertModel().isValid, true);
});
