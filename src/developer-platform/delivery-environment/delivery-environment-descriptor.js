import { PlatformError } from '../../foundation/errors/platform-error.js';
import { DeveloperPlatformValidationResult } from '../contracts/developer-platform-validation-result.js';
import { DeliveryEnvironmentProfile } from '../contracts/delivery-environment-profile.js';
import {
  CHANGE_CLASSIFICATION_FACTORS, CONFIGURATION_DEFINITION_FIELDS, CONFIGURATION_SCOPES,
  CONFIGURATION_VALIDATION_AREAS, DELIVERY_ENVIRONMENT_ANTI_PATTERNS,
  DELIVERY_ENVIRONMENT_ARCHITECTURAL_RULES, DELIVERY_ENVIRONMENT_ERROR_CODE,
  DELIVERY_ENVIRONMENT_MATURITY_LEVELS, DELIVERY_ENVIRONMENT_MEASURES,
  DELIVERY_ENVIRONMENT_OBJECTIVES, DELIVERY_ENVIRONMENT_PRINCIPLES, DELIVERY_EVIDENCE_FIELDS,
  DELIVERY_GOVERNANCE_AREAS, DELIVERY_PLAN_FIELDS, DELIVERY_REQUEST_FIELDS, DELIVERY_STATES,
  DELIVERY_STRATEGIES, ENVIRONMENT_ACCESS_REQUIREMENTS, ENVIRONMENT_HEALTH_SIGNALS,
  ENVIRONMENT_IDENTITY_FIELDS, ENVIRONMENT_ISOLATION_AREAS, ENVIRONMENT_METADATA_FIELDS,
  ENVIRONMENT_PROVISIONING_STEPS, ENVIRONMENT_REQUEST_FIELDS, ENVIRONMENT_TYPES,
  FUTURE_DELIVERY_ENVIRONMENT_CAPABILITIES, RELEASE_CONTENT_TYPES, RELEASE_IDENTITY_FIELDS,
  RELEASE_MANIFEST_FIELDS, RELEASE_READINESS_FIELDS, SECRET_ACCESS_REQUIREMENTS, SECRET_METADATA_FIELDS,
  SECRET_TYPES, STOP_CONDITIONS, VERIFICATION_AREAS, VERIFICATION_OUTCOMES
} from '../delivery-environment-constants.js';

const MAP = Object.freeze({
  objectives: DELIVERY_ENVIRONMENT_OBJECTIVES,
  principles: DELIVERY_ENVIRONMENT_PRINCIPLES,
  environmentTypes: ENVIRONMENT_TYPES,
  environmentIdentityFields: ENVIRONMENT_IDENTITY_FIELDS,
  environmentMetadataFields: ENVIRONMENT_METADATA_FIELDS,
  environmentRequestFields: ENVIRONMENT_REQUEST_FIELDS,
  environmentProvisioningSteps: ENVIRONMENT_PROVISIONING_STEPS,
  environmentIsolationAreas: ENVIRONMENT_ISOLATION_AREAS,
  environmentAccessRequirements: ENVIRONMENT_ACCESS_REQUIREMENTS,
  environmentHealthSignals: ENVIRONMENT_HEALTH_SIGNALS,
  configurationScopes: CONFIGURATION_SCOPES,
  configurationDefinitionFields: CONFIGURATION_DEFINITION_FIELDS,
  configurationValidationAreas: CONFIGURATION_VALIDATION_AREAS,
  secretTypes: SECRET_TYPES,
  secretMetadataFields: SECRET_METADATA_FIELDS,
  secretAccessRequirements: SECRET_ACCESS_REQUIREMENTS,
  releaseContentTypes: RELEASE_CONTENT_TYPES,
  releaseIdentityFields: RELEASE_IDENTITY_FIELDS,
  releaseManifestFields: RELEASE_MANIFEST_FIELDS,
  releaseReadinessFields: RELEASE_READINESS_FIELDS,
  changeClassificationFactors: CHANGE_CLASSIFICATION_FACTORS,
  deliveryRequestFields: DELIVERY_REQUEST_FIELDS,
  deliveryPlanFields: DELIVERY_PLAN_FIELDS,
  deliveryStates: DELIVERY_STATES,
  deliveryStrategies: DELIVERY_STRATEGIES,
  verificationAreas: VERIFICATION_AREAS,
  verificationOutcomes: VERIFICATION_OUTCOMES,
  stopConditions: STOP_CONDITIONS,
  deliveryEvidenceFields: DELIVERY_EVIDENCE_FIELDS,
  governanceAreas: DELIVERY_GOVERNANCE_AREAS,
  maturityLevels: DELIVERY_ENVIRONMENT_MATURITY_LEVELS,
  measures: DELIVERY_ENVIRONMENT_MEASURES,
  antiPatterns: DELIVERY_ENVIRONMENT_ANTI_PATTERNS,
  architecturalRules: DELIVERY_ENVIRONMENT_ARCHITECTURAL_RULES,
  futureCapabilities: FUTURE_DELIVERY_ENVIRONMENT_CAPABILITIES
});

const REQUIRED_TRUE = Object.freeze({
  environmentsGoverned: 'Environments must be identified, owned, governed lifecycle resources.',
  configurationExternalized: 'Configuration must be externalized from immutable artifacts.',
  secretsReferencedOnly: 'Secret references must be managed without exposing secret values.',
  trustedArtifactsPromoted: 'Trusted immutable artifacts must be promoted rather than rebuilt.',
  readinessBeforeDelivery: 'Readiness must be validated before delivery.',
  explicitTenantPropertyScope: 'Delivery must bind to explicit environment, tenant, and property scope.',
  progressiveDeliverySupported: 'Progressive delivery must be available where risk justifies it.',
  rollbackRollForwardCompensationDesigned: 'Rollback, roll-forward, compensation, and irreversible boundaries must be designed.',
  stopConditionsEnforced: 'Delivery must define enforceable stop conditions.',
  aiAuthorityNotInferred: 'AI agents must not infer authority from tool access or credentials.',
  deliveryEvidenceRequired: 'Delivery must generate complete evidence.',
  vendorNeutral: 'Delivery and Environment Platform must remain vendor neutral.',
  deploymentPortable: 'Delivery and Environment Platform must preserve deployment portability.'
});

const REQUIRED_FALSE = Object.freeze({
  prescribesCloudPlatform: 'ARCH-013-06 does not prescribe a cloud platform.',
  prescribesDeploymentTool: 'ARCH-013-06 does not prescribe a deployment tool.',
  prescribesSecretProvider: 'ARCH-013-06 does not prescribe a secret provider.',
  allowsProductionCredentialsForDevelopment: 'Routine development must not require production credentials.',
  embedsConfigurationInArtifacts: 'Configuration must not be embedded in immutable artifacts.',
  exposesSecretValues: 'Secret values must not be exposed.',
  rebuildsArtifactsPerEnvironment: 'Artifacts must not be rebuilt for each environment.',
  treatsPublicationAsProductionAuthorization: 'Artifact publication must not be treated as production authorization.',
  treatsDeploymentAsBusinessSuccess: 'Deployment completion must not be treated as business success.',
  allowsBroadRolloutBeforeVerification: 'Broad rollout must not occur before representative verification.',
  infersScopeFromDefaults: 'Tenant or property scope must not be inferred from defaults.',
  permitsAiAuthorityFromCredentials: 'AI agents must not infer authority from credentials.'
});

export class DeliveryEnvironmentDescriptor {
  objectives() { return values(MAP.objectives); }
  principles() { return values(MAP.principles); }
  environmentTypes() { return values(MAP.environmentTypes); }
  environmentIdentityFields() { return values(MAP.environmentIdentityFields); }
  environmentMetadataFields() { return values(MAP.environmentMetadataFields); }
  environmentRequestFields() { return values(MAP.environmentRequestFields); }
  environmentProvisioningSteps() { return values(MAP.environmentProvisioningSteps); }
  environmentIsolationAreas() { return values(MAP.environmentIsolationAreas); }
  environmentAccessRequirements() { return values(MAP.environmentAccessRequirements); }
  environmentHealthSignals() { return values(MAP.environmentHealthSignals); }
  configurationScopes() { return values(MAP.configurationScopes); }
  configurationDefinitionFields() { return values(MAP.configurationDefinitionFields); }
  configurationValidationAreas() { return values(MAP.configurationValidationAreas); }
  secretTypes() { return values(MAP.secretTypes); }
  secretMetadataFields() { return values(MAP.secretMetadataFields); }
  secretAccessRequirements() { return values(MAP.secretAccessRequirements); }
  releaseContentTypes() { return values(MAP.releaseContentTypes); }
  releaseIdentityFields() { return values(MAP.releaseIdentityFields); }
  releaseManifestFields() { return values(MAP.releaseManifestFields); }
  releaseReadinessFields() { return values(MAP.releaseReadinessFields); }
  changeClassificationFactors() { return values(MAP.changeClassificationFactors); }
  deliveryRequestFields() { return values(MAP.deliveryRequestFields); }
  deliveryPlanFields() { return values(MAP.deliveryPlanFields); }
  deliveryStates() { return values(MAP.deliveryStates); }
  deliveryStrategies() { return values(MAP.deliveryStrategies); }
  verificationAreas() { return values(MAP.verificationAreas); }
  verificationOutcomes() { return values(MAP.verificationOutcomes); }
  stopConditions() { return values(MAP.stopConditions); }
  deliveryEvidenceFields() { return values(MAP.deliveryEvidenceFields); }
  governanceAreas() { return values(MAP.governanceAreas); }
  maturityLevels() { return values(MAP.maturityLevels); }
  measures() { return values(MAP.measures); }
  antiPatterns() { return values(MAP.antiPatterns); }
  architecturalRules() { return values(MAP.architecturalRules); }
  futureCapabilities() { return values(MAP.futureCapabilities); }

  validateProfile(profileInput) {
    const profile = profileInput instanceof DeliveryEnvironmentProfile ? profileInput : new DeliveryEnvironmentProfile(profileInput);
    const errors = [];
    if (!profile.platformName) errors.push('Delivery and Environment Platform profile must have a name.');
    for (const [key, source] of Object.entries(MAP)) appendMissing(errors, profile[key], values(source), `${key} must include`);
    for (const [key, message] of Object.entries(REQUIRED_TRUE)) if (profile[key] !== true) errors.push(message);
    for (const [key, message] of Object.entries(REQUIRED_FALSE)) if (profile[key] === true) errors.push(message);
    return validation(errors);
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(MAP)) {
      if (this[key]().length !== Object.keys(source).length) errors.push(`Delivery and Environment Platform must include documented ${key}.`);
    }
    if (errors.length) {
      throw new PlatformError(DELIVERY_ENVIRONMENT_ERROR_CODE, 'Delivery and Environment Platform violates ARCH-013-06.', { errors });
    }
    return validation(errors);
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
function appendMissing(errors, actual, expected, message) {
  for (const item of expected) if (!actual.includes(item)) errors.push(`${message} ${item}.`);
}
function validation(errors) { return new DeveloperPlatformValidationResult({ isValid: errors.length === 0, errors }); }
