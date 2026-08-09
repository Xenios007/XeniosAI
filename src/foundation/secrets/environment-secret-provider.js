import { SecretProvider } from './secret-provider.js';

export class EnvironmentSecretProvider extends SecretProvider {
  constructor(environment = process.env) {
    super();
    this.environment = environment;
  }

  getSecret(key) {
    return this.environment[key];
  }
}
