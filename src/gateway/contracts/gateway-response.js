export class GatewayResponse {
  constructor({
    accepted,
    request,
    route,
    metadata = {}
  }) {
    this.accepted = accepted;
    this.request = request;
    this.route = route;
    this.metadata = Object.freeze({ ...metadata });
    Object.freeze(this);
  }
}
