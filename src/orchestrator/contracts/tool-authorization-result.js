export class ToolAuthorizationResult {
  constructor({ isAuthorized, errors = [] }) {
    this.isAuthorized = Boolean(isAuthorized);
    this.errors = Object.freeze([...errors]);

    Object.freeze(this);
  }
}
