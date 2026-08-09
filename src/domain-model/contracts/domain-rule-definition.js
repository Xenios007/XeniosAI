export class DomainRuleDefinition {
  constructor({
    ruleName,
    category,
    owningContext,
    ownerService,
    businessMeaning,
    enforcementOwner,
    enforcedBy,
    appliesTo = [],
    dependencies = [],
    duplicatedIn = [],
    technologyIndependent = true,
    businessUnderstandable = true,
    preservesIntegrity = true,
    technicalValidation = false,
    frameworkConstraint = false
  }) {
    this.ruleName = ruleName;
    this.category = category;
    this.owningContext = owningContext;
    this.ownerService = ownerService;
    this.businessMeaning = businessMeaning;
    this.enforcementOwner = enforcementOwner;
    this.enforcedBy = enforcedBy;
    this.appliesTo = Object.freeze([...appliesTo]);
    this.dependencies = Object.freeze([...dependencies]);
    this.duplicatedIn = Object.freeze([...duplicatedIn]);
    this.technologyIndependent = Boolean(technologyIndependent);
    this.businessUnderstandable = Boolean(businessUnderstandable);
    this.preservesIntegrity = Boolean(preservesIntegrity);
    this.technicalValidation = Boolean(technicalValidation);
    this.frameworkConstraint = Boolean(frameworkConstraint);

    Object.freeze(this);
  }
}
