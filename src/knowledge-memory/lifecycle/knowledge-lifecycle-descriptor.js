import { PlatformError } from '../../foundation/errors/platform-error.js';
import { KnowledgeLifecycleProfile } from '../contracts/knowledge-lifecycle-profile.js';
import { KnowledgeMemoryValidationResult } from '../contracts/knowledge-memory-validation-result.js';
import { KNOWLEDGE_AUTHORITY_CLASSES } from '../overview-constants.js';
import {
  CANONICAL_KNOWLEDGE_MODEL,
  KNOWLEDGE_LIFECYCLE_APIS,
  KNOWLEDGE_LIFECYCLE_BOUNDARIES,
  KNOWLEDGE_LIFECYCLE_ERROR_CODE,
  KNOWLEDGE_LIFECYCLE_EVENTS,
  KNOWLEDGE_LIFECYCLE_OBJECTIVES,
  KNOWLEDGE_LIFECYCLE_OPERATIONS,
  KNOWLEDGE_LIFECYCLE_QUALITY_ATTRIBUTES,
  KNOWLEDGE_LIFECYCLE_RULES,
  KNOWLEDGE_LIFECYCLE_STATES,
  KNOWLEDGE_PUBLICATION_CHANNELS,
  KNOWLEDGE_REPRESENTATION_STATES,
  KNOWLEDGE_SCOPE_TYPES,
  KNOWLEDGE_SOURCE_LIFECYCLE_STATES
} from '../knowledge-lifecycle-constants.js';

const METADATA = Object.freeze({
  objectives: KNOWLEDGE_LIFECYCLE_OBJECTIVES,
  canonicalModel: CANONICAL_KNOWLEDGE_MODEL,
  sourceLifecycleStates: KNOWLEDGE_SOURCE_LIFECYCLE_STATES,
  authorityClasses: KNOWLEDGE_AUTHORITY_CLASSES,
  scopeTypes: KNOWLEDGE_SCOPE_TYPES,
  lifecycleStates: KNOWLEDGE_LIFECYCLE_STATES,
  publicationChannels: KNOWLEDGE_PUBLICATION_CHANNELS,
  representationStates: KNOWLEDGE_REPRESENTATION_STATES,
  lifecycleApis: KNOWLEDGE_LIFECYCLE_APIS,
  lifecycleEvents: KNOWLEDGE_LIFECYCLE_EVENTS,
  operations: KNOWLEDGE_LIFECYCLE_OPERATIONS,
  qualityAttributes: KNOWLEDGE_LIFECYCLE_QUALITY_ATTRIBUTES,
  architecturalRules: KNOWLEDGE_LIFECYCLE_RULES,
  architectureBoundaries: KNOWLEDGE_LIFECYCLE_BOUNDARIES
});

const REQUIRED_TRUE = Object.freeze({
  domainOwnershipExplicit: 'ARCH-016-02 requires domainOwnershipExplicit.',
  sourcesRegistered: 'ARCH-016-02 requires sourcesRegistered.',
  stableIdentities: 'ARCH-016-02 requires stableIdentities.',
  distinctVersionTypes: 'ARCH-016-02 requires distinctVersionTypes.',
  contextualAuthority: 'ARCH-016-02 requires contextualAuthority.',
  explicitEligibility: 'ARCH-016-02 requires explicitEligibility.',
  publishedVersionsImmutable: 'ARCH-016-02 requires publishedVersionsImmutable.',
  materialChangesVersioned: 'ARCH-016-02 requires materialChangesVersioned.',
  provenanceComplete: 'ARCH-016-02 requires provenanceComplete.',
  canonicalDerivedSeparated: 'ARCH-016-02 requires canonicalDerivedSeparated.',
  aiContentDerived: 'ARCH-016-02 requires aiContentDerived.',
  tenantPropertyIsolation: 'ARCH-016-02 requires tenantPropertyIsolation.',
  inheritanceGoverned: 'ARCH-016-02 requires inheritanceGoverned.',
  approvalPublicationActivationSeparated: 'ARCH-016-02 requires approvalPublicationActivationSeparated.',
  representationReadinessRequired: 'ARCH-016-02 requires representationReadinessRequired.',
  inactiveStatesExcluded: 'ARCH-016-02 requires inactiveStatesExcluded.',
  historicalCitationsPreserved: 'ARCH-016-02 requires historicalCitationsPreserved.',
  lifecyclePropagation: 'ARCH-016-02 requires lifecyclePropagation.',
  registryLifecycleAuthority: 'ARCH-016-02 requires registryLifecycleAuthority.',
  indexesRebuildable: 'ARCH-016-02 requires indexesRebuildable.',
  citationsLifecycleAware: 'ARCH-016-02 requires citationsLifecycleAware.',
  correctionVersioned: 'ARCH-016-02 requires correctionVersioned.',
  retentionAssetSpecific: 'ARCH-016-02 requires retentionAssetSpecific.',
  tombstonesMinimal: 'ARCH-016-02 requires tombstonesMinimal.',
  legalHoldNotCurrentUse: 'ARCH-016-02 requires legalHoldNotCurrentUse.',
  transitionsIdempotent: 'ARCH-016-02 requires transitionsIdempotent.',
  lifecycleReconciled: 'ARCH-016-02 requires lifecycleReconciled.',
  evidenceProduced: 'ARCH-016-02 requires evidenceProduced.',
  versionedContracts: 'ARCH-016-02 requires versionedContracts.',
  vendorNeutral: 'ARCH-016-02 requires vendorNeutral.',
  technologyIndependent: 'ARCH-016-02 requires technologyIndependent.'
});

const REQUIRED_FALSE = Object.freeze({
  ingestionMakesActive: 'ARCH-016-02 prohibits ingestionMakesActive.',
  indexIsAuthority: 'ARCH-016-02 prohibits indexIsAuthority.',
  sourcePopularityCreatesAuthority: 'ARCH-016-02 prohibits sourcePopularityCreatesAuthority.',
  publishedVersionMutable: 'ARCH-016-02 prohibits publishedVersionMutable.',
  approvalMeansPublication: 'ARCH-016-02 prohibits approvalMeansPublication.',
  publicationMeansActivation: 'ARCH-016-02 prohibits publicationMeansActivation.',
  representationOverridesLifecycle: 'ARCH-016-02 prohibits representationOverridesLifecycle.',
  citationSilentlyRedirects: 'ARCH-016-02 prohibits citationSilentlyRedirects.',
  suspensionLeavesRepresentationsActive: 'ARCH-016-02 prohibits suspensionLeavesRepresentationsActive.',
  deletionLeavesContent: 'ARCH-016-02 prohibits deletionLeavesContent.',
  legalHoldMakesCurrent: 'ARCH-016-02 prohibits legalHoldMakesCurrent.',
  technicalCustodyCreatesAuthority: 'ARCH-016-02 prohibits technicalCustodyCreatesAuthority.',
  tenantContentOverridesScope: 'ARCH-016-02 prohibits tenantContentOverridesScope.',
  directDatabaseAccess: 'ARCH-016-02 prohibits directDatabaseAccess.',
  selectsStorageProduct: 'ARCH-016-02 prohibits selectsStorageProduct.',
  definesAdjacentLifecycles: 'ARCH-016-02 prohibits definesAdjacentLifecycles.'
});

export class KnowledgeLifecycleDescriptor {
  objectives() { return values(METADATA.objectives); }
  canonicalModel() { return values(METADATA.canonicalModel); }
  sourceLifecycleStates() { return values(METADATA.sourceLifecycleStates); }
  authorityClasses() { return values(METADATA.authorityClasses); }
  scopeTypes() { return values(METADATA.scopeTypes); }
  lifecycleStates() { return values(METADATA.lifecycleStates); }
  publicationChannels() { return values(METADATA.publicationChannels); }
  representationStates() { return values(METADATA.representationStates); }
  lifecycleApis() { return values(METADATA.lifecycleApis); }
  lifecycleEvents() { return values(METADATA.lifecycleEvents); }
  operations() { return values(METADATA.operations); }
  qualityAttributes() { return values(METADATA.qualityAttributes); }
  architecturalRules() { return values(METADATA.architecturalRules); }
  architectureBoundaries() { return values(METADATA.architectureBoundaries); }

  validateProfile(input) {
    const profile = input instanceof KnowledgeLifecycleProfile
      ? input
      : new KnowledgeLifecycleProfile(input);
    const errors = [];
    if (!profile.profileName) errors.push('Knowledge lifecycle profile must have a name.');
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
        errors.push(`Knowledge Architecture and Lifecycle must include documented ${key}.`);
      }
    }
    if (errors.length) {
      throw new PlatformError(
        KNOWLEDGE_LIFECYCLE_ERROR_CODE,
        'Knowledge Architecture and Lifecycle violates ARCH-016-02.',
        { errors }
      );
    }
    return result(errors);
  }
}

function values(source) {
  return Object.freeze(Object.values(source));
}

function result(errors) {
  return new KnowledgeMemoryValidationResult({ isValid: errors.length === 0, errors });
}
