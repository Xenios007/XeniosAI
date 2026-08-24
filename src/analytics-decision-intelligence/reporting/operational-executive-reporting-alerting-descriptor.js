import { PlatformError } from '../../foundation/errors/platform-error.js';
import { OperationalExecutiveReportingAlertingProfile as Profile } from '../contracts/operational-executive-reporting-alerting-profile.js';
import * as constants from '../operational-executive-reporting-alerting-constants.js';

const metadata = Object.freeze({ responsibilities: constants.REPORTING_RESPONSIBILITIES, dashboardFields: constants.DASHBOARD_FIELDS, reportFields: constants.REPORT_FIELDS, thresholdFields: constants.THRESHOLD_FIELDS, alertFields: constants.ALERT_FIELDS, subscriptionFields: constants.SUBSCRIPTION_FIELDS, freshnessFields: constants.FRESHNESS_FIELDS, drillThroughFields: constants.DRILL_THROUGH_FIELDS, deliveryFields: constants.DELIVERY_FIELDS, useCases: constants.REPORTING_USE_CASES, lifecycleStates: constants.REPORTING_LIFECYCLE_STATES, controls: constants.REPORTING_CONTROLS, failureRecovery: constants.REPORTING_FAILURE_RECOVERY, observabilityFields: constants.REPORTING_OBSERVABILITY, assuranceEvidence: constants.REPORTING_ASSURANCE, invariants: constants.REPORTING_INVARIANTS });
const required = Object.freeze({ definitionsVersioned: 'requires versioned reporting definitions', governedMetricsRequired: 'requires governed metrics', freshnessVisible: 'requires visible freshness', drillThroughAuthorized: 'requires authorized drill-through', alertsDeterministic: 'requires deterministic alerts', subscriptionsPurposeScoped: 'requires purpose-scoped subscriptions', deliveryAccessible: 'requires accessible delivery', resultsQualified: 'requires qualified reporting results' });
const prohibited = Object.freeze({ sharedDatabases: 'prohibits shared databases', hiddenFilters: 'prohibits hidden filters', staleResultUnmarked: 'prohibits unmarked stale results', inaccessibleDelivery: 'prohibits inaccessible delivery', thresholdBypassed: 'prohibits threshold bypass', crossTenantDrillThrough: 'prohibits cross-tenant drill-through', transportAcknowledgementAsCompletion: 'prohibits transport acknowledgement as completion', telemetryAsBusinessTruth: 'prohibits telemetry as business truth' });

export class OperationalExecutiveReportingAlertingDescriptor {
  responsibilities() { return values(metadata.responsibilities); }
  dashboardFields() { return values(metadata.dashboardFields); }
  reportFields() { return values(metadata.reportFields); }
  thresholdFields() { return values(metadata.thresholdFields); }
  alertFields() { return values(metadata.alertFields); }
  subscriptionFields() { return values(metadata.subscriptionFields); }
  freshnessFields() { return values(metadata.freshnessFields); }
  drillThroughFields() { return values(metadata.drillThroughFields); }
  deliveryFields() { return values(metadata.deliveryFields); }
  useCases() { return values(metadata.useCases); }
  lifecycleStates() { return values(metadata.lifecycleStates); }
  controls() { return values(metadata.controls); }
  failureRecovery() { return values(metadata.failureRecovery); }
  observabilityFields() { return values(metadata.observabilityFields); }
  assuranceEvidence() { return values(metadata.assuranceEvidence); }
  invariants() { return values(metadata.invariants); }

  validateProfile(input) {
    const profile = input instanceof Profile ? input : new Profile(input);
    const errors = [];
    if (!profile.profileName) errors.push('Operational Executive Reporting and Alerting profile must have a name.');
    for (const [key, source] of Object.entries(metadata)) for (const item of values(source)) if (!profile[key].includes(item)) errors.push(`${key} must include ${item}.`);
    for (const [key, message] of Object.entries(required)) if (!profile[key]) errors.push(`ARCH-028-04 ${message}.`);
    for (const [key, message] of Object.entries(prohibited)) if (profile[key]) errors.push(`ARCH-028-04 ${message}.`);
    return Object.freeze({ isValid: errors.length === 0, errors: Object.freeze(errors) });
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(metadata)) if (this[key]().length !== Object.keys(source).length) errors.push(`${key} is incomplete.`);
    if (errors.length) throw new PlatformError(constants.OPERATIONAL_EXECUTIVE_REPORTING_ALERTING_ERROR_CODE, 'Operational Executive Reporting and Alerting violates ARCH-028-04.', { errors });
    return Object.freeze({ isValid: true, errors: Object.freeze([]) });
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
