export class Authorizer {
  async authorize() {
    throw new Error('Authorizer.authorize must be implemented by a subclass.');
  }
}
