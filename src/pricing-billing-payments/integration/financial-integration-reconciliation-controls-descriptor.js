import { PlatformError } from '../../foundation/errors/platform-error.js';
import { FinancialIntegrationReconciliationControlsProfile as Profile } from '../contracts/financial-integration-reconciliation-controls-profile.js';
import * as constants from '../financial-integration-reconciliation-controls-constants.js';

const metadata = Object.freeze({
  responsibilities: constants.FINANCIAL_INTEGRATION_RESPONSIBILITIES,
  adapterFields: constants.FINANCIAL_ADAPTER_FIELDS,
  tokenBoundaryFields: constants.TOKEN_BOUNDARY_FIELDS,
  reconciliationFields: constants.RECONCILIATION_FIELDS,
  closeFields: constants.FINANCIAL_CLOSE_FIELDS,
  exceptionFields: constants.FINANCIAL_EXCEPTION_FIELDS,
  controlFields: constants.FINANCIAL_CONTROL_FIELDS,
  invariants: constants.FINANCIAL_INTEGRATION_INVARIANTS
});

const required = Object.freeze({
  financialStateAuthoritative: 'requires authoritative financial state',
  providerOwnsValidation: 'requires provider-owned validation',
  adaptersVersioned: 'requires versioned processor and ledger adapters',
  tokensPurposeScoped: 'requires purpose-scoped token boundaries',
  reconciliationEvidenceRetained: 'requires retained reconciliation evidence',
  closeRequiresReconciliation: 'requires reconciliation before financial close',
  exceptionsHaveOwners: 'requires accountable exception owners',
  separationOfDutiesEnforced: 'requires separation of duties'
});

const prohibited = Object.freeze({
  sharedDatabases: 'prohibits shared databases',
  rawPaymentCredentialsStored: 'prohibits storing raw payment credentials',
  silentVarianceWriteOff: 'prohibits silent variance write-off',
  unapprovedClose: 'prohibits unapproved financial close',
  fabricatedFinancialState: 'prohibits fabricated financial state'
});

export class FinancialIntegrationReconciliationControlsDescriptor {
  responsibilities() { return values(metadata.responsibilities); }
  adapterFields() { return values(metadata.adapterFields); }
  tokenBoundaryFields() { return values(metadata.tokenBoundaryFields); }
  reconciliationFields() { return values(metadata.reconciliationFields); }
  closeFields() { return values(metadata.closeFields); }
  exceptionFields() { return values(metadata.exceptionFields); }
  controlFields() { return values(metadata.controlFields); }
  invariants() { return values(metadata.invariants); }

  validateProfile(input) {
    const profile = input instanceof Profile ? input : new Profile(input);
    const errors = [];
    if (!profile.profileName) errors.push('Financial Integration Reconciliation Controls profile must have a name.');
    for (const [key, source] of Object.entries(metadata)) {
      for (const item of values(source)) if (!profile[key].includes(item)) errors.push(`${key} must include ${item}.`);
    }
    for (const [key, message] of Object.entries(required)) if (!profile[key]) errors.push(`ARCH-026-08 ${message}.`);
    for (const [key, message] of Object.entries(prohibited)) if (profile[key]) errors.push(`ARCH-026-08 ${message}.`);
    return Object.freeze({ isValid: errors.length === 0, errors: Object.freeze(errors) });
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(metadata)) if (this[key]().length !== Object.keys(source).length) errors.push(`${key} is incomplete.`);
    if (errors.length) throw new PlatformError(constants.FINANCIAL_INTEGRATION_RECONCILIATION_CONTROLS_ERROR_CODE, 'Financial Integration Reconciliation Controls violates ARCH-026-08.', { errors });
    return Object.freeze({ isValid: true, errors: Object.freeze([]) });
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
