export class WorkflowStep {
  constructor({
    stepName,
    capability,
    owner,
    dependsOn = [],
    compensationCapability = undefined,
    compensationOwner = undefined,
    modifiesBusinessState = true,
    modifiesForeignBusinessState = false,
    orchestratorOwnsBusinessLogic = false
  }) {
    this.stepName = stepName;
    this.capability = capability;
    this.owner = owner;
    this.dependsOn = Object.freeze([...dependsOn]);
    this.compensationCapability = compensationCapability;
    this.compensationOwner = compensationOwner;
    this.modifiesBusinessState = Boolean(modifiesBusinessState);
    this.modifiesForeignBusinessState = Boolean(modifiesForeignBusinessState);
    this.orchestratorOwnsBusinessLogic = Boolean(orchestratorOwnsBusinessLogic);

    Object.freeze(this);
  }
}
