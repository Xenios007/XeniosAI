export class EmergingSecurityTechnologyProfile {
  constructor({
    technologyName,
    technologies = [],
    identityCapabilities = [],
    authorizationCapabilities = [],
    zeroTrustCapabilities = [],
    secretsCapabilities = [],
    cryptographyCapabilities = [],
    aiCapabilities = [],
    platformCapabilities = [],
    governanceCapabilities = [],
    operationalCapabilities = [],
    followsArchitecturalEvaluation = true,
    preservesInteroperability = true,
    preservesGovernance = true,
    preservesHumanOversight = true,
    grantsAiUnrestrictedAuthority = false,
    requiresApplicationArchitectureChangeForCryptography = false,
    implementationScheduleSpecific = false,
    vendorSpecific = false
  }) {
    this.technologyName = technologyName;
    this.technologies = Object.freeze([...technologies]);
    this.identityCapabilities = Object.freeze([...identityCapabilities]);
    this.authorizationCapabilities = Object.freeze([...authorizationCapabilities]);
    this.zeroTrustCapabilities = Object.freeze([...zeroTrustCapabilities]);
    this.secretsCapabilities = Object.freeze([...secretsCapabilities]);
    this.cryptographyCapabilities = Object.freeze([...cryptographyCapabilities]);
    this.aiCapabilities = Object.freeze([...aiCapabilities]);
    this.platformCapabilities = Object.freeze([...platformCapabilities]);
    this.governanceCapabilities = Object.freeze([...governanceCapabilities]);
    this.operationalCapabilities = Object.freeze([...operationalCapabilities]);
    this.followsArchitecturalEvaluation = Boolean(followsArchitecturalEvaluation);
    this.preservesInteroperability = Boolean(preservesInteroperability);
    this.preservesGovernance = Boolean(preservesGovernance);
    this.preservesHumanOversight = Boolean(preservesHumanOversight);
    this.grantsAiUnrestrictedAuthority = Boolean(grantsAiUnrestrictedAuthority);
    this.requiresApplicationArchitectureChangeForCryptography = Boolean(requiresApplicationArchitectureChangeForCryptography);
    this.implementationScheduleSpecific = Boolean(implementationScheduleSpecific);
    this.vendorSpecific = Boolean(vendorSpecific);

    Object.freeze(this);
  }
}
