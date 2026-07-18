import { VERSIONED_ARTIFACT_TYPES } from '../constants.js';

export class VersionedArtifactRecord {
  constructor({
    artifactId,
    artifactType = VERSIONED_ARTIFACT_TYPES.SERVICE,
    ownerServiceName,
    version = '1.0.0',
    deprecated = false,
    migrationGuide = '',
    replacementArtifactId = '',
    compatibilityNotes = '',
    lastChangedAt = null
  }) {
    this.artifactId = artifactId;
    this.artifactType = artifactType;
    this.ownerServiceName = ownerServiceName;
    this.version = version;
    this.deprecated = Boolean(deprecated);
    this.migrationGuide = migrationGuide;
    this.replacementArtifactId = replacementArtifactId;
    this.compatibilityNotes = compatibilityNotes;
    this.lastChangedAt = lastChangedAt;

    Object.freeze(this);
  }
}
