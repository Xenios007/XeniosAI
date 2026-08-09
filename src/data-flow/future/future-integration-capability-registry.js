import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  DATA_FLOW_ERROR_CODES,
  FUTURE_INTEGRATION_CAPABILITY_AREAS,
  FUTURE_INTEGRATION_EVALUATION_CRITERIA,
  FUTURE_INTEGRATION_MATURITY_STAGES,
  FUTURE_INTEGRATION_STABILITY_PRINCIPLES
} from '../constants.js';
import { FutureIntegrationCapabilityCandidate } from '../contracts/future-integration-capability-candidate.js';
import { FutureIntegrationCapabilityEvaluation } from '../contracts/future-integration-capability-evaluation.js';
import { FutureIntegrationCapabilityEvaluationResult } from '../contracts/future-integration-capability-evaluation-result.js';

const DEFAULT_CANDIDATES = Object.freeze([
  candidate('dynamic-workflow-composition', 'Dynamic Workflow Composition', FUTURE_INTEGRATION_CAPABILITY_AREAS.INTELLIGENT_WORKFLOW_COORDINATION, [
    'Dynamic workflow composition',
    'Conditional execution paths',
    'Runtime workflow optimization',
    'Policy-driven routing',
    'Automatic workflow recovery',
    'Human-in-the-loop orchestration'
  ], FUTURE_INTEGRATION_MATURITY_STAGES.WORKFLOW_AWARE_PLATFORM),
  candidate('adaptive-service-routing', 'Adaptive Service Routing', FUTURE_INTEGRATION_CAPABILITY_AREAS.ADAPTIVE_SERVICE_ROUTING, [
    'Availability-aware endpoint selection',
    'Latency-aware routing',
    'Regional routing',
    'Workload-aware routing',
    'Business policy routing',
    'Operational health routing'
  ], FUTURE_INTEGRATION_MATURITY_STAGES.INTELLIGENT_PLATFORM),
  candidate('advanced-event-processing', 'Advanced Event Processing', FUTURE_INTEGRATION_CAPABILITY_AREAS.ADVANCED_EVENT_PROCESSING, [
    'Event replay',
    'Historical event analysis',
    'Event filtering',
    'Event enrichment',
    'Event aggregation',
    'Cross-region event replication'
  ], FUTURE_INTEGRATION_MATURITY_STAGES.EVENT_DRIVEN_PLATFORM),
  candidate('intelligent-messaging', 'Intelligent Messaging', FUTURE_INTEGRATION_CAPABILITY_AREAS.INTELLIGENT_MESSAGING, [
    'Priority-aware delivery',
    'Adaptive queue management',
    'Intelligent retry strategies',
    'Dynamic routing',
    'Message deduplication',
    'Traffic optimization'
  ], FUTURE_INTEGRATION_MATURITY_STAGES.INTELLIGENT_PLATFORM),
  candidate('contract-evolution', 'Contract Evolution', FUTURE_INTEGRATION_CAPABILITY_AREAS.CONTRACT_EVOLUTION, [
    'Automatic compatibility validation',
    'Contract registries',
    'Schema governance',
    'Consumer-driven contract testing',
    'Cross-language schema generation',
    'AI-assisted documentation'
  ], FUTURE_INTEGRATION_MATURITY_STAGES.INTEGRATED_PLATFORM),
  candidate('workflow-intelligence', 'Workflow Intelligence', FUTURE_INTEGRATION_CAPABILITY_AREAS.WORKFLOW_INTELLIGENCE, [
    'Predictive execution',
    'Automatic branch selection',
    'Resource optimization',
    'Intelligent scheduling',
    'Policy-aware sequencing',
    'Continuous workflow improvement'
  ], FUTURE_INTEGRATION_MATURITY_STAGES.INTELLIGENT_PLATFORM),
  candidate('cross-platform-integration', 'Cross-Platform Integration', FUTURE_INTEGRATION_CAPABILITY_AREAS.CROSS_PLATFORM_INTEGRATION, [
    'ERP platform integration',
    'CRM system integration',
    'Financial platform integration',
    'Property management system integration',
    'Knowledge repository integration',
    'Identity provider integration',
    'AI ecosystem integration',
    'IoT platform integration'
  ], FUTURE_INTEGRATION_MATURITY_STAGES.INTEGRATED_PLATFORM),
  candidate('multi-region-architecture', 'Multi-Region Architecture', FUTURE_INTEGRATION_CAPABILITY_AREAS.MULTI_REGION_ARCHITECTURE, [
    'Regional services',
    'Cross-region messaging',
    'Geographic routing',
    'Regional failover',
    'Distributed event propagation'
  ], FUTURE_INTEGRATION_MATURITY_STAGES.ADAPTIVE_PLATFORM),
  candidate('federated-data-access', 'Federated Data Access', FUTURE_INTEGRATION_CAPABILITY_AREAS.FEDERATED_DATA_ACCESS, [
    'Federated queries',
    'Distributed read models',
    'Unified search',
    'Cross-service aggregation',
    'Intelligent caching'
  ], FUTURE_INTEGRATION_MATURITY_STAGES.ADAPTIVE_PLATFORM),
  candidate('operational-intelligence', 'Operational Intelligence', FUTURE_INTEGRATION_CAPABILITY_AREAS.OPERATIONAL_INTELLIGENCE, [
    'Predictive monitoring',
    'Automated anomaly detection',
    'Intelligent scaling',
    'Capacity forecasting',
    'Self-healing infrastructure',
    'AI-assisted diagnostics'
  ], FUTURE_INTEGRATION_MATURITY_STAGES.INTELLIGENT_PLATFORM),
  candidate('ai-assisted-integration', 'AI-Assisted Integration', FUTURE_INTEGRATION_CAPABILITY_AREAS.AI_ASSISTED_INTEGRATION, [
    'Intelligent service discovery',
    'API recommendation',
    'Workflow optimization',
    'Contract validation',
    'Integration diagnostics',
    'Semantic service matching'
  ], FUTURE_INTEGRATION_MATURITY_STAGES.INTELLIGENT_PLATFORM),
  candidate('governance-evolution', 'Governance Evolution', FUTURE_INTEGRATION_CAPABILITY_AREAS.GOVERNANCE_EVOLUTION, [
    'Automated policy enforcement',
    'Architecture compliance validation',
    'Integration health scoring',
    'Contract quality analysis',
    'Workflow governance dashboards'
  ], FUTURE_INTEGRATION_MATURITY_STAGES.ADAPTIVE_PLATFORM),
  candidate('emerging-technology-adoption', 'Emerging Technology Adoption', FUTURE_INTEGRATION_CAPABILITY_AREAS.EMERGING_TECHNOLOGIES, [
    'Edge computing',
    'Distributed AI',
    'Event streaming platforms',
    'Real-time analytics',
    'Digital twins',
    'Autonomous agents'
  ], FUTURE_INTEGRATION_MATURITY_STAGES.ADAPTIVE_PLATFORM)
]);

export class FutureIntegrationCapabilityRegistry {
  constructor({ candidates = DEFAULT_CANDIDATES } = {}) {
    this.candidates = new Map();

    for (const capabilityCandidate of candidates) {
      this.registerCandidate(capabilityCandidate);
    }
  }

  registerCandidate(candidateInput) {
    const capabilityCandidate = candidateInput instanceof FutureIntegrationCapabilityCandidate
      ? candidateInput
      : new FutureIntegrationCapabilityCandidate(candidateInput);

    if (this.candidates.has(capabilityCandidate.capabilityId)) {
      throw new PlatformError(
        DATA_FLOW_ERROR_CODES.FUTURE_INTEGRATION_CAPABILITY_DUPLICATE,
        `Future integration capability candidate "${capabilityCandidate.capabilityId}" already exists.`
      );
    }

    this.candidates.set(capabilityCandidate.capabilityId, capabilityCandidate);
    return this;
  }

  listCandidates() {
    return Object.freeze([...this.candidates.values()]);
  }

  listByArea(area) {
    return Object.freeze(this.listCandidates().filter((candidateItem) => candidateItem.area === area));
  }

  getCandidate(capabilityId) {
    const capabilityCandidate = this.candidates.get(capabilityId);

    if (!capabilityCandidate) {
      throw new PlatformError(
        DATA_FLOW_ERROR_CODES.FUTURE_INTEGRATION_CAPABILITY_NOT_FOUND,
        `Future integration capability candidate "${capabilityId}" is not defined.`
      );
    }

    return capabilityCandidate;
  }

  maturityModel() {
    return Object.freeze([
      FUTURE_INTEGRATION_MATURITY_STAGES.CONNECTED_SERVICES,
      FUTURE_INTEGRATION_MATURITY_STAGES.INTEGRATED_PLATFORM,
      FUTURE_INTEGRATION_MATURITY_STAGES.EVENT_DRIVEN_PLATFORM,
      FUTURE_INTEGRATION_MATURITY_STAGES.WORKFLOW_AWARE_PLATFORM,
      FUTURE_INTEGRATION_MATURITY_STAGES.INTELLIGENT_PLATFORM,
      FUTURE_INTEGRATION_MATURITY_STAGES.ADAPTIVE_PLATFORM
    ]);
  }

  stabilityPrinciples() {
    return Object.freeze(Object.values(FUTURE_INTEGRATION_STABILITY_PRINCIPLES));
  }

  evaluationCriteria() {
    return Object.freeze(Object.values(FUTURE_INTEGRATION_EVALUATION_CRITERIA));
  }

  evaluateIntroduction(input) {
    const evaluation = input instanceof FutureIntegrationCapabilityEvaluation
      ? input
      : new FutureIntegrationCapabilityEvaluation(input);
    let capabilityCandidate;

    try {
      capabilityCandidate = this.getCandidate(evaluation.capabilityId);
    } catch (error) {
      if (error instanceof PlatformError) {
        return FutureIntegrationCapabilityEvaluationResult.rejected({
          evaluation,
          errors: [{ code: error.code, message: error.message }]
        });
      }

      throw error;
    }

    const errors = [];

    for (const criterion of this.evaluationCriteria()) {
      if (!evaluation[criterion]) {
        errors.push(rejection(`Future integration capability must satisfy criterion: ${criterion}.`));
      }
    }

    if (evaluation.technologyOnlyJustification) {
      errors.push(rejection('Technology novelty alone is not sufficient justification for future integration capability introduction.'));
    }

    if (evaluation.requiresArchitecturalReplacement) {
      errors.push(rejection('Future integration capabilities must extend rather than replace the established architecture.'));
    }

    if (evaluation.transfersBusinessOwnership) {
      errors.push(rejection('Future integration capabilities must not transfer or share business ownership.'));
    }

    if (evaluation.bypassesContracts) {
      errors.push(rejection('Future integration capabilities must preserve contracts as the foundation of communication.'));
    }

    if (evaluation.makesMessagingVisibleToBusinessLogic) {
      errors.push(rejection('Messaging improvements must remain invisible to business logic.'));
    }

    if (evaluation.requiresDistributedTransactions) {
      errors.push(rejection('Future integration capabilities must not require distributed transactions.'));
    }

    return errors.length === 0
      ? FutureIntegrationCapabilityEvaluationResult.accepted({ evaluation, candidate: capabilityCandidate })
      : FutureIntegrationCapabilityEvaluationResult.rejected({ evaluation, candidate: capabilityCandidate, errors });
  }
}

function candidate(capabilityId, displayName, area, potentialEnhancements, maturityStage) {
  return new FutureIntegrationCapabilityCandidate({
    capabilityId,
    displayName,
    area,
    potentialEnhancements,
    maturityStage,
    implementationCommitted: false
  });
}

function rejection(message) {
  return {
    code: DATA_FLOW_ERROR_CODES.FUTURE_INTEGRATION_EVALUATION_REJECTED,
    message
  };
}
