import { ConfigurationProvider } from './configuration-provider.js';

export class EnvironmentConfigurationProvider extends ConfigurationProvider {
  constructor(environment = process.env) {
    super();
    this.environment = environment;
  }

  get(key) {
    return this.environment[key];
  }
}
