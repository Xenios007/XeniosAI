export class ValueObjectInstance {
  constructor({
    valueObjectName,
    values = {},
    ownerEntity = undefined,
    identity = undefined,
    mutable = false,
    lifecycleIndependent = false
  }) {
    this.valueObjectName = valueObjectName;
    this.values = Object.freeze({ ...values });
    this.ownerEntity = ownerEntity;
    this.identity = identity;
    this.mutable = Boolean(mutable);
    this.lifecycleIndependent = Boolean(lifecycleIndependent);

    Object.freeze(this);
  }
}
