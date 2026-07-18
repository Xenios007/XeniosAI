import { VERSION_CHANGE_TYPES } from '../constants.js';

export class VersionChangeProposal {
  constructor({
    artifactId,
    currentVersion,
    proposedVersion,
    changeType = VERSION_CHANGE_TYPES.FIX,
    description = '',
    migrationRequired = false,
    consumersAffected = false,
    compatibilityPreserved = true,
    adrRequired = false
  }) {
    this.artifactId = artifactId;
    this.currentVersion = currentVersion;
    this.proposedVersion = proposedVersion;
    this.changeType = changeType;
    this.description = description;
    this.migrationRequired = Boolean(migrationRequired);
    this.consumersAffected = Boolean(consumersAffected);
    this.compatibilityPreserved = Boolean(compatibilityPreserved);
    this.adrRequired = Boolean(adrRequired);

    Object.freeze(this);
  }
}
