export class ProviderAdapter {
  get providerType() {
    throw new Error('ProviderAdapter.providerType must be implemented by a subclass.');
  }

  getCapabilities() {
    throw new Error('ProviderAdapter.getCapabilities must be implemented by a subclass.');
  }

  async invoke() {
    throw new Error('ProviderAdapter.invoke must be implemented by a subclass.');
  }
}
