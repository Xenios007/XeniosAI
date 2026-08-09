import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  AGGREGATE_COLLABORATION_MECHANISMS,
  AGGREGATE_NAMES,
  AGGREGATE_PRINCIPLES,
  AGGREGATE_REFERENCE_RULES,
  BOUNDED_CONTEXT_NAMES,
  DOMAIN_MODEL_ERROR_CODES,
  FUTURE_AGGREGATE_CANDIDATES
} from '../constants.js';
import { AggregateDefinition } from '../contracts/aggregate-definition.js';
import { AggregateInvariantCheck } from '../contracts/aggregate-invariant-check.js';
import { AggregateReference } from '../contracts/aggregate-reference.js';
import { AggregateTransactionScope } from '../contracts/aggregate-transaction-scope.js';
import { AggregateValidationResult } from '../contracts/aggregate-validation-result.js';

const DEFAULT_AGGREGATES = Object.freeze([
  aggregate(AGGREGATE_NAMES.RESERVATION, BOUNDED_CONTEXT_NAMES.RESERVATION, 'Booking Service', 'Reservation', ['Reservation Line', 'Reservation Timeline', 'Pricing Snapshot'], ['Date Range', 'Money', 'Guest Count'], [
    'Reservation dates are valid',
    'Capacity is respected',
    'Status transitions are legal',
    'Required information is complete'
  ], ['Created', 'Confirmed', 'Checked In', 'Checked Out', 'Cancelled'], ['Guest ID', 'Property ID', 'Payment ID']),
  aggregate(AGGREGATE_NAMES.GUEST, BOUNDED_CONTEXT_NAMES.GUEST, 'Guest Service', 'Guest', [], ['Contact Information', 'Communication Preferences', 'Address'], [
    'Identity remains unique',
    'Contact information is valid',
    'Preferences remain internally consistent'
  ]),
  aggregate(AGGREGATE_NAMES.PROPERTY, BOUNDED_CONTEXT_NAMES.PROPERTY, 'Property Service', 'Property', [], ['Capacity', 'Amenities', 'Address', 'Coordinates'], [
    'Capacity is positive',
    'Property remains operationally valid',
    'Configuration satisfies platform policies'
  ]),
  aggregate(AGGREGATE_NAMES.PAYMENT, BOUNDED_CONTEXT_NAMES.PAYMENT, 'Payment Service', 'Payment', [], ['Money', 'Currency'], [
    'Amount cannot become invalid',
    'Payment lifecycle is respected',
    'Refunds cannot exceed settled value'
  ], ['Pending', 'Authorized', 'Paid', 'Refunded', 'Failed'], ['Reservation ID']),
  aggregate(AGGREGATE_NAMES.WORKFLOW, BOUNDED_CONTEXT_NAMES.WORKFLOW, 'Workflow Service', 'Workflow Instance', [], ['Current Step', 'Progress', 'Compensation Information', 'Correlation Data'], [
    'Workflow coordinates execution without owning business data'
  ], ['Created', 'Running', 'Completed', 'Failed', 'Cancelled'], ['Reservation ID', 'Payment ID'])
]);

export class AggregateRegistry {
  constructor({ aggregates = DEFAULT_AGGREGATES } = {}) {
    this.aggregates = new Map();

    for (const aggregateDefinition of aggregates) {
      this.registerAggregate(aggregateDefinition);
    }
  }

  principles() {
    return Object.freeze(Object.values(AGGREGATE_PRINCIPLES));
  }

  referenceRules() {
    return Object.freeze(Object.values(AGGREGATE_REFERENCE_RULES));
  }

  collaborationMechanisms() {
    return Object.freeze(Object.values(AGGREGATE_COLLABORATION_MECHANISMS));
  }

  futureCandidates() {
    return Object.freeze(Object.values(FUTURE_AGGREGATE_CANDIDATES));
  }

  listAggregates() {
    return Object.freeze([...this.aggregates.values()]);
  }

  registerAggregate(aggregateInput) {
    const aggregateDefinition = aggregateInput instanceof AggregateDefinition
      ? aggregateInput
      : new AggregateDefinition(aggregateInput);
    const result = this.validateDefinition(aggregateDefinition);

    if (!result.isValid) {
      throw new PlatformError(
        DOMAIN_MODEL_ERROR_CODES.AGGREGATE_DEFINITION_INVALID,
        'Aggregate definition violates ARCH-006-05.',
        { errors: result.errors }
      );
    }

    this.aggregates.set(aggregateDefinition.aggregateName, aggregateDefinition);
    return this;
  }

  getAggregate(aggregateName) {
    const aggregateDefinition = this.aggregates.get(aggregateName);

    if (!aggregateDefinition) {
      throw new PlatformError(
        DOMAIN_MODEL_ERROR_CODES.AGGREGATE_NOT_FOUND,
        `Aggregate "${aggregateName}" is not defined.`
      );
    }

    return aggregateDefinition;
  }

  validateDefinition(aggregateInput) {
    const aggregateDefinition = aggregateInput instanceof AggregateDefinition
      ? aggregateInput
      : new AggregateDefinition(aggregateInput);
    const errors = [];

    if (!aggregateDefinition.aggregateName) errors.push('Aggregate must have a business name.');
    if (!aggregateDefinition.owningContext) errors.push('Aggregate must belong entirely to one bounded context.');
    if (Array.isArray(aggregateDefinition.owningContext) || aggregateDefinition.sharedOwnership) errors.push('Aggregate ownership must never be shared.');
    if (!aggregateDefinition.ownerService) errors.push('Aggregate must have one owner service.');
    if (!aggregateDefinition.aggregateRoot) errors.push('Aggregate must have one Aggregate Root.');
    if (aggregateDefinition.invariants.length === 0) errors.push('Aggregate must protect business invariants.');
    if (aggregateDefinition.containsExternalAggregateRoot === true) errors.push('Aggregates should never directly contain other Aggregate Roots.');
    if (aggregateDefinition.persistenceModel === true) errors.push('Aggregates define consistency, not database design.');

    return validation(errors);
  }

  validateReference(referenceInput) {
    const reference = referenceInput instanceof AggregateReference ? referenceInput : new AggregateReference(referenceInput);
    const source = this.aggregates.get(reference.sourceAggregate);
    const target = this.aggregates.get(reference.targetAggregate);
    const errors = [];

    if (!source) errors.push(`Aggregate reference source is not registered: ${reference.sourceAggregate}.`);
    if (!target) errors.push(`Aggregate reference target is not registered: ${reference.targetAggregate}.`);
    if (!reference.referenceName) errors.push('Aggregate reference must describe the business association.');
    if (!reference.targetIdentity) errors.push('Aggregate reference must use target business identity.');
    if (reference.directObjectReference === true) errors.push('Aggregates reference one another by identity, not direct object reference.');
    if (reference.containsTargetRoot === true) errors.push('Aggregates must not directly contain other Aggregate Roots.');
    if (reference.transfersOwnership === true) errors.push('Aggregate relationships express collaboration rather than ownership transfer.');

    return validation(errors);
  }

  validateTransactionScope(scopeInput) {
    const scope = scopeInput instanceof AggregateTransactionScope
      ? scopeInput
      : new AggregateTransactionScope(scopeInput);
    const aggregateDefinition = this.aggregates.get(scope.aggregateName);
    const errors = [];

    if (!scope.transactionName) errors.push('Aggregate transaction scope must identify the business transaction.');
    if (!aggregateDefinition) errors.push(`Aggregate transaction scope references unknown aggregate: ${scope.aggregateName}.`);
    if (scope.modifiedAggregates.length !== 1 || scope.modifiedAggregates[0] !== scope.aggregateName) {
      errors.push('A transaction should normally modify only one Aggregate.');
    }
    if (scope.modifiedThroughRoot !== true) errors.push('Aggregate modifications must occur through the Aggregate Root.');
    if (scope.invariantsPreserved !== true) errors.push('Aggregate transaction must preserve business invariants.');
    if (scope.sharedTransaction === true) errors.push('Cross-Aggregate processes must not rely on shared transactions.');

    for (const mechanism of scope.crossAggregateCoordination) {
      if (!this.collaborationMechanisms().includes(mechanism)) {
        errors.push(`Unsupported aggregate collaboration mechanism: ${mechanism}.`);
      }
    }

    return validation(errors);
  }

  validateInvariant(checkInput) {
    const check = checkInput instanceof AggregateInvariantCheck
      ? checkInput
      : new AggregateInvariantCheck(checkInput);
    const aggregateDefinition = this.aggregates.get(check.aggregateName);
    const errors = [];

    if (!aggregateDefinition) errors.push(`Aggregate invariant references unknown aggregate: ${check.aggregateName}.`);
    if (!check.invariant) errors.push('Aggregate invariant check must identify an invariant.');
    if (aggregateDefinition && check.aggregateRoot !== aggregateDefinition.aggregateRoot) {
      errors.push(`Aggregate invariant for ${check.aggregateName} must be enforced by ${aggregateDefinition.aggregateRoot}.`);
    }
    if (check.checkedByRoot !== true) errors.push('Aggregate Root must enforce invariants.');
    if (check.preserved !== true) errors.push('Aggregate invariant must be preserved.');

    return validation(errors);
  }
}

function aggregate(aggregateName, owningContext, ownerService, aggregateRoot, internalEntities, valueObjects, invariants, lifecycleStates = [], externalReferences = []) {
  return new AggregateDefinition({
    aggregateName,
    owningContext,
    ownerService,
    aggregateRoot,
    internalEntities,
    valueObjects,
    businessRules: invariants,
    invariants,
    lifecycleStates,
    externalReferences
  });
}

function validation(errors) {
  return new AggregateValidationResult({
    isValid: errors.length === 0,
    errors
  });
}
