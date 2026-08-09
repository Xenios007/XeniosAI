export class EnvironmentConfiguration {
  constructor({
    environmentName,
    externalized = true,
    versionControlled = true,
    environmentSpecific = true,
    securelyManaged = true,
    independentlyDeployable = true,
    requiresRecompilation = false,
    behaviorConsistent = true
  }) {
    this.environmentName = environmentName;
    this.externalized = Boolean(externalized);
    this.versionControlled = Boolean(versionControlled);
    this.environmentSpecific = Boolean(environmentSpecific);
    this.securelyManaged = Boolean(securelyManaged);
    this.independentlyDeployable = Boolean(independentlyDeployable);
    this.requiresRecompilation = Boolean(requiresRecompilation);
    this.behaviorConsistent = Boolean(behaviorConsistent);

    Object.freeze(this);
  }
}
