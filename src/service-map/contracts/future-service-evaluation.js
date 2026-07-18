export class FutureServiceEvaluation {
  constructor({
    serviceName,
    ownsDistinctBusinessDomain = false,
    existingServicesCannotAbsorb = false,
    independentEvolutionBeneficial = false,
    ownershipUnambiguous = false,
    boundariesCohesive = false,
    respectsExistingOwnership = false,
    avoidsDirectDatabaseSharing = false,
    participatesInObservability = false,
    documentedBeforeImplementation = false,
    technologyOnlyJustification = false
  }) {
    this.serviceName = serviceName;
    this.ownsDistinctBusinessDomain = Boolean(ownsDistinctBusinessDomain);
    this.existingServicesCannotAbsorb = Boolean(existingServicesCannotAbsorb);
    this.independentEvolutionBeneficial = Boolean(independentEvolutionBeneficial);
    this.ownershipUnambiguous = Boolean(ownershipUnambiguous);
    this.boundariesCohesive = Boolean(boundariesCohesive);
    this.respectsExistingOwnership = Boolean(respectsExistingOwnership);
    this.avoidsDirectDatabaseSharing = Boolean(avoidsDirectDatabaseSharing);
    this.participatesInObservability = Boolean(participatesInObservability);
    this.documentedBeforeImplementation = Boolean(documentedBeforeImplementation);
    this.technologyOnlyJustification = Boolean(technologyOnlyJustification);

    Object.freeze(this);
  }
}
