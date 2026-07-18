import { IntegrationRequest } from '../contracts/integration-request.js';

export class IntegrationService {
  constructor({ registry, retryPolicy, circuitBreaker, logger, meter }) {
    this.registry = registry;
    this.retryPolicy = retryPolicy;
    this.circuitBreaker = circuitBreaker;
    this.logger = logger;
    this.meter = meter;
  }

  async invoke(request) {
    const integrationRequest = request instanceof IntegrationRequest
      ? request
      : new IntegrationRequest(request);
    const adapter = this.registry.getAdapterForCapability(integrationRequest.capability);

    const execution = await this.retryPolicy.execute(() =>
      this.circuitBreaker.execute(() => adapter.invoke(integrationRequest))
    );

    this.logger.info('Integration capability invoked.', {
      providerType: adapter.providerType,
      capability: integrationRequest.capability,
      success: execution.result.success,
      attempts: execution.attempts,
      correlationId: integrationRequest.correlationId
    });
    this.meter.incrementCounter('integration_invocations_total', 1, {
      providerType: adapter.providerType,
      success: String(execution.result.success)
    });

    return execution.result;
  }
}
