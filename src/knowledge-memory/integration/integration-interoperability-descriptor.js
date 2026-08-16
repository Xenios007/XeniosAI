import { PlatformError } from '../../foundation/errors/platform-error.js';
import { KnowledgeMemoryIntegrationProfile } from '../contracts/integration-interoperability-profile.js';
import { KnowledgeMemoryValidationResult } from '../contracts/knowledge-memory-validation-result.js';
import {
  KNOWLEDGE_MEMORY_API_CAPABILITIES, KNOWLEDGE_MEMORY_API_CONTRACT_FIELDS,
  KNOWLEDGE_MEMORY_BULK_ITEM_STATUSES, KNOWLEDGE_MEMORY_BULK_MANIFEST_FIELDS,
  KNOWLEDGE_MEMORY_CONNECTOR_CAPABILITIES, KNOWLEDGE_MEMORY_CONNECTOR_CHECKPOINT_FIELDS,
  KNOWLEDGE_MEMORY_DEGRADED_INTEGRATION_MODES, KNOWLEDGE_MEMORY_ERROR_FIELDS,
  KNOWLEDGE_MEMORY_EVENT_DELIVERY_CONTROLS, KNOWLEDGE_MEMORY_EVENT_ENVELOPE_FIELDS,
  KNOWLEDGE_MEMORY_INTEGRATION_BOUNDARIES, KNOWLEDGE_MEMORY_INTEGRATION_ENVELOPE_FIELDS,
  KNOWLEDGE_MEMORY_INTEGRATION_ERROR_CODE, KNOWLEDGE_MEMORY_INTEGRATION_OBJECTIVES,
  KNOWLEDGE_MEMORY_INTEGRATION_PARTICIPANTS, KNOWLEDGE_MEMORY_INTEGRATION_PROFILE_FIELDS,
  KNOWLEDGE_MEMORY_INTEGRATION_QUALITY_ATTRIBUTES, KNOWLEDGE_MEMORY_INTEGRATION_RULES,
  KNOWLEDGE_MEMORY_INTEGRATION_STYLES, KNOWLEDGE_MEMORY_PORTABILITY_FIELDS,
  KNOWLEDGE_MEMORY_RESPONSE_STATUSES
} from '../integration-interoperability-constants.js';

const METADATA = Object.freeze({
  objectives: KNOWLEDGE_MEMORY_INTEGRATION_OBJECTIVES,
  participants: KNOWLEDGE_MEMORY_INTEGRATION_PARTICIPANTS,
  profileFields: KNOWLEDGE_MEMORY_INTEGRATION_PROFILE_FIELDS,
  integrationStyles: KNOWLEDGE_MEMORY_INTEGRATION_STYLES,
  envelopeFields: KNOWLEDGE_MEMORY_INTEGRATION_ENVELOPE_FIELDS,
  apiCapabilities: KNOWLEDGE_MEMORY_API_CAPABILITIES,
  apiContractFields: KNOWLEDGE_MEMORY_API_CONTRACT_FIELDS,
  responseStatuses: KNOWLEDGE_MEMORY_RESPONSE_STATUSES,
  errorFields: KNOWLEDGE_MEMORY_ERROR_FIELDS,
  eventEnvelopeFields: KNOWLEDGE_MEMORY_EVENT_ENVELOPE_FIELDS,
  eventDeliveryControls: KNOWLEDGE_MEMORY_EVENT_DELIVERY_CONTROLS,
  connectorCapabilities: KNOWLEDGE_MEMORY_CONNECTOR_CAPABILITIES,
  checkpointFields: KNOWLEDGE_MEMORY_CONNECTOR_CHECKPOINT_FIELDS,
  bulkManifestFields: KNOWLEDGE_MEMORY_BULK_MANIFEST_FIELDS,
  bulkItemStatuses: KNOWLEDGE_MEMORY_BULK_ITEM_STATUSES,
  portabilityFields: KNOWLEDGE_MEMORY_PORTABILITY_FIELDS,
  degradedModes: KNOWLEDGE_MEMORY_DEGRADED_INTEGRATION_MODES,
  qualityAttributes: KNOWLEDGE_MEMORY_INTEGRATION_QUALITY_ATTRIBUTES,
  architecturalRules: KNOWLEDGE_MEMORY_INTEGRATION_RULES,
  architectureBoundaries: KNOWLEDGE_MEMORY_INTEGRATION_BOUNDARIES
});

const REQUIRED_TRUE = Object.freeze({
  publishedContracts: 'ARCH-016-07 requires publishedContracts.',
  authoritativeOwnership: 'ARCH-016-07 requires authoritativeOwnership.',
  semanticCompatibility: 'ARCH-016-07 requires semanticCompatibility.',
  capabilityEncapsulation: 'ARCH-016-07 requires capabilityEncapsulation.',
  providerAbstraction: 'ARCH-016-07 requires providerAbstraction.',
  identityPropagated: 'ARCH-016-07 requires identityPropagated.',
  purposePropagated: 'ARCH-016-07 requires purposePropagated.',
  trustedScopePropagated: 'ARCH-016-07 requires trustedScopePropagated.',
  classificationPropagated: 'ARCH-016-07 requires classificationPropagated.',
  provenancePropagated: 'ARCH-016-07 requires provenancePropagated.',
  temporalSemantics: 'ARCH-016-07 requires temporalSemantics.',
  referenceFirst: 'ARCH-016-07 requires referenceFirst.',
  referenceAuthorizationIndependent: 'ARCH-016-07 requires referenceAuthorizationIndependent.',
  statusSemanticsDistinct: 'ARCH-016-07 requires statusSemanticsDistinct.',
  safeErrorContracts: 'ARCH-016-07 requires safeErrorContracts.',
  idempotentMutations: 'ARCH-016-07 requires idempotentMutations.',
  concurrencyControlled: 'ARCH-016-07 requires concurrencyControlled.',
  deadlinesBounded: 'ARCH-016-07 requires deadlinesBounded.',
  contractsVersioned: 'ARCH-016-07 requires contractsVersioned.',
  backwardCompatible: 'ARCH-016-07 requires backwardCompatible.',
  deprecationGoverned: 'ARCH-016-07 requires deprecationGoverned.',
  immutableEvents: 'ARCH-016-07 requires immutableEvents.',
  atLeastOnceSafe: 'ARCH-016-07 requires atLeastOnceSafe.',
  replaySafe: 'ARCH-016-07 requires replaySafe.',
  deadLetterGoverned: 'ARCH-016-07 requires deadLetterGoverned.',
  reconciliationEnabled: 'ARCH-016-07 requires reconciliationEnabled.',
  schemasGoverned: 'ARCH-016-07 requires schemasGoverned.',
  connectorsGoverned: 'ARCH-016-07 requires connectorsGoverned.',
  antiCorruptionLayers: 'ARCH-016-07 requires antiCorruptionLayers.',
  domainTruthPreserved: 'ARCH-016-07 requires domainTruthPreserved.',
  externalOutputValidated: 'ARCH-016-07 requires externalOutputValidated.',
  bulkControlParity: 'ARCH-016-07 requires bulkControlParity.',
  portableLifecycle: 'ARCH-016-07 requires portableLifecycle.',
  correctionPropagated: 'ARCH-016-07 requires correctionPropagated.',
  deletionPropagated: 'ARCH-016-07 requires deletionPropagated.',
  projectionsSynchronized: 'ARCH-016-07 requires projectionsSynchronized.',
  divergenceContained: 'ARCH-016-07 requires divergenceContained.',
  isolationEndToEnd: 'ARCH-016-07 requires isolationEndToEnd.',
  secretsExcluded: 'ARCH-016-07 requires secretsExcluded.',
  evidenceProtected: 'ARCH-016-07 requires evidenceProtected.',
  safeDegradation: 'ARCH-016-07 requires safeDegradation.',
  vendorNeutral: 'ARCH-016-07 requires vendorNeutral.',
  technologyIndependent: 'ARCH-016-07 requires technologyIndependent.'
});

const REQUIRED_FALSE = Object.freeze({
  directDatabaseAccess: 'ARCH-016-07 prohibits directDatabaseAccess.',
  sharedInternalTables: 'ARCH-016-07 prohibits sharedInternalTables.',
  hiddenFilesystemExchange: 'ARCH-016-07 prohibits hiddenFilesystemExchange.',
  unversionedPayloads: 'ARCH-016-07 prohibits unversionedPayloads.',
  providerObjectsCanonical: 'ARCH-016-07 prohibits providerObjectsCanonical.',
  searchIndexAuthoritative: 'ARCH-016-07 prohibits searchIndexAuthoritative.',
  copiedCredentialsGrantAuthority: 'ARCH-016-07 prohibits copiedCredentialsGrantAuthority.',
  transportCreatesAuthority: 'ARCH-016-07 prohibits transportCreatesAuthority.',
  payloadTextDefinesScope: 'ARCH-016-07 prohibits payloadTextDefinesScope.',
  referenceGrantsAccess: 'ARCH-016-07 prohibits referenceGrantsAccess.',
  classificationLoweredByTransform: 'ARCH-016-07 prohibits classificationLoweredByTransform.',
  acceptanceMeansPublication: 'ARCH-016-07 prohibits acceptanceMeansPublication.',
  providerOutputAutoApproved: 'ARCH-016-07 prohibits providerOutputAutoApproved.',
  connectorPublishesKnowledge: 'ARCH-016-07 prohibits connectorPublishesKnowledge.',
  eventIsUnboundedCommand: 'ARCH-016-07 prohibits eventIsUnboundedCommand.',
  exactlyOnceAssumed: 'ARCH-016-07 prohibits exactlyOnceAssumed.',
  replayResurrectsRecords: 'ARCH-016-07 prohibits replayResurrectsRecords.',
  bulkWeakensControls: 'ARCH-016-07 prohibits bulkWeakensControls.',
  integrationSharesSecrets: 'ARCH-016-07 prohibits integrationSharesSecrets.',
  degradedWeakensControls: 'ARCH-016-07 prohibits degradedWeakensControls.',
  selectsIntegrationProduct: 'ARCH-016-07 prohibits selectsIntegrationProduct.'
});

export class KnowledgeMemoryIntegrationDescriptor {
  objectives() { return values(METADATA.objectives); }
  participants() { return values(METADATA.participants); }
  profileFields() { return values(METADATA.profileFields); }
  integrationStyles() { return values(METADATA.integrationStyles); }
  envelopeFields() { return values(METADATA.envelopeFields); }
  apiCapabilities() { return values(METADATA.apiCapabilities); }
  apiContractFields() { return values(METADATA.apiContractFields); }
  responseStatuses() { return values(METADATA.responseStatuses); }
  errorFields() { return values(METADATA.errorFields); }
  eventEnvelopeFields() { return values(METADATA.eventEnvelopeFields); }
  eventDeliveryControls() { return values(METADATA.eventDeliveryControls); }
  connectorCapabilities() { return values(METADATA.connectorCapabilities); }
  checkpointFields() { return values(METADATA.checkpointFields); }
  bulkManifestFields() { return values(METADATA.bulkManifestFields); }
  bulkItemStatuses() { return values(METADATA.bulkItemStatuses); }
  portabilityFields() { return values(METADATA.portabilityFields); }
  degradedModes() { return values(METADATA.degradedModes); }
  qualityAttributes() { return values(METADATA.qualityAttributes); }
  architecturalRules() { return values(METADATA.architecturalRules); }
  architectureBoundaries() { return values(METADATA.architectureBoundaries); }

  validateProfile(input) {
    const profile = input instanceof KnowledgeMemoryIntegrationProfile
      ? input
      : new KnowledgeMemoryIntegrationProfile(input);
    const errors = [];
    if (!profile.profileName) errors.push('Knowledge and Memory integration profile must have a name.');
    for (const [key, source] of Object.entries(METADATA)) {
      for (const item of values(source)) {
        if (!profile[key].includes(item)) errors.push(`${key} must include ${item}.`);
      }
    }
    for (const [key, message] of Object.entries(REQUIRED_TRUE)) {
      if (profile[key] !== true) errors.push(message);
    }
    for (const [key, message] of Object.entries(REQUIRED_FALSE)) {
      if (profile[key] === true) errors.push(message);
    }
    return result(errors);
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(METADATA)) {
      if (this[key]().length !== Object.keys(source).length) {
        errors.push(`Knowledge and Memory Integration must include documented ${key}.`);
      }
    }
    if (errors.length) {
      throw new PlatformError(
        KNOWLEDGE_MEMORY_INTEGRATION_ERROR_CODE,
        'Knowledge and Memory Integration violates ARCH-016-07.',
        { errors }
      );
    }
    return result(errors);
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
function result(errors) {
  return new KnowledgeMemoryValidationResult({ isValid: errors.length === 0, errors });
}
