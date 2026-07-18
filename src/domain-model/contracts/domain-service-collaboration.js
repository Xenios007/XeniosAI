export class DomainServiceCollaboration {
  constructor({
    serviceName,
    collaboratorName,
    collaboratorType,
    interaction,
    throughAggregateRoot = true,
    transfersOwnership = false,
    sharedState = false,
    crossesBoundedContext = false
  }) {
    this.serviceName = serviceName;
    this.collaboratorName = collaboratorName;
    this.collaboratorType = collaboratorType;
    this.interaction = interaction;
    this.throughAggregateRoot = Boolean(throughAggregateRoot);
    this.transfersOwnership = Boolean(transfersOwnership);
    this.sharedState = Boolean(sharedState);
    this.crossesBoundedContext = Boolean(crossesBoundedContext);

    Object.freeze(this);
  }
}
