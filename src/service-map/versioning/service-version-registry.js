import { BUSINESS_SERVICE_NAMES } from '../../business-services/constants.js';
import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  SERVICE_COMMUNICATION_PATTERNS,
  SERVICE_MAP_ERROR_CODES,
  VERSION_CHANGE_TYPES,
  VERSIONED_ARTIFACT_TYPES
} from '../constants.js';
import { VersionChangeProposal } from '../contracts/version-change-proposal.js';
import { VersionValidationResult } from '../contracts/version-validation-result.js';
import { VersionedArtifactRecord } from '../contracts/versioned-artifact-record.js';

const SEMVER_PATTERN = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)$/;

const DEFAULT_VERSION_RECORDS = Object.freeze([
  ...Object.values(BUSINESS_SERVICE_NAMES).map(serviceName =>
    record(`${serviceName}.service`, VERSIONED_ARTIFACT_TYPES.SERVICE, serviceName)
  ),
  record('booking.create.command', VERSIONED_ARTIFACT_TYPES.COMMAND, BUSINESS_SERVICE_NAMES.BOOKING),
  record('booking.retrieve.query', VERSIONED_ARTIFACT_TYPES.QUERY, BUSINESS_SERVICE_NAMES.BOOKING),
  record('pricing.calculate.query', VERSIONED_ARTIFACT_TYPES.QUERY, BUSINESS_SERVICE_NAMES.PRICING),
  record('calendar.availability.query', VERSIONED_ARTIFACT_TYPES.QUERY, BUSINESS_SERVICE_NAMES.CALENDAR),
  record('knowledge.lookup.query', VERSIONED_ARTIFACT_TYPES.QUERY, BUSINESS_SERVICE_NAMES.KNOWLEDGE),
  record('notification.sent.event', VERSIONED_ARTIFACT_TYPES.DOMAIN_EVENT, BUSINESS_SERVICE_NAMES.NOTIFICATION),
  record('property.configuration.schema', VERSIONED_ARTIFACT_TYPES.SHARED_SCHEMA, BUSINESS_SERVICE_NAMES.PROPERTY),
  record('media.upload.api', VERSIONED_ARTIFACT_TYPES.PUBLIC_API, BUSINESS_SERVICE_NAMES.MEDIA),
  record('workflow.execution.api', VERSIONED_ARTIFACT_TYPES.PUBLIC_API, BUSINESS_SERVICE_NAMES.WORKFLOW),
  record('ai.business-tool.contract', VERSIONED_ARTIFACT_TYPES.TOOL_CONTRACT, BUSINESS_SERVICE_NAMES.WORKFLOW),
  record('service-map.configuration', VERSIONED_ARTIFACT_TYPES.CONFIGURATION_FORMAT, BUSINESS_SERVICE_NAMES.AUTHENTICATION)
]);

export class ServiceVersionRegistry {
  constructor({ records = DEFAULT_VERSION_RECORDS } = {}) {
    this.records = new Map();

    for (const versionRecord of records) {
      this.register(versionRecord);
    }
  }

  register(versionRecord) {
    if (this.records.has(versionRecord.artifactId)) {
      throw new PlatformError(
        SERVICE_MAP_ERROR_CODES.DUPLICATE_VERSION_RECORD,
        `Version record "${versionRecord.artifactId}" already exists.`
      );
    }

    const validation = this.validateRecord(versionRecord);
    if (!validation.isValid) {
      throw new PlatformError(validation.errors[0].code, validation.errors[0].message, {
        record: versionRecord
      });
    }

    this.records.set(versionRecord.artifactId, versionRecord);
    return this;
  }

  listRecords() {
    return Object.freeze([...this.records.values()]);
  }

  listByArtifactType(artifactType) {
    return Object.freeze(this.listRecords().filter(record => record.artifactType === artifactType));
  }

  getRecord(artifactId) {
    const versionRecord = this.records.get(artifactId);

    if (!versionRecord) {
      throw new PlatformError(
        SERVICE_MAP_ERROR_CODES.VERSION_RECORD_NOT_FOUND,
        `Version record "${artifactId}" is not defined.`
      );
    }

    return versionRecord;
  }

  validateRecord(versionRecord) {
    const errors = [];

    if (!Object.values(VERSIONED_ARTIFACT_TYPES).includes(versionRecord.artifactType)) {
      errors.push(error(SERVICE_MAP_ERROR_CODES.VERSION_INVALID, `Unknown artifact type "${versionRecord.artifactType}".`));
    }

    if (!SEMVER_PATTERN.test(versionRecord.version)) {
      errors.push(error(SERVICE_MAP_ERROR_CODES.VERSION_INVALID, `Version "${versionRecord.version}" must use SemVer MAJOR.MINOR.PATCH.`));
    }

    if (versionRecord.deprecated && !versionRecord.migrationGuide) {
      errors.push(error(SERVICE_MAP_ERROR_CODES.VERSION_DEPRECATION_INVALID, `Deprecated artifact "${versionRecord.artifactId}" must include migration guidance.`));
    }

    return errors.length === 0
      ? VersionValidationResult.valid({ record: versionRecord })
      : VersionValidationResult.invalid({ record: versionRecord, errors });
  }

  validateChange(proposalInput) {
    const proposal = proposalInput instanceof VersionChangeProposal
      ? proposalInput
      : new VersionChangeProposal(proposalInput);
    const current = parseSemVer(proposal.currentVersion);
    const proposed = parseSemVer(proposal.proposedVersion);
    const errors = [];

    if (!current || !proposed) {
      errors.push(error(SERVICE_MAP_ERROR_CODES.VERSION_INVALID, 'Current and proposed versions must use SemVer.'));
    } else if (proposal.changeType === VERSION_CHANGE_TYPES.BREAKING) {
      if (proposed.major <= current.major) {
        errors.push(error(SERVICE_MAP_ERROR_CODES.VERSION_CHANGE_INVALID, 'Breaking changes require a MAJOR version increment.'));
      }
      if (proposal.compatibilityPreserved) {
        errors.push(error(SERVICE_MAP_ERROR_CODES.VERSION_CHANGE_INVALID, 'Breaking changes must not claim compatibility is preserved.'));
      }
      if (!proposal.migrationRequired || !proposal.consumersAffected || !proposal.adrRequired) {
        errors.push(error(SERVICE_MAP_ERROR_CODES.VERSION_CHANGE_INVALID, 'Breaking changes require migration, consumer impact, and ADR governance metadata.'));
      }
    } else if (proposal.changeType === VERSION_CHANGE_TYPES.FEATURE) {
      if (proposed.major !== current.major || proposed.minor <= current.minor) {
        errors.push(error(SERVICE_MAP_ERROR_CODES.VERSION_CHANGE_INVALID, 'Backward-compatible features require a MINOR version increment within the same MAJOR version.'));
      }
      if (!proposal.compatibilityPreserved) {
        errors.push(error(SERVICE_MAP_ERROR_CODES.VERSION_CHANGE_INVALID, 'Feature changes must preserve compatibility.'));
      }
    } else if (proposal.changeType === VERSION_CHANGE_TYPES.FIX) {
      if (proposed.major !== current.major || proposed.minor !== current.minor || proposed.patch <= current.patch) {
        errors.push(error(SERVICE_MAP_ERROR_CODES.VERSION_CHANGE_INVALID, 'Backward-compatible fixes require a PATCH version increment within the same MAJOR and MINOR version.'));
      }
      if (!proposal.compatibilityPreserved) {
        errors.push(error(SERVICE_MAP_ERROR_CODES.VERSION_CHANGE_INVALID, 'Fix changes must preserve compatibility.'));
      }
    } else {
      errors.push(error(SERVICE_MAP_ERROR_CODES.VERSION_CHANGE_INVALID, `Unknown change type "${proposal.changeType}".`));
    }

    return errors.length === 0
      ? VersionValidationResult.valid({ proposal })
      : VersionValidationResult.invalid({ proposal, errors });
  }

  getVersionedArtifactTypes() {
    return VERSIONED_ARTIFACT_TYPES;
  }

  mapCommunicationPatternToArtifactType(pattern) {
    if (pattern === SERVICE_COMMUNICATION_PATTERNS.COMMAND) return VERSIONED_ARTIFACT_TYPES.COMMAND;
    if (pattern === SERVICE_COMMUNICATION_PATTERNS.QUERY) return VERSIONED_ARTIFACT_TYPES.QUERY;
    if (pattern === SERVICE_COMMUNICATION_PATTERNS.DOMAIN_EVENT) return VERSIONED_ARTIFACT_TYPES.DOMAIN_EVENT;
    return VERSIONED_ARTIFACT_TYPES.PUBLIC_API;
  }
}

function record(artifactId, artifactType, ownerServiceName) {
  return new VersionedArtifactRecord({
    artifactId,
    artifactType,
    ownerServiceName,
    version: '1.0.0',
    compatibilityNotes: 'Initial compatible contract version.'
  });
}

function parseSemVer(version) {
  const match = SEMVER_PATTERN.exec(version);
  if (!match) return null;

  return {
    major: Number(match[1]),
    minor: Number(match[2]),
    patch: Number(match[3])
  };
}

function error(code, message) {
  return { code, message };
}
