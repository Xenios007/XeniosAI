export class DataProtectionProfile {
  constructor({
    informationAsset,
    classification,
    dataCategory,
    lifecycleStages = [],
    classificationInfluences = [],
    privacyPrinciples = [],
    aiDataAssets = [],
    observabilityEvents = [],
    governanceActivities = [],
    protectedThroughoutLifecycle = true,
    consistentClassification = true,
    privacyByDesign = true,
    dataMinimized = true,
    aiExposureLimited = true,
    auditable = true,
    vendorSpecific = false
  }) {
    this.informationAsset = informationAsset;
    this.classification = classification;
    this.dataCategory = dataCategory;
    this.lifecycleStages = Object.freeze([...lifecycleStages]);
    this.classificationInfluences = Object.freeze([...classificationInfluences]);
    this.privacyPrinciples = Object.freeze([...privacyPrinciples]);
    this.aiDataAssets = Object.freeze([...aiDataAssets]);
    this.observabilityEvents = Object.freeze([...observabilityEvents]);
    this.governanceActivities = Object.freeze([...governanceActivities]);
    this.protectedThroughoutLifecycle = Boolean(protectedThroughoutLifecycle);
    this.consistentClassification = Boolean(consistentClassification);
    this.privacyByDesign = Boolean(privacyByDesign);
    this.dataMinimized = Boolean(dataMinimized);
    this.aiExposureLimited = Boolean(aiExposureLimited);
    this.auditable = Boolean(auditable);
    this.vendorSpecific = Boolean(vendorSpecific);

    Object.freeze(this);
  }
}
