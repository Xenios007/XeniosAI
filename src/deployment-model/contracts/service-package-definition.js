export class ServicePackageDefinition {
  constructor({
    packageName,
    serviceName,
    contents = [],
    reproducible = true,
    selfContained = true,
    externalizedConfiguration = true,
    rebuildRequiredForConfigurationChange = false,
    platformSpecific = false
  }) {
    this.packageName = packageName;
    this.serviceName = serviceName;
    this.contents = Object.freeze([...contents]);
    this.reproducible = Boolean(reproducible);
    this.selfContained = Boolean(selfContained);
    this.externalizedConfiguration = Boolean(externalizedConfiguration);
    this.rebuildRequiredForConfigurationChange = Boolean(rebuildRequiredForConfigurationChange);
    this.platformSpecific = Boolean(platformSpecific);

    Object.freeze(this);
  }
}
