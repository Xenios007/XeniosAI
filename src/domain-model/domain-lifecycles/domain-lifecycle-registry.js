import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  AGGREGATE_NAMES,
  DOMAIN_EVENT_NAMES,
  DOMAIN_LIFECYCLE_CHARACTERISTICS,
  DOMAIN_LIFECYCLE_NAMES,
  DOMAIN_LIFECYCLE_SEQUENCE_STEPS,
  DOMAIN_LIFECYCLE_STATES,
  DOMAIN_MODEL_ERROR_CODES,
  FUTURE_DOMAIN_LIFECYCLE_CANDIDATES
} from '../constants.js';
import { DomainLifecycleDefinition } from '../contracts/domain-lifecycle-definition.js';
import { DomainLifecycleHistory } from '../contracts/domain-lifecycle-history.js';
import { DomainLifecycleSequence } from '../contracts/domain-lifecycle-sequence.js';
import { DomainLifecycleTransition } from '../contracts/domain-lifecycle-transition.js';
import { DomainLifecycleValidationResult } from '../contracts/domain-lifecycle-validation-result.js';

const CANONICAL_SEQUENCE = Object.freeze([
  DOMAIN_LIFECYCLE_SEQUENCE_STEPS.BUSINESS_RULE_VALIDATION,
  DOMAIN_LIFECYCLE_SEQUENCE_STEPS.AGGREGATE_VALIDATION,
  DOMAIN_LIFECYCLE_SEQUENCE_STEPS.STATE_TRANSITION,
  DOMAIN_LIFECYCLE_SEQUENCE_STEPS.TRANSACTION_COMMIT,
  DOMAIN_LIFECYCLE_SEQUENCE_STEPS.DOMAIN_EVENT
]);

const DEFAULT_LIFECYCLES = Object.freeze([
  lifecycle(DOMAIN_LIFECYCLE_NAMES.RESERVATION, AGGREGATE_NAMES.RESERVATION, 'Reservation', DOMAIN_LIFECYCLE_STATES.CREATED, [
    DOMAIN_LIFECYCLE_STATES.CREATED,
    DOMAIN_LIFECYCLE_STATES.PENDING,
    DOMAIN_LIFECYCLE_STATES.CONFIRMED,
    DOMAIN_LIFECYCLE_STATES.CHECKED_IN,
    DOMAIN_LIFECYCLE_STATES.CHECKED_OUT,
    DOMAIN_LIFECYCLE_STATES.CANCELLED
  ], {
    [DOMAIN_LIFECYCLE_STATES.CREATED]: [DOMAIN_LIFECYCLE_STATES.PENDING],
    [DOMAIN_LIFECYCLE_STATES.PENDING]: [DOMAIN_LIFECYCLE_STATES.CONFIRMED, DOMAIN_LIFECYCLE_STATES.CANCELLED],
    [DOMAIN_LIFECYCLE_STATES.CONFIRMED]: [DOMAIN_LIFECYCLE_STATES.CHECKED_IN, DOMAIN_LIFECYCLE_STATES.CANCELLED],
    [DOMAIN_LIFECYCLE_STATES.CHECKED_IN]: [DOMAIN_LIFECYCLE_STATES.CHECKED_OUT],
    [DOMAIN_LIFECYCLE_STATES.CHECKED_OUT]: [],
    [DOMAIN_LIFECYCLE_STATES.CANCELLED]: []
  }, [DOMAIN_LIFECYCLE_STATES.CHECKED_OUT, DOMAIN_LIFECYCLE_STATES.CANCELLED], {
    [DOMAIN_LIFECYCLE_STATES.PENDING]: DOMAIN_EVENT_NAMES.RESERVATION_CREATED,
    [DOMAIN_LIFECYCLE_STATES.CONFIRMED]: DOMAIN_EVENT_NAMES.RESERVATION_CONFIRMED,
    [DOMAIN_LIFECYCLE_STATES.CHECKED_IN]: DOMAIN_EVENT_NAMES.RESERVATION_CHECKED_IN,
    [DOMAIN_LIFECYCLE_STATES.CHECKED_OUT]: DOMAIN_EVENT_NAMES.RESERVATION_CHECKED_OUT,
    [DOMAIN_LIFECYCLE_STATES.CANCELLED]: DOMAIN_EVENT_NAMES.RESERVATION_CANCELLED
  }),
  lifecycle(DOMAIN_LIFECYCLE_NAMES.PAYMENT, AGGREGATE_NAMES.PAYMENT, 'Payment', DOMAIN_LIFECYCLE_STATES.INITIATED, [
    DOMAIN_LIFECYCLE_STATES.INITIATED,
    DOMAIN_LIFECYCLE_STATES.AUTHORIZED,
    DOMAIN_LIFECYCLE_STATES.CAPTURED,
    DOMAIN_LIFECYCLE_STATES.SETTLED,
    DOMAIN_LIFECYCLE_STATES.FAILED,
    DOMAIN_LIFECYCLE_STATES.REFUNDED
  ], {
    [DOMAIN_LIFECYCLE_STATES.INITIATED]: [DOMAIN_LIFECYCLE_STATES.AUTHORIZED, DOMAIN_LIFECYCLE_STATES.FAILED],
    [DOMAIN_LIFECYCLE_STATES.AUTHORIZED]: [DOMAIN_LIFECYCLE_STATES.CAPTURED, DOMAIN_LIFECYCLE_STATES.FAILED],
    [DOMAIN_LIFECYCLE_STATES.CAPTURED]: [DOMAIN_LIFECYCLE_STATES.SETTLED],
    [DOMAIN_LIFECYCLE_STATES.SETTLED]: [DOMAIN_LIFECYCLE_STATES.REFUNDED],
    [DOMAIN_LIFECYCLE_STATES.FAILED]: [],
    [DOMAIN_LIFECYCLE_STATES.REFUNDED]: []
  }, [DOMAIN_LIFECYCLE_STATES.FAILED, DOMAIN_LIFECYCLE_STATES.REFUNDED], {
    [DOMAIN_LIFECYCLE_STATES.INITIATED]: DOMAIN_EVENT_NAMES.PAYMENT_INITIATED,
    [DOMAIN_LIFECYCLE_STATES.AUTHORIZED]: DOMAIN_EVENT_NAMES.PAYMENT_AUTHORIZED,
    [DOMAIN_LIFECYCLE_STATES.CAPTURED]: DOMAIN_EVENT_NAMES.PAYMENT_CAPTURED,
    [DOMAIN_LIFECYCLE_STATES.FAILED]: DOMAIN_EVENT_NAMES.PAYMENT_FAILED,
    [DOMAIN_LIFECYCLE_STATES.REFUNDED]: DOMAIN_EVENT_NAMES.PAYMENT_REFUNDED
  }),
  lifecycle(DOMAIN_LIFECYCLE_NAMES.GUEST, AGGREGATE_NAMES.GUEST, 'Guest', DOMAIN_LIFECYCLE_STATES.REGISTERED, [
    DOMAIN_LIFECYCLE_STATES.REGISTERED,
    DOMAIN_LIFECYCLE_STATES.VERIFIED,
    DOMAIN_LIFECYCLE_STATES.ACTIVE,
    DOMAIN_LIFECYCLE_STATES.ARCHIVED
  ], {
    [DOMAIN_LIFECYCLE_STATES.REGISTERED]: [DOMAIN_LIFECYCLE_STATES.VERIFIED],
    [DOMAIN_LIFECYCLE_STATES.VERIFIED]: [DOMAIN_LIFECYCLE_STATES.ACTIVE],
    [DOMAIN_LIFECYCLE_STATES.ACTIVE]: [DOMAIN_LIFECYCLE_STATES.ARCHIVED],
    [DOMAIN_LIFECYCLE_STATES.ARCHIVED]: []
  }, [DOMAIN_LIFECYCLE_STATES.ARCHIVED], {
    [DOMAIN_LIFECYCLE_STATES.REGISTERED]: DOMAIN_EVENT_NAMES.GUEST_REGISTERED,
    [DOMAIN_LIFECYCLE_STATES.ACTIVE]: DOMAIN_EVENT_NAMES.GUEST_UPDATED
  }),
  lifecycle(DOMAIN_LIFECYCLE_NAMES.PROPERTY, AGGREGATE_NAMES.PROPERTY, 'Property', DOMAIN_LIFECYCLE_STATES.REGISTERED, [
    DOMAIN_LIFECYCLE_STATES.REGISTERED,
    DOMAIN_LIFECYCLE_STATES.CONFIGURED,
    DOMAIN_LIFECYCLE_STATES.AVAILABLE,
    DOMAIN_LIFECYCLE_STATES.MAINTENANCE,
    DOMAIN_LIFECYCLE_STATES.RETIRED
  ], {
    [DOMAIN_LIFECYCLE_STATES.REGISTERED]: [DOMAIN_LIFECYCLE_STATES.CONFIGURED],
    [DOMAIN_LIFECYCLE_STATES.CONFIGURED]: [DOMAIN_LIFECYCLE_STATES.AVAILABLE],
    [DOMAIN_LIFECYCLE_STATES.AVAILABLE]: [DOMAIN_LIFECYCLE_STATES.MAINTENANCE, DOMAIN_LIFECYCLE_STATES.RETIRED],
    [DOMAIN_LIFECYCLE_STATES.MAINTENANCE]: [DOMAIN_LIFECYCLE_STATES.AVAILABLE],
    [DOMAIN_LIFECYCLE_STATES.RETIRED]: []
  }, [DOMAIN_LIFECYCLE_STATES.RETIRED], {
    [DOMAIN_LIFECYCLE_STATES.REGISTERED]: DOMAIN_EVENT_NAMES.PROPERTY_REGISTERED,
    [DOMAIN_LIFECYCLE_STATES.AVAILABLE]: DOMAIN_EVENT_NAMES.AVAILABILITY_CHANGED,
    [DOMAIN_LIFECYCLE_STATES.MAINTENANCE]: DOMAIN_EVENT_NAMES.MAINTENANCE_SCHEDULED,
    [DOMAIN_LIFECYCLE_STATES.RETIRED]: DOMAIN_EVENT_NAMES.PROPERTY_UPDATED
  }),
  lifecycle(DOMAIN_LIFECYCLE_NAMES.WORKFLOW, AGGREGATE_NAMES.WORKFLOW, 'Workflow', DOMAIN_LIFECYCLE_STATES.CREATED, [
    DOMAIN_LIFECYCLE_STATES.CREATED,
    DOMAIN_LIFECYCLE_STATES.RUNNING,
    DOMAIN_LIFECYCLE_STATES.COMPLETED,
    DOMAIN_LIFECYCLE_STATES.FAILED,
    DOMAIN_LIFECYCLE_STATES.COMPENSATED
  ], {
    [DOMAIN_LIFECYCLE_STATES.CREATED]: [DOMAIN_LIFECYCLE_STATES.RUNNING],
    [DOMAIN_LIFECYCLE_STATES.RUNNING]: [DOMAIN_LIFECYCLE_STATES.COMPLETED, DOMAIN_LIFECYCLE_STATES.FAILED],
    [DOMAIN_LIFECYCLE_STATES.FAILED]: [DOMAIN_LIFECYCLE_STATES.COMPENSATED],
    [DOMAIN_LIFECYCLE_STATES.COMPLETED]: [],
    [DOMAIN_LIFECYCLE_STATES.COMPENSATED]: []
  }, [DOMAIN_LIFECYCLE_STATES.COMPLETED, DOMAIN_LIFECYCLE_STATES.COMPENSATED], {
    [DOMAIN_LIFECYCLE_STATES.RUNNING]: DOMAIN_EVENT_NAMES.WORKFLOW_STARTED,
    [DOMAIN_LIFECYCLE_STATES.COMPLETED]: DOMAIN_EVENT_NAMES.WORKFLOW_COMPLETED,
    [DOMAIN_LIFECYCLE_STATES.FAILED]: DOMAIN_EVENT_NAMES.WORKFLOW_FAILED,
    [DOMAIN_LIFECYCLE_STATES.COMPENSATED]: DOMAIN_EVENT_NAMES.COMPENSATION_COMPLETED
  })
]);

export class DomainLifecycleRegistry {
  constructor({ lifecycles = DEFAULT_LIFECYCLES } = {}) {
    this.lifecycles = new Map();

    for (const lifecycleDefinition of lifecycles) {
      this.registerLifecycle(lifecycleDefinition);
    }
  }

  characteristics() {
    return Object.freeze(Object.values(DOMAIN_LIFECYCLE_CHARACTERISTICS));
  }

  canonicalSequence() {
    return CANONICAL_SEQUENCE;
  }

  futureCandidates() {
    return Object.freeze(Object.values(FUTURE_DOMAIN_LIFECYCLE_CANDIDATES));
  }

  listLifecycles() {
    return Object.freeze([...this.lifecycles.values()]);
  }

  registerLifecycle(lifecycleInput) {
    const lifecycleDefinition = lifecycleInput instanceof DomainLifecycleDefinition
      ? lifecycleInput
      : new DomainLifecycleDefinition(lifecycleInput);
    const result = this.validateDefinition(lifecycleDefinition);

    if (!result.isValid) {
      throw new PlatformError(
        DOMAIN_MODEL_ERROR_CODES.DOMAIN_LIFECYCLE_DEFINITION_INVALID,
        'Domain lifecycle definition violates ARCH-006-09.',
        { errors: result.errors }
      );
    }

    this.lifecycles.set(lifecycleDefinition.lifecycleName, lifecycleDefinition);
    return this;
  }

  getLifecycle(lifecycleName) {
    const lifecycleDefinition = this.lifecycles.get(lifecycleName);

    if (!lifecycleDefinition) {
      throw new PlatformError(
        DOMAIN_MODEL_ERROR_CODES.DOMAIN_LIFECYCLE_NOT_FOUND,
        `Domain Lifecycle "${lifecycleName}" is not defined.`
      );
    }

    return lifecycleDefinition;
  }

  validateDefinition(lifecycleInput) {
    const lifecycleDefinition = lifecycleInput instanceof DomainLifecycleDefinition
      ? lifecycleInput
      : new DomainLifecycleDefinition(lifecycleInput);
    const errors = [];

    if (!lifecycleDefinition.lifecycleName) errors.push('Domain Lifecycle must have a business name.');
    if (!lifecycleDefinition.aggregateName) errors.push('Domain Lifecycle must belong to one Aggregate Root.');
    if (!lifecycleDefinition.aggregateRoot) errors.push('Domain Lifecycle must identify its owning Aggregate Root.');
    if (!lifecycleDefinition.initialState) errors.push('Domain Lifecycle must define an initial state.');
    if (!lifecycleDefinition.validStates.includes(lifecycleDefinition.initialState)) errors.push('Domain Lifecycle initial state must be a valid business state.');
    if (lifecycleDefinition.validStates.length === 0) errors.push('Domain Lifecycle must define valid business states.');
    if (Object.keys(lifecycleDefinition.transitions).length === 0) errors.push('Domain Lifecycle must define legal transitions.');
    if (lifecycleDefinition.terminalStates.length === 0) errors.push('Domain Lifecycle must define terminal states.');
    if (Object.keys(lifecycleDefinition.lifecycleEvents).length === 0) errors.push('Domain Lifecycle should produce meaningful Domain Events.');
    if (lifecycleDefinition.preservesHistory !== true) errors.push('Domain Lifecycle must preserve business history.');
    if (lifecycleDefinition.technologyIndependent !== true) errors.push('Domain Lifecycle must remain technology independent.');
    if (lifecycleDefinition.externalStateMutationAllowed === true) errors.push('Only the owning Aggregate may transition its lifecycle.');
    if (lifecycleDefinition.technicalProcess === true) errors.push('Domain Lifecycle represents business evolution, not technical processing.');
    if (containsTechnicalTerm(lifecycleDefinition.lifecycleName)) errors.push('Domain Lifecycle must use ubiquitous business language.');

    for (const [fromState, toStates] of Object.entries(lifecycleDefinition.transitions)) {
      if (!lifecycleDefinition.validStates.includes(fromState)) errors.push(`Lifecycle transition source is not a valid state: ${fromState}.`);
      for (const toState of toStates) {
        if (!lifecycleDefinition.validStates.includes(toState)) errors.push(`Lifecycle transition target is not a valid state: ${toState}.`);
      }
    }

    for (const terminalState of lifecycleDefinition.terminalStates) {
      if ((lifecycleDefinition.transitions[terminalState] ?? []).length > 0) {
        errors.push(`Terminal state must prevent further business progression: ${terminalState}.`);
      }
    }

    return validation(errors);
  }

  validateTransition(transitionInput) {
    const transition = transitionInput instanceof DomainLifecycleTransition
      ? transitionInput
      : new DomainLifecycleTransition(transitionInput);
    const lifecycleDefinition = this.lifecycles.get(transition.lifecycleName);
    const errors = [];

    if (!lifecycleDefinition) errors.push(`Domain Lifecycle transition references unknown lifecycle: ${transition.lifecycleName}.`);
    if (lifecycleDefinition && transition.aggregateName !== lifecycleDefinition.aggregateName) {
      errors.push(`Domain Lifecycle transition must belong to ${lifecycleDefinition.aggregateName}.`);
    }
    if (lifecycleDefinition && transition.aggregateRoot !== lifecycleDefinition.aggregateRoot) {
      errors.push(`Only ${lifecycleDefinition.aggregateRoot} Aggregate Root may transition this lifecycle.`);
    }
    if (!transition.businessAction) errors.push('Domain Lifecycle transition must represent a meaningful business action.');
    if (!transition.domainEvent) errors.push('Successful Domain Lifecycle transition should produce a Domain Event.');
    if (lifecycleDefinition && !(lifecycleDefinition.transitions[transition.fromState] ?? []).includes(transition.toState)) {
      errors.push(`Domain Lifecycle transition from ${transition.fromState} to ${transition.toState} is not permitted.`);
    }
    if (transition.businessRulesSatisfied !== true) errors.push('Domain Lifecycle transition requires business rule validation.');
    if (transition.aggregateConsistencySatisfied !== true) errors.push('Domain Lifecycle transition requires Aggregate validation.');
    if (transition.invariantsPreserved !== true) errors.push('Domain Lifecycle transition must preserve Domain invariants.');
    if (transition.requestedByAggregateRoot !== true) errors.push('No external component may directly alter Aggregate lifecycle state.');
    if (transition.rewritesHistory === true) errors.push('Domain Lifecycle transition must not rewrite business history.');

    return validation(errors);
  }

  validateHistory(historyInput) {
    const history = historyInput instanceof DomainLifecycleHistory
      ? historyInput
      : new DomainLifecycleHistory(historyInput);
    const lifecycleDefinition = this.lifecycles.get(history.lifecycleName);
    const errors = [];

    if (!lifecycleDefinition) errors.push(`Domain Lifecycle history references unknown lifecycle: ${history.lifecycleName}.`);
    if (!history.aggregateId) errors.push('Domain Lifecycle history must identify the Aggregate business identity.');
    if (history.states.length === 0) errors.push('Domain Lifecycle history must include historical states.');
    if (history.events.length === 0) errors.push('Domain Lifecycle history must include lifecycle events.');
    if (history.preservesHistory !== true) errors.push('Historical states remain part of business knowledge.');
    if (history.rewritesHistory === true) errors.push('Domain Lifecycle history should never be rewritten.');
    if (lifecycleDefinition && history.states[0] !== lifecycleDefinition.initialState) {
      errors.push(`Domain Lifecycle history must begin with ${lifecycleDefinition.initialState}.`);
    }
    if (lifecycleDefinition) {
      for (let index = 1; index < history.states.length; index += 1) {
        const fromState = history.states[index - 1];
        const toState = history.states[index];
        if (!(lifecycleDefinition.transitions[fromState] ?? []).includes(toState)) {
          errors.push(`Domain Lifecycle history contains illegal transition ${fromState} to ${toState}.`);
        }
      }
    }

    return validation(errors);
  }

  validateSequence(sequenceInput) {
    const sequence = sequenceInput instanceof DomainLifecycleSequence
      ? sequenceInput
      : new DomainLifecycleSequence(sequenceInput);
    const errors = [];

    if (sequence.steps.length !== CANONICAL_SEQUENCE.length) {
      errors.push(`Domain Lifecycle consistency sequence must include ${CANONICAL_SEQUENCE.length} steps.`);
    }

    CANONICAL_SEQUENCE.forEach((expectedStep, index) => {
      if (sequence.steps[index] !== expectedStep) {
        errors.push(`Step ${index + 1} must be ${expectedStep}; received ${sequence.steps[index] ?? 'missing'}.`);
      }
    });

    if (sequence.rulesBeforeTransition !== true) errors.push('Business Rule Validation must occur before State Transition.');
    if (sequence.aggregateBeforeTransition !== true) errors.push('Aggregate Validation must occur before State Transition.');
    if (sequence.eventAfterCommit !== true) errors.push('Domain Events must be published after Transaction Commit.');

    return validation(errors);
  }
}

function lifecycle(lifecycleName, aggregateName, aggregateRoot, initialState, validStates, transitions, terminalStates, lifecycleEvents, invariants = []) {
  return new DomainLifecycleDefinition({
    lifecycleName,
    aggregateName,
    aggregateRoot,
    initialState,
    validStates,
    transitions,
    terminalStates,
    lifecycleEvents,
    invariants
  });
}

function validation(errors) {
  return new DomainLifecycleValidationResult({
    isValid: errors.length === 0,
    errors
  });
}

function containsTechnicalTerm(value) {
  return /\b(database|state machine library|workflow engine|ui|screen|table|row|framework|persistence)\b/i.test(String(value ?? ''));
}
