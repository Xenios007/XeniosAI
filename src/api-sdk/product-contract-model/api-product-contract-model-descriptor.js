import { PlatformError } from '../../foundation/errors/platform-error.js';
import { ApiProductContractModelProfile } from '../contracts/api-product-contract-model-profile.js';
import { ApiSdkValidationResult } from '../contracts/api-sdk-validation-result.js';
import {
  API_ANTI_CORRUPTION_TRANSLATIONS, API_APPROVAL_ASSERTIONS, API_COMPOSITION_REQUIREMENTS,
  API_CONSUMER_PROFILE_FIELDS, API_CONTRACT_AUTHORITY_ORDER, API_CONTRACT_PACKAGE_CONTENTS,
  API_CONTRACT_QUALITY_DIMENSIONS, API_CONTRACT_RECORD_FIELDS, API_CONTRACT_SOURCE_REQUIREMENTS,
  API_CONTRACT_VALIDATION_CHECKS, API_CONTRACT_VIEW_TYPES, API_DEPENDENCY_DECLARATION_FIELDS,
  API_DERIVED_ARTIFACT_REQUIREMENTS, API_DERIVED_ARTIFACT_TYPES, API_DOCUMENTATION_SET_FIELDS,
  API_DOMAIN_RECORD_FIELDS, API_EVIDENCE_TYPES, API_EXAMPLE_GOVERNANCE_REQUIREMENTS,
  API_FIELD_MUTABILITY_CLASSES, API_FIELD_PRESENCE_STATES, API_FIELD_RECORD_FIELDS,
  API_IDENTIFIER_SEMANTICS, API_LIFECYCLE_STATES, API_LIMIT_TYPES, API_MESSAGE_RECORD_FIELDS,
  API_MESSAGE_TYPES, API_OPERATION_CLASSES, API_OPERATION_RECORD_FIELDS, API_PRODUCT_CONTRACT_MODEL_ERROR_CODE,
  API_PRODUCT_MODEL_ARCHITECTURAL_RULES, API_PRODUCT_MODEL_BOUNDARIES, API_PRODUCT_MODEL_OBJECTIVES,
  API_PRODUCT_MODEL_OPERATIONS, API_PRODUCT_RECORD_FIELDS, API_PRODUCT_REGISTRY_AUTHORITIES,
  API_PRODUCT_SCOPE_FIELDS, API_PRODUCT_SURFACE_TYPES, API_PROVIDER_RELATIONSHIP_FIELDS,
  API_REGISTRY_BOUNDARY_EXCLUSIONS, API_REVIEW_PARTICIPANTS, API_SDK_DECLARATION_FIELDS,
  API_SECURITY_PRIVACY_DECLARATION_FIELDS, API_SERVICE_COMMITMENT_TYPES,
  API_TEMPORAL_CONSISTENCY_FIELDS, API_TENANT_PROPERTY_DECLARATION_FIELDS,
  API_TRACEABILITY_LINKS, CANONICAL_API_PRODUCT_MODEL_ELEMENTS
} from '../product-contract-model-constants.js';

const METADATA = Object.freeze({
  objectives: API_PRODUCT_MODEL_OBJECTIVES,
  modelElements: CANONICAL_API_PRODUCT_MODEL_ELEMENTS,
  domainRecordFields: API_DOMAIN_RECORD_FIELDS,
  productRecordFields: API_PRODUCT_RECORD_FIELDS,
  productScopeFields: API_PRODUCT_SCOPE_FIELDS,
  surfaceTypes: API_PRODUCT_SURFACE_TYPES,
  providerRelationshipFields: API_PROVIDER_RELATIONSHIP_FIELDS,
  contractRecordFields: API_CONTRACT_RECORD_FIELDS,
  contractSourceRequirements: API_CONTRACT_SOURCE_REQUIREMENTS,
  contractAuthorityOrder: API_CONTRACT_AUTHORITY_ORDER,
  contractPackageContents: API_CONTRACT_PACKAGE_CONTENTS,
  operationClasses: API_OPERATION_CLASSES,
  operationRecordFields: API_OPERATION_RECORD_FIELDS,
  messageTypes: API_MESSAGE_TYPES,
  messageRecordFields: API_MESSAGE_RECORD_FIELDS,
  fieldRecordFields: API_FIELD_RECORD_FIELDS,
  fieldPresenceStates: API_FIELD_PRESENCE_STATES,
  fieldMutabilityClasses: API_FIELD_MUTABILITY_CLASSES,
  identifierSemantics: API_IDENTIFIER_SEMANTICS,
  tenantPropertyDeclarationFields: API_TENANT_PROPERTY_DECLARATION_FIELDS,
  securityPrivacyDeclarationFields: API_SECURITY_PRIVACY_DECLARATION_FIELDS,
  temporalConsistencyFields: API_TEMPORAL_CONSISTENCY_FIELDS,
  limitTypes: API_LIMIT_TYPES,
  serviceCommitmentTypes: API_SERVICE_COMMITMENT_TYPES,
  dependencyDeclarationFields: API_DEPENDENCY_DECLARATION_FIELDS,
  consumerProfileFields: API_CONSUMER_PROFILE_FIELDS,
  contractViewTypes: API_CONTRACT_VIEW_TYPES,
  compositionRequirements: API_COMPOSITION_REQUIREMENTS,
  antiCorruptionTranslations: API_ANTI_CORRUPTION_TRANSLATIONS,
  derivedArtifactTypes: API_DERIVED_ARTIFACT_TYPES,
  derivedArtifactRequirements: API_DERIVED_ARTIFACT_REQUIREMENTS,
  sdkDeclarationFields: API_SDK_DECLARATION_FIELDS,
  documentationSetFields: API_DOCUMENTATION_SET_FIELDS,
  exampleGovernanceRequirements: API_EXAMPLE_GOVERNANCE_REQUIREMENTS,
  registryAuthorities: API_PRODUCT_REGISTRY_AUTHORITIES,
  registryBoundaryExclusions: API_REGISTRY_BOUNDARY_EXCLUSIONS,
  lifecycleStates: API_LIFECYCLE_STATES,
  qualityDimensions: API_CONTRACT_QUALITY_DIMENSIONS,
  validationChecks: API_CONTRACT_VALIDATION_CHECKS,
  reviewParticipants: API_REVIEW_PARTICIPANTS,
  approvalAssertions: API_APPROVAL_ASSERTIONS,
  traceabilityLinks: API_TRACEABILITY_LINKS,
  evidenceTypes: API_EVIDENCE_TYPES,
  productModelOperations: API_PRODUCT_MODEL_OPERATIONS,
  architecturalRules: API_PRODUCT_MODEL_ARCHITECTURAL_RULES,
  architectureBoundaries: API_PRODUCT_MODEL_BOUNDARIES
});

const REQUIRED_TRUE = Object.freeze({
  productManagedAsProduct: 'ARCH-017-02 requires APIs to be managed as products with purpose, consumers, owners, scope, contracts, controls, commitments, docs, support, measurement, lifecycle, and feedback.',
  contractVersionedCommitment: 'ARCH-017-02 requires contracts to be versioned commitments between accountable providers and eligible consumers.',
  ownershipExplicit: 'ARCH-017-02 requires explicit accountable, technical, and operational ownership.',
  stableProductIdentity: 'ARCH-017-02 requires stable product identity across deployment, gateway, provider, environment, hostname, and protocol changes.',
  coherentProductScope: 'ARCH-017-02 requires coherent owned capability scope.',
  surfaceRestrictionsNarrowAuthority: 'ARCH-017-02 requires product-surface restrictions to narrow exposure and authority.',
  providerAuthorityPreserved: 'ARCH-017-02 requires aggregation to preserve authoritative provider ownership.',
  approvedContractSourceAuthoritative: 'ARCH-017-02 requires the approved contract source to remain authoritative.',
  contractSourceControlled: 'ARCH-017-02 requires contract source to be version controlled, reviewable, reproducible, protected, and digest identified.',
  operationIdentityStable: 'ARCH-017-02 requires stable operation identity.',
  semanticsExplicit: 'ARCH-017-02 requires explicit operation semantics.',
  messagesVersioned: 'ARCH-017-02 requires versioned message structures.',
  fieldsSemanticallyDefined: 'ARCH-017-02 requires every material field to define semantic metadata.',
  fieldPresenceDistinct: 'ARCH-017-02 requires absence, null, empty, default, unknown, and not applicable to remain distinct unless explicitly defined.',
  identifiersNotAuthority: 'ARCH-017-02 requires identifiers not to be treated as authority or eligibility proof.',
  tenantPropertyExplicit: 'ARCH-017-02 requires tenant and property scope to be explicit.',
  securityPrivacyExplicit: 'ARCH-017-02 requires security and privacy declarations.',
  limitsExplicit: 'ARCH-017-02 requires explicit limits and service commitments.',
  dependenciesDeclared: 'ARCH-017-02 requires material dependencies to be declared.',
  consumerProfilesGovernanceOnly: 'ARCH-017-02 requires consumer profiles not to replace registration or runtime authorization.',
  compositionPreservesBoundaries: 'ARCH-017-02 requires composition to preserve ownership, authority, scope, errors, freshness, completion, dependencies, and evidence.',
  derivedArtifactsTraceable: 'ARCH-017-02 requires derived artifacts to be reproducible and traceable to approved contract revisions.',
  sdkNotAuthoritative: 'ARCH-017-02 requires SDK declarations not to make SDKs authoritative over contracts.',
  documentationRevisionAligned: 'ARCH-017-02 requires documentation to identify the contract revision it describes.',
  examplesSafe: 'ARCH-017-02 requires examples to be contract-valid, fictitious, non-secret, tenant safe, property safe, and privacy safe.',
  registryDoesNotGrantAccess: 'ARCH-017-02 requires registry publication and catalog discovery not to grant runtime access.',
  contractBehaviorImmutable: 'ARCH-017-02 requires released contract behavior not to be silently mutated.',
  semanticReviewRequired: 'ARCH-017-02 requires accountable semantic review beyond syntax validation.',
  approvalDoesNotGrantConsumerAccess: 'ARCH-017-02 requires publication approval not to automatically approve every consumer for access.',
  evidenceVersionAligned: 'ARCH-017-02 requires evidence to be attributable, time bound, version aligned, access controlled, and retained.',
  productMetadataAuthorized: 'ARCH-017-02 requires registry and catalog metadata access to be classified and authorized.',
  privacyBehaviorExplicit: 'ARCH-017-02 requires personal-information behavior to be explicit.'
});

const REQUIRED_FALSE = Object.freeze({
  endpointOnlyProduct: 'ARCH-017-02 prohibits treating a reachable or documented endpoint as an API product by itself.',
  productOwnsDomainRules: 'ARCH-017-02 prohibits the API product model from absorbing domain rules or authoritative state.',
  arbitraryEndpointCollection: 'ARCH-017-02 prohibits arbitrary unrelated endpoint collections as products.',
  selfOwnedProduct: 'ARCH-017-02 prohibits an API product from being its own accountable owner.',
  runtimeAdmissionUsesUnverifiedMetadata: 'ARCH-017-02 prohibits runtime admission and authorization from relying on unverified self-declared product metadata.',
  surfaceTransfersOwnership: 'ARCH-017-02 prohibits product surfaces from transferring provider ownership.',
  aggregationObscuresProvider: 'ARCH-017-02 prohibits aggregation from obscuring authoritative provider outcomes.',
  generatedArtifactReplacesSource: 'ARCH-017-02 prohibits generated output, deployed configuration, or runtime discovery from silently replacing approved contract source.',
  observedBehaviorBecomesTruth: 'ARCH-017-02 prohibits observed undocumented provider behavior from becoming automatic contract truth.',
  routeRenameCreatesOperation: 'ARCH-017-02 prohibits route renames from unintentionally creating new business operation identities.',
  methodNameOnlySemantics: 'ARCH-017-02 prohibits operation semantics from depending solely on generated method names or transport verbs.',
  fieldNameOnlyDefinition: 'ARCH-017-02 prohibits field names alone as semantic definitions.',
  conflateAbsentNullEmpty: 'ARCH-017-02 prohibits silently conflating absence, null, empty, default, unknown, and not applicable.',
  identifierProofOfEligibility: 'ARCH-017-02 prohibits treating identifiers as proof of authority or tenant/property eligibility.',
  sharedTypesWithoutSharedMeaning: 'ARCH-017-02 prohibits shared type reuse without genuinely shared meaning and ownership.',
  registryGrantsRuntimeAccess: 'ARCH-017-02 prohibits registry publication or catalog discovery from granting runtime access.',
  sdkAuthoritativeOverContract: 'ARCH-017-02 prohibits SDKs from becoming authoritative over API contracts.',
  examplesContainSensitiveData: 'ARCH-017-02 prohibits examples, schemas, and errors from including secrets, live credentials, tenant data, property data, or personal information.',
  syntaxValidationProvesCorrectness: 'ARCH-017-02 prohibits treating syntax validation as proof of domain correctness, safe authorization, compatibility, or operational readiness.',
  approvalGrantsEveryConsumer: 'ARCH-017-02 prohibits contract publication approval from granting every consumer access.',
  silentContractMutation: 'ARCH-017-02 prohibits silent mutation of released contract behavior.',
  selectsProtocolSchemaGateway: 'ARCH-017-02 does not select one protocol, schema language, gateway, framework, runtime, registry, or code generator.',
  definesInteractionPatterns: 'ARCH-017-02 does not define detailed interaction patterns.',
  definesLifecycleVersioning: 'ARCH-017-02 does not define detailed lifecycle, versioning, compatibility, deprecation, migration, or retirement behavior.',
  definesSecurityAccess: 'ARCH-017-02 does not define detailed API security, access, and isolation enforcement.',
  definesSdkArchitecture: 'ARCH-017-02 does not define SDK architecture and distribution.',
  replacesDomainServices: 'ARCH-017-02 does not replace owning domain and platform service responsibilities.',
  replacesTenantArchitecture: 'ARCH-017-02 does not replace ARCH-018 tenant model internals.'
});

export class ApiProductContractModelDescriptor {
  objectives() { return values(METADATA.objectives); }
  modelElements() { return values(METADATA.modelElements); }
  domainRecordFields() { return values(METADATA.domainRecordFields); }
  productRecordFields() { return values(METADATA.productRecordFields); }
  productScopeFields() { return values(METADATA.productScopeFields); }
  surfaceTypes() { return values(METADATA.surfaceTypes); }
  providerRelationshipFields() { return values(METADATA.providerRelationshipFields); }
  contractRecordFields() { return values(METADATA.contractRecordFields); }
  contractSourceRequirements() { return values(METADATA.contractSourceRequirements); }
  contractAuthorityOrder() { return values(METADATA.contractAuthorityOrder); }
  contractPackageContents() { return values(METADATA.contractPackageContents); }
  operationClasses() { return values(METADATA.operationClasses); }
  operationRecordFields() { return values(METADATA.operationRecordFields); }
  messageTypes() { return values(METADATA.messageTypes); }
  messageRecordFields() { return values(METADATA.messageRecordFields); }
  fieldRecordFields() { return values(METADATA.fieldRecordFields); }
  fieldPresenceStates() { return values(METADATA.fieldPresenceStates); }
  fieldMutabilityClasses() { return values(METADATA.fieldMutabilityClasses); }
  identifierSemantics() { return values(METADATA.identifierSemantics); }
  tenantPropertyDeclarationFields() { return values(METADATA.tenantPropertyDeclarationFields); }
  securityPrivacyDeclarationFields() { return values(METADATA.securityPrivacyDeclarationFields); }
  temporalConsistencyFields() { return values(METADATA.temporalConsistencyFields); }
  limitTypes() { return values(METADATA.limitTypes); }
  serviceCommitmentTypes() { return values(METADATA.serviceCommitmentTypes); }
  dependencyDeclarationFields() { return values(METADATA.dependencyDeclarationFields); }
  consumerProfileFields() { return values(METADATA.consumerProfileFields); }
  contractViewTypes() { return values(METADATA.contractViewTypes); }
  compositionRequirements() { return values(METADATA.compositionRequirements); }
  antiCorruptionTranslations() { return values(METADATA.antiCorruptionTranslations); }
  derivedArtifactTypes() { return values(METADATA.derivedArtifactTypes); }
  derivedArtifactRequirements() { return values(METADATA.derivedArtifactRequirements); }
  sdkDeclarationFields() { return values(METADATA.sdkDeclarationFields); }
  documentationSetFields() { return values(METADATA.documentationSetFields); }
  exampleGovernanceRequirements() { return values(METADATA.exampleGovernanceRequirements); }
  registryAuthorities() { return values(METADATA.registryAuthorities); }
  registryBoundaryExclusions() { return values(METADATA.registryBoundaryExclusions); }
  lifecycleStates() { return values(METADATA.lifecycleStates); }
  qualityDimensions() { return values(METADATA.qualityDimensions); }
  validationChecks() { return values(METADATA.validationChecks); }
  reviewParticipants() { return values(METADATA.reviewParticipants); }
  approvalAssertions() { return values(METADATA.approvalAssertions); }
  traceabilityLinks() { return values(METADATA.traceabilityLinks); }
  evidenceTypes() { return values(METADATA.evidenceTypes); }
  productModelOperations() { return values(METADATA.productModelOperations); }
  architecturalRules() { return values(METADATA.architecturalRules); }
  architectureBoundaries() { return values(METADATA.architectureBoundaries); }

  validateProfile(input) {
    const profile = input instanceof ApiProductContractModelProfile ? input : new ApiProductContractModelProfile(input);
    const errors = [];
    if (!profile.profileName) errors.push('API Product and Contract Model profile must have a name.');
    for (const [key, source] of Object.entries(METADATA)) {
      for (const item of values(source)) if (!profile[key].includes(item)) errors.push(`${key} must include ${item}.`);
    }
    for (const [key, message] of Object.entries(REQUIRED_TRUE)) if (profile[key] !== true) errors.push(message);
    for (const [key, message] of Object.entries(REQUIRED_FALSE)) if (profile[key] === true) errors.push(message);
    return result(errors);
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(METADATA)) {
      if (this[key]().length !== Object.keys(source).length) {
        errors.push(`API Product and Contract Model must include documented ${key}.`);
      }
    }
    if (errors.length) throw new PlatformError(
      API_PRODUCT_CONTRACT_MODEL_ERROR_CODE,
      'API Product and Contract Model violates ARCH-017-02.',
      { errors }
    );
    return result(errors);
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
function result(errors) { return new ApiSdkValidationResult({ isValid: errors.length === 0, errors }); }
