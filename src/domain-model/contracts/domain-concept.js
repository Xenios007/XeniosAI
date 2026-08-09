export class DomainConcept {
  constructor({ term, meaning, ownerService, domainName }) {
    this.term = term;
    this.meaning = meaning;
    this.ownerService = ownerService;
    this.domainName = domainName;

    Object.freeze(this);
  }
}
