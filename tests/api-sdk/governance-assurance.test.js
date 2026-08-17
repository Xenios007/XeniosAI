import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  API_SDK_ASSURANCE_LEVELS, API_SDK_AUTOMATION_CAPABILITIES,
  API_SDK_CLASSIFICATION_DIMENSIONS, API_SDK_DECISION_CLASSES,
  API_SDK_EVIDENCE_QUALITY_FACTORS, API_SDK_GOVERNANCE_ASSURANCE_ERROR_CODE,
  API_SDK_GOVERNANCE_BOUNDARIES, API_SDK_GOVERNANCE_DEFINITIONS,
  API_SDK_GOVERNANCE_LEVELS, API_SDK_GOVERNANCE_LIFECYCLE_DOMAINS,
  API_SDK_GOVERNANCE_MATURITY_LEVELS, API_SDK_GOVERNANCE_OBJECTIVES,
  API_SDK_GOVERNANCE_PRINCIPLES, API_SDK_GOVERNANCE_REVIEW_AREAS,
  API_SDK_GOVERNANCE_ROLES, API_SDK_GOVERNANCE_RULES, API_SDK_LIFECYCLE_GATES,
  API_SDK_POLICY_INSTRUMENTS, API_SDK_PREVENTIVE_CONTROLS,
  API_SDK_REGISTRATION_FIELDS, API_SDK_REPORTING_FIELDS, GovernanceAssuranceDescriptor,
  GovernanceAssuranceProfile, addApiSdk
} from '../../src/api-sdk/index.js';

test('ARCH-017-08 exposes governance objectives, principles, definitions, lifecycle domains, levels, roles, and decision metadata', () => {
  const descriptor = new GovernanceAssuranceDescriptor();
  assert.ok(descriptor.objectives().includes(API_SDK_GOVERNANCE_OBJECTIVES.MEASURABLE_EFFECTIVENESS));
  assert.ok(descriptor.principles().includes(API_SDK_GOVERNANCE_PRINCIPLES.AUTOMATION_INSPECTABLE));
  assert.ok(descriptor.definitions().includes(API_SDK_GOVERNANCE_DEFINITIONS.FINDING));
  assert.ok(descriptor.lifecycleDomains().includes(API_SDK_GOVERNANCE_LIFECYCLE_DOMAINS.CONSUMER_ADOPTION));
  assert.ok(descriptor.governanceLevels().includes(API_SDK_GOVERNANCE_LEVELS.TENANT));
  assert.ok(descriptor.roles().includes(API_SDK_GOVERNANCE_ROLES.EMERGENCY_COMMAND_AUTHORITY));
  assert.ok(descriptor.decisionRecordFields().includes('escalation-authority'));
  assert.ok(descriptor.decisionClasses().includes(API_SDK_DECISION_CLASSES.ASSURANCE));
});

test('ARCH-017-08 exposes registration, policy, classification, risk, control, review, gate, and change governance metadata', () => {
  const descriptor = new GovernanceAssuranceDescriptor();
  assert.ok(descriptor.registrationFields().includes(API_SDK_REGISTRATION_FIELDS.EVIDENCE_EXCEPTIONS));
  assert.ok(descriptor.policyInstruments().includes(API_SDK_POLICY_INSTRUMENTS.CONFORMANCE_PROFILE));
  assert.ok(descriptor.classificationDimensions().includes(API_SDK_CLASSIFICATION_DIMENSIONS.CHANGE));
  assert.ok(descriptor.riskFactors().includes('package-and-dependency-supply-chain'));
  assert.ok(descriptor.controlTypes().includes('hybrid'));
  assert.ok(descriptor.preventiveControls().includes(API_SDK_PREVENTIVE_CONTROLS.PACKAGE_NAMESPACE));
  assert.ok(descriptor.detectiveControls().includes('deprecation-and-exception-expiry-alerts'));
  assert.ok(descriptor.reviewAreas().includes(API_SDK_GOVERNANCE_REVIEW_AREAS.PACKAGE_SUPPLY_CHAIN));
  assert.ok(descriptor.lifecycleGates().includes(API_SDK_LIFECYCLE_GATES.SDK_STABLE_PROMOTION));
  assert.ok(descriptor.changeGovernanceFields().includes('testing-and-conformance-evidence'));
});

test('ARCH-017-08 exposes assurance, evidence, exceptions, issues, automation, reporting, maturity, rules, and boundaries', () => {
  const descriptor = new GovernanceAssuranceDescriptor();
  assert.ok(descriptor.assuranceLevels().includes(API_SDK_ASSURANCE_LEVELS.EXTERNAL_ASSURANCE));
  assert.ok(descriptor.assuranceMethods().includes('package-and-provenance-verification'));
  assert.ok(descriptor.evidenceRecordFields().includes('integrity-and-provenance'));
  assert.ok(descriptor.evidenceQualityFactors().includes(API_SDK_EVIDENCE_QUALITY_FACTORS.INDEPENDENCE));
  assert.ok(descriptor.exceptionFields().includes('revocation-conditions'));
  assert.ok(descriptor.issueFields().includes('escalation-state'));
  assert.ok(descriptor.automationCapabilities().includes(API_SDK_AUTOMATION_CAPABILITIES.DRIFT_ORPHAN));
  assert.ok(descriptor.reportingFields().includes(API_SDK_REPORTING_FIELDS.EVIDENCE));
  assert.ok(descriptor.maturityLevels().includes(API_SDK_GOVERNANCE_MATURITY_LEVELS.ADAPTIVE));
  assert.ok(descriptor.architecturalRules().includes(API_SDK_GOVERNANCE_RULES.UNKNOWN_ESCALATES));
  assert.ok(descriptor.architectureBoundaries().includes(API_SDK_GOVERNANCE_BOUNDARIES.ARCH_012));
});

test('ARCH-017-08 validates complete profiles and rejects governance shortcuts', () => {
  const descriptor = new GovernanceAssuranceDescriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);

  const validation = descriptor.validateProfile({
    accountableOwnerRequired: false,
    evidenceBeforeConclusion: false,
    registryRequired: false,
    unknownEscalates: false,
    assuranceScoped: false,
    unregisteredSupportedProduct: true,
    exceptionPermanent: true,
    automationOpaque: true,
    successfulPublicationProvesSafety: true,
    skippedTestsCountedPassed: true,
    aiUnboundedDecisions: true,
    replacesArch012: true
  });

  assert.equal(validation.isValid, false);
  assert.match(validation.errors.join('\n'), /must have a name/);
  assert.match(validation.errors.join('\n'), /one-accountable-owner/);
  assert.match(validation.errors.join('\n'), /requires every supported API and SDK product/);
  assert.match(validation.errors.join('\n'), /without authoritative registry records/);
  assert.match(validation.errors.join('\n'), /opaque automated policy checks/);
  assert.match(validation.errors.join('\n'), /does not replace enterprise governance/);
});

test('ARCH-017-08 detects incomplete governance metadata', () => {
  class IncompleteDescriptor extends GovernanceAssuranceDescriptor {
    objectives() { return []; }
  }
  assert.throws(
    () => new IncompleteDescriptor().assertArchitecture(),
    (error) => error instanceof PlatformError && error.code === API_SDK_GOVERNANCE_ASSURANCE_ERROR_CODE
  );
});

test('ARCH-017-08 profile is immutable and descriptor is registered', () => {
  const descriptor = addApiSdk(new ServiceCollection())
    .buildServiceProvider()
    .getRequiredService('GovernanceAssuranceDescriptor');
  assert.ok(descriptor instanceof GovernanceAssuranceDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
  const profile = complete(descriptor);
  assert.ok(Object.isFrozen(profile));
  assert.throws(() => profile.objectives.push('other'), TypeError);
});

function complete(descriptor) {
  const metadata = {};
  for (const key of [
    'objectives', 'principles', 'definitions', 'lifecycleDomains', 'governanceLevels',
    'roles', 'decisionRecordFields', 'decisionClasses', 'registrationFields',
    'policyInstruments', 'classificationDimensions', 'riskFactors', 'controlTypes',
    'preventiveControls', 'detectiveControls', 'reviewAreas', 'lifecycleGates',
    'changeGovernanceFields', 'assuranceLevels', 'assuranceMethods', 'evidenceRecordFields',
    'evidenceQualityFactors', 'exceptionFields', 'issueFields', 'automationCapabilities',
    'reportingFields', 'maturityLevels', 'architecturalRules', 'architectureBoundaries'
  ]) metadata[key] = descriptor[key]();
  return new GovernanceAssuranceProfile({
    profileName: 'API and SDK Governance and Assurance',
    ...metadata
  });
}
