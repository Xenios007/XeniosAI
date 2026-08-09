export class ContextCollaboration {
  constructor({
    sourceContext,
    targetContext,
    interaction,
    mechanism,
    description,
    directDatabaseSharing = false,
    modifiesTargetState = false,
    assumesTargetResponsibility = false,
    implementationDependency = false
  }) {
    this.sourceContext = sourceContext;
    this.targetContext = targetContext;
    this.interaction = interaction;
    this.mechanism = mechanism;
    this.description = description;
    this.directDatabaseSharing = Boolean(directDatabaseSharing);
    this.modifiesTargetState = Boolean(modifiesTargetState);
    this.assumesTargetResponsibility = Boolean(assumesTargetResponsibility);
    this.implementationDependency = Boolean(implementationDependency);

    Object.freeze(this);
  }
}
