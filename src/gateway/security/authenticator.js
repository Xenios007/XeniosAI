export class Authenticator {
  async authenticate() {
    throw new Error('Authenticator.authenticate must be implemented by a subclass.');
  }
}
