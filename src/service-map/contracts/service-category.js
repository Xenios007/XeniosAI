export class ServiceCategory {
  constructor({ categoryName, displayName, description, serviceNames = [] }) {
    this.categoryName = categoryName;
    this.displayName = displayName;
    this.description = description;
    this.serviceNames = Object.freeze([...serviceNames]);

    Object.freeze(this);
  }
}
