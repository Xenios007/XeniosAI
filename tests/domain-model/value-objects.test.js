import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  DOMAIN_MODEL_ERROR_CODES,
  VALUE_OBJECT_CHARACTERISTICS,
  VALUE_OBJECT_FUTURE_CANDIDATES,
  VALUE_OBJECT_NAMES,
  VALUE_OBJECT_OWNERSHIP_RULES,
  ValueObjectDefinition,
  ValueObjectInstance,
  ValueObjectRegistry,
  addDomainModel
} from '../../src/domain-model/index.js';

test('value object registry exposes characteristics, ownership rules, and future candidates', () => {
  const registry = new ValueObjectRegistry();

  assert.ok(registry.characteristics().includes(VALUE_OBJECT_CHARACTERISTICS.IMMUTABLE));
  assert.ok(registry.characteristics().includes(VALUE_OBJECT_CHARACTERISTICS.COMPARED_BY_VALUE));
  assert.ok(registry.ownershipRules().includes(VALUE_OBJECT_OWNERSHIP_RULES.NO_INDEPENDENT_LIFECYCLE));
  assert.ok(registry.futureCandidates().includes(VALUE_OBJECT_FUTURE_CANDIDATES.AI_CONFIDENCE_SCORE));
});

test('value object registry registers documented common value objects', () => {
  const registry = new ValueObjectRegistry();

  assert.deepEqual(registry.listDefinitions().map((definition) => definition.valueObjectName), [
    VALUE_OBJECT_NAMES.MONEY,
    VALUE_OBJECT_NAMES.CURRENCY,
    VALUE_OBJECT_NAMES.DATE_RANGE,
    VALUE_OBJECT_NAMES.EMAIL_ADDRESS,
    VALUE_OBJECT_NAMES.PHONE_NUMBER,
    VALUE_OBJECT_NAMES.ADDRESS,
    VALUE_OBJECT_NAMES.TIME_ZONE,
    VALUE_OBJECT_NAMES.GUEST_COUNT,
    VALUE_OBJECT_NAMES.COORDINATES,
    VALUE_OBJECT_NAMES.DURATION,
    VALUE_OBJECT_NAMES.PERCENTAGE,
    VALUE_OBJECT_NAMES.LANGUAGE
  ]);
});

test('value object registry preserves documented responsibilities and reuse', () => {
  const registry = new ValueObjectRegistry();

  assert.ok(registry.getDefinition(VALUE_OBJECT_NAMES.MONEY).behaviors.includes('Add'));
  assert.ok(registry.getDefinition(VALUE_OBJECT_NAMES.DATE_RANGE).behaviors.includes('Overlaps'));
  assert.ok(registry.getDefinition(VALUE_OBJECT_NAMES.COORDINATES).behaviors.includes('Calculate Distance'));
  assert.ok(registry.getDefinition(VALUE_OBJECT_NAMES.MONEY).reusableByEntities.includes('Payment'));
});

test('value object registry rejects definitions with identity, mutability, or persistence concerns', () => {
  assert.throws(
    () =>
      new ValueObjectRegistry({
        valueObjects: [
          new ValueObjectDefinition({
            valueObjectName: 'Invalid Value',
            purpose: '',
            attributes: [],
            validationRules: [],
            hasIdentity: true,
            immutable: false,
            comparedByValue: false,
            persistenceConcern: true
          })
        ]
      }),
    (error) =>
      error instanceof PlatformError &&
      error.code === DOMAIN_MODEL_ERROR_CODES.VALUE_OBJECT_DEFINITION_INVALID &&
      error.details.errors.some((message) => message.includes('no independent identity')) &&
      error.details.errors.some((message) => message.includes('immutable')) &&
      error.details.errors.some((message) => message.includes('persistence'))
  );
});

test('value object registry creates immutable valid value instances', () => {
  const registry = new ValueObjectRegistry();
  const money = registry.createValue(
    new ValueObjectInstance({
      valueObjectName: VALUE_OBJECT_NAMES.MONEY,
      ownerEntity: 'Payment',
      values: {
        amount: 1500,
        currency: 'PHP',
        precision: 2
      }
    })
  );

  assert.equal(money.values.currency, 'PHP');
  assert.throws(() => {
    money.values.amount = 1;
  });
});

test('value object registry validates business rules inside value objects', () => {
  const registry = new ValueObjectRegistry();

  assert.throws(
    () =>
      registry.createValue({
        valueObjectName: VALUE_OBJECT_NAMES.DATE_RANGE,
        ownerEntity: 'Reservation',
        values: {
          startDate: '2026-08-03',
          endDate: '2026-08-01'
        }
      }),
    (error) =>
      error instanceof PlatformError &&
      error.code === DOMAIN_MODEL_ERROR_CODES.VALUE_OBJECT_INSTANCE_INVALID &&
      error.details.errors.some((message) => message.includes('start date'))
  );

  assert.throws(
    () =>
      registry.createValue({
        valueObjectName: VALUE_OBJECT_NAMES.EMAIL_ADDRESS,
        ownerEntity: 'Guest',
        values: { address: 'invalid-email' }
      }),
    (error) =>
      error instanceof PlatformError &&
      error.code === DOMAIN_MODEL_ERROR_CODES.VALUE_OBJECT_INSTANCE_INVALID &&
      error.details.errors.some((message) => message.includes('valid format'))
  );
});

test('value object registry rejects independent lifecycle, identity, and mutable instances', () => {
  const registry = new ValueObjectRegistry();

  assert.throws(
    () =>
      registry.createValue({
        valueObjectName: VALUE_OBJECT_NAMES.MONEY,
        ownerEntity: '',
        identity: 'money-1',
        mutable: true,
        lifecycleIndependent: true,
        values: {
          amount: -1,
          currency: '',
          precision: 2
        }
      }),
    (error) =>
      error instanceof PlatformError &&
      error.code === DOMAIN_MODEL_ERROR_CODES.VALUE_OBJECT_INSTANCE_INVALID &&
      error.details.errors.some((message) => message.includes('containing Entity')) &&
      error.details.errors.some((message) => message.includes('independent identity')) &&
      error.details.errors.some((message) => message.includes('replaced rather than mutated'))
  );
});

test('value object registry compares equality by business value only', () => {
  const registry = new ValueObjectRegistry();
  const first = registry.createValue({
    valueObjectName: VALUE_OBJECT_NAMES.MONEY,
    ownerEntity: 'Payment',
    values: {
      amount: 1500,
      currency: 'PHP',
      precision: 2
    }
  });
  const second = registry.createValue({
    valueObjectName: VALUE_OBJECT_NAMES.MONEY,
    ownerEntity: 'Reservation',
    values: {
      currency: 'PHP',
      precision: 2,
      amount: 1500
    }
  });
  const different = registry.createValue({
    valueObjectName: VALUE_OBJECT_NAMES.MONEY,
    ownerEntity: 'Payment',
    values: {
      amount: 1200,
      currency: 'PHP',
      precision: 2
    }
  });

  assert.equal(registry.equals(first, second), true);
  assert.equal(registry.equals(first, different), false);
});

test('value object registry reports unknown value objects without inventing them', () => {
  const registry = new ValueObjectRegistry();

  assert.throws(
    () => registry.getDefinition('Tax Rate'),
    (error) =>
      error instanceof PlatformError &&
      error.code === DOMAIN_MODEL_ERROR_CODES.VALUE_OBJECT_NOT_FOUND
  );
});

test('value object registry is available through DI registration', () => {
  const services = new ServiceCollection();

  addDomainModel(services);
  const provider = services.buildServiceProvider();
  const registry = provider.getRequiredService('ValueObjectRegistry');

  assert.ok(registry instanceof ValueObjectRegistry);
  assert.equal(registry.listDefinitions().length, 12);
});
