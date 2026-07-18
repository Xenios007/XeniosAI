export class ComputeCategory {
  constructor({
    categoryName,
    primaryResponsibility,
    workloadClassification,
    responsibilities = [],
    characteristics = [],
    independentlyScalable = true,
    isolated = true,
    ownsBusinessLogic = false,
    technologySpecific = false
  }) {
    this.categoryName = categoryName;
    this.primaryResponsibility = primaryResponsibility;
    this.workloadClassification = workloadClassification;
    this.responsibilities = Object.freeze([...responsibilities]);
    this.characteristics = Object.freeze([...characteristics]);
    this.independentlyScalable = Boolean(independentlyScalable);
    this.isolated = Boolean(isolated);
    this.ownsBusinessLogic = Boolean(ownsBusinessLogic);
    this.technologySpecific = Boolean(technologySpecific);

    Object.freeze(this);
  }
}
