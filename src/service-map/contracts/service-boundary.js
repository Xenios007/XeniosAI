export class ServiceBoundary {
  constructor({
    serviceName,
    owns = [],
    doesNotOwn = [],
    collaboratesWith = []
  }) {
    this.serviceName = serviceName;
    this.owns = Object.freeze([...owns]);
    this.doesNotOwn = Object.freeze([...doesNotOwn]);
    this.collaboratesWith = Object.freeze([...collaboratesWith]);

    Object.freeze(this);
  }
}
