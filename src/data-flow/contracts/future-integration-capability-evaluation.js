export class FutureIntegrationCapabilityEvaluation {
  constructor({
    capabilityId,
    preservesExplicitOwnership = false,
    maintainsServiceAutonomy = false,
    extendsExistingPrinciples = false,
    avoidsHiddenDependencies = false,
    remainsObservable = false,
    supportsIncrementalAdoption = false,
    providesMeasurableBusinessValue = false,
    keepsExternalIntegrationsIsolated = false,
    technologyOnlyJustification = false,
    requiresArchitecturalReplacement = false,
    transfersBusinessOwnership = false,
    bypassesContracts = false,
    makesMessagingVisibleToBusinessLogic = false,
    requiresDistributedTransactions = false
  }) {
    this.capabilityId = capabilityId;
    this.preservesExplicitOwnership = Boolean(preservesExplicitOwnership);
    this.maintainsServiceAutonomy = Boolean(maintainsServiceAutonomy);
    this.extendsExistingPrinciples = Boolean(extendsExistingPrinciples);
    this.avoidsHiddenDependencies = Boolean(avoidsHiddenDependencies);
    this.remainsObservable = Boolean(remainsObservable);
    this.supportsIncrementalAdoption = Boolean(supportsIncrementalAdoption);
    this.providesMeasurableBusinessValue = Boolean(providesMeasurableBusinessValue);
    this.keepsExternalIntegrationsIsolated = Boolean(keepsExternalIntegrationsIsolated);
    this.technologyOnlyJustification = Boolean(technologyOnlyJustification);
    this.requiresArchitecturalReplacement = Boolean(requiresArchitecturalReplacement);
    this.transfersBusinessOwnership = Boolean(transfersBusinessOwnership);
    this.bypassesContracts = Boolean(bypassesContracts);
    this.makesMessagingVisibleToBusinessLogic = Boolean(makesMessagingVisibleToBusinessLogic);
    this.requiresDistributedTransactions = Boolean(requiresDistributedTransactions);

    Object.freeze(this);
  }
}
