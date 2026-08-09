export class ServiceLandscapeSnapshot {
  constructor({ services = [], categories = [], generatedAt = null }) {
    this.services = Object.freeze([...services]);
    this.categories = Object.freeze([...categories]);
    this.generatedAt = generatedAt;

    Object.freeze(this);
  }
}
