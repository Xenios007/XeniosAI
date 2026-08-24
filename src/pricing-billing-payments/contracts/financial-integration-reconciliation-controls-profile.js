export class FinancialIntegrationReconciliationControlsProfile {
  constructor({
    profileName,
    responsibilities = [],
    adapterFields = [],
    tokenBoundaryFields = [],
    reconciliationFields = [],
    closeFields = [],
    exceptionFields = [],
    controlFields = [],
    invariants = [],
    financialStateAuthoritative = true,
    providerOwnsValidation = true,
    adaptersVersioned = true,
    tokensPurposeScoped = true,
    reconciliationEvidenceRetained = true,
    closeRequiresReconciliation = true,
    exceptionsHaveOwners = true,
    separationOfDutiesEnforced = true,
    sharedDatabases = false,
    rawPaymentCredentialsStored = false,
    silentVarianceWriteOff = false,
    unapprovedClose = false,
    fabricatedFinancialState = false
  } = {}) {
    this.profileName = profileName;
    for (const [key, value] of Object.entries({ responsibilities, adapterFields, tokenBoundaryFields, reconciliationFields, closeFields, exceptionFields, controlFields, invariants })) {
      this[key] = Object.freeze([...value]);
    }
    for (const [key, value] of Object.entries({ financialStateAuthoritative, providerOwnsValidation, adaptersVersioned, tokensPurposeScoped, reconciliationEvidenceRetained, closeRequiresReconciliation, exceptionsHaveOwners, separationOfDutiesEnforced, sharedDatabases, rawPaymentCredentialsStored, silentVarianceWriteOff, unapprovedClose, fabricatedFinancialState })) {
      this[key] = Boolean(value);
    }
    Object.freeze(this);
  }
}
