export class GovernanceImprovementPolicy {
  constructor({
    policyName,
    lifecycleStages = [],
    incidentStages = [],
    responsibilityAssignments = [],
    observabilityEvents = [],
    continuous = true,
    lessonsFeedImprovements = true,
    reviewedPeriodically = true,
    measurable = true,
    auditable = true,
    oneTimeActivity = false,
    organizationSpecificProgram = false,
    vendorSpecific = false
  }) {
    this.policyName = policyName;
    this.lifecycleStages = Object.freeze([...lifecycleStages]);
    this.incidentStages = Object.freeze([...incidentStages]);
    this.responsibilityAssignments = Object.freeze([...responsibilityAssignments]);
    this.observabilityEvents = Object.freeze([...observabilityEvents]);
    this.continuous = Boolean(continuous);
    this.lessonsFeedImprovements = Boolean(lessonsFeedImprovements);
    this.reviewedPeriodically = Boolean(reviewedPeriodically);
    this.measurable = Boolean(measurable);
    this.auditable = Boolean(auditable);
    this.oneTimeActivity = Boolean(oneTimeActivity);
    this.organizationSpecificProgram = Boolean(organizationSpecificProgram);
    this.vendorSpecific = Boolean(vendorSpecific);

    Object.freeze(this);
  }
}
