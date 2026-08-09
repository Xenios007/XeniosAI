export class GatewayPort {
  async submitRequest() {
    throw new Error('GatewayPort.submitRequest must be implemented by a subclass.');
  }
}
