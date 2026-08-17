import { PlatformError } from '../../foundation/errors/platform-error.js';
import { ApiSecurityAccessIsolationProfile } from '../contracts/api-security-access-isolation-profile.js';
import { ApiSdkValidationResult } from '../contracts/api-sdk-validation-result.js';
import {
  API_ABUSE_BUDGET_CONTROLS, API_ACCESS_INTERSECTION_FACTORS, API_AUTHENTICATION_CLASSES,
  API_AUTHORIZATION_DECISION_FIELDS, API_AUTOMATION_ACCESS_CONTROLS, API_CREDENTIAL_CLASSES,
  API_CREDENTIAL_REQUIREMENTS, API_DATA_CLASSIFICATIONS, API_DELEGATION_RECORD_FIELDS,
  API_GATEWAY_AUTHORIZATION_CONTROLS, API_IDENTITY_CONTEXT_FIELDS, API_IDENTITY_DOMAINS,
  API_PRIVILEGED_ACCESS_CONTROLS, API_PROPERTY_ISOLATION_PROHIBITIONS,
  API_PROVIDER_AUTHORIZATION_CONTROLS, API_SECURITY_ACCESS_ISOLATION_ERROR_CODE,
  API_SECURITY_ARCHITECTURAL_RULES, API_SECURITY_BOUNDARIES, API_SECURITY_OBJECTIVES,
  API_SECURITY_TEST_TYPES, API_SURFACE_SECURITY_CONTROLS, API_TENANT_ISOLATION_PATHS,
  API_VALIDATION_CONTROL_TYPES
} from '../security-access-isolation-constants.js';

const METADATA = Object.freeze({
  objectives: API_SECURITY_OBJECTIVES,
  identityDomains: API_IDENTITY_DOMAINS,
  identityContextFields: API_IDENTITY_CONTEXT_FIELDS,
  authenticationClasses: API_AUTHENTICATION_CLASSES,
  credentialClasses: API_CREDENTIAL_CLASSES,
  credentialRequirements: API_CREDENTIAL_REQUIREMENTS,
  authorizationDecisionFields: API_AUTHORIZATION_DECISION_FIELDS,
  accessIntersectionFactors: API_ACCESS_INTERSECTION_FACTORS,
  gatewayAuthorizationControls: API_GATEWAY_AUTHORIZATION_CONTROLS,
  providerAuthorizationControls: API_PROVIDER_AUTHORIZATION_CONTROLS,
  delegationRecordFields: API_DELEGATION_RECORD_FIELDS,
  tenantIsolationPaths: API_TENANT_ISOLATION_PATHS,
  propertyIsolationProhibitions: API_PROPERTY_ISOLATION_PROHIBITIONS,
  dataClassifications: API_DATA_CLASSIFICATIONS,
  validationControlTypes: API_VALIDATION_CONTROL_TYPES,
  surfaceSecurityControls: API_SURFACE_SECURITY_CONTROLS,
  automationAccessControls: API_AUTOMATION_ACCESS_CONTROLS,
  privilegedAccessControls: API_PRIVILEGED_ACCESS_CONTROLS,
  abuseBudgetControls: API_ABUSE_BUDGET_CONTROLS,
  securityTestTypes: API_SECURITY_TEST_TYPES,
  architecturalRules: API_SECURITY_ARCHITECTURAL_RULES,
  architectureBoundaries: API_SECURITY_BOUNDARIES
});

const REQUIRED_TRUE = Object.freeze({
  everyInteractionTrustBoundary: 'ARCH-017-05 requires every API interaction to be treated as a trust-boundary crossing.',
  failSafeMissingContext: 'ARCH-017-05 requires missing, stale, conflicting, or unverifiable security context to fail safely.',
  narrowestAuthorityWins: 'ARCH-017-05 requires effective authority to be the narrowest permitted intersection.',
  noIntermediaryAuthorityExpansion: 'ARCH-017-05 prohibits intermediaries from expanding authority.',
  gatewayNotSoleOwner: 'ARCH-017-05 requires gateways not to replace provider and domain authorization owners.',
  providerRevalidatesAuthority: 'ARCH-017-05 requires providers to revalidate service-specific authority.',
  authenticationSeparateFromAuthorization: 'ARCH-017-05 requires authentication success not to imply authorization.',
  credentialsNotCompleteAuthority: 'ARCH-017-05 requires credential possession not to imply complete business, tenant, or property authority.',
  longLivedSharedCredentialsAvoided: 'ARCH-017-05 requires long-lived shared credentials to be avoided.',
  credentialsProtectedFromArtifacts: 'ARCH-017-05 requires credentials and secrets not to appear in contracts, SDK source, docs, telemetry, prompts, or evidence payloads.',
  urgentRevocationNotDefeatedByCache: 'ARCH-017-05 requires cached authorization or connection state not to defeat urgent revocation.',
  delegationBoundedAndNonExpansive: 'ARCH-017-05 requires delegation to be explicit, bounded, time limited, attributable, revocable, and non-expansive.',
  tenantClaimsValidated: 'ARCH-017-05 requires client-provided tenant identifiers to be validated claims.',
  propertyClaimsValidated: 'ARCH-017-05 requires property identifiers to be validated against tenant, consumer, actor, delegation, product, resource, and policy context.',
  crossScopeDeniedByDefault: 'ARCH-017-05 requires cross-tenant and cross-property access to be denied by default.',
  isolationBeforeCandidateSets: 'ARCH-017-05 requires authorization and isolation before protected items enter query or search candidate sets.',
  scopedCacheKeysRequired: 'ARCH-017-05 requires scoped cache keys and exact-scope authorization reuse.',
  perItemBatchAuthorization: 'ARCH-017-05 requires per-item tenant, property, resource, classification, and result isolation controls for batches.',
  dataMinimizedAndClassified: 'ARCH-017-05 requires API and SDK data to be classified and minimized for purpose.',
  outputAuthorizationRequired: 'ARCH-017-05 requires output authorization for responses, errors, exports, events, callbacks, and stream items.',
  writableFieldsExplicit: 'ARCH-017-05 requires providers to explicitly define writable fields.',
  safeAmbiguityHandling: 'ARCH-017-05 requires ambiguous request framing, encoding, duplicate fields, and conflicting scope claims to fail safely.',
  transportProtected: 'ARCH-017-05 requires transport protection appropriate to environment and risk.',
  replayResistant: 'ARCH-017-05 requires message integrity and replay controls that preserve legitimate retry and replay semantics.',
  sdkPreservesSecurityContext: 'ARCH-017-05 requires SDKs to preserve acting identity, tenant scope, and property scope.',
  sdkNoConvenienceBypass: 'ARCH-017-05 requires SDKs not to disable authentication or transport validation for convenience by default.',
  callbacksRevalidated: 'ARCH-017-05 requires callback destination changes to be revalidated.',
  streamsReauthorized: 'ARCH-017-05 requires long-lived streams to renew or reauthorize material context changes.',
  aiModelOutputNotAuthority: 'ARCH-017-05 requires model output not to be treated as an authorization decision.',
  deterministicProviderValidation: 'ARCH-017-05 requires deterministic provider validation for AI-generated requests and results.',
  privilegedAccessControlled: 'ARCH-017-05 requires administrative, operational, and emergency access to be privileged, least-privilege, purpose-bound, and evidenced.',
  emergencyAccessTimeBounded: 'ARCH-017-05 requires emergency access to be scoped, time limited, monitored where appropriate, revoked, reviewed, and evidenced.',
  securityTelemetrySafe: 'ARCH-017-05 requires security telemetry to avoid credentials, secrets, unrestricted payloads, and unnecessary personal information.',
  evidenceProtected: 'ARCH-017-05 requires security evidence to be attributable, time bound, version aligned, access controlled, integrity protected, and retained.',
  securityNotWeakenedForCompatibility: 'ARCH-017-05 requires security and isolation controls not to be weakened to preserve backward compatibility.',
  supplyChainIntegrity: 'ARCH-017-05 requires API and SDK supply-chain artifacts to preserve provenance and integrity.',
  technologyNeutral: 'ARCH-017-05 requires specific security technologies to remain implementation choices governed by ARCH-008.'
});

const REQUIRED_FALSE = Object.freeze({
  networkLocationTrusted: 'ARCH-017-05 prohibits network location from creating trust.',
  gatewayTraversalTrusted: 'ARCH-017-05 prohibits gateway traversal from creating trust.',
  discoveryGrantsAccess: 'ARCH-017-05 prohibits API discovery from granting access.',
  sdkPossessionGrantsAuthority: 'ARCH-017-05 prohibits SDK possession from granting authority.',
  credentialPossessionAloneAuthorizes: 'ARCH-017-05 prohibits credential possession alone from authorizing business, tenant, or property access.',
  identifierKnowledgeAuthorizes: 'ARCH-017-05 prohibits resource identifier knowledge from authorizing access.',
  tenantIdSelfAuthorizes: 'ARCH-017-05 prohibits client-supplied tenant identifiers from overriding authenticated scope.',
  propertyIdSelfAuthorizes: 'ARCH-017-05 prohibits property identifiers from being accepted without relationship validation.',
  apiKeyCompleteHumanIdentity: 'ARCH-017-05 prohibits API keys from being treated as complete human identity or business authority.',
  gatewayOnlyAuthorization: 'ARCH-017-05 prohibits the gateway from being the sole owner of resource, field, domain, business, workflow, agent, knowledge, or memory authorization.',
  providerSkipsServiceAuthorization: 'ARCH-017-05 prohibits providers from skipping service-specific authority validation.',
  delegationExpandsAuthority: 'ARCH-017-05 prohibits delegation from expanding authority.',
  postProcessingRedactionPrimaryIsolation: 'ARCH-017-05 prohibits post-processing redaction from being the primary isolation control.',
  searchRelevanceOverridesIsolation: 'ARCH-017-05 prohibits search relevance from overriding isolation.',
  cacheReusedAcrossScope: 'ARCH-017-05 prohibits authorization decisions or responses from being reused outside their exact permitted scope.',
  eventConsumerSelfFilters: 'ARCH-017-05 prohibits broad event channels relying solely on consumers to ignore unauthorized events.',
  callbackRegistrationSsrfs: 'ARCH-017-05 prohibits callback registration from providing unrestricted server-side network access.',
  checkpointActsAsCredential: 'ARCH-017-05 prohibits stream checkpoints from acting as credentials.',
  oneBatchItemAuthorizesAdjacent: 'ARCH-017-05 prohibits one authorized batch item from authorizing adjacent items.',
  broadDomainObjectResponseDefault: 'ARCH-017-05 discourages broad domain-object responses that exceed purpose and classification needs.',
  arbitraryInputBindsToInternalEntity: 'ARCH-017-05 prohibits arbitrary consumer input from binding directly to internal entities or privileged fields.',
  unsafeRequestAmbiguityAccepted: 'ARCH-017-05 prohibits ambiguous requests from being interpreted differently across layers.',
  secretsInContractsSdkDocsLogsPrompts: 'ARCH-017-05 prohibits secrets in API definitions, SDK packages, examples, logs, errors, telemetry, prompts, or evidence payloads.',
  sdkDisablesTransportValidation: 'ARCH-017-05 prohibits SDKs from disabling authentication or transport validation for convenience by default.',
  rateLimitIncreasesBusinessAuthority: 'ARCH-017-05 prohibits higher quotas from increasing business authority.',
  workflowServiceIdentityBypassesInitiator: 'ARCH-017-05 prohibits workflow service identity from bypassing the initiating mandate or provider authorization.',
  modelOutputAuthorizesCalls: 'ARCH-017-05 prohibits model output from being an authorization decision.',
  promptInjectionChangesPolicy: 'ARCH-017-05 prohibits retrieved content, user input, files, partner responses, tool results, or callback payloads from changing security policy or authority.',
  operatorUnrestrictedPayloadAccess: 'ARCH-017-05 prohibits unrestricted payload access merely because an operator supports the service.',
  emergencyAccessStandingShortcut: 'ARCH-017-05 prohibits emergency access from becoming a standing operational shortcut.',
  partnerStatusImplicitAccess: 'ARCH-017-05 prohibits partner status from providing implicit access to all tenants, properties, products, or data.',
  pluginInstallationUnrestrictedAuthority: 'ARCH-017-05 prohibits extension installation from creating unrestricted platform authority.',
  weakensControlsForCompatibility: 'ARCH-017-05 prohibits weakening security or isolation controls to preserve backward compatibility.',
  replacesArch008: 'ARCH-017-05 specializes ARCH-008 and does not replace enterprise security authority.',
  replacesArch018: 'ARCH-017-05 does not replace ARCH-018 detailed multi-tenancy authority.',
  definesDetailedSdkDistribution: 'ARCH-017-05 does not define detailed SDK architecture and distribution implementation.',
  definesOperationsImplementation: 'ARCH-017-05 does not define API & SDK operations, observability, and performance implementation.'
});

export class ApiSecurityAccessIsolationDescriptor {
  objectives() { return values(METADATA.objectives); }
  identityDomains() { return values(METADATA.identityDomains); }
  identityContextFields() { return values(METADATA.identityContextFields); }
  authenticationClasses() { return values(METADATA.authenticationClasses); }
  credentialClasses() { return values(METADATA.credentialClasses); }
  credentialRequirements() { return values(METADATA.credentialRequirements); }
  authorizationDecisionFields() { return values(METADATA.authorizationDecisionFields); }
  accessIntersectionFactors() { return values(METADATA.accessIntersectionFactors); }
  gatewayAuthorizationControls() { return values(METADATA.gatewayAuthorizationControls); }
  providerAuthorizationControls() { return values(METADATA.providerAuthorizationControls); }
  delegationRecordFields() { return values(METADATA.delegationRecordFields); }
  tenantIsolationPaths() { return values(METADATA.tenantIsolationPaths); }
  propertyIsolationProhibitions() { return values(METADATA.propertyIsolationProhibitions); }
  dataClassifications() { return values(METADATA.dataClassifications); }
  validationControlTypes() { return values(METADATA.validationControlTypes); }
  surfaceSecurityControls() { return values(METADATA.surfaceSecurityControls); }
  automationAccessControls() { return values(METADATA.automationAccessControls); }
  privilegedAccessControls() { return values(METADATA.privilegedAccessControls); }
  abuseBudgetControls() { return values(METADATA.abuseBudgetControls); }
  securityTestTypes() { return values(METADATA.securityTestTypes); }
  architecturalRules() { return values(METADATA.architecturalRules); }
  architectureBoundaries() { return values(METADATA.architectureBoundaries); }

  validateProfile(input) {
    const profile = input instanceof ApiSecurityAccessIsolationProfile
      ? input
      : new ApiSecurityAccessIsolationProfile(input);
    const errors = [];
    if (!profile.profileName) errors.push('API Security, Access, and Isolation profile must have a name.');
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
        errors.push(`API Security, Access, and Isolation must include documented ${key}.`);
      }
    }
    if (errors.length) throw new PlatformError(
      API_SECURITY_ACCESS_ISOLATION_ERROR_CODE,
      'API Security, Access, and Isolation violates ARCH-017-05.',
      { errors }
    );
    return result(errors);
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
function result(errors) { return new ApiSdkValidationResult({ isValid: errors.length === 0, errors }); }
