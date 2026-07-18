import { IntegrationResponse } from '../contracts/integration-response.js';
import { ProviderAdapter } from './provider-adapter.js';

export class SimulatedProviderAdapter extends ProviderAdapter {
  constructor({ providerType, capabilities = [], responses = {} }) {
    super();
    this._providerType = providerType;
    this.capabilities = Object.freeze([...capabilities]);
    this.responses = { ...responses };
  }

  get providerType() {
    return this._providerType;
  }

  getCapabilities() {
    return this.capabilities;
  }

  async invoke(request) {
    const normalizedPayload = this.responses[request.capability] ?? {
      status: 'simulated',
      payload: request.payload
    };

    return new IntegrationResponse({
      providerType: this.providerType,
      capability: request.capability,
      success: true,
      normalizedPayload,
      rawProvider: {
        simulated: true
      }
    });
  }
}
