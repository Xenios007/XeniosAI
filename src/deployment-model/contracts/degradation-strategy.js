export class DegradationStrategy {
  constructor({
    strategyName,
    strategies = [],
    prioritizesCriticalWorkflows = true,
    preservesEssentialCapabilities = true,
    avoidsSystemicFailure = true,
    reversible = true,
    platformSpecific = false
  }) {
    this.strategyName = strategyName;
    this.strategies = Object.freeze([...strategies]);
    this.prioritizesCriticalWorkflows = Boolean(prioritizesCriticalWorkflows);
    this.preservesEssentialCapabilities = Boolean(preservesEssentialCapabilities);
    this.avoidsSystemicFailure = Boolean(avoidsSystemicFailure);
    this.reversible = Boolean(reversible);
    this.platformSpecific = Boolean(platformSpecific);

    Object.freeze(this);
  }
}
