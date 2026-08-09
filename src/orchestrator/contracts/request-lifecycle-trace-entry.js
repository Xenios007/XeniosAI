export class RequestLifecycleTraceEntry {
  constructor({
    requestId,
    correlationId,
    stage,
    startedAt,
    endedAt,
    durationMs,
    inputs = {},
    outputs = {},
    errors = []
  }) {
    this.requestId = requestId;
    this.correlationId = correlationId;
    this.stage = stage;
    this.startedAt = startedAt;
    this.endedAt = endedAt;
    this.durationMs = durationMs;
    this.inputs = Object.freeze({ ...inputs });
    this.outputs = Object.freeze({ ...outputs });
    this.errors = Object.freeze([...errors]);

    Object.freeze(this);
  }
}
