export class DataLifecyclePolicy {
  constructor({
    dataName,
    stages = [],
    deletionGoverned = true,
    regulatoryRequirementsMet = true,
    historyPreserved = true,
    technologySpecific = false
  }) {
    this.dataName = dataName;
    this.stages = Object.freeze([...stages]);
    this.deletionGoverned = Boolean(deletionGoverned);
    this.regulatoryRequirementsMet = Boolean(regulatoryRequirementsMet);
    this.historyPreserved = Boolean(historyPreserved);
    this.technologySpecific = Boolean(technologySpecific);

    Object.freeze(this);
  }
}
