import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  FUTURE_POLICY_ARCHITECTURE_CAPABILITIES,
  POLICY_APPLICABILITY_ATTRIBUTES,
  POLICY_ARCHITECTURE_ARCHITECTURAL_RULES,
  POLICY_ARCHITECTURE_OBJECTIVES,
  POLICY_ARCHITECTURE_PRINCIPLES,
  POLICY_ARCHITECTURE_QUALITY_ATTRIBUTES,
  POLICY_ARTIFACT_TYPES,
  POLICY_AS_CODE_REQUIREMENTS,
  POLICY_ASSURANCE_AREAS,
  POLICY_CONFLICT_RESOLUTION_STEPS,
  POLICY_DECISION_POINTS,
  POLICY_DOMAINS,
  POLICY_ENFORCEMENT_TYPES,
  POLICY_EVALUATION_RESULT_FIELDS,
  POLICY_EVIDENCE_TYPES,
  POLICY_EXCEPTION_FIELDS,
  POLICY_HIERARCHY_LEVELS,
  POLICY_IMPLEMENTATION_MECHANISMS,
  POLICY_LIFECYCLE_STAGES,
  POLICY_METRICS,
  POLICY_NEED_SOURCES,
  POLICY_OWNERSHIP_ROLES,
  POLICY_PRECEDENCE_LEVELS,
  POLICY_QUALITY_ATTRIBUTES,
  POLICY_RECORD_FIELDS,
  POLICY_SCOPE_TYPES,
  POLICY_STATUSES,
  GOVERNANCE_COMPLIANCE_ERROR_CODES
} from '../constants.js';
import { PolicyArchitectureProfile } from '../contracts/policy-architecture-profile.js';
import { GovernanceComplianceValidationResult } from '../contracts/governance-compliance-validation-result.js';

export class PolicyArchitectureDescriptor {
  objectives() { return values(POLICY_ARCHITECTURE_OBJECTIVES); }
  principles() { return values(POLICY_ARCHITECTURE_PRINCIPLES); }
  hierarchyLevels() { return values(POLICY_HIERARCHY_LEVELS); }
  artifactTypes() { return values(POLICY_ARTIFACT_TYPES); }
  policyDomains() { return values(POLICY_DOMAINS); }
  ownershipRoles() { return values(POLICY_OWNERSHIP_ROLES); }
  recordFields() { return values(POLICY_RECORD_FIELDS); }
  lifecycleStages() { return values(POLICY_LIFECYCLE_STAGES); }
  needSources() { return values(POLICY_NEED_SOURCES); }
  statuses() { return values(POLICY_STATUSES); }
  applicabilityAttributes() { return values(POLICY_APPLICABILITY_ATTRIBUTES); }
  scopeTypes() { return values(POLICY_SCOPE_TYPES); }
  precedenceLevels() { return values(POLICY_PRECEDENCE_LEVELS); }
  conflictResolutionSteps() { return values(POLICY_CONFLICT_RESOLUTION_STEPS); }
  implementationMechanisms() { return values(POLICY_IMPLEMENTATION_MECHANISMS); }
  enforcementTypes() { return values(POLICY_ENFORCEMENT_TYPES); }
  decisionPoints() { return values(POLICY_DECISION_POINTS); }
  policyAsCodeRequirements() { return values(POLICY_AS_CODE_REQUIREMENTS); }
  evaluationResultFields() { return values(POLICY_EVALUATION_RESULT_FIELDS); }
  exceptionFields() { return values(POLICY_EXCEPTION_FIELDS); }
  evidenceTypes() { return values(POLICY_EVIDENCE_TYPES); }
  assuranceAreas() { return values(POLICY_ASSURANCE_AREAS); }
  metrics() { return values(POLICY_METRICS); }
  policyQualityAttributes() { return values(POLICY_QUALITY_ATTRIBUTES); }
  qualityAttributes() { return values(POLICY_ARCHITECTURE_QUALITY_ATTRIBUTES); }
  architecturalRules() { return values(POLICY_ARCHITECTURE_ARCHITECTURAL_RULES); }
  futureCapabilities() { return values(FUTURE_POLICY_ARCHITECTURE_CAPABILITIES); }

  validateProfile(profileInput) {
    const profile = profileInput instanceof PolicyArchitectureProfile
      ? profileInput
      : new PolicyArchitectureProfile(profileInput);
    const errors = [];

    if (!profile.policyArchitectureName) errors.push('Policy architecture profile must have a name.');
    appendMissing(errors, profile.objectives, this.objectives(), 'Policy Architecture objectives must include');
    appendMissing(errors, profile.principles, this.principles(), 'Policy Architecture principles must include');
    appendMissing(errors, profile.hierarchyLevels, this.hierarchyLevels(), 'Policy hierarchy must include');
    appendMissing(errors, profile.artifactTypes, this.artifactTypes(), 'Policy artifact types must include');
    appendMissing(errors, profile.policyDomains, this.policyDomains(), 'Policy domains must include');
    appendMissing(errors, profile.ownershipRoles, this.ownershipRoles(), 'Policy ownership roles must include');
    appendMissing(errors, profile.recordFields, this.recordFields(), 'Policy records should include');
    appendMissing(errors, profile.lifecycleStages, this.lifecycleStages(), 'Policy lifecycle must include');
    appendMissing(errors, profile.needSources, this.needSources(), 'Policy need sources must include');
    appendMissing(errors, profile.statuses, this.statuses(), 'Policy statuses must include');
    appendMissing(errors, profile.applicabilityAttributes, this.applicabilityAttributes(), 'Policy applicability attributes must include');
    appendMissing(errors, profile.scopeTypes, this.scopeTypes(), 'Policy scope types must include');
    appendMissing(errors, profile.precedenceLevels, this.precedenceLevels(), 'Policy precedence must include');
    appendMissing(errors, profile.conflictResolutionSteps, this.conflictResolutionSteps(), 'Policy conflict resolution must include');
    appendMissing(errors, profile.implementationMechanisms, this.implementationMechanisms(), 'Policy implementation mechanisms must include');
    appendMissing(errors, profile.enforcementTypes, this.enforcementTypes(), 'Policy enforcement types must include');
    appendMissing(errors, profile.decisionPoints, this.decisionPoints(), 'Policy decision points must include');
    appendMissing(errors, profile.policyAsCodeRequirements, this.policyAsCodeRequirements(), 'Policy as code requirements must include');
    appendMissing(errors, profile.evaluationResultFields, this.evaluationResultFields(), 'Policy evaluation result fields must include');
    appendMissing(errors, profile.exceptionFields, this.exceptionFields(), 'Policy exception fields must include');
    appendMissing(errors, profile.evidenceTypes, this.evidenceTypes(), 'Policy evidence types must include');
    appendMissing(errors, profile.assuranceAreas, this.assuranceAreas(), 'Policy assurance areas must include');
    appendMissing(errors, profile.metrics, this.metrics(), 'Policy metrics must include');
    appendMissing(errors, profile.policyQualityAttributes, this.policyQualityAttributes(), 'Policy quality attributes must include');
    appendMissing(errors, profile.qualityAttributes, this.qualityAttributes(), 'Policy Architecture quality attributes must include');
    appendMissing(errors, profile.architecturalRules, this.architecturalRules(), 'Policy Architecture architectural rules must include');
    appendMissing(errors, profile.futureCapabilities, this.futureCapabilities(), 'Future Policy Architecture capabilities must include');
    if (profile.purposeRequired !== true) errors.push('A policy must state its purpose.');
    if (profile.authorityExplicit !== true) errors.push('Policy authority must be explicit.');
    if (profile.technologyIndependent !== true) errors.push('Policy Architecture must remain technology independent.');
    if (profile.applicabilityDeterminable !== true) errors.push('Policy applicability must be determinable.');
    if (profile.lowerLevelRulesAlignUpward !== true) errors.push('Lower-level rules must align upward.');
    if (profile.controlsImplementPolicy !== true) errors.push('Controls and procedures implement and evidence policy.');
    if (profile.exceptionsGoverned !== true) errors.push('Policy exceptions must be governed.');
    if (profile.changeControlled !== true) errors.push('Policy change must be controlled.');
    if (profile.humanReadablePolicyAuthoritative !== true) errors.push('Human-readable approved policy remains authoritative unless governance defines otherwise.');
    if (profile.policyAsCodeImplementationOnly !== true) errors.push('Policy as code is an implementation form of machine-readable policy.');
    if (profile.codeRepositoryAccessNotPolicyAuthority !== true) errors.push('Code repository access does not create authority to change policy.');
    if (profile.aiInferenceGoverned !== true) errors.push('AI-assisted policy inference must be governed.');
    if (profile.probabilisticOutputNotCertainCompliance !== true) errors.push('Probabilistic output must not be represented as certain compliance.');
    if (profile.tenantPolicyCannotWeakenMandatoryControls !== true) errors.push('Tenant policy may not weaken mandatory enterprise controls without authorized exception.');
    if (profile.policyExceptionCannotAuthorizeUnlawfulBehavior !== true) errors.push('A policy exception cannot authorize unlawful behavior.');
    if (profile.evidencePreservesVersionAndApplicability !== true) errors.push('Policy evidence must preserve version and applicability at event time.');
    if (profile.metricsEvaluateEffectiveness !== true) errors.push('Policy metrics should evaluate effectiveness rather than document count.');
    if (profile.policyGovernsArchitectureWithoutReplacingDesign !== true) errors.push('Policy Architecture governs architecture without replacing design.');
    if (profile.vendorNeutral !== true) errors.push('Policy Architecture must remain vendor neutral.');
    if (profile.prescribesLegalInterpretation === true) errors.push('Specific legal interpretations are outside Policy Architecture scope.');
    if (profile.prescribesImplementationTechnology === true) errors.push('Implementation-level technologies are outside Policy Architecture scope.');
    if (profile.implementsRuntimePolicyEngine === true) errors.push('ARCH-012-03 does not implement a runtime policy engine.');

    return validation(errors);
  }

  assertArchitecture() {
    const errors = [];

    assertLength(errors, this.objectives(), 14, 'objectives');
    assertLength(errors, this.principles(), 9, 'principles');
    assertLength(errors, this.hierarchyLevels(), 7, 'hierarchy levels');
    assertLength(errors, this.artifactTypes(), 10, 'artifact types');
    assertLength(errors, this.policyDomains(), 23, 'policy domains');
    assertLength(errors, this.ownershipRoles(), 7, 'ownership roles');
    assertLength(errors, this.recordFields(), 26, 'policy record fields');
    assertLength(errors, this.lifecycleStages(), 12, 'lifecycle stages');
    assertLength(errors, this.needSources(), 15, 'policy need sources');
    assertLength(errors, this.statuses(), 11, 'policy statuses');
    assertLength(errors, this.applicabilityAttributes(), 20, 'applicability attributes');
    assertLength(errors, this.scopeTypes(), 11, 'scope types');
    assertLength(errors, this.precedenceLevels(), 8, 'precedence levels');
    assertLength(errors, this.conflictResolutionSteps(), 10, 'conflict resolution steps');
    assertLength(errors, this.implementationMechanisms(), 15, 'implementation mechanisms');
    assertLength(errors, this.enforcementTypes(), 9, 'enforcement types');
    assertLength(errors, this.decisionPoints(), 17, 'decision points');
    assertLength(errors, this.policyAsCodeRequirements(), 11, 'policy as code requirements');
    assertLength(errors, this.evaluationResultFields(), 15, 'evaluation result fields');
    assertLength(errors, this.exceptionFields(), 15, 'exception fields');
    assertLength(errors, this.evidenceTypes(), 16, 'evidence types');
    assertLength(errors, this.assuranceAreas(), 12, 'assurance areas');
    assertLength(errors, this.metrics(), 15, 'metrics');
    assertLength(errors, this.policyQualityAttributes(), 12, 'policy quality attributes');
    assertLength(errors, this.qualityAttributes(), 12, 'quality attributes');
    assertLength(errors, this.architecturalRules(), 18, 'architectural rules');
    assertLength(errors, this.futureCapabilities(), 13, 'future capabilities');

    if (errors.length > 0) {
      throw new PlatformError(
        GOVERNANCE_COMPLIANCE_ERROR_CODES.POLICY_ARCHITECTURE_INVALID,
        'Policy Architecture violates ARCH-012-03.',
        { errors }
      );
    }

    return validation(errors);
  }
}

function values(source) {
  return Object.freeze(Object.values(source));
}

function appendMissing(errors, actual, expected, message) {
  for (const item of expected) {
    if (!actual.includes(item)) errors.push(`${message} ${item}.`);
  }
}

function assertLength(errors, actual, expected, label) {
  if (actual.length !== expected) errors.push(`Policy Architecture must include documented ${label}.`);
}

function validation(errors) {
  return new GovernanceComplianceValidationResult({
    isValid: errors.length === 0,
    errors
  });
}
