import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  API_CONTRACT_AUTHORITY_ORDER, API_CONTRACT_RECORD_FIELDS, API_CONTRACT_SOURCE_REQUIREMENTS,
  API_CONTRACT_VALIDATION_CHECKS, API_DERIVED_ARTIFACT_REQUIREMENTS, API_DERIVED_ARTIFACT_TYPES,
  API_FIELD_PRESENCE_STATES, API_FIELD_RECORD_FIELDS, API_LIMIT_TYPES, API_MESSAGE_TYPES,
  API_OPERATION_CLASSES, API_OPERATION_RECORD_FIELDS, API_PRODUCT_CONTRACT_MODEL_ERROR_CODE,
  API_PRODUCT_MODEL_ARCHITECTURAL_RULES, API_PRODUCT_MODEL_BOUNDARIES, API_PRODUCT_MODEL_OBJECTIVES,
  API_PRODUCT_MODEL_OPERATIONS, API_PRODUCT_RECORD_FIELDS, API_PRODUCT_REGISTRY_AUTHORITIES,
  API_PRODUCT_SURFACE_TYPES, API_REGISTRY_BOUNDARY_EXCLUSIONS, API_REVIEW_PARTICIPANTS,
  API_SECURITY_PRIVACY_DECLARATION_FIELDS, API_SERVICE_COMMITMENT_TYPES,
  CANONICAL_API_PRODUCT_MODEL_ELEMENTS,
  ApiProductContractModelDescriptor, ApiProductContractModelProfile, addApiSdk
} from '../../src/api-sdk/index.js';

test('ARCH-017-02 exposes product, domain, surface, provider, contract, source, and authority metadata', () => {
  const descriptor = new ApiProductContractModelDescriptor();
  assert.ok(descriptor.objectives().includes(API_PRODUCT_MODEL_OBJECTIVES.TRACEABLE_SOURCES));
  assert.ok(descriptor.modelElements().includes(CANONICAL_API_PRODUCT_MODEL_ELEMENTS.CONTRACT_VERSION));
  assert.ok(descriptor.domainRecordFields().includes('audience-eligibility'));
  assert.ok(descriptor.productRecordFields().includes(API_PRODUCT_RECORD_FIELDS.EVIDENCE_REFERENCES));
  assert.ok(descriptor.productScopeFields().includes('explicit-exclusions'));
  assert.ok(descriptor.surfaceTypes().includes(API_PRODUCT_SURFACE_TYPES.PARTNER));
  assert.ok(descriptor.providerRelationshipFields().includes('failure-ownership'));
  assert.ok(descriptor.contractRecordFields().includes(API_CONTRACT_RECORD_FIELDS.SOURCE_DIGEST));
  assert.ok(descriptor.contractSourceRequirements().includes(API_CONTRACT_SOURCE_REQUIREMENTS.IMMUTABLE_REVISION));
  assert.ok(descriptor.contractAuthorityOrder().includes(API_CONTRACT_AUTHORITY_ORDER.CONTRACT_SOURCE));
});

test('ARCH-017-02 exposes operation, message, field, tenant, privacy, limit, dependency, composition, and artifact metadata', () => {
  const descriptor = new ApiProductContractModelDescriptor();
  assert.ok(descriptor.contractPackageContents().includes('conformance-rules'));
  assert.ok(descriptor.operationClasses().includes(API_OPERATION_CLASSES.CALLBACK_REGISTRATION));
  assert.ok(descriptor.operationRecordFields().includes(API_OPERATION_RECORD_FIELDS.IDEMPOTENCY));
  assert.ok(descriptor.messageTypes().includes(API_MESSAGE_TYPES.STREAM_ITEM));
  assert.ok(descriptor.messageRecordFields().includes('correlation-and-causation'));
  assert.ok(descriptor.fieldRecordFields().includes(API_FIELD_RECORD_FIELDS.SOURCE_OF_TRUTH));
  assert.ok(descriptor.fieldPresenceStates().includes(API_FIELD_PRESENCE_STATES.PROHIBITED_FOR_CONSUMER));
  assert.ok(descriptor.fieldMutabilityClasses().includes('immutable-after-creation'));
  assert.ok(descriptor.identifierSemantics().includes('deduplication'));
  assert.ok(descriptor.tenantPropertyDeclarationFields().includes('missing-scope-behavior'));
  assert.ok(descriptor.securityPrivacyDeclarationFields().includes(API_SECURITY_PRIVACY_DECLARATION_FIELDS.SDK_CACHING_RESTRICTIONS));
  assert.ok(descriptor.temporalConsistencyFields().includes('completion-finality'));
  assert.ok(descriptor.limitTypes().includes(API_LIMIT_TYPES.CONSUMER_QUOTA));
  assert.ok(descriptor.serviceCommitmentTypes().includes(API_SERVICE_COMMITMENT_TYPES.DEPRECATION_NOTICE));
  assert.ok(descriptor.dependencyDeclarationFields().includes('degradation'));
  assert.ok(descriptor.compositionRequirements().includes('error-provenance'));
  assert.ok(descriptor.derivedArtifactTypes().includes(API_DERIVED_ARTIFACT_TYPES.TELEMETRY_MAPPINGS));
  assert.ok(descriptor.derivedArtifactRequirements().includes(API_DERIVED_ARTIFACT_REQUIREMENTS.MANUAL_DRIFT_PROTECTED));
});

test('ARCH-017-02 exposes SDK, documentation, registry, lifecycle, quality, review, approval, traceability, evidence, operation, rule, and boundary metadata', () => {
  const descriptor = new ApiProductContractModelDescriptor();
  assert.ok(descriptor.sdkDeclarationFields().includes('integrity-information'));
  assert.ok(descriptor.documentationSetFields().includes('migration-guidance'));
  assert.ok(descriptor.exampleGovernanceRequirements().includes('privacy-safe'));
  assert.ok(descriptor.registryAuthorities().includes(API_PRODUCT_REGISTRY_AUTHORITIES.CONTRACT_REFERENCES));
  assert.ok(descriptor.registryBoundaryExclusions().includes(API_REGISTRY_BOUNDARY_EXCLUSIONS.RUNTIME_AUTHORIZATION));
  assert.ok(descriptor.lifecycleStates().includes('suspended'));
  assert.ok(descriptor.qualityDimensions().includes('semantic-completeness'));
  assert.ok(descriptor.validationChecks().includes(API_CONTRACT_VALIDATION_CHECKS.SDK_GENERATION_READINESS));
  assert.ok(descriptor.reviewParticipants().includes(API_REVIEW_PARTICIPANTS.DATA_GOVERNANCE));
  assert.ok(descriptor.approvalAssertions().includes('provider-conformance-is-demonstrated'));
  assert.ok(descriptor.traceabilityLinks().includes('release-runtime-telemetry-support-and-evidence'));
  assert.ok(descriptor.evidenceTypes().includes('operational-readiness-evidence'));
  assert.ok(descriptor.productModelOperations().includes(API_PRODUCT_MODEL_OPERATIONS.RECORD_CONFORMANCE_EVIDENCE));
  assert.ok(descriptor.architecturalRules().includes(API_PRODUCT_MODEL_ARCHITECTURAL_RULES.DISCOVERY_NOT_ACCESS));
  assert.ok(descriptor.architectureBoundaries().includes(API_PRODUCT_MODEL_BOUNDARIES.LIFECYCLE_VERSIONING));
});

test('ARCH-017-02 validates complete profiles and rejects contract model shortcuts', () => {
  const descriptor = new ApiProductContractModelDescriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);

  const invalid = {
    productManagedAsProduct: false,
    contractVersionedCommitment: false,
    stableProductIdentity: false,
    approvedContractSourceAuthoritative: false,
    fieldPresenceDistinct: false,
    endpointOnlyProduct: true,
    selfOwnedProduct: true,
    generatedArtifactReplacesSource: true,
    conflateAbsentNullEmpty: true,
    registryGrantsRuntimeAccess: true,
    syntaxValidationProvesCorrectness: true,
    silentContractMutation: true,
    definesInteractionPatterns: true,
    replacesTenantArchitecture: true
  };

  const validation = descriptor.validateProfile(invalid);
  assert.equal(validation.isValid, false);
  assert.match(validation.errors.join('\n'), /must have a name/);
  assert.match(validation.errors.join('\n'), /stable-product-and-contract-identity/);
  assert.match(validation.errors.join('\n'), /api-domain/);
  assert.match(validation.errors.join('\n'), /requires APIs to be managed as products/);
  assert.match(validation.errors.join('\n'), /prohibits treating a reachable or documented endpoint/);
  assert.match(validation.errors.join('\n'), /does not define detailed interaction patterns/);
});

test('ARCH-017-02 detects incomplete product contract metadata', () => {
  class IncompleteDescriptor extends ApiProductContractModelDescriptor {
    objectives() { return []; }
  }
  assert.throws(
    () => new IncompleteDescriptor().assertArchitecture(),
    (error) => error instanceof PlatformError && error.code === API_PRODUCT_CONTRACT_MODEL_ERROR_CODE
  );
});

test('ARCH-017-02 profile is immutable and descriptor is registered', () => {
  const descriptor = addApiSdk(new ServiceCollection())
    .buildServiceProvider()
    .getRequiredService('ApiProductContractModelDescriptor');
  assert.ok(descriptor instanceof ApiProductContractModelDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
  const profile = complete(descriptor);
  assert.ok(Object.isFrozen(profile));
  assert.throws(() => profile.objectives.push('other'), TypeError);
});

function complete(descriptor) {
  const metadata = {};
  for (const key of [
    'objectives', 'modelElements', 'domainRecordFields', 'productRecordFields',
    'productScopeFields', 'surfaceTypes', 'providerRelationshipFields', 'contractRecordFields',
    'contractSourceRequirements', 'contractAuthorityOrder', 'contractPackageContents',
    'operationClasses', 'operationRecordFields', 'messageTypes', 'messageRecordFields',
    'fieldRecordFields', 'fieldPresenceStates', 'fieldMutabilityClasses', 'identifierSemantics',
    'tenantPropertyDeclarationFields', 'securityPrivacyDeclarationFields', 'temporalConsistencyFields',
    'limitTypes', 'serviceCommitmentTypes', 'dependencyDeclarationFields', 'consumerProfileFields',
    'contractViewTypes', 'compositionRequirements', 'antiCorruptionTranslations',
    'derivedArtifactTypes', 'derivedArtifactRequirements', 'sdkDeclarationFields',
    'documentationSetFields', 'exampleGovernanceRequirements', 'registryAuthorities',
    'registryBoundaryExclusions', 'lifecycleStates', 'qualityDimensions', 'validationChecks',
    'reviewParticipants', 'approvalAssertions', 'traceabilityLinks', 'evidenceTypes',
    'productModelOperations', 'architecturalRules', 'architectureBoundaries'
  ]) metadata[key] = descriptor[key]();
  return new ApiProductContractModelProfile({ profileName: 'API Product and Contract Model', ...metadata });
}
