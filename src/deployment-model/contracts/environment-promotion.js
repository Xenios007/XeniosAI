export class EnvironmentPromotion {
  constructor({
    fromEnvironment,
    toEnvironment,
    qualityGatesMet = true,
    oneDirection = true,
    directDevelopmentToProduction = false,
    approved = true
  }) {
    this.fromEnvironment = fromEnvironment;
    this.toEnvironment = toEnvironment;
    this.qualityGatesMet = Boolean(qualityGatesMet);
    this.oneDirection = Boolean(oneDirection);
    this.directDevelopmentToProduction = Boolean(directDevelopmentToProduction);
    this.approved = Boolean(approved);

    Object.freeze(this);
  }
}
