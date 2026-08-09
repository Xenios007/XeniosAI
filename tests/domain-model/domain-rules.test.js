import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  BOUNDED_CONTEXT_NAMES,
  DOMAIN_MODEL_ERROR_CODES,
  DOMAIN_RULE_CATEGORIES,
  DOMAIN_RULE_CHARACTERISTICS,
  DOMAIN_RULE_ENFORCERS,
  DOMAIN_RULE_NAMES,
  DOMAIN_RULE_SEQUENCE_STEPS,
  FUTURE_DOMAIN_RULE_CATEGORIES,
  DomainRuleCollaboration,
  DomainRuleDefinition,
  DomainRuleEvaluation,
  DomainRuleRegistry,
  DomainRuleSequence,
  addDomainModel
} from '../../src/domain-model/index.js';

test('domain rule registry exposes categories, characteristics, enforcers, and sequence', () => {
  const registry = new DomainRuleRegistry();

  assert.ok(registry.categories().includes(DOMAIN_RULE_CATEGORIES.INVARIANT));
  assert.ok(registry.categories().includes(DOMAIN_RULE_CATEGORIES.ELIGIBILITY));
  assert.ok(registry.characteristics().includes(DOMAIN_RULE_CHARACTERISTICS.TECHNOLOGY_INDEPENDENT));
  assert.ok(registry.enforcers().includes(DOMAIN_RULE_ENFORCERS.DOMAIN_SERVICE));
  assert.deepEqual(registry.canonicalSequence(), [
    DOMAIN_RULE_SEQUENCE_STEPS.BUSINESS_REQUEST,
    DOMAIN_RULE_SEQUENCE_STEPS.RULE_EVALUATION,
    DOMAIN_RULE_SEQUENCE_STEPS.VALIDATION,
    DOMAIN_RULE_SEQUENCE_STEPS.AGGREGATE_UPDATE,
    DOMAIN_RULE_SEQUENCE_STEPS.TRANSACTION_COMMIT,
    DOMAIN_RULE_SEQUENCE_STEPS.DOMAIN_EVENT
  ]);
});

test('domain rule registry registers documented rule ownership examples', () => {
  const registry = new DomainRuleRegistry();

  assert.equal(registry.getRule(DOMAIN_RULE_NAMES.RESERVATION_DATES_VALID).owningContext, BOUNDED_CONTEXT_NAMES.RESERVATION);
  assert.equal(registry.getRule(DOMAIN_RULE_NAMES.AVAILABILITY_NOT_DOUBLE_BOOKED).owningContext, BOUNDED_CONTEXT_NAMES.PROPERTY);
  assert.equal(registry.getRule(DOMAIN_RULE_NAMES.PRICE_CALCULATION).owningContext, BOUNDED_CONTEXT_NAMES.PRICING);
  assert.equal(registry.getRule(DOMAIN_RULE_NAMES.PAYMENT_REFUND_ELIGIBLE).owningContext, BOUNDED_CONTEXT_NAMES.PAYMENT);
  assert.equal(registry.getRule(DOMAIN_RULE_NAMES.NOTIFICATION_CHANNEL_FOLLOWS_GUEST_PREFERENCE).owningContext, BOUNDED_CONTEXT_NAMES.NOTIFICATION);
});

test('domain rule registry preserves documented rule categories and enforcement owners', () => {
  const registry = new DomainRuleRegistry();

  assert.equal(registry.getRule(DOMAIN_RULE_NAMES.CANCELLED_RESERVATION_CANNOT_CHECK_IN).category, DOMAIN_RULE_CATEGORIES.INVARIANT);
  assert.equal(registry.getRule(DOMAIN_RULE_NAMES.GUEST_EMAIL_VALID).enforcedBy, DOMAIN_RULE_ENFORCERS.VALUE_OBJECT);
  assert.equal(registry.getRule(DOMAIN_RULE_NAMES.RESERVATION_LIFECYCLE_TRANSITION_VALID).enforcedBy, DOMAIN_RULE_ENFORCERS.ENTITY);
  assert.equal(registry.getRule(DOMAIN_RULE_NAMES.PAYMENT_AUTHORIZATION_PRECEDES_SETTLEMENT).enforcedBy, DOMAIN_RULE_ENFORCERS.AGGREGATE);
  assert.equal(registry.getRule(DOMAIN_RULE_NAMES.KNOWLEDGE_CLASSIFIED).enforcementOwner, 'Knowledge Service');
});

test('domain rule registry rejects technical, duplicated, shared-ownership definitions', () => {
  assert.throws(
    () =>
      new DomainRuleRegistry({
        domainRules: [
          new DomainRuleDefinition({
            ruleName: 'Database Row Constraint',
            category: 'Technical',
            owningContext: ['Reservation', 'Payment'],
            ownerService: '',
            businessMeaning: 'database schema constraint',
            enforcementOwner: '',
            enforcedBy: 'Repository',
            appliesTo: [],
            duplicatedIn: ['Reservation', 'Payment'],
            technologyIndependent: false,
            businessUnderstandable: false,
            preservesIntegrity: false,
            technicalValidation: true,
            frameworkConstraint: true
          })
        ]
      }),
    (error) =>
      error instanceof PlatformError &&
      error.code === DOMAIN_MODEL_ERROR_CODES.DOMAIN_RULE_DEFINITION_INVALID &&
      error.details.errors.some((message) => message.includes('Unsupported Domain Rule category')) &&
      error.details.errors.some((message) => message.includes('ownership must not be shared')) &&
      error.details.errors.some((message) => message.includes('technology independent')) &&
      error.details.errors.some((message) => message.includes('duplicated')) &&
      error.details.errors.some((message) => message.includes('framework-specific'))
  );
});

test('domain rule registry validates rule evaluation before state changes and domain events', () => {
  const registry = new DomainRuleRegistry();
  const valid = registry.validateEvaluation(
    new DomainRuleEvaluation({
      ruleName: DOMAIN_RULE_NAMES.RESERVATION_OCCUPANCY_WITHIN_CAPACITY,
      evaluatedBy: 'Reservation Validation',
      owningContext: BOUNDED_CONTEXT_NAMES.RESERVATION,
      inputFacts: {
        guestCount: 3,
        capacity: 4
      }
    })
  );
  const invalid = registry.validateEvaluation({
    ruleName: DOMAIN_RULE_NAMES.PAYMENT_REFUND_ELIGIBLE,
    evaluatedBy: 'Reservation Validation',
    owningContext: BOUNDED_CONTEXT_NAMES.RESERVATION,
    inputFacts: {},
    beforeStateChange: false,
    beforeDomainEvent: false,
    ruleSatisfied: false,
    duplicatedEvaluation: true,
    technologyConcern: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /Payment Authorization/);
  assert.match(invalid.errors.join('\n'), /Payment/);
  assert.match(invalid.errors.join('\n'), /before business state changes/);
  assert.match(invalid.errors.join('\n'), /prevents the business operation/);
});

test('domain rule registry validates collaborating rules without duplicating ownership', () => {
  const registry = new DomainRuleRegistry();
  const valid = registry.validateCollaboration(
    new DomainRuleCollaboration({
      operationName: 'Create Reservation',
      participatingRules: [
        DOMAIN_RULE_NAMES.PROPERTY_EXISTS_FOR_RESERVATION,
        DOMAIN_RULE_NAMES.RESERVATION_DATES_COMPLETE,
        DOMAIN_RULE_NAMES.RESERVATION_OCCUPANCY_WITHIN_CAPACITY,
        DOMAIN_RULE_NAMES.PRICE_CALCULATION
      ],
      owningContexts: [
        BOUNDED_CONTEXT_NAMES.RESERVATION,
        BOUNDED_CONTEXT_NAMES.PROPERTY,
        BOUNDED_CONTEXT_NAMES.PRICING
      ]
    })
  );
  const invalid = registry.validateCollaboration({
    operationName: '',
    participatingRules: ['Unknown Rule'],
    owningContexts: [],
    preservesOwnership: false,
    duplicatesRule: true,
    overridesBusinessOwnership: true,
    allRulesEvaluated: false
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /business operation/);
  assert.match(invalid.errors.join('\n'), /unknown rule/);
  assert.match(invalid.errors.join('\n'), /must not duplicate rules/);
  assert.match(invalid.errors.join('\n'), /must not override business ownership/);
});

test('domain rule registry validates business consistency sequence', () => {
  const registry = new DomainRuleRegistry();
  const valid = registry.validateSequence(
    new DomainRuleSequence({
      steps: registry.canonicalSequence()
    })
  );
  const invalid = registry.validateSequence({
    steps: [
      DOMAIN_RULE_SEQUENCE_STEPS.BUSINESS_REQUEST,
      DOMAIN_RULE_SEQUENCE_STEPS.AGGREGATE_UPDATE,
      DOMAIN_RULE_SEQUENCE_STEPS.DOMAIN_EVENT
    ],
    rulesEvaluatedBeforeStateChange: false,
    rulesEvaluatedBeforeDomainEvent: false
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /6 steps/);
  assert.match(invalid.errors.join('\n'), /Rule Evaluation/);
  assert.match(invalid.errors.join('\n'), /before Aggregate updates/);
  assert.match(invalid.errors.join('\n'), /before Domain Events/);
});

test('domain rule registry reports future categories without implementing them', () => {
  const registry = new DomainRuleRegistry();

  assert.ok(registry.futureCategories().includes(FUTURE_DOMAIN_RULE_CATEGORIES.LOYALTY_POLICIES));
  assert.ok(registry.futureCategories().includes(FUTURE_DOMAIN_RULE_CATEGORIES.AI_GOVERNANCE));
  assert.throws(
    () => registry.getRule('Loyalty Policy'),
    (error) =>
      error instanceof PlatformError &&
      error.code === DOMAIN_MODEL_ERROR_CODES.DOMAIN_RULE_NOT_FOUND
  );
});

test('domain rule registry is available through DI registration', () => {
  const services = new ServiceCollection();

  addDomainModel(services);
  const provider = services.buildServiceProvider();
  const registry = provider.getRequiredService('DomainRuleRegistry');

  assert.ok(registry instanceof DomainRuleRegistry);
  assert.equal(registry.listRules().length, 21);
});
