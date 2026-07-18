export class TransactionBoundary {
  constructor({
    businessOperation,
    ownerService,
    affectedServices = [],
    modifiesBusinessState = true,
    distributedTransaction = false,
    crossServiceCommunicationInsideBoundary = false,
    publishesEventsBeforeCommit = false,
    longRunningLock = false,
    idempotencyRequired = false,
    rollbackScope = 'local',
    coordinationMechanisms = []
  }) {
    this.businessOperation = businessOperation;
    this.ownerService = ownerService;
    this.affectedServices = Object.freeze([...affectedServices]);
    this.modifiesBusinessState = Boolean(modifiesBusinessState);
    this.distributedTransaction = Boolean(distributedTransaction);
    this.crossServiceCommunicationInsideBoundary = Boolean(crossServiceCommunicationInsideBoundary);
    this.publishesEventsBeforeCommit = Boolean(publishesEventsBeforeCommit);
    this.longRunningLock = Boolean(longRunningLock);
    this.idempotencyRequired = Boolean(idempotencyRequired);
    this.rollbackScope = rollbackScope;
    this.coordinationMechanisms = Object.freeze([...coordinationMechanisms]);

    Object.freeze(this);
  }
}
