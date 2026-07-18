export class ValueObjectDefinition {
  constructor({
    valueObjectName,
    purpose,
    attributes = [],
    validationRules = [],
    behaviors = [],
    reusableByEntities = [],
    hasIdentity = false,
    immutable = true,
    comparedByValue = true,
    persistenceConcern = false
  }) {
    this.valueObjectName = valueObjectName;
    this.purpose = purpose;
    this.attributes = Object.freeze([...attributes]);
    this.validationRules = Object.freeze([...validationRules]);
    this.behaviors = Object.freeze([...behaviors]);
    this.reusableByEntities = Object.freeze([...reusableByEntities]);
    this.hasIdentity = Boolean(hasIdentity);
    this.immutable = Boolean(immutable);
    this.comparedByValue = Boolean(comparedByValue);
    this.persistenceConcern = Boolean(persistenceConcern);

    Object.freeze(this);
  }
}
