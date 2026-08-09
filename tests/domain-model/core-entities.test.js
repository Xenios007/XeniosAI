import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  BOUNDED_CONTEXT_NAMES,
  CORE_ENTITY_CHARACTERISTICS,
  CORE_ENTITY_NAMES,
  DOMAIN_MODEL_ERROR_CODES,
  ENTITY_INTEGRITY_RULES,
  ENTITY_REFERENCE_RULES,
  CoreEntityRegistry,
  EntityDefinition,
  EntityInstance,
  EntityReference,
  EntityStateTransition,
  addDomainModel
} from '../../src/domain-model/index.js';

test('core entity registry exposes entity characteristics, reference rules, and integrity rules', () => {
  const registry = new CoreEntityRegistry();

  assert.ok(registry.characteristics().includes(CORE_ENTITY_CHARACTERISTICS.UNIQUE_IDENTITY));
  assert.ok(registry.characteristics().includes(CORE_ENTITY_CHARACTERISTICS.BUSINESS_INVARIANTS));
  assert.ok(registry.referenceRules().includes(ENTITY_REFERENCE_RULES.NO_FOREIGN_OBJECT_EMBEDDING));
  assert.ok(registry.integrityRules().includes(ENTITY_INTEGRITY_RULES.PRESERVE_IDENTITY));
});

test('core entity registry registers documented primary entities and owning contexts', () => {
  const registry = new CoreEntityRegistry();

  assert.deepEqual(registry.listEntities().map((entity) => entity.entityName), [
    CORE_ENTITY_NAMES.RESERVATION,
    CORE_ENTITY_NAMES.GUEST,
    CORE_ENTITY_NAMES.PROPERTY,
    CORE_ENTITY_NAMES.PAYMENT,
    CORE_ENTITY_NAMES.NOTIFICATION,
    CORE_ENTITY_NAMES.USER,
    CORE_ENTITY_NAMES.KNOWLEDGE_ITEM,
    CORE_ENTITY_NAMES.WORKFLOW_INSTANCE
  ]);
  assert.equal(registry.getEntity(CORE_ENTITY_NAMES.RESERVATION).owningContext, BOUNDED_CONTEXT_NAMES.RESERVATION);
  assert.equal(registry.getEntity(CORE_ENTITY_NAMES.PAYMENT).ownerService, 'Payment Service');
});

test('core entity registry preserves documented entity responsibilities and behaviors', () => {
  const registry = new CoreEntityRegistry();

  assert.ok(registry.getEntity(CORE_ENTITY_NAMES.RESERVATION).responsibilities.includes('Stay details'));
  assert.ok(registry.getEntity(CORE_ENTITY_NAMES.RESERVATION).behaviors.includes('Confirm'));
  assert.ok(registry.getEntity(CORE_ENTITY_NAMES.PAYMENT).behaviors.includes('Refund'));
  assert.ok(registry.getEntity(CORE_ENTITY_NAMES.KNOWLEDGE_ITEM).responsibilities.includes('Semantic relationships'));
  assert.ok(registry.getEntity(CORE_ENTITY_NAMES.WORKFLOW_INSTANCE).responsibilities.includes('Execution history'));
});

test('core entity registry rejects persistence-oriented or ownerless entity definitions', () => {
  assert.throws(
    () =>
      new CoreEntityRegistry({
        entities: [
          new EntityDefinition({
            entityName: 'Reservation Database Table',
            owningContext: ['Reservation', 'Payment'],
            ownerService: '',
            identityName: '',
            responsibilities: ['database row'],
            invariants: []
          })
        ]
      }),
    (error) =>
      error instanceof PlatformError &&
      error.code === DOMAIN_MODEL_ERROR_CODES.CORE_ENTITY_DEFINITION_INVALID &&
      error.details.errors.some((message) => message.includes('business concepts')) &&
      error.details.errors.some((message) => message.includes('stable business identity'))
  );
});

test('core entity registry creates immutable valid entity instances', () => {
  const registry = new CoreEntityRegistry();
  const instance = registry.createEntity(
    new EntityInstance({
      entityName: CORE_ENTITY_NAMES.RESERVATION,
      entityId: 'reservation-1',
      owningContext: BOUNDED_CONTEXT_NAMES.RESERVATION,
      ownerService: 'Booking Service',
      businessState: 'Pending',
      attributes: {
        guestId: 'guest-1',
        propertyId: 'property-1'
      }
    })
  );

  assert.equal(instance.entityId, 'reservation-1');
  assert.throws(() => {
    instance.attributes.guestId = 'changed';
  });
});

test('core entity registry rejects invalid identity, ownership, state, invariant, and persistence instances', () => {
  const registry = new CoreEntityRegistry();

  assert.throws(
    () =>
      registry.createEntity({
        entityName: CORE_ENTITY_NAMES.PAYMENT,
        entityId: '',
        owningContext: BOUNDED_CONTEXT_NAMES.RESERVATION,
        ownerService: 'Booking Service',
        businessState: 'Unknown',
        identityChanged: true,
        invariantsPreserved: false,
        persistenceStructure: true
      }),
    (error) =>
      error instanceof PlatformError &&
      error.code === DOMAIN_MODEL_ERROR_CODES.CORE_ENTITY_INSTANCE_INVALID &&
      error.details.errors.some((message) => message.includes('stable business identity')) &&
      error.details.errors.some((message) => message.includes('Payment')) &&
      error.details.errors.some((message) => message.includes('persistence structure'))
  );
});

test('core entity registry validates references through stable business identity', () => {
  const registry = new CoreEntityRegistry();
  const valid = registry.validateReference(
    new EntityReference({
      sourceEntity: CORE_ENTITY_NAMES.RESERVATION,
      targetEntity: CORE_ENTITY_NAMES.GUEST,
      referenceName: 'references Guest',
      targetIdentityName: 'Guest ID'
    })
  );
  const invalid = registry.validateReference({
    sourceEntity: CORE_ENTITY_NAMES.RESERVATION,
    targetEntity: CORE_ENTITY_NAMES.GUEST,
    referenceName: 'embeds guest',
    targetIdentityName: 'Guest Email',
    embeddedForeignObject: true,
    transfersOwnership: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /Guest ID/);
  assert.match(invalid.errors.join('\n'), /embedded objects/);
  assert.match(invalid.errors.join('\n'), /business association/);
});

test('core entity registry validates owner-controlled state transitions', () => {
  const registry = new CoreEntityRegistry();
  const valid = registry.validateStateTransition(
    new EntityStateTransition({
      entityName: CORE_ENTITY_NAMES.RESERVATION,
      fromState: 'Pending',
      toState: 'Confirmed',
      behavior: 'Confirm',
      requestedByContext: BOUNDED_CONTEXT_NAMES.RESERVATION
    })
  );
  const invalid = registry.validateStateTransition({
    entityName: CORE_ENTITY_NAMES.RESERVATION,
    fromState: 'Pending',
    toState: 'Checked Out',
    behavior: 'Refund',
    requestedByContext: BOUNDED_CONTEXT_NAMES.PAYMENT,
    invariantsPreserved: false
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /Only Reservation/);
  assert.match(invalid.errors.join('\n'), /not cohesive/);
  assert.match(invalid.errors.join('\n'), /not allowed/);
});

test('core entity registry reports future entity candidates without implementing them', () => {
  const registry = new CoreEntityRegistry();

  assert.ok(registry.futureEntityCandidates().includes('Invoice'));
  assert.ok(registry.futureEntityCandidates().includes('AI Agent'));
  assert.throws(
    () => registry.getEntity('Invoice'),
    (error) =>
      error instanceof PlatformError &&
      error.code === DOMAIN_MODEL_ERROR_CODES.CORE_ENTITY_NOT_FOUND
  );
});

test('core entity registry is available through DI registration', () => {
  const services = new ServiceCollection();

  addDomainModel(services);
  const provider = services.buildServiceProvider();
  const registry = provider.getRequiredService('CoreEntityRegistry');

  assert.ok(registry instanceof CoreEntityRegistry);
  assert.equal(registry.listEntities().length, 8);
});
