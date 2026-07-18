export class ApiContractDefinition {
  constructor({
    contractName,
    ownerService,
    capability,
    version,
    operations = [],
    requestFields = [],
    responseFields = [],
    errorCategories = [],
    compatibility = 'backward-compatible',
    securityRequirements = [],
    documented = true,
    idempotentOperations = [],
    paginationStrategy = undefined,
    supportsFiltering = false,
    supportsSorting = false,
    implementationDetailsExposed = false,
    internalStorageExposed = false,
    frameworkBehaviorExposed = false,
    deprecated = false,
    deprecationStrategy = undefined
  }) {
    this.contractName = contractName;
    this.ownerService = ownerService;
    this.capability = capability;
    this.version = version;
    this.operations = Object.freeze([...operations]);
    this.requestFields = Object.freeze([...requestFields]);
    this.responseFields = Object.freeze([...responseFields]);
    this.errorCategories = Object.freeze([...errorCategories]);
    this.compatibility = compatibility;
    this.securityRequirements = Object.freeze([...securityRequirements]);
    this.documented = Boolean(documented);
    this.idempotentOperations = Object.freeze([...idempotentOperations]);
    this.paginationStrategy = paginationStrategy;
    this.supportsFiltering = Boolean(supportsFiltering);
    this.supportsSorting = Boolean(supportsSorting);
    this.implementationDetailsExposed = Boolean(implementationDetailsExposed);
    this.internalStorageExposed = Boolean(internalStorageExposed);
    this.frameworkBehaviorExposed = Boolean(frameworkBehaviorExposed);
    this.deprecated = Boolean(deprecated);
    this.deprecationStrategy = deprecationStrategy;

    Object.freeze(this);
  }
}
