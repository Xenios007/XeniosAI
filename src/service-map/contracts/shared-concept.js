export class SharedConcept {
  constructor({ concept, ownerServiceName, consumers = [] }) {
    this.concept = concept;
    this.ownerServiceName = ownerServiceName;
    this.consumers = Object.freeze([...consumers]);

    Object.freeze(this);
  }
}
