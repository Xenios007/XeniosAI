export class StorageBackupPolicy {
  constructor({
    storageCategory,
    capabilities = [],
    recoveryValidated = true,
    backupIsOperationalStore = false,
    supportsDisasterRecovery = true,
    retentionGoverned = true
  }) {
    this.storageCategory = storageCategory;
    this.capabilities = Object.freeze([...capabilities]);
    this.recoveryValidated = Boolean(recoveryValidated);
    this.backupIsOperationalStore = Boolean(backupIsOperationalStore);
    this.supportsDisasterRecovery = Boolean(supportsDisasterRecovery);
    this.retentionGoverned = Boolean(retentionGoverned);

    Object.freeze(this);
  }
}
