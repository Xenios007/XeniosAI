import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  DATA_FLOW_ERROR_CODES,
  EXECUTION_PARTICIPANTS,
  QUERY_CHARACTERISTICS,
  QUERY_LIFECYCLE_STAGES,
  QUERY_OPTIMIZATION_STRATEGIES,
  QUERY_RESULT_STATUSES,
  QUERY_TELEMETRY_FIELDS
} from '../constants.js';
import { QueryDefinition } from '../contracts/query-definition.js';
import { QueryEnvelope } from '../contracts/query-envelope.js';
import { QueryLifecycleStage } from '../contracts/query-lifecycle-stage.js';
import { QueryValidationResult } from '../contracts/query-validation-result.js';

const CANONICAL_STAGE_DEFINITIONS = Object.freeze([
  [QUERY_LIFECYCLE_STAGES.REQUEST_RECEIVED, EXECUTION_PARTICIPANTS.EXPERIENCE_LAYER, 'Receive and normalize the informational request.'],
  [QUERY_LIFECYCLE_STAGES.INTENT_IDENTIFIED, EXECUTION_PARTICIPANTS.AI_ORCHESTRATOR, 'Identify that the request is read-only informational intent.'],
  [QUERY_LIFECYCLE_STAGES.DECISION_AUTHORIZED, EXECUTION_PARTICIPANTS.DECISION_ENGINE, 'Authorize query access before retrieval.'],
  [QUERY_LIFECYCLE_STAGES.QUERY_CONSTRUCTED, EXECUTION_PARTICIPANTS.AI_ORCHESTRATOR, 'Construct an explicit and unambiguous query contract.'],
  [QUERY_LIFECYCLE_STAGES.RETRIEVE_DATA, EXECUTION_PARTICIPANTS.BUSINESS_SERVICES, 'Retrieve data through the authoritative owning component.'],
  [QUERY_LIFECYCLE_STAGES.VALIDATE_RESULT, EXECUTION_PARTICIPANTS.BUSINESS_SERVICES, 'Validate completeness, consistency, authorization, freshness, and visibility.'],
  [QUERY_LIFECYCLE_STAGES.COMPOSE_RESPONSE, EXECUTION_PARTICIPANTS.AI_ORCHESTRATOR, 'Format, aggregate, normalize, localize, or adjust presentation without changing authoritative data.'],
  [QUERY_LIFECYCLE_STAGES.RETURN_RESULT, EXECUTION_PARTICIPANTS.EXPERIENCE_LAYER, 'Return the finalized read response to the requester.']
]);

const DEFAULT_QUERIES = Object.freeze([
  query('ReservationDetails', 'Booking Service', ['reservationId'], ['booking-store']),
  query('Availability', 'Calendar Service', ['propertyId', 'checkIn', 'checkOut'], ['calendar-store', 'availability-cache'], [QUERY_OPTIMIZATION_STRATEGIES.READ_CACHING]),
  query('PropertyInformation', 'Property Service', ['propertyId'], ['property-store', 'search-index'], [QUERY_OPTIMIZATION_STRATEGIES.SEARCH_INDEXES]),
  query('GuestProfile', 'Guest Service', ['guestId'], ['guest-store']),
  query('PricingInformation', 'Pricing Service', ['propertyId', 'checkIn', 'checkOut'], ['pricing-service']),
  query('KnowledgeSearch', 'Knowledge Service', ['query'], ['knowledge-repository', 'search-index'], [QUERY_OPTIMIZATION_STRATEGIES.SEARCH_INDEXES, QUERY_OPTIMIZATION_STRATEGIES.PAGINATION]),
  query('BookingHistory', 'Booking Service', ['guestId'], ['booking-store'], [QUERY_OPTIMIZATION_STRATEGIES.PAGINATION]),
  query('BookingSummary', 'Composition Layer', ['reservationId'], ['booking-service', 'pricing-service', 'calendar-service', 'property-service'], [], true)
]);

export class QueryFlowDescriptor {
  constructor({ queries = DEFAULT_QUERIES } = {}) {
    this.stages = Object.freeze(
      CANONICAL_STAGE_DEFINITIONS.map(([stage, owner, responsibility], index) =>
        new QueryLifecycleStage({ sequence: index + 1, stage, owner, responsibility })
      )
    );
    this.queries = new Map();

    for (const queryDefinition of queries) {
      this.registerQuery(queryDefinition);
    }
  }

  describeLifecycle() {
    return this.stages;
  }

  canonicalStageNames() {
    return Object.freeze(this.stages.map((stage) => stage.stage));
  }

  characteristics() {
    return Object.freeze(Object.values(QUERY_CHARACTERISTICS));
  }

  statuses() {
    return Object.freeze(Object.values(QUERY_RESULT_STATUSES));
  }

  optimizationStrategies() {
    return Object.freeze(Object.values(QUERY_OPTIMIZATION_STRATEGIES));
  }

  telemetryFields() {
    return Object.freeze(Object.values(QUERY_TELEMETRY_FIELDS));
  }

  listQueries() {
    return Object.freeze([...this.queries.values()]);
  }

  registerQuery(queryInput) {
    const queryDefinition = queryInput instanceof QueryDefinition
      ? queryInput
      : new QueryDefinition(queryInput);
    const validationResult = this.validateQueryDefinition(queryDefinition);

    if (!validationResult.isValid) {
      throw new PlatformError(
        DATA_FLOW_ERROR_CODES.QUERY_DEFINITION_INVALID,
        'Query definition violates ARCH-005-03.',
        { errors: validationResult.errors }
      );
    }

    this.queries.set(queryDefinition.queryName, queryDefinition);
    return this;
  }

  getStage(stage) {
    const lifecycleStage = this.stages.find((candidate) => candidate.stage === stage);

    if (!lifecycleStage) {
      throw new PlatformError(
        DATA_FLOW_ERROR_CODES.QUERY_STAGE_NOT_FOUND,
        `Query lifecycle stage is not defined: ${stage}`,
        { stage }
      );
    }

    return lifecycleStage;
  }

  getQuery(queryName) {
    return this.queries.get(queryName);
  }

  validateLifecycle(stages) {
    const errors = [];
    const actualStages = Array.isArray(stages) ? stages : [];
    const expectedStages = this.canonicalStageNames();

    if (actualStages.length !== expectedStages.length) {
      errors.push(`Query lifecycle must include ${expectedStages.length} stages in canonical order.`);
    }

    expectedStages.forEach((expectedStage, index) => {
      if (actualStages[index] !== expectedStage) {
        errors.push(`Stage ${index + 1} must be ${expectedStage}; received ${actualStages[index] ?? 'missing'}.`);
      }
    });

    return validation(errors);
  }

  assertLifecycle(stages) {
    const result = this.validateLifecycle(stages);

    if (!result.isValid) {
      throw new PlatformError(
        DATA_FLOW_ERROR_CODES.QUERY_LIFECYCLE_INVALID,
        'Query lifecycle does not match ARCH-005-03.',
        { errors: result.errors }
      );
    }

    return result;
  }

  validateQueryDefinition(queryInput) {
    const queryDefinition = queryInput instanceof QueryDefinition
      ? queryInput
      : new QueryDefinition(queryInput);
    const errors = [];

    if (!queryDefinition.queryName) {
      errors.push('Query must have a name.');
    }

    if (!queryDefinition.owningService) {
      errors.push('Query must have one authoritative owner.');
    }

    if (Array.isArray(queryDefinition.owningService)) {
      errors.push('Query ownership must not be shared across multiple services.');
    }

    if (queryDefinition.requiredParameters.length === 0) {
      errors.push('Query must define explicit required parameters.');
    }

    if (queryDefinition.dataSources.length === 0) {
      errors.push('Query must identify at least one data source.');
    }

    if (queryDefinition.readOnly !== true) {
      errors.push('Queries must be read-only and side-effect free.');
    }

    return validation(errors);
  }

  createQuery(queryInput) {
    const query = queryInput instanceof QueryEnvelope ? queryInput : new QueryEnvelope(queryInput);
    const definition = this.getQuery(query.queryName);
    const errors = [];

    if (!definition) {
      errors.push(`Query definition is not registered: ${query.queryName}.`);
    }

    if (definition && query.owningService !== definition.owningService) {
      errors.push(`Query ${query.queryName} must be owned by ${definition.owningService}.`);
    }

    if (!query.authorized) {
      errors.push('Query must pass the Decision Engine before retrieval.');
    }

    if (query.metadata.modifiesState === true || query.metadata.sideEffect === true) {
      errors.push('Query must not modify business state or trigger side effects.');
    }

    for (const parameter of definition?.requiredParameters ?? []) {
      if (query.parameters[parameter] === undefined || query.parameters[parameter] === null) {
        errors.push(`Query ${query.queryName} is missing required parameter ${parameter}.`);
      }
    }

    if (errors.length > 0) {
      throw new PlatformError(
        !query.authorized
          ? DATA_FLOW_ERROR_CODES.QUERY_AUTHORIZATION_INVALID
          : DATA_FLOW_ERROR_CODES.QUERY_DEFINITION_INVALID,
        'Query envelope violates ARCH-005-03.',
        { errors }
      );
    }

    return query;
  }

  validateResult(result, queryInput) {
    const query = queryInput instanceof QueryEnvelope ? queryInput : new QueryEnvelope(queryInput);
    const definition = this.getQuery(query.queryName);
    const errors = [];

    if (result?.owningService !== query.owningService) {
      errors.push('Query result must come from the authoritative owner.');
    }

    if (result?.metadata?.modifiedState === true || result?.metadata?.sideEffect === true) {
      errors.push('Query result indicates an unintended side effect.');
    }

    if (definition && !definition.dataSources.includes(result?.dataSource)) {
      errors.push(`Query result data source is not declared for ${query.queryName}.`);
    }

    if (result?.status && !this.statuses().includes(result.status)) {
      errors.push(`Unsupported query result status: ${result.status}.`);
    }

    if (result?.status !== QUERY_RESULT_STATUSES.SUCCESS && !result?.failureReason) {
      errors.push('Unsuccessful query results must include a failure reason.');
    }

    return validation(errors);
  }

  validateTelemetry(record) {
    const errors = [];

    for (const field of this.telemetryFields()) {
      if (field === QUERY_TELEMETRY_FIELDS.FAILURE_REASON) {
        continue;
      }

      if (record?.[field] === undefined || record?.[field] === null) {
        errors.push(`Query telemetry is missing field ${field}.`);
      }
    }

    if (record?.responseDurationMs !== undefined && record.responseDurationMs < 0) {
      errors.push('Query response duration must not be negative.');
    }

    if (record?.resultStatus && !this.statuses().includes(record.resultStatus)) {
      errors.push(`Unsupported query result status: ${record.resultStatus}.`);
    }

    if (record?.resultStatus && record.resultStatus !== QUERY_RESULT_STATUSES.SUCCESS && !record.failureReason) {
      errors.push('Unsuccessful query telemetry must include a failure reason.');
    }

    return validation(errors);
  }
}

function query(queryName, owningService, requiredParameters, dataSources, optimizationStrategies = [], aggregated = false) {
  return new QueryDefinition({
    queryName,
    owningService,
    requiredParameters,
    dataSources,
    optimizationStrategies,
    aggregated,
    readOnly: true
  });
}

function validation(errors) {
  return new QueryValidationResult({
    isValid: errors.length === 0,
    errors
  });
}
