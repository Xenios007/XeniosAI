export class OperationObserver {
  constructor({ clock, logger, meter }) {
    this.clock = clock;
    this.logger = logger;
    this.meter = meter;
  }

  async observe({ operationName, traceContext, tags = {}, work }) {
    const startedAt = this.clock.now();

    try {
      const result = await work();
      const durationMs = this.clock.now().getTime() - startedAt.getTime();

      this.logger.info('Operation completed.', {
        operationName,
        durationMs,
        correlationId: traceContext?.correlationId,
        requestId: traceContext?.requestId
      });
      this.meter.incrementCounter('operations_total', 1, { operationName, result: 'success', ...tags });
      this.meter.recordHistogram('operation_duration_ms', durationMs, { operationName, ...tags });

      return result;
    } catch (error) {
      const durationMs = this.clock.now().getTime() - startedAt.getTime();

      this.logger.error('Operation failed.', {
        operationName,
        durationMs,
        correlationId: traceContext?.correlationId,
        requestId: traceContext?.requestId,
        errorCode: error.code,
        errorMessage: error.message
      });
      this.meter.incrementCounter('operations_total', 1, { operationName, result: 'failure', ...tags });
      throw error;
    }
  }
}
