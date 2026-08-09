import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  ENTERPRISE_OPERATIONS_ACTOR_TYPES,
  ENTERPRISE_OPERATIONS_AUTOMATED_ACTORS,
  ENTERPRISE_OPERATIONS_CAPABILITY_GROUPS,
  ENTERPRISE_OPERATIONS_CHANGE_CAPABILITIES,
  ENTERPRISE_OPERATIONS_CONTROL_FLOW_STAGES,
  ENTERPRISE_OPERATIONS_DIRECT_CAPABILITIES,
  ENTERPRISE_OPERATIONS_DOMAINS,
  ENTERPRISE_OPERATIONS_ERROR_CODES,
  ENTERPRISE_OPERATIONS_ESCALATION_TRIGGERS,
  ENTERPRISE_OPERATIONS_GOVERNANCE_FOUNDATIONS,
  ENTERPRISE_OPERATIONS_HIGH_IMPACT_DECISION_REQUIREMENTS,
  ENTERPRISE_OPERATIONS_HUMAN_ACTORS,
  ENTERPRISE_OPERATIONS_HUMAN_AUTOMATION_COLLABORATION_REQUIREMENTS,
  ENTERPRISE_OPERATIONS_IMPROVE_CAPABILITIES,
  ENTERPRISE_OPERATIONS_INFORMATION_TYPES,
  ENTERPRISE_OPERATIONS_LANDSCAPE_STAGES,
  ENTERPRISE_OPERATIONS_OPERATE_CAPABILITIES,
  ENTERPRISE_OPERATIONS_OPERATING_MODES,
  ENTERPRISE_OPERATIONS_OPERATIONAL_STATES,
  ENTERPRISE_OPERATIONS_OVERVIEW_ARCHITECTURAL_RULES,
  ENTERPRISE_OPERATIONS_OVERVIEW_OBJECTIVES,
  ENTERPRISE_OPERATIONS_OVERVIEW_RELATIONSHIP_STAGES,
  ENTERPRISE_OPERATIONS_PRIORITY_FACTORS,
  ENTERPRISE_OPERATIONS_PROTECT_CAPABILITIES,
  ENTERPRISE_OPERATIONS_QUALITY_ATTRIBUTES,
  ENTERPRISE_OPERATIONS_RESPONSIBILITY_TYPES,
  ENTERPRISE_OPERATIONS_SCOPE_BOUNDARIES,
  EnterpriseOperationsOverviewDescriptor,
  EnterpriseOperationsOverviewProfile,
  FUTURE_ENTERPRISE_OPERATIONS_CAPABILITIES,
  addEnterpriseOperations
} from '../../src/enterprise-operations/index.js';

test('enterprise operations overview exposes documented objectives, landscape, capability groups, and control flow', () => {
  const descriptor = new EnterpriseOperationsOverviewDescriptor();

  assert.deepEqual(descriptor.objectives(), Object.values(ENTERPRISE_OPERATIONS_OVERVIEW_OBJECTIVES));
  assert.deepEqual(descriptor.landscapeStages(), Object.values(ENTERPRISE_OPERATIONS_LANDSCAPE_STAGES));
  assert.deepEqual(descriptor.capabilityGroups(), Object.values(ENTERPRISE_OPERATIONS_CAPABILITY_GROUPS));
  assert.deepEqual(descriptor.controlFlowStages(), Object.values(ENTERPRISE_OPERATIONS_CONTROL_FLOW_STAGES));
});

test('enterprise operations overview exposes actors, operating metadata, governance, rules, and future direction', () => {
  const descriptor = new EnterpriseOperationsOverviewDescriptor();

  assert.ok(descriptor.directCapabilities().includes(ENTERPRISE_OPERATIONS_DIRECT_CAPABILITIES.DECISION_AUTHORITY));
  assert.ok(descriptor.operateCapabilities().includes(ENTERPRISE_OPERATIONS_OPERATE_CAPABILITIES.PLATFORM_OPERATIONS));
  assert.ok(descriptor.protectCapabilities().includes(ENTERPRISE_OPERATIONS_PROTECT_CAPABILITIES.CONTINUITY_MANAGEMENT));
  assert.ok(descriptor.changeCapabilities().includes(ENTERPRISE_OPERATIONS_CHANGE_CAPABILITIES.ROLLBACK_AND_RECOVERY));
  assert.ok(descriptor.improveCapabilities().includes(ENTERPRISE_OPERATIONS_IMPROVE_CAPABILITIES.OPERATIONAL_MATURITY_MANAGEMENT));
  assert.ok(descriptor.domains().includes(ENTERPRISE_OPERATIONS_DOMAINS.SECURITY_OPERATIONS));
  assert.ok(descriptor.actorTypes().includes(ENTERPRISE_OPERATIONS_ACTOR_TYPES.AUTOMATED));
  assert.ok(descriptor.humanActors().includes(ENTERPRISE_OPERATIONS_HUMAN_ACTORS.INCIDENT_COMMANDERS));
  assert.ok(descriptor.automatedActors().includes(ENTERPRISE_OPERATIONS_AUTOMATED_ACTORS.RECOVERY_CONTROLLERS));
  assert.ok(descriptor.responsibilityTypes().includes(ENTERPRISE_OPERATIONS_RESPONSIBILITY_TYPES.RISK_ACCEPTANCE));
  assert.ok(descriptor.informationTypes().includes(ENTERPRISE_OPERATIONS_INFORMATION_TYPES.VERIFICATION_EVIDENCE));
  assert.ok(descriptor.operationalStates().includes(ENTERPRISE_OPERATIONS_OPERATIONAL_STATES.IMPROVEMENT_REQUIRED));
  assert.ok(descriptor.priorityFactors().includes(ENTERPRISE_OPERATIONS_PRIORITY_FACTORS.AVAILABILITY_OF_ALTERNATIVES));
  assert.ok(descriptor.highImpactDecisionRequirements().includes(ENTERPRISE_OPERATIONS_HIGH_IMPACT_DECISION_REQUIREMENTS.TENANT_OR_PROPERTY_COMMUNICATION));
  assert.ok(descriptor.escalationTriggers().includes(ENTERPRISE_OPERATIONS_ESCALATION_TRIGGERS.NEED_FOR_GREATER_DECISION_AUTHORITY));
  assert.ok(descriptor.operatingModes().includes(ENTERPRISE_OPERATIONS_OPERATING_MODES.CRISIS));
  assert.ok(descriptor.collaborationRequirements().includes(ENTERPRISE_OPERATIONS_HUMAN_AUTOMATION_COLLABORATION_REQUIREMENTS.HUMAN_TAKEOVER));
  assert.ok(descriptor.scopeBoundaries().includes(ENTERPRISE_OPERATIONS_SCOPE_BOUNDARIES.PARTNER_SPECIFIC_CONDITIONS));
  assert.ok(descriptor.relationshipFlow().includes(ENTERPRISE_OPERATIONS_OVERVIEW_RELATIONSHIP_STAGES.GOVERNED_ACTION_AND_BUSINESS_OUTCOMES));
  assert.ok(descriptor.qualityAttributes().includes(ENTERPRISE_OPERATIONS_QUALITY_ATTRIBUTES.BUSINESS_CONTINUITY));
  assert.ok(descriptor.governanceFoundations().includes(ENTERPRISE_OPERATIONS_GOVERNANCE_FOUNDATIONS.IMPROVEMENT_COMMITMENTS));
  assert.ok(descriptor.architecturalRules().includes(ENTERPRISE_OPERATIONS_OVERVIEW_ARCHITECTURAL_RULES.VERIFY_OPERATIONAL_ACTION_OUTCOMES));
  assert.ok(descriptor.futureCapabilities().includes(FUTURE_ENTERPRISE_OPERATIONS_CAPABILITIES.BUSINESS_IMPACT_SIMULATION));
});

test('enterprise operations overview validates complete governed overview profiles', () => {
  const descriptor = new EnterpriseOperationsOverviewDescriptor();
  const valid = descriptor.validateProfile(
    new EnterpriseOperationsOverviewProfile({
      overviewName: 'Enterprise Operations Overview',
      objectives: Object.values(ENTERPRISE_OPERATIONS_OVERVIEW_OBJECTIVES),
      landscapeStages: Object.values(ENTERPRISE_OPERATIONS_LANDSCAPE_STAGES),
      capabilityGroups: Object.values(ENTERPRISE_OPERATIONS_CAPABILITY_GROUPS),
      directCapabilities: Object.values(ENTERPRISE_OPERATIONS_DIRECT_CAPABILITIES),
      operateCapabilities: Object.values(ENTERPRISE_OPERATIONS_OPERATE_CAPABILITIES),
      protectCapabilities: Object.values(ENTERPRISE_OPERATIONS_PROTECT_CAPABILITIES),
      changeCapabilities: Object.values(ENTERPRISE_OPERATIONS_CHANGE_CAPABILITIES),
      improveCapabilities: Object.values(ENTERPRISE_OPERATIONS_IMPROVE_CAPABILITIES),
      domains: Object.values(ENTERPRISE_OPERATIONS_DOMAINS),
      actorTypes: Object.values(ENTERPRISE_OPERATIONS_ACTOR_TYPES),
      humanActors: Object.values(ENTERPRISE_OPERATIONS_HUMAN_ACTORS),
      automatedActors: Object.values(ENTERPRISE_OPERATIONS_AUTOMATED_ACTORS),
      responsibilityTypes: Object.values(ENTERPRISE_OPERATIONS_RESPONSIBILITY_TYPES),
      informationTypes: Object.values(ENTERPRISE_OPERATIONS_INFORMATION_TYPES),
      controlFlowStages: Object.values(ENTERPRISE_OPERATIONS_CONTROL_FLOW_STAGES),
      operationalStates: Object.values(ENTERPRISE_OPERATIONS_OPERATIONAL_STATES),
      priorityFactors: Object.values(ENTERPRISE_OPERATIONS_PRIORITY_FACTORS),
      highImpactDecisionRequirements: Object.values(ENTERPRISE_OPERATIONS_HIGH_IMPACT_DECISION_REQUIREMENTS),
      escalationTriggers: Object.values(ENTERPRISE_OPERATIONS_ESCALATION_TRIGGERS),
      operatingModes: Object.values(ENTERPRISE_OPERATIONS_OPERATING_MODES),
      collaborationRequirements: Object.values(ENTERPRISE_OPERATIONS_HUMAN_AUTOMATION_COLLABORATION_REQUIREMENTS),
      scopeBoundaries: Object.values(ENTERPRISE_OPERATIONS_SCOPE_BOUNDARIES),
      relationshipStages: Object.values(ENTERPRISE_OPERATIONS_OVERVIEW_RELATIONSHIP_STAGES),
      qualityAttributes: Object.values(ENTERPRISE_OPERATIONS_QUALITY_ATTRIBUTES),
      governanceFoundations: Object.values(ENTERPRISE_OPERATIONS_GOVERNANCE_FOUNDATIONS),
      architecturalRules: Object.values(ENTERPRISE_OPERATIONS_OVERVIEW_ARCHITECTURAL_RULES),
      futureCapabilities: Object.values(FUTURE_ENTERPRISE_OPERATIONS_CAPABILITIES)
    })
  );
  const invalid = descriptor.validateProfile({
    overviewName: '',
    objectives: [ENTERPRISE_OPERATIONS_OVERVIEW_OBJECTIVES.RELIABLE_BUSINESS_AND_PLATFORM_EXECUTION],
    landscapeStages: [ENTERPRISE_OPERATIONS_LANDSCAPE_STAGES.ENTERPRISE_OBJECTIVES],
    capabilityGroups: [ENTERPRISE_OPERATIONS_CAPABILITY_GROUPS.DIRECT],
    directCapabilities: [ENTERPRISE_OPERATIONS_DIRECT_CAPABILITIES.OPERATIONAL_STRATEGY],
    operateCapabilities: [ENTERPRISE_OPERATIONS_OPERATE_CAPABILITIES.BUSINESS_OPERATIONS],
    protectCapabilities: [ENTERPRISE_OPERATIONS_PROTECT_CAPABILITIES.EVENT_MANAGEMENT],
    changeCapabilities: [ENTERPRISE_OPERATIONS_CHANGE_CAPABILITIES.CHANGE_ASSESSMENT],
    improveCapabilities: [ENTERPRISE_OPERATIONS_IMPROVE_CAPABILITIES.PERFORMANCE_MANAGEMENT],
    domains: [ENTERPRISE_OPERATIONS_DOMAINS.BUSINESS_OPERATIONS],
    actorTypes: [ENTERPRISE_OPERATIONS_ACTOR_TYPES.HUMAN],
    humanActors: [ENTERPRISE_OPERATIONS_HUMAN_ACTORS.ENTERPRISE_OPERATIONS_LEADERS],
    automatedActors: [ENTERPRISE_OPERATIONS_AUTOMATED_ACTORS.POLICY_ENGINES],
    responsibilityTypes: [ENTERPRISE_OPERATIONS_RESPONSIBILITY_TYPES.ACCOUNTABILITY],
    informationTypes: [ENTERPRISE_OPERATIONS_INFORMATION_TYPES.BUSINESS_IMPACT],
    controlFlowStages: [ENTERPRISE_OPERATIONS_CONTROL_FLOW_STAGES.OBSERVE],
    operationalStates: [ENTERPRISE_OPERATIONS_OPERATIONAL_STATES.NORMAL],
    priorityFactors: [ENTERPRISE_OPERATIONS_PRIORITY_FACTORS.BUSINESS_CRITICALITY],
    highImpactDecisionRequirements: [ENTERPRISE_OPERATIONS_HIGH_IMPACT_DECISION_REQUIREMENTS.HUMAN_APPROVAL],
    escalationTriggers: [ENTERPRISE_OPERATIONS_ESCALATION_TRIGGERS.INCREASING_BUSINESS_IMPACT],
    operatingModes: [ENTERPRISE_OPERATIONS_OPERATING_MODES.NORMAL],
    collaborationRequirements: [ENTERPRISE_OPERATIONS_HUMAN_AUTOMATION_COLLABORATION_REQUIREMENTS.CLEAR_ACTION_ATTRIBUTION],
    scopeBoundaries: [ENTERPRISE_OPERATIONS_SCOPE_BOUNDARIES.ENTERPRISE_WIDE_CONDITIONS],
    relationshipStages: [ENTERPRISE_OPERATIONS_OVERVIEW_RELATIONSHIP_STAGES.ARCHITECTURE_AND_POLICY],
    qualityAttributes: [ENTERPRISE_OPERATIONS_QUALITY_ATTRIBUTES.RELIABILITY],
    governanceFoundations: [ENTERPRISE_OPERATIONS_GOVERNANCE_FOUNDATIONS.OPERATIONAL_POLICIES],
    architecturalRules: [ENTERPRISE_OPERATIONS_OVERVIEW_ARCHITECTURAL_RULES.BEGIN_WITH_BUSINESS_AND_GUEST_OUTCOMES],
    futureCapabilities: [FUTURE_ENTERPRISE_OPERATIONS_CAPABILITIES.PREDICTIVE_OPERATIONS],
    businessOutcomeProtected: false,
    operationalConditionObservable: false,
    ownershipAndDecisionAuthorityExplicit: false,
    actionPolicyGoverned: false,
    outcomeVerified: false,
    informationTrustworthyContextualCorrelated: false,
    signalNotResponseAlone: false,
    tenantPropertyIsolationPreserved: false,
    automationAugmentsHumanOperators: false,
    aiRecommendationsNotAuthoritativeByDefault: false,
    technicalSeverityNotSolePriority: false,
    technologyNeutral: false,
    vendorNeutral: false,
    replacesDomainOwnership: true,
    replacesSecurityArchitecture: true,
    replacesObservabilityArchitecture: true,
    governanceComplianceSpecific: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must have a name/);
  assert.match(invalid.errors.join('\n'), /consistent-operational-practices/);
  assert.match(invalid.errors.join('\n'), /Business and Guest Outcomes/);
  assert.match(invalid.errors.join('\n'), /operate/);
  assert.match(invalid.errors.join('\n'), /command-and-control/);
  assert.match(invalid.errors.join('\n'), /property-operations/);
  assert.match(invalid.errors.join('\n'), /incident-management/);
  assert.match(invalid.errors.join('\n'), /release-coordination/);
  assert.match(invalid.errors.join('\n'), /capacity-planning/);
  assert.match(invalid.errors.join('\n'), /property-operators/);
  assert.match(invalid.errors.join('\n'), /ai-agents/);
  assert.match(invalid.errors.join('\n'), /decision-authority/);
  assert.match(invalid.errors.join('\n'), /guest-impact/);
  assert.match(invalid.errors.join('\n'), /Contextualize/);
  assert.match(invalid.errors.join('\n'), /at-risk/);
  assert.match(invalid.errors.join('\n'), /guest-impact/);
  assert.match(invalid.errors.join('\n'), /multiple-role-authorization/);
  assert.match(invalid.errors.join('\n'), /missed-response-objectives/);
  assert.match(invalid.errors.join('\n'), /degraded-operations/);
  assert.match(invalid.errors.join('\n'), /policy-controlled-permissions/);
  assert.match(invalid.errors.join('\n'), /shared-platform-conditions/);
  assert.match(invalid.errors.join('\n'), /Business Capabilities/);
  assert.match(invalid.errors.join('\n'), /availability/);
  assert.match(invalid.errors.join('\n'), /service-ownership/);
  assert.match(invalid.errors.join('\n'), /define-accountable-operational-ownership/);
  assert.match(invalid.errors.join('\n'), /autonomous-remediation/);
  assert.match(invalid.errors.join('\n'), /business outcomes/);
  assert.match(invalid.errors.join('\n'), /signal alone/);
  assert.match(invalid.errors.join('\n'), /AI-generated operational recommendations/);
  assert.match(invalid.errors.join('\n'), /ARCH-012/);
});

test('enterprise operations overview assertion rejects incomplete metadata', () => {
  class IncompleteEnterpriseOperationsOverviewDescriptor extends EnterpriseOperationsOverviewDescriptor {
    objectives() {
      return [];
    }
  }

  assert.throws(
    () => new IncompleteEnterpriseOperationsOverviewDescriptor().assertArchitecture(),
    error =>
      error instanceof PlatformError &&
      error.code === ENTERPRISE_OPERATIONS_ERROR_CODES.ENTERPRISE_OPERATIONS_OVERVIEW_INVALID &&
      error.details.errors.some(message => message.includes('documented objectives'))
  );
});

test('enterprise operations overview descriptor is available through DI registration', () => {
  const services = new ServiceCollection();

  addEnterpriseOperations(services);
  const provider = services.buildServiceProvider();
  const descriptor = provider.getRequiredService('EnterpriseOperationsOverviewDescriptor');

  assert.ok(descriptor instanceof EnterpriseOperationsOverviewDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
});
