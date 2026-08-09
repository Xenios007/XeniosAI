import { ExperienceResponse } from '../contracts/experience-response.js';

export class ExperienceService {
  constructor({ channelRegistry, gateway, clock, logger, meter }) {
    this.channelRegistry = channelRegistry;
    this.gateway = gateway;
    this.clock = clock;
    this.logger = logger;
    this.meter = meter;
  }

  async handleInbound(channel, payload) {
    const adapter = this.channelRegistry.getRequired(channel);
    const request = adapter.normalizeInboundPayload(payload, { clock: this.clock });

    this.logger.info('Experience request normalized.', {
      channel,
      userId: request.userId
    });
    this.meter.incrementCounter('experience_requests_total', 1, { channel });

    return this.gateway.submitRequest(request);
  }

  renderOutbound(channel, response) {
    const adapter = this.channelRegistry.getRequired(channel);
    const outbound = response instanceof ExperienceResponse
      ? response
      : new ExperienceResponse(response);

    this.logger.info('Experience response rendered.', {
      channel
    });
    this.meter.incrementCounter('experience_responses_total', 1, { channel });

    return adapter.renderOutboundResponse(outbound);
  }
}
