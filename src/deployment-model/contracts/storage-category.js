export class StorageCategory {
  constructor({
    categoryName,
    primaryResponsibility,
    responsibilities = [],
    consistencyModel,
    authoritative = false,
    derived = false,
    sourceOfTruth = false,
    independentlyScalable = true,
    technologySpecific = false
  }) {
    this.categoryName = categoryName;
    this.primaryResponsibility = primaryResponsibility;
    this.responsibilities = Object.freeze([...responsibilities]);
    this.consistencyModel = consistencyModel;
    this.authoritative = Boolean(authoritative);
    this.derived = Boolean(derived);
    this.sourceOfTruth = Boolean(sourceOfTruth);
    this.independentlyScalable = Boolean(independentlyScalable);
    this.technologySpecific = Boolean(technologySpecific);

    Object.freeze(this);
  }
}
