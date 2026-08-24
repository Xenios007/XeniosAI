import { PlatformError } from '../../foundation/errors/platform-error.js';
import { AiAssistedAnalysisInsightProvenanceProfile as Profile } from '../contracts/ai-assisted-analysis-insight-provenance-profile.js';
import * as constants from '../ai-assisted-analysis-insight-provenance-constants.js';

const metadata = Object.freeze({ responsibilities: constants.AI_ANALYSIS_RESPONSIBILITIES, requestFields: constants.ANALYSIS_REQUEST_FIELDS, retrievalFields: constants.GOVERNED_RETRIEVAL_FIELDS, calculationFields: constants.CALCULATION_FIELDS, insightFields: constants.INSIGHT_FIELDS, claimFields: constants.CLAIM_FIELDS, citationFields: constants.CITATION_FIELDS, reviewFields: constants.ANALYSIS_REVIEW_FIELDS, outputFields: constants.SAFE_OUTPUT_FIELDS, lifecycleStates: constants.AI_ANALYSIS_LIFECYCLE_STATES, controls: constants.AI_ANALYSIS_CONTROLS, failureRecovery: constants.AI_ANALYSIS_FAILURE_RECOVERY, observabilityFields: constants.AI_ANALYSIS_OBSERVABILITY, assuranceEvidence: constants.AI_ANALYSIS_ASSURANCE, invariants: constants.AI_ANALYSIS_INVARIANTS });
const required = Object.freeze({ retrievalGoverned: 'requires governed retrieval', calculationsDeterministic: 'requires deterministic calculations', citationsRequired: 'requires citations', provenanceComplete: 'requires complete provenance', generatedContentLabeled: 'requires generated-content labeling', humanReviewRiskBased: 'requires risk-based human review', safeOutputEnforced: 'requires safe output', modelChangesEvaluated: 'requires ARCH-029 evaluation and promotion' });
const prohibited = Object.freeze({ sharedDatabases: 'prohibits shared databases', ungroundedClaim: 'prohibits ungrounded claims', unsupportedCitation: 'prohibits unsupported citations', promptPolicyBypassed: 'prohibits prompt-policy bypass', protectedPayloadInTelemetry: 'prohibits protected payloads in telemetry', modelOutputAsSourceTruth: 'prohibits model output as source truth', confidenceAsCompletion: 'prohibits confidence as completion', toolResultAsCompletion: 'prohibits tool results as completion', operationalStateMutated: 'prohibits operational-state mutation' });

export class AiAssistedAnalysisInsightProvenanceDescriptor {
  responsibilities() { return values(metadata.responsibilities); }
  requestFields() { return values(metadata.requestFields); }
  retrievalFields() { return values(metadata.retrievalFields); }
  calculationFields() { return values(metadata.calculationFields); }
  insightFields() { return values(metadata.insightFields); }
  claimFields() { return values(metadata.claimFields); }
  citationFields() { return values(metadata.citationFields); }
  reviewFields() { return values(metadata.reviewFields); }
  outputFields() { return values(metadata.outputFields); }
  lifecycleStates() { return values(metadata.lifecycleStates); }
  controls() { return values(metadata.controls); }
  failureRecovery() { return values(metadata.failureRecovery); }
  observabilityFields() { return values(metadata.observabilityFields); }
  assuranceEvidence() { return values(metadata.assuranceEvidence); }
  invariants() { return values(metadata.invariants); }

  validateProfile(input) {
    const profile = input instanceof Profile ? input : new Profile(input);
    const errors = [];
    if (!profile.profileName) errors.push('AI-Assisted Analysis and Insight Provenance profile must have a name.');
    for (const [key, source] of Object.entries(metadata)) for (const item of values(source)) if (!profile[key].includes(item)) errors.push(`${key} must include ${item}.`);
    for (const [key, message] of Object.entries(required)) if (!profile[key]) errors.push(`ARCH-028-08 ${message}.`);
    for (const [key, message] of Object.entries(prohibited)) if (profile[key]) errors.push(`ARCH-028-08 ${message}.`);
    return Object.freeze({ isValid: errors.length === 0, errors: Object.freeze(errors) });
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(metadata)) if (this[key]().length !== Object.keys(source).length) errors.push(`${key} is incomplete.`);
    if (errors.length) throw new PlatformError(constants.AI_ASSISTED_ANALYSIS_INSIGHT_PROVENANCE_ERROR_CODE, 'AI-Assisted Analysis and Insight Provenance violates ARCH-028-08.', { errors });
    return Object.freeze({ isValid: true, errors: Object.freeze([]) });
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
