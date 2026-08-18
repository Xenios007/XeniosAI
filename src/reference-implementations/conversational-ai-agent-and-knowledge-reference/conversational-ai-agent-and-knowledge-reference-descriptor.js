import { PlatformError } from '../../foundation/errors/platform-error.js';
import { ReferenceImplementationValidationResult } from '../contracts/reference-implementation-validation-result.js';
import { ConversationalAiAgentAndKnowledgeReferenceProfile } from '../contracts/conversational-ai-agent-and-knowledge-reference-profile.js';
import * as constants from '../conversational-ai-agent-and-knowledge-reference-constants.js';

const METADATA = Object.freeze({
  referenceFlowSteps: constants.REFERENCE_FLOW_STEPS, normalizedRequestFields: constants.NORMALIZED_REQUEST_FIELDS,
  orchestratorResponsibilities: constants.ORCHESTRATOR_RESPONSIBILITIES, orchestratorExclusions: constants.ORCHESTRATOR_EXCLUSIONS,
  toolAttributes: constants.TOOL_ATTRIBUTES, toolExamples: constants.TOOL_EXAMPLES, agentAttributes: constants.AGENT_ATTRIBUTES,
  knowledgeSources: constants.KNOWLEDGE_SOURCES, knowledgeIngestionLineageFields: constants.KNOWLEDGE_INGESTION_LINEAGE_FIELDS,
  memoryQualities: constants.MEMORY_QUALITIES, groundingCategories: constants.GROUNDING_CATEGORIES,
  humanSupervisionMaterialActions: constants.HUMAN_SUPERVISION_MATERIAL_ACTIONS, safetyCases: constants.SAFETY_CASES,
  evaluationDimensions: constants.EVALUATION_DIMENSIONS, evaluationDatasetCategories: constants.EVALUATION_DATASET_CATEGORIES,
  referenceAcceptanceCriteria: constants.CONVERSATIONAL_REFERENCE_ACCEPTANCE_CRITERIA,
  architecturalRules: constants.CONVERSATIONAL_ARCHITECTURAL_RULES
});

const REQUIRED_TRUE = Object.freeze({
  aiCannotAlterBusinessStateWithoutGovernedToolOrWorkflow: 'ARCH-020-05 requires AI to be unable to alter business state without a governed tool or workflow.',
  toolProvidersValidateActorTenantPropertyAndResource: 'ARCH-020-05 requires tool providers to validate actor, tenant, property, and resource.',
  retrievalCannotCrossTenantOrPropertyPolicy: 'ARCH-020-05 requires retrieval to be unable to cross tenant or property policy.',
  memoryAdmissionIsExplicit: 'ARCH-020-05 requires memory admission to be explicit.',
  agentBudgetsAndStopConditionsAreEnforced: 'ARCH-020-05 requires agent budgets and stop conditions to be enforced.',
  unsupportedAnswersStateUncertaintyOrEscalate: 'ARCH-020-05 requires unsupported answers to state uncertainty or escalate.',
  aiInterpretsAndOrchestratesWhileDeterministicProvidersExecute: 'ARCH-020-05 requires AI to interpret and orchestrate while deterministic providers execute.',
  toolDiscoveryAndInvocationAreSeparateAuthorizationDecisions: 'ARCH-020-05 requires tool discovery and invocation to be separate authorization decisions.',
  knowledgeRetrievalIsNotAuthority: 'ARCH-020-05 requires knowledge retrieval to not be authority.',
  memoryIsDeliberateAndPurposeBound: 'ARCH-020-05 requires memory to be deliberate and purpose bound.',
  evaluationsAreReleaseAndOperationalEvidence: 'ARCH-020-05 requires evaluations to be release and operational evidence.',
  delegationCanOnlyNarrowAuthority: 'ARCH-020-05 requires delegation to be able to only narrow authority.'
});

const REQUIRED_FALSE = Object.freeze({
  orchestratorOwnsBookingsRatesPaymentsPropertyDataIdentityOrAuthorization: 'ARCH-020-05 prohibits the orchestrator from owning bookings, rates, payments, property data, identity, or authorization.',
  delegationExpandsAgentAuthority: 'ARCH-020-05 prohibits delegation from expanding agent authority.',
  conversationTextIsAutomaticallyDurableMemory: 'ARCH-020-05 prohibits conversation text from automatically being durable memory.'
});

export class ConversationalAiAgentAndKnowledgeReferenceDescriptor {
  referenceFlowSteps() { return values(METADATA.referenceFlowSteps); } normalizedRequestFields() { return values(METADATA.normalizedRequestFields); }
  orchestratorResponsibilities() { return values(METADATA.orchestratorResponsibilities); } orchestratorExclusions() { return values(METADATA.orchestratorExclusions); }
  toolAttributes() { return values(METADATA.toolAttributes); } toolExamples() { return values(METADATA.toolExamples); }
  agentAttributes() { return values(METADATA.agentAttributes); } knowledgeSources() { return values(METADATA.knowledgeSources); }
  knowledgeIngestionLineageFields() { return values(METADATA.knowledgeIngestionLineageFields); } memoryQualities() { return values(METADATA.memoryQualities); }
  groundingCategories() { return values(METADATA.groundingCategories); } humanSupervisionMaterialActions() { return values(METADATA.humanSupervisionMaterialActions); }
  safetyCases() { return values(METADATA.safetyCases); } evaluationDimensions() { return values(METADATA.evaluationDimensions); }
  evaluationDatasetCategories() { return values(METADATA.evaluationDatasetCategories); } referenceAcceptanceCriteria() { return values(METADATA.referenceAcceptanceCriteria); }
  architecturalRules() { return values(METADATA.architecturalRules); }

  validateProfile(input) {
    const profile = input instanceof ConversationalAiAgentAndKnowledgeReferenceProfile ? input : new ConversationalAiAgentAndKnowledgeReferenceProfile(input);
    const errors = [];
    if (!profile.referenceName) errors.push('Conversational AI, Agent, and Knowledge Reference profile must have a name.');
    for (const [key, source] of Object.entries(METADATA)) for (const item of values(source)) if (!profile[key].includes(item)) errors.push(`${key} must include ${item}.`);
    for (const [key, message] of Object.entries(REQUIRED_TRUE)) if (profile[key] !== true) errors.push(message);
    for (const [key, message] of Object.entries(REQUIRED_FALSE)) if (profile[key] === true) errors.push(message);
    return result(errors);
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(METADATA)) if (this[key]().length !== Object.keys(source).length) errors.push(`Conversational AI, Agent, and Knowledge Reference must include documented ${key}.`);
    if (errors.length) throw new PlatformError(constants.CONVERSATIONAL_AI_AGENT_AND_KNOWLEDGE_REFERENCE_ERROR_CODE, 'Conversational AI, Agent, and Knowledge Reference violates ARCH-020-05.', { errors });
    return result(errors);
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
function result(errors) { return new ReferenceImplementationValidationResult({ isValid: errors.length === 0, errors }); }
