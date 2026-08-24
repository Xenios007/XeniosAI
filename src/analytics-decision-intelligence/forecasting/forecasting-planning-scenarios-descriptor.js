import { PlatformError } from '../../foundation/errors/platform-error.js';
import { ForecastingPlanningScenariosProfile as Profile } from '../contracts/forecasting-planning-scenarios-profile.js';
import * as constants from '../forecasting-planning-scenarios-constants.js';

const metadata = Object.freeze({ responsibilities: constants.FORECASTING_RESPONSIBILITIES, forecastDefinitionFields: constants.FORECAST_DEFINITION_FIELDS, forecastResultFields: constants.FORECAST_RESULT_FIELDS, assumptionFields: constants.ASSUMPTION_FIELDS, scenarioFields: constants.SCENARIO_FIELDS, uncertaintyFields: constants.UNCERTAINTY_FIELDS, planningInputFields: constants.PLANNING_INPUT_FIELDS, backtestFields: constants.BACKTEST_FIELDS, reconciliationFields: constants.FORECAST_RECONCILIATION_FIELDS, lifecycleStates: constants.FORECASTING_LIFECYCLE_STATES, controls: constants.FORECASTING_CONTROLS, failureRecovery: constants.FORECASTING_FAILURE_RECOVERY, observabilityFields: constants.FORECASTING_OBSERVABILITY, assuranceEvidence: constants.FORECASTING_ASSURANCE, invariants: constants.FORECASTING_INVARIANTS });
const required = Object.freeze({ definitionsVersioned: 'requires versioned forecast definitions', assumptionsExplicit: 'requires explicit assumptions', scenariosIsolated: 'requires isolated scenarios', uncertaintyQuantified: 'requires quantified uncertainty', planningInputsAuthorized: 'requires authorized planning inputs', backtestingRequired: 'requires backtesting', reconciliationRequired: 'requires forecast-actual reconciliation', resultsQualified: 'requires qualified results' });
const prohibited = Object.freeze({ sharedDatabases: 'prohibits shared databases', hiddenAssumption: 'prohibits hidden assumptions', pointEstimateAsCertainty: 'prohibits presenting point estimates as certainty', scenarioAsCommittedPlan: 'prohibits presenting scenarios as committed plans', forecastAsSourceTruth: 'prohibits forecasts as source truth', staleInputUnmarked: 'prohibits unmarked stale inputs', backtestSkipped: 'prohibits skipped backtesting', reconciliationIgnored: 'prohibits ignored reconciliation', modelConfidenceAsCompletion: 'prohibits model confidence as completion' });

export class ForecastingPlanningScenariosDescriptor {
  responsibilities() { return values(metadata.responsibilities); }
  forecastDefinitionFields() { return values(metadata.forecastDefinitionFields); }
  forecastResultFields() { return values(metadata.forecastResultFields); }
  assumptionFields() { return values(metadata.assumptionFields); }
  scenarioFields() { return values(metadata.scenarioFields); }
  uncertaintyFields() { return values(metadata.uncertaintyFields); }
  planningInputFields() { return values(metadata.planningInputFields); }
  backtestFields() { return values(metadata.backtestFields); }
  reconciliationFields() { return values(metadata.reconciliationFields); }
  lifecycleStates() { return values(metadata.lifecycleStates); }
  controls() { return values(metadata.controls); }
  failureRecovery() { return values(metadata.failureRecovery); }
  observabilityFields() { return values(metadata.observabilityFields); }
  assuranceEvidence() { return values(metadata.assuranceEvidence); }
  invariants() { return values(metadata.invariants); }

  validateProfile(input) {
    const profile = input instanceof Profile ? input : new Profile(input);
    const errors = [];
    if (!profile.profileName) errors.push('Forecasting Planning and Scenarios profile must have a name.');
    for (const [key, source] of Object.entries(metadata)) for (const item of values(source)) if (!profile[key].includes(item)) errors.push(`${key} must include ${item}.`);
    for (const [key, message] of Object.entries(required)) if (!profile[key]) errors.push(`ARCH-028-05 ${message}.`);
    for (const [key, message] of Object.entries(prohibited)) if (profile[key]) errors.push(`ARCH-028-05 ${message}.`);
    return Object.freeze({ isValid: errors.length === 0, errors: Object.freeze(errors) });
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(metadata)) if (this[key]().length !== Object.keys(source).length) errors.push(`${key} is incomplete.`);
    if (errors.length) throw new PlatformError(constants.FORECASTING_PLANNING_SCENARIOS_ERROR_CODE, 'Forecasting Planning and Scenarios violates ARCH-028-05.', { errors });
    return Object.freeze({ isValid: true, errors: Object.freeze([]) });
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
