export class FinancialOperationsGovernanceAssuranceProfile {
  constructor({ profileName, operatingRoles = [], serviceObjectives = [], telemetryFields = [], fraudBoundaries = [], incidentClasses = [], recoveryEvidence = [], governanceArtifacts = [], assuranceActivities = [], invariants = [], accountableOwnership = true, objectivesMeasured = true, protectedPayloadsExcludedFromTelemetry = true, fraudSignalsAdvisory = true, incidentsReconciled = true, recoveryEvidenceRetained = true, assuranceContinuous = true, humanReviewAvailable = true, silentMoneyChange = false, fraudModelOwnsFinancialState = false, protectedPayloadsCopiedToTelemetry = false, incidentEvidenceDiscarded = false, controlsBypassedUnderPressure = false } = {}) {
    this.profileName = profileName;
    for (const [key, value] of Object.entries({ operatingRoles, serviceObjectives, telemetryFields, fraudBoundaries, incidentClasses, recoveryEvidence, governanceArtifacts, assuranceActivities, invariants })) this[key] = Object.freeze([...value]);
    for (const [key, value] of Object.entries({ accountableOwnership, objectivesMeasured, protectedPayloadsExcludedFromTelemetry, fraudSignalsAdvisory, incidentsReconciled, recoveryEvidenceRetained, assuranceContinuous, humanReviewAvailable, silentMoneyChange, fraudModelOwnsFinancialState, protectedPayloadsCopiedToTelemetry, incidentEvidenceDiscarded, controlsBypassedUnderPressure })) this[key] = Boolean(value);
    Object.freeze(this);
  }
}
