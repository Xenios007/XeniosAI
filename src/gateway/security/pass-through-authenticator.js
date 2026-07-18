import { AuthenticationResult } from '../contracts/authentication-result.js';
import { Authenticator } from './authenticator.js';

export class PassThroughAuthenticator extends Authenticator {
  async authenticate(request) {
    return new AuthenticationResult({
      isAuthenticated: true,
      principalId: request.userId,
      method: 'channel-identity',
      claims: { channel: request.channel }
    });
  }
}
