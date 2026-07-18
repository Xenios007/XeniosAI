import { FeatureFlagService } from './feature-flag-service.js';

export class StaticFeatureFlagService extends FeatureFlagService {
  constructor(flags = {}) {
    super();
    this.flags = { ...flags };
  }

  isEnabled(flagName) {
    return this.flags[flagName] === true;
  }
}
