export class FutureDomainEvaluation {
  constructor({
    domainName,
    decision,
    preservesBoundedContexts = true,
    protectsUbiquitousLanguage = true,
    maintainsExplicitOwnership = true,
    favorsNewDomainOverOversizedDomain = true,
    preservesAggregateConsistency = true,
    keepsDomainEventsMeaningful = true,
    technologyIndependent = true,
    strengthensBusinessArchitecture = true,
    aiAugmentsButDoesNotOwnPolicy = true,
    measuredByBusinessCapability = true
  }) {
    this.domainName = domainName;
    this.decision = decision;
    this.preservesBoundedContexts = Boolean(preservesBoundedContexts);
    this.protectsUbiquitousLanguage = Boolean(protectsUbiquitousLanguage);
    this.maintainsExplicitOwnership = Boolean(maintainsExplicitOwnership);
    this.favorsNewDomainOverOversizedDomain = Boolean(favorsNewDomainOverOversizedDomain);
    this.preservesAggregateConsistency = Boolean(preservesAggregateConsistency);
    this.keepsDomainEventsMeaningful = Boolean(keepsDomainEventsMeaningful);
    this.technologyIndependent = Boolean(technologyIndependent);
    this.strengthensBusinessArchitecture = Boolean(strengthensBusinessArchitecture);
    this.aiAugmentsButDoesNotOwnPolicy = Boolean(aiAugmentsButDoesNotOwnPolicy);
    this.measuredByBusinessCapability = Boolean(measuredByBusinessCapability);

    Object.freeze(this);
  }
}
