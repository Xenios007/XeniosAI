import { GatewayRouter } from './gateway-router.js';

export class DefaultGatewayRouter extends GatewayRouter {
  route(request) {
    return {
      destination: 'ConversationPort',
      requestType: request.metadata.requestType ?? 'message',
      entryPoint: request.channel
    };
  }
}
