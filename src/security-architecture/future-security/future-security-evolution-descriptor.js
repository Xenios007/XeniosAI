import { PlatformError } from '../../foundation/errors/platform-error.js';
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
  SECURITY_ARCHITECTURE_ERROR_CODES
} from '../constants.js';
import { EmergingSecurityTechnologyProfile } from '../contracts/emerging-security-technology-profile.js';
import { FutureSecurityEvolutionValidationResult } from '../contracts/future-security-evolution-validation-result.js';
import { SecurityEvolutionRoadmap } from '../contracts/security-evolution-roadmap.js';

const MATURITY_STAGES = Object.freeze(Object.values(SECURITY_MATURITY_STAGES));
const RELATIONSHIP_FLOW = Object.freeze(Object.values(FUTURE_SECURITY_RELATIONSHIP_FLOW_STAGES));

export class FutureSecurityEvolutionDescriptor {
  objectives() {
    return Object.freeze(Object.values(SECURITY_EVOLUTION_OBJECTIVES));
  }

  principles() {
    return Object.freeze(Object.values(SECURITY_EVOLUTION_PRINCIPLES));
  }

  secureDefaults() {
    return Object.freeze(Object.values(FUTURE_SECURE_DEFAULTS));
  }

  automationAreas() {
    return Object.freeze(Object.values(FUTURE_SECURITY_AUTOMATION_AREAS));
  }

  continuousVerificationFactors() {
    return Object.freeze(Object.values(FUTURE_CONTINUOUS_VERIFICATION_FACTORS));
  }

  identityCapabilities() {
    return Object.freeze(Object.values(SECURITY_IDENTITY_EVOLUTION_CAPABILITIES));
  }

  authorizationCapabilities() {
    return Object.freeze(Object.values(SECURITY_AUTHORIZATION_EVOLUTION_CAPABILITIES));
  }

  zeroTrustCapabilities() {
    return Object.freeze(Object.values(SECURITY_ZERO_TRUST_EVOLUTION_CAPABILITIES));
  }

  secretsCapabilities() {
    return Object.freeze(Object.values(SECURITY_SECRETS_EVOLUTION_CAPABILITIES));
  }

  cryptographyCapabilities() {
    return Object.freeze(Object.values(SECURITY_CRYPTOGRAPHY_EVOLUTION_CAPABILITIES));
  }

  aiCapabilities() {
    return Object.freeze(Object.values(SECURITY_AI_EVOLUTION_CAPABILITIES));
  }

  platformCapabilities() {
    return Object.freeze(Object.values(SECURITY_PLATFORM_EVOLUTION_CAPABILITIES));
  }

  governanceCapabilities() {
    return Object.freeze(Object.values(SECURITY_GOVERNANCE_EVOLUTION_CAPABILITIES));
  }

  operationalCapabilities() {
    return Object.freeze(Object.values(SECURITY_OPERATIONAL_EVOLUTION_CAPABILITIES));
  }

  emergingTechnologies() {
    return Object.freeze(Object.values(EMERGING_SECURITY_TECHNOLOGIES));
  }

  maturityStages() {
    return MATURITY_STAGES;
  }

  visionCharacteristics() {
    return Object.freeze(Object.values(LONG_TERM_SECURITY_VISION_CHARACTERISTICS));
  }

  relationshipFlow() {
    return RELATIONSHIP_FLOW;
  }

  validateRoadmap(roadmapInput) {
    const roadmap = roadmapInput instanceof SecurityEvolutionRoadmap
      ? roadmapInput
      : new SecurityEvolutionRoadmap(roadmapInput);
    const errors = [];

    if (!roadmap.roadmapName) errors.push('Security evolution roadmap must have a name.');
    appendMissing(errors, roadmap.objectives, this.objectives(), 'Security evolution objectives must include');
    appendMissing(errors, roadmap.principles, this.principles(), 'Security evolution must preserve');
    appendMissing(errors, roadmap.secureDefaults, this.secureDefaults(), 'Secure defaults should include');
    appendMissing(errors, roadmap.automationAreas, this.automationAreas(), 'Automation may include');
    appendMissing(errors, roadmap.verificationFactors, this.continuousVerificationFactors(), 'Continuous verification may consider');
    appendMissing(errors, roadmap.maturityStages, this.maturityStages(), 'Security maturity progression must include');
    appendMissing(errors, roadmap.visionCharacteristics, this.visionCharacteristics(), 'Long-term security vision must remain');
    appendMissing(errors, roadmap.relationshipFlow, this.relationshipFlow(), 'Future security relationship flow must include');
    if (roadmap.preservesPrinciples !== true) errors.push('Security improvements should preserve existing architectural principles.');
    if (roadmap.minimizesDisruption !== true) errors.push('Security improvements should minimize operational disruption.');
    if (roadmap.technologyIndependent !== true) errors.push('Security evolution must remain technology independent.');
    if (roadmap.supportsIncrementalAdoption !== true) errors.push('Security evolution should support incremental adoption.');
    if (roadmap.improvesResilience !== true) errors.push('Security evolution should improve organizational resilience.');
    if (roadmap.replacesEstablishedResponsibilities === true) errors.push('New capabilities should integrate with existing architecture rather than replacing established responsibilities.');
    if (roadmap.productRoadmapSpecific === true) errors.push('Specific product roadmaps are outside ARCH-008-10 scope.');
    if (roadmap.vendorStrategySpecific === true) errors.push('Vendor strategies are outside ARCH-008-10 scope.');

    return validation(errors);
  }

  validateEmergingTechnology(profileInput) {
    const profile = profileInput instanceof EmergingSecurityTechnologyProfile
      ? profileInput
      : new EmergingSecurityTechnologyProfile(profileInput);
    const errors = [];

    if (!profile.technologyName) errors.push('Emerging security technology profile must have a name.');
    appendMissing(errors, profile.technologies, this.emergingTechnologies(), 'Emerging technology evaluation should cover');
    appendMissing(errors, profile.identityCapabilities, this.identityCapabilities(), 'Identity evolution may include');
    appendMissing(errors, profile.authorizationCapabilities, this.authorizationCapabilities(), 'Authorization evolution may include');
    appendMissing(errors, profile.zeroTrustCapabilities, this.zeroTrustCapabilities(), 'Zero Trust evolution may include');
    appendMissing(errors, profile.secretsCapabilities, this.secretsCapabilities(), 'Secrets evolution may include');
    appendMissing(errors, profile.cryptographyCapabilities, this.cryptographyCapabilities(), 'Cryptography evolution may include');
    appendMissing(errors, profile.aiCapabilities, this.aiCapabilities(), 'AI security evolution may include');
    appendMissing(errors, profile.platformCapabilities, this.platformCapabilities(), 'Platform security evolution may include');
    appendMissing(errors, profile.governanceCapabilities, this.governanceCapabilities(), 'Governance evolution may include');
    appendMissing(errors, profile.operationalCapabilities, this.operationalCapabilities(), 'Operational security evolution may include');
    if (profile.followsArchitecturalEvaluation !== true) errors.push('Technology adoption should follow documented architectural evaluation.');
    if (profile.preservesInteroperability !== true) errors.push('Future enhancements should preserve interoperability.');
    if (profile.preservesGovernance !== true) errors.push('Future enhancements should preserve governance.');
    if (profile.preservesHumanOversight !== true) errors.push('Human oversight should remain central to high-impact security decisions.');
    if (profile.grantsAiUnrestrictedAuthority === true) errors.push('AI security should evolve without granting AI unrestricted authority.');
    if (profile.requiresApplicationArchitectureChangeForCryptography === true) errors.push('Cryptographic modernization should not require changes to application architecture.');
    if (profile.implementationScheduleSpecific === true) errors.push('Implementation schedules are outside ARCH-008-10 scope.');
    if (profile.vendorSpecific === true) errors.push('Future security evolution must remain vendor and technology neutral.');

    return validation(errors);
  }

  assertModel() {
    const errors = [];

    if (this.objectives().length !== 8) errors.push('Future Security Evolution must include all documented evolution objectives.');
    if (this.principles().length !== 4) errors.push('Future Security Evolution must include all documented evolution principles.');
    if (this.maturityStages().length !== 5) errors.push('Future Security Evolution must include the documented security maturity progression.');
    if (this.visionCharacteristics().length !== 8) errors.push('Future Security Evolution must include the documented long-term security vision.');
    if (this.relationshipFlow().length !== 10) errors.push('Future Security Evolution must include the documented relationship flow.');
    if (this.emergingTechnologies().length !== 7) errors.push('Future Security Evolution must include documented emerging technology examples.');

    if (errors.length > 0) {
      throw new PlatformError(
        SECURITY_ARCHITECTURE_ERROR_CODES.FUTURE_SECURITY_EVOLUTION_INVALID,
        'Future Security Evolution violates ARCH-008-10.',
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
  return new FutureSecurityEvolutionValidationResult({
    isValid: errors.length === 0,
    errors
  });
}
