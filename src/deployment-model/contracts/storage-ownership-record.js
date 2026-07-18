export class StorageOwnershipRecord {
  constructor({
    businessData,
    owningService,
    storageCategory,
    onlyOwnerMayModify = true,
    directForeignStorageManipulation = false,
    sharedOperationalDatabase = false,
    ownershipByStorageLocation = false
  }) {
    this.businessData = businessData;
    this.owningService = owningService;
    this.storageCategory = storageCategory;
    this.onlyOwnerMayModify = Boolean(onlyOwnerMayModify);
    this.directForeignStorageManipulation = Boolean(directForeignStorageManipulation);
    this.sharedOperationalDatabase = Boolean(sharedOperationalDatabase);
    this.ownershipByStorageLocation = Boolean(ownershipByStorageLocation);

    Object.freeze(this);
  }
}
