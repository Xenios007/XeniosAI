import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  BOUNDED_CONTEXT_NAMES,
  DOMAIN_MODEL_ERROR_CODES,
  DOMAIN_RULE_CATEGORIES,
  DOMAIN_RULE_CHARACTERISTICS,
  DOMAIN_RULE_ENFORCERS,
  DOMAIN_RULE_NAMES,
  DOMAIN_RULE_SEQUENCE_STEPS,
  FUTURE_DOMAIN_RULE_CATEGORIES
} from '../constants.js';
import { DomainRuleCollaboration } from '../contracts/domain-rule-collaboration.js';
import { DomainRuleDefinition } from '../contracts/domain-rule-definition.js';
import { DomainRuleEvaluation } from '../contracts/domain-rule-evaluation.js';
import { DomainRuleSequence } from '../contracts/domain-rule-sequence.js';
import { DomainRuleValidationResult } from '../contracts/domain-rule-validation-result.js';

const CANONICAL_SEQUENCE = Object.freeze([
  DOMAIN_RULE_SEQUENCE_STEPS.BUSINESS_REQUEST,
  DOMAIN_RULE_SEQUENCE_STEPS.RULE_EVALUATION,
  DOMAIN_RULE_SEQUENCE_STEPS.VALIDATION,
  DOMAIN_RULE_SEQUENCE_STEPS.AGGREGATE_UPDATE,
  DOMAIN_RULE_SEQUENCE_STEPS.TRANSACTION_COMMIT,
  DOMAIN_RULE_SEQUENCE_STEPS.DOMAIN_EVENT
]);

const DEFAULT_DOMAIN_RULES = Object.freeze([
  rule(DOMAIN_RULE_NAMES.RESERVATION_DATES_VALID, DOMAIN_RULE_CATEGORIES.INVARIANT, BOUNDED_CONTEXT_NAMES.RESERVATION, 'Booking Service', 'Check-in date precedes check-out date.', DOMAIN_RULE_ENFORCERS.AGGREGATE, 'Reservation', ['Reservation']),
  rule(DOMAIN_RULE_NAMES.RESERVATION_OCCUPANCY_WITHIN_CAPACITY, DOMAIN_RULE_CATEGORIES.INVARIANT, BOUNDED_CONTEXT_NAMES.RESERVATION, 'Booking Service', 'Occupancy does not exceed capacity.', DOMAIN_RULE_ENFORCERS.DOMAIN_SERVICE, 'Reservation Validation', ['Reservation', 'Guest Count', 'Property']),
  rule(DOMAIN_RULE_NAMES.CANCELLED_RESERVATION_CANNOT_CHECK_IN, DOMAIN_RULE_CATEGORIES.INVARIANT, BOUNDED_CONTEXT_NAMES.RESERVATION, 'Booking Service', 'Cancelled reservations cannot be checked in.', DOMAIN_RULE_ENFORCERS.AGGREGATE, 'Reservation', ['Reservation']),
  rule(DOMAIN_RULE_NAMES.GUEST_EMAIL_VALID, DOMAIN_RULE_CATEGORIES.VALIDATION, BOUNDED_CONTEXT_NAMES.GUEST, 'Guest Service', 'Email Address is valid.', DOMAIN_RULE_ENFORCERS.VALUE_OBJECT, 'Email Address', ['Guest', 'Email Address']),
  rule(DOMAIN_RULE_NAMES.GUEST_PHONE_SUPPORTED, DOMAIN_RULE_CATEGORIES.VALIDATION, BOUNDED_CONTEXT_NAMES.GUEST, 'Guest Service', 'Phone Number follows supported format.', DOMAIN_RULE_ENFORCERS.VALUE_OBJECT, 'Phone Number', ['Guest', 'Phone Number']),
  rule(DOMAIN_RULE_NAMES.PROPERTY_EXISTS_FOR_RESERVATION, DOMAIN_RULE_CATEGORIES.VALIDATION, BOUNDED_CONTEXT_NAMES.RESERVATION, 'Booking Service', 'Property exists before a reservation is accepted.', DOMAIN_RULE_ENFORCERS.DOMAIN_SERVICE, 'Reservation Validation', ['Reservation', 'Property']),
  rule(DOMAIN_RULE_NAMES.RESERVATION_DATES_COMPLETE, DOMAIN_RULE_CATEGORIES.VALIDATION, BOUNDED_CONTEXT_NAMES.RESERVATION, 'Booking Service', 'Reservation dates are complete.', DOMAIN_RULE_ENFORCERS.VALUE_OBJECT, 'Date Range', ['Reservation', 'Date Range']),
  rule(DOMAIN_RULE_NAMES.PAYMENT_CURRENCY_SUPPORTED, DOMAIN_RULE_CATEGORIES.VALIDATION, BOUNDED_CONTEXT_NAMES.PAYMENT, 'Payment Service', 'Currency is supported.', DOMAIN_RULE_ENFORCERS.VALUE_OBJECT, 'Currency', ['Payment', 'Currency']),
  rule(DOMAIN_RULE_NAMES.PAYMENT_AMOUNT_VALID, DOMAIN_RULE_CATEGORIES.VALIDATION, BOUNDED_CONTEXT_NAMES.PAYMENT, 'Payment Service', 'Amount is valid.', DOMAIN_RULE_ENFORCERS.VALUE_OBJECT, 'Money', ['Payment', 'Money']),
  rule(DOMAIN_RULE_NAMES.RESERVATION_LIFECYCLE_TRANSITION_VALID, DOMAIN_RULE_CATEGORIES.LIFECYCLE, BOUNDED_CONTEXT_NAMES.RESERVATION, 'Booking Service', 'Only valid Reservation state transitions may occur.', DOMAIN_RULE_ENFORCERS.ENTITY, 'Reservation', ['Reservation']),
  rule(DOMAIN_RULE_NAMES.PAYMENT_REFUND_ELIGIBLE, DOMAIN_RULE_CATEGORIES.POLICY, BOUNDED_CONTEXT_NAMES.PAYMENT, 'Payment Service', 'Refund eligibility follows financial policy.', DOMAIN_RULE_ENFORCERS.DOMAIN_SERVICE, 'Payment Authorization', ['Payment', 'Money']),
  rule(DOMAIN_RULE_NAMES.PRICE_CALCULATION, DOMAIN_RULE_CATEGORIES.CALCULATION, BOUNDED_CONTEXT_NAMES.PRICING, 'Pricing Service', 'Price calculation applies pricing policies once.', DOMAIN_RULE_ENFORCERS.DOMAIN_SERVICE, 'Pricing Calculation', ['Money', 'Percentage', 'Date Range']),
  rule(DOMAIN_RULE_NAMES.AVAILABILITY_NOT_DOUBLE_BOOKED, DOMAIN_RULE_CATEGORIES.ELIGIBILITY, BOUNDED_CONTEXT_NAMES.PROPERTY, 'Property Service', 'Property must not be double-booked.', DOMAIN_RULE_ENFORCERS.DOMAIN_SERVICE, 'Availability Evaluation', ['Property', 'Date Range']),
  rule(DOMAIN_RULE_NAMES.MAINTENANCE_BLOCKS_RESERVATION, DOMAIN_RULE_CATEGORIES.POLICY, BOUNDED_CONTEXT_NAMES.PROPERTY, 'Property Service', 'Maintenance periods block reservations.', DOMAIN_RULE_ENFORCERS.DOMAIN_SERVICE, 'Availability Evaluation', ['Property', 'Date Range']),
  rule(DOMAIN_RULE_NAMES.PAYMENT_AUTHORIZATION_PRECEDES_SETTLEMENT, DOMAIN_RULE_CATEGORIES.LIFECYCLE, BOUNDED_CONTEXT_NAMES.PAYMENT, 'Payment Service', 'Authorization precedes settlement.', DOMAIN_RULE_ENFORCERS.AGGREGATE, 'Payment', ['Payment']),
  rule(DOMAIN_RULE_NAMES.DUPLICATE_PAYMENT_PREVENTED, DOMAIN_RULE_CATEGORIES.POLICY, BOUNDED_CONTEXT_NAMES.PAYMENT, 'Payment Service', 'Duplicate payments are prevented.', DOMAIN_RULE_ENFORCERS.DOMAIN_SERVICE, 'Payment Authorization', ['Payment']),
  rule(DOMAIN_RULE_NAMES.NOTIFICATION_CHANNEL_FOLLOWS_GUEST_PREFERENCE, DOMAIN_RULE_CATEGORIES.POLICY, BOUNDED_CONTEXT_NAMES.NOTIFICATION, 'Notification Service', 'Delivery channel follows guest preference.', DOMAIN_RULE_ENFORCERS.DOMAIN_SERVICE, 'Notification Composition', ['Notification', 'Guest', 'Language']),
  rule(DOMAIN_RULE_NAMES.WORKFLOW_STEPS_EXECUTE_IN_ORDER, DOMAIN_RULE_CATEGORIES.LIFECYCLE, BOUNDED_CONTEXT_NAMES.WORKFLOW, 'Workflow Service', 'Workflow steps execute in defined order.', DOMAIN_RULE_ENFORCERS.AGGREGATE, 'Workflow', ['Workflow']),
  rule(DOMAIN_RULE_NAMES.COMPLETED_WORKFLOW_CANNOT_RESTART, DOMAIN_RULE_CATEGORIES.INVARIANT, BOUNDED_CONTEXT_NAMES.WORKFLOW, 'Workflow Service', 'Completed workflows cannot restart.', DOMAIN_RULE_ENFORCERS.AGGREGATE, 'Workflow', ['Workflow']),
  rule(DOMAIN_RULE_NAMES.KNOWLEDGE_CLASSIFIED, DOMAIN_RULE_CATEGORIES.VALIDATION, BOUNDED_CONTEXT_NAMES.KNOWLEDGE, 'Knowledge Service', 'Knowledge must be classified.', DOMAIN_RULE_ENFORCERS.DOMAIN_SERVICE, 'Knowledge Service', ['Knowledge Item']),
  rule(DOMAIN_RULE_NAMES.KNOWLEDGE_SOURCE_TRACEABLE, DOMAIN_RULE_CATEGORIES.POLICY, BOUNDED_CONTEXT_NAMES.KNOWLEDGE, 'Knowledge Service', 'Sources must be traceable.', DOMAIN_RULE_ENFORCERS.DOMAIN_SERVICE, 'Knowledge Service', ['Knowledge Item'])
]);

export class DomainRuleRegistry {
  constructor({ domainRules = DEFAULT_DOMAIN_RULES } = {}) {
    this.domainRules = new Map();

    for (const domainRule of domainRules) {
      this.registerRule(domainRule);
    }
  }

  categories() {
    return Object.freeze(Object.values(DOMAIN_RULE_CATEGORIES));
  }

  characteristics() {
    return Object.freeze(Object.values(DOMAIN_RULE_CHARACTERISTICS));
  }

  enforcers() {
    return Object.freeze(Object.values(DOMAIN_RULE_ENFORCERS));
  }

  canonicalSequence() {
    return CANONICAL_SEQUENCE;
  }

  futureCategories() {
    return Object.freeze(Object.values(FUTURE_DOMAIN_RULE_CATEGORIES));
  }

  listRules() {
    return Object.freeze([...this.domainRules.values()]);
  }

  registerRule(ruleInput) {
    const domainRule = ruleInput instanceof DomainRuleDefinition ? ruleInput : new DomainRuleDefinition(ruleInput);
    const result = this.validateDefinition(domainRule);

    if (!result.isValid) {
      throw new PlatformError(
        DOMAIN_MODEL_ERROR_CODES.DOMAIN_RULE_DEFINITION_INVALID,
        'Domain rule definition violates ARCH-006-08.',
        { errors: result.errors }
      );
    }

    this.domainRules.set(domainRule.ruleName, domainRule);
    return this;
  }

  getRule(ruleName) {
    const domainRule = this.domainRules.get(ruleName);

    if (!domainRule) {
      throw new PlatformError(
        DOMAIN_MODEL_ERROR_CODES.DOMAIN_RULE_NOT_FOUND,
        `Domain Rule "${ruleName}" is not defined.`
      );
    }

    return domainRule;
  }

  validateDefinition(ruleInput) {
    const domainRule = ruleInput instanceof DomainRuleDefinition ? ruleInput : new DomainRuleDefinition(ruleInput);
    const errors = [];

    if (!domainRule.ruleName) errors.push('Domain Rule must have a business name.');
    if (!this.categories().includes(domainRule.category)) errors.push(`Unsupported Domain Rule category: ${domainRule.category}.`);
    if (!domainRule.owningContext) errors.push('Domain Rule must be explicitly owned by one bounded context.');
    if (Array.isArray(domainRule.owningContext)) errors.push('Domain Rule ownership must not be shared.');
    if (!domainRule.ownerService) errors.push('Domain Rule must have one authoritative owner service.');
    if (!domainRule.businessMeaning) errors.push('Domain Rule must express business meaning.');
    if (!this.enforcers().includes(domainRule.enforcedBy)) errors.push(`Unsupported Domain Rule enforcer: ${domainRule.enforcedBy}.`);
    if (!domainRule.enforcementOwner) errors.push('Domain Rule must identify the enforcing domain component.');
    if (domainRule.appliesTo.length === 0) errors.push('Domain Rule must identify the domain concepts it governs.');
    if (domainRule.technologyIndependent !== true) errors.push('Domain Rules must remain technology independent.');
    if (domainRule.businessUnderstandable !== true) errors.push('Domain Rules must be understandable by business stakeholders.');
    if (domainRule.preservesIntegrity !== true) errors.push('Domain Rules must preserve domain integrity.');
    if (domainRule.technicalValidation === true) errors.push('Domain Rules must not be technical validation.');
    if (domainRule.frameworkConstraint === true) errors.push('Domain Rules must not encode framework-specific constraints.');
    if (domainRule.duplicatedIn.length > 0) errors.push('Domain Rules should not be duplicated across multiple components.');
    if (containsTechnicalTerm(domainRule.ruleName) || containsTechnicalTerm(domainRule.businessMeaning)) {
      errors.push('Domain Rules must use ubiquitous language rather than implementation logic.');
    }

    return validation(errors);
  }

  validateEvaluation(evaluationInput) {
    const evaluation = evaluationInput instanceof DomainRuleEvaluation
      ? evaluationInput
      : new DomainRuleEvaluation(evaluationInput);
    const domainRule = this.domainRules.get(evaluation.ruleName);
    const errors = [];

    if (!domainRule) errors.push(`Domain Rule evaluation references unknown rule: ${evaluation.ruleName}.`);
    if (!evaluation.evaluatedBy) errors.push('Domain Rule evaluation must identify the enforcing component.');
    if (domainRule && evaluation.evaluatedBy !== domainRule.enforcementOwner) {
      errors.push(`Domain Rule ${evaluation.ruleName} must be enforced by ${domainRule.enforcementOwner}.`);
    }
    if (domainRule && evaluation.owningContext !== domainRule.owningContext) {
      errors.push(`Domain Rule ${evaluation.ruleName} belongs to ${domainRule.owningContext}.`);
    }
    if (Object.keys(evaluation.inputFacts).length === 0) errors.push('Domain Rule evaluation must use business facts.');
    if (evaluation.beforeStateChange !== true) errors.push('Domain Rules must be evaluated before business state changes.');
    if (evaluation.beforeDomainEvent !== true) errors.push('Domain Rules must be evaluated before Domain Events are published.');
    if (evaluation.ruleSatisfied !== true) errors.push('Violation of a Domain Rule prevents the business operation from succeeding.');
    if (evaluation.duplicatedEvaluation === true) errors.push('Domain Rule evaluation should not duplicate authoritative business decisions.');
    if (evaluation.technologyConcern === true) errors.push('Domain Rule evaluation must not depend on technology concerns.');

    return validation(errors);
  }

  validateCollaboration(collaborationInput) {
    const collaboration = collaborationInput instanceof DomainRuleCollaboration
      ? collaborationInput
      : new DomainRuleCollaboration(collaborationInput);
    const errors = [];

    if (!collaboration.operationName) errors.push('Domain Rule collaboration must identify the business operation.');
    if (collaboration.participatingRules.length === 0) errors.push('Domain Rule collaboration must include participating rules.');
    if (collaboration.owningContexts.length === 0) errors.push('Domain Rule collaboration must preserve bounded-context ownership.');
    if (collaboration.preservesOwnership !== true) errors.push('Domain Rule collaboration must preserve bounded context ownership.');
    if (collaboration.duplicatesRule === true) errors.push('Domain Rule collaboration must not duplicate rules.');
    if (collaboration.overridesBusinessOwnership === true) errors.push('Domain Rule collaboration must not override business ownership.');
    if (collaboration.allRulesEvaluated !== true) errors.push('Every participating Domain Rule must be respected before state changes occur.');

    for (const ruleName of collaboration.participatingRules) {
      if (!this.domainRules.has(ruleName)) {
        errors.push(`Domain Rule collaboration references unknown rule: ${ruleName}.`);
      }
    }

    return validation(errors);
  }

  validateSequence(sequenceInput) {
    const sequence = sequenceInput instanceof DomainRuleSequence ? sequenceInput : new DomainRuleSequence(sequenceInput);
    const errors = [];

    if (sequence.steps.length !== CANONICAL_SEQUENCE.length) {
      errors.push(`Domain Rule sequence must include ${CANONICAL_SEQUENCE.length} steps.`);
    }

    CANONICAL_SEQUENCE.forEach((expectedStep, index) => {
      if (sequence.steps[index] !== expectedStep) {
        errors.push(`Step ${index + 1} must be ${expectedStep}; received ${sequence.steps[index] ?? 'missing'}.`);
      }
    });

    if (sequence.rulesEvaluatedBeforeStateChange !== true) {
      errors.push('Domain Rules must be evaluated before Aggregate updates.');
    }
    if (sequence.rulesEvaluatedBeforeDomainEvent !== true) {
      errors.push('Domain Rules must be evaluated before Domain Events are published.');
    }

    return validation(errors);
  }
}

function rule(ruleName, category, owningContext, ownerService, businessMeaning, enforcedBy, enforcementOwner, appliesTo, dependencies = []) {
  return new DomainRuleDefinition({
    ruleName,
    category,
    owningContext,
    ownerService,
    businessMeaning,
    enforcedBy,
    enforcementOwner,
    appliesTo,
    dependencies
  });
}

function validation(errors) {
  return new DomainRuleValidationResult({
    isValid: errors.length === 0,
    errors
  });
}

function containsTechnicalTerm(value) {
  return /\b(database|table|row|column|http|api|framework|orm|schema|cache|queue|regex)\b/i.test(String(value ?? ''));
}
