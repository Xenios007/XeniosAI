export class AuditRecord {
  constructor({
    requestId,
    correlationId,
    timestamp,
    channel,
    userId,
    authenticationResult,
    authorizationResult,
    validationOutcome,
    rateLimitOutcome,
    route,
    durationMs
  }) {
    this.requestId = requestId;
    this.correlationId = correlationId;
    this.timestamp = timestamp;
    this.channel = channel;
    this.userId = userId;
    this.authenticationResult = authenticationResult;
    this.authorizationResult = authorizationResult;
    this.validationOutcome = validationOutcome;
    this.rateLimitOutcome = rateLimitOutcome;
    this.route = route;
    this.durationMs = durationMs;
    Object.freeze(this);
  }
}
