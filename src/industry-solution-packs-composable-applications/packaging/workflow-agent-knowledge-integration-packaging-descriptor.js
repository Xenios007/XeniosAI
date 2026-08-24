import { PlatformError } from '../../foundation/errors/platform-error.js';
import { WorkflowAgentKnowledgeIntegrationPackagingProfile as Profile } from '../contracts/workflow-agent-knowledge-integration-packaging-profile.js';
import * as constants from '../workflow-agent-knowledge-integration-packaging-constants.js';

const metadata = Object.freeze({ packageFields: constants.AUTOMATION_PACKAGE_FIELDS, workflowFields: constants.WORKFLOW_PACKAGE_FIELDS, agentFields: constants.AGENT_PACKAGE_FIELDS, promptFields: constants.PROMPT_PACKAGE_FIELDS, toolFields: constants.TOOL_PACKAGE_FIELDS, knowledgeFields: constants.KNOWLEDGE_PACKAGE_FIELDS, connectorFields: constants.CONNECTOR_PACKAGE_FIELDS, permissionFields: constants.PERMISSION_PACKAGE_FIELDS, testFields: constants.PACKAGE_TEST_FIELDS, contractFields: constants.AUTOMATION_PACKAGE_CONTRACT_FIELDS, lifecycleStates: constants.AUTOMATION_PACKAGE_LIFECYCLE_STATES, controls: constants.AUTOMATION_PACKAGE_CONTROLS, failureRecovery: constants.AUTOMATION_PACKAGE_FAILURE_RECOVERY, observabilityFields: constants.AUTOMATION_PACKAGE_OBSERVABILITY_FIELDS, assuranceEvidence: constants.AUTOMATION_PACKAGE_ASSURANCE_EVIDENCE, invariants: constants.AUTOMATION_PACKAGE_INVARIANTS });
const required = Object.freeze({ artifactsVersionLocked: 'requires version-locked artifacts', workflowsArch015Governed: 'requires ARCH-015 governed workflows', agentsIdentifiedAndBounded: 'requires identified bounded agents', promptsVersionedAndEvaluated: 'requires versioned evaluated prompts', toolsAuthorizedAndMediated: 'requires authorized mediated tools', knowledgeApprovedAndProvenanced: 'requires approved provenance-backed knowledge', connectorsGoverned: 'requires governed connectors', permissionsLeastPrivilege: 'requires least-privilege permissions', testsRequired: 'requires test and conformance gates', lifecycleGoverned: 'requires governed lifecycle', providerAuthorityPreserved: 'requires preserved provider authority' });
const prohibited = Object.freeze({ mutablePackageInPlace: 'prohibits in-place package mutation', workflowBypassesProvider: 'prohibits workflows bypassing providers', agentUsesSharedIdentity: 'prohibits shared agent identity', promptChangesProductionDirectly: 'prohibits prompts directly changing production behavior', unrestrictedTool: 'prohibits unrestricted tools', unapprovedKnowledge: 'prohibits unapproved knowledge', connectorDirectDatabaseAccess: 'prohibits connector direct database access', wildcardPermission: 'prohibits wildcard permissions', testsSkipped: 'prohibits skipped test gates', installationGrantsRuntimeAuthority: 'prohibits installation granting runtime authority', optimisticCompletionInferred: 'prohibits inferred optimistic completion', protectedPayloadInTelemetry: 'prohibits protected payloads in telemetry' });

export class WorkflowAgentKnowledgeIntegrationPackagingDescriptor {
  packageFields() { return values(metadata.packageFields); }
  workflowFields() { return values(metadata.workflowFields); }
  agentFields() { return values(metadata.agentFields); }
  promptFields() { return values(metadata.promptFields); }
  toolFields() { return values(metadata.toolFields); }
  knowledgeFields() { return values(metadata.knowledgeFields); }
  connectorFields() { return values(metadata.connectorFields); }
  permissionFields() { return values(metadata.permissionFields); }
  testFields() { return values(metadata.testFields); }
  contractFields() { return values(metadata.contractFields); }
  lifecycleStates() { return values(metadata.lifecycleStates); }
  controls() { return values(metadata.controls); }
  failureRecovery() { return values(metadata.failureRecovery); }
  observabilityFields() { return values(metadata.observabilityFields); }
  assuranceEvidence() { return values(metadata.assuranceEvidence); }
  invariants() { return values(metadata.invariants); }

  validateProfile(input) {
    const profile = input instanceof Profile ? input : new Profile(input);
    const errors = [];
    if (!profile.profileName) errors.push('Workflow Agent Knowledge and Integration Packaging profile must have a name.');
    for (const [key, source] of Object.entries(metadata)) for (const item of values(source)) if (!profile[key].includes(item)) errors.push(`${key} must include ${item}.`);
    for (const [key, message] of Object.entries(required)) if (!profile[key]) errors.push(`ARCH-030-06 ${message}.`);
    for (const [key, message] of Object.entries(prohibited)) if (profile[key]) errors.push(`ARCH-030-06 ${message}.`);
    return Object.freeze({ isValid: errors.length === 0, errors: Object.freeze(errors) });
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(metadata)) if (this[key]().length !== Object.keys(source).length) errors.push(`${key} is incomplete.`);
    if (errors.length) throw new PlatformError(constants.WORKFLOW_AGENT_KNOWLEDGE_INTEGRATION_PACKAGING_ERROR_CODE, 'Workflow Agent Knowledge and Integration Packaging violates ARCH-030-06.', { errors });
    return Object.freeze({ isValid: true, errors: Object.freeze([]) });
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
