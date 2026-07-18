import { INTEGRATION_ERROR_CODES } from '../constants.js';
import { IntegrationError } from '../errors/integration-error.js';

export class IntegrationRegistry {
  constructor(adapters = []) {
    this.adapters = new Map();
    this.capabilities = new Map();

    for (const adapter of adapters) {
      this.register(adapter);
    }
  }

  register(adapter) {
    this.adapters.set(adapter.providerType, adapter);

    for (const capability of adapter.getCapabilities()) {
      this.capabilities.set(capability.capability, adapter);
    }

    return this;
  }

  listContracts() {
    return [...this.adapters.values()].flatMap(adapter => adapter.getCapabilities());
  }

  getAdapterForCapability(capability) {
    const adapter = this.capabilities.get(capability);

    if (!adapter) {
      throw new IntegrationError(
        INTEGRATION_ERROR_CODES.ADAPTER_NOT_REGISTERED,
        `No integration adapter is registered for capability "${capability}".`
      );
    }

    return adapter;
  }
}
