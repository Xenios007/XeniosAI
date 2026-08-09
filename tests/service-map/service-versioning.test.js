import test from 'node:test';
import assert from 'node:assert/strict';

import { BUSINESS_SERVICE_NAMES } from '../../src/business-services/index.js';
import { createFoundationServiceCollection, PlatformError } from '../../src/foundation/index.js';
import {
  SERVICE_COMMUNICATION_PATTERNS,
  SERVICE_MAP_ERROR_CODES,
  VERSION_CHANGE_TYPES,
  VERSIONED_ARTIFACT_TYPES,
  ServiceVersionRegistry,
  VersionChangeProposal,
  VersionedArtifactRecord,
  addServiceMap
} from '../../src/service-map/index.js';

test('service version registry covers all versioned artifact types', () => {
  const registry = new ServiceVersionRegistry();
  const types = new Set(registry.listRecords().map(record => record.artifactType));

  assert.deepEqual([...types].sort(), Object.values(VERSIONED_ARTIFACT_TYPES).sort());
});

test('service version registry validates semantic version records and deprecation metadata', () => {
  const registry = new ServiceVersionRegistry();
  const invalidVersion = registry.validateRecord(
    new VersionedArtifactRecord({
      artifactId: 'invalid.version',
      artifactType: VERSIONED_ARTIFACT_TYPES.PUBLIC_API,
      ownerServiceName: BUSINESS_SERVICE_NAMES.BOOKING,
      version: '1.0'
    })
  );
  const invalidDeprecation = registry.validateRecord(
    new VersionedArtifactRecord({
      artifactId: 'deprecated.api',
      artifactType: VERSIONED_ARTIFACT_TYPES.PUBLIC_API,
      ownerServiceName: BUSINESS_SERVICE_NAMES.BOOKING,
      version: '1.0.0',
      deprecated: true
    })
  );

  assert.equal(invalidVersion.isValid, false);
  assert.equal(invalidVersion.errors[0].code, SERVICE_MAP_ERROR_CODES.VERSION_INVALID);
  assert.equal(invalidDeprecation.isValid, false);
  assert.equal(invalidDeprecation.errors[0].code, SERVICE_MAP_ERROR_CODES.VERSION_DEPRECATION_INVALID);
});

test('service version registry validates breaking, feature, and fix version changes', () => {
  const registry = new ServiceVersionRegistry();
  const breaking = registry.validateChange(
    new VersionChangeProposal({
      artifactId: 'booking.create.command',
      currentVersion: '1.2.3',
      proposedVersion: '2.0.0',
      changeType: VERSION_CHANGE_TYPES.BREAKING,
      migrationRequired: true,
      consumersAffected: true,
      compatibilityPreserved: false,
      adrRequired: true
    })
  );
  const feature = registry.validateChange({
    artifactId: 'booking.create.command',
    currentVersion: '1.2.3',
    proposedVersion: '1.3.0',
    changeType: VERSION_CHANGE_TYPES.FEATURE,
    compatibilityPreserved: true
  });
  const fix = registry.validateChange({
    artifactId: 'booking.create.command',
    currentVersion: '1.2.3',
    proposedVersion: '1.2.4',
    changeType: VERSION_CHANGE_TYPES.FIX,
    compatibilityPreserved: true
  });

  assert.equal(breaking.isValid, true);
  assert.equal(feature.isValid, true);
  assert.equal(fix.isValid, true);
});

test('service version registry rejects silent or incorrectly classified breaking changes', () => {
  const registry = new ServiceVersionRegistry();
  const invalidBreaking = registry.validateChange({
    artifactId: 'booking.create.command',
    currentVersion: '1.2.3',
    proposedVersion: '1.3.0',
    changeType: VERSION_CHANGE_TYPES.BREAKING,
    migrationRequired: false,
    consumersAffected: false,
    compatibilityPreserved: true,
    adrRequired: false
  });

  assert.equal(invalidBreaking.isValid, false);
  assert.ok(invalidBreaking.errors.some(error => error.code === SERVICE_MAP_ERROR_CODES.VERSION_CHANGE_INVALID));
});

test('service version registry rejects duplicate records and missing records', () => {
  assert.throws(
    () =>
      new ServiceVersionRegistry({
        records: [
          new VersionedArtifactRecord({
            artifactId: 'booking.create.command',
            artifactType: VERSIONED_ARTIFACT_TYPES.COMMAND,
            ownerServiceName: BUSINESS_SERVICE_NAMES.BOOKING,
            version: '1.0.0'
          }),
          new VersionedArtifactRecord({
            artifactId: 'booking.create.command',
            artifactType: VERSIONED_ARTIFACT_TYPES.COMMAND,
            ownerServiceName: BUSINESS_SERVICE_NAMES.BOOKING,
            version: '1.0.0'
          })
        ]
      }),
    error =>
      error instanceof PlatformError &&
      error.code === SERVICE_MAP_ERROR_CODES.DUPLICATE_VERSION_RECORD
  );

  assert.throws(
    () => new ServiceVersionRegistry().getRecord('missing.artifact'),
    error =>
      error instanceof PlatformError &&
      error.code === SERVICE_MAP_ERROR_CODES.VERSION_RECORD_NOT_FOUND
  );
});

test('service version registry maps communication patterns to versioned artifact types', () => {
  const registry = new ServiceVersionRegistry();

  assert.equal(
    registry.mapCommunicationPatternToArtifactType(SERVICE_COMMUNICATION_PATTERNS.COMMAND),
    VERSIONED_ARTIFACT_TYPES.COMMAND
  );
  assert.equal(
    registry.mapCommunicationPatternToArtifactType(SERVICE_COMMUNICATION_PATTERNS.QUERY),
    VERSIONED_ARTIFACT_TYPES.QUERY
  );
});

test('service map registration exposes service version registry through dependency injection', () => {
  const services = createFoundationServiceCollection();
  addServiceMap(services);

  const provider = services.buildServiceProvider();
  const registry = provider.getRequiredService('ServiceVersionRegistry');

  assert.equal(registry.getRecord('booking.service').version, '1.0.0');
  assert.equal(registry.listByArtifactType(VERSIONED_ARTIFACT_TYPES.SERVICE).length, 10);
});
