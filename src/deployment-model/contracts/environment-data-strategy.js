export class EnvironmentDataStrategy {
  constructor({
    environmentName,
    datasetStrategy,
    independentDataset = true,
    productionDataSanitized = true,
    governanceApplied = true,
    copiedProductionDataToLowerEnvironment = false
  }) {
    this.environmentName = environmentName;
    this.datasetStrategy = datasetStrategy;
    this.independentDataset = Boolean(independentDataset);
    this.productionDataSanitized = Boolean(productionDataSanitized);
    this.governanceApplied = Boolean(governanceApplied);
    this.copiedProductionDataToLowerEnvironment = Boolean(copiedProductionDataToLowerEnvironment);

    Object.freeze(this);
  }
}
