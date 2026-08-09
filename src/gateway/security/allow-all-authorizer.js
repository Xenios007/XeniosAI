import { AuthorizationResult } from '../contracts/authorization-result.js';
import { Authorizer } from './authorizer.js';

export class AllowAllAuthorizer extends Authorizer {
  async authorize() {
    return new AuthorizationResult({
      isAuthorized: true,
      policy: 'public-request'
    });
  }
}
