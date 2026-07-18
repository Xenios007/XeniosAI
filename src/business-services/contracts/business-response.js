export class BusinessResponse {
  constructor({
    serviceName,
    capability,
    outcome,
    data = {},
    errors = [],
    events = [],
    metadata = {}
  }) {
    this.serviceName = serviceName;
    this.capability = capability;
    this.outcome = outcome;
    this.data = Object.freeze({ ...data });
    this.errors = Object.freeze([...errors]);
    this.events = Object.freeze([...events]);
    this.metadata = Object.freeze({ ...metadata });
    Object.freeze(this);
  }
}
