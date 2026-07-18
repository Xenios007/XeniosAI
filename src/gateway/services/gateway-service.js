import { GatewayError } from '../errors/gateway-error.js';
import { GATEWAY_ERROR_CODES } from '../constants.js';
import { AuditRecord } from '../audit/audit-record.js';
import { GatewayRequest } from '../contracts/gateway-request.js';
import { GatewayResponse } from '../contracts/gateway-response.js';

export class GatewayService {
  constructor({
    clock,
    idGenerator,
    logger,
    meter,
    authenticator,
    authorizer,
    validator,
    rateLimiter,
    router,
    conversationPort
  }) {
    this.clock = clock;
    this.idGenerator = idGenerator;
    this.logger = logger;
    this.meter = meter;
    this.authenticator = authenticator;
    this.authorizer = authorizer;
    this.validator = validator;
    this.rateLimiter = rateLimiter;
    this.router = router;
    this.conversationPort = conversationPort;
  }

  async submitRequest(experienceRequest) {
    const startedAt = this.clock.now();
    const requestId = this.idGenerator.generate();
    const correlationId = experienceRequest.metadata?.correlationId ?? this.idGenerator.generate();

    const validation = this.validator.validate(experienceRequest);
    if (!validation.isValid) {
      throw new GatewayError(
        GATEWAY_ERROR_CODES.VALIDATION_FAILED,
        'Gateway validation failed.',
        { errors: validation.errors, correlationId }
      );
    }

    const authentication = await this.authenticator.authenticate(experienceRequest);
    if (!authentication.isAuthenticated) {
      throw new GatewayError(
        GATEWAY_ERROR_CODES.AUTHENTICATION_FAILED,
        'Gateway authentication failed.',
        { correlationId, reason: authentication.failureReason }
      );
    }

    const authorization = await this.authorizer.authorize(experienceRequest, authentication);
    if (!authorization.isAuthorized) {
      throw new GatewayError(
        GATEWAY_ERROR_CODES.AUTHORIZATION_FAILED,
        'Gateway authorization failed.',
        { correlationId, reason: authorization.failureReason }
      );
    }

    const rateLimit = this.rateLimiter.check(`${experienceRequest.channel}:${experienceRequest.userId}`);
    if (!rateLimit.allowed) {
      throw new GatewayError(
        GATEWAY_ERROR_CODES.RATE_LIMIT_EXCEEDED,
        'Gateway rate limit exceeded.',
        { correlationId, retryAfterSeconds: rateLimit.retryAfterSeconds }
      );
    }

    const route = this.router.route(experienceRequest);
    if (!route?.destination) {
      throw new GatewayError(
        GATEWAY_ERROR_CODES.ROUTING_FAILED,
        'Gateway could not determine a downstream route.',
        { correlationId }
      );
    }

    const gatewayRequest = new GatewayRequest({
      requestId,
      correlationId,
      channel: experienceRequest.channel,
      userId: experienceRequest.userId,
      principalId: authentication.principalId,
      timestamp: experienceRequest.timestamp,
      locale: experienceRequest.locale,
      messageText: experienceRequest.messageText,
      attachments: experienceRequest.attachments,
      metadata: experienceRequest.metadata,
      authentication,
      authorization
    });

    const durationMs = this.clock.now().getTime() - startedAt.getTime();
    const audit = new AuditRecord({
      requestId,
      correlationId,
      timestamp: startedAt.toISOString(),
      channel: gatewayRequest.channel,
      userId: gatewayRequest.userId,
      authenticationResult: authentication,
      authorizationResult: authorization,
      validationOutcome: validation,
      rateLimitOutcome: rateLimit,
      route,
      durationMs
    });

    const auditedRequest = new GatewayRequest({
      ...gatewayRequest,
      audit
    });

    this.logger.info('Gateway request admitted.', {
      requestId,
      correlationId,
      channel: auditedRequest.channel,
      route: route.destination
    });
    this.meter.incrementCounter('gateway_requests_total', 1, { channel: auditedRequest.channel });

    const downstreamResult = await this.conversationPort.forwardRequest(auditedRequest);

    return new GatewayResponse({
      accepted: true,
      request: auditedRequest,
      route,
      metadata: {
        downstreamResult
      }
    });
  }
}
