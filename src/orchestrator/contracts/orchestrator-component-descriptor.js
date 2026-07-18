export class OrchestratorComponentDescriptor {
  constructor({ componentName, responsibility, ownsImplementation = false }) {
    this.componentName = componentName;
    this.responsibility = responsibility;
    this.ownsImplementation = Boolean(ownsImplementation);

    Object.freeze(this);
  }
}
