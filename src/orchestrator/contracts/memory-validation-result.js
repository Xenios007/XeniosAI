export class MemoryValidationResult {
  constructor({ isValid, selected = [], excluded = [], errors = [] }) {
    this.isValid = Boolean(isValid);
    this.selected = Object.freeze([...selected]);
    this.excluded = Object.freeze([...excluded]);
    this.errors = Object.freeze([...errors]);

    Object.freeze(this);
  }
}
