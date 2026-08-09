import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  DOMAIN_MODEL_ERROR_CODES,
  FUTURE_DOMAIN_EVALUATION_DECISIONS,
  FUTURE_DOMAIN_EVOLUTION_OBJECTIVES,
  FUTURE_DOMAIN_EVOLUTION_PRINCIPLES,
  FUTURE_DOMAIN_NAMES,
  FUTURE_DOMAIN_STABILITY_RULES
} from '../constants.js';
import { FutureDomainCandidate } from '../contracts/future-domain-candidate.js';
import { FutureDomainEvaluation } from '../contracts/future-domain-evaluation.js';
import { FutureDomainEvaluationResult } from '../contracts/future-domain-evaluation-result.js';

const DEFAULT_CANDIDATES = Object.freeze([
  candidate(FUTURE_DOMAIN_NAMES.LOYALTY, ['Membership', 'Reward Points', 'Tier Progression', 'Member Benefits', 'Redemption Policies'], ['Loyalty Account', 'Reward Transaction', 'Membership Tier'], 'Customer loyalty and retention'),
  candidate(FUTURE_DOMAIN_NAMES.MARKETPLACE, ['Listings', 'Availability Distribution', 'Partner Management', 'Marketplace Policies'], ['Listing', 'Marketplace Partner', 'Distribution Channel'], 'Marketplace distribution'),
  candidate(FUTURE_DOMAIN_NAMES.VENDOR, ['Vendor Registration', 'Vendor Qualification', 'Service Agreements', 'Performance Evaluation'], ['Vendor', 'Contract', 'Vendor Rating'], 'External vendor management'),
  candidate(FUTURE_DOMAIN_NAMES.BILLING, ['Invoice Generation', 'Tax Calculation', 'Billing Statements', 'Payment Schedules'], ['Invoice', 'Billing Statement', 'Tax Record'], 'Billing and tax capability'),
  candidate(FUTURE_DOMAIN_NAMES.REPORTING, ['Business Metrics', 'Financial Reporting', 'Operational Analytics', 'Executive Dashboards'], [], 'Business reporting', { consumesDomainEvents: true, ownsOperationalBusinessData: false }),
  candidate(FUTURE_DOMAIN_NAMES.INVENTORY, ['Asset Tracking', 'Supply Management', 'Equipment Allocation', 'Inventory Auditing'], ['Inventory Item', 'Stock Movement', 'Warehouse'], 'Inventory operations'),
  candidate(FUTURE_DOMAIN_NAMES.MAINTENANCE, ['Maintenance Scheduling', 'Inspection Management', 'Asset Servicing', 'Operational Downtime'], ['Maintenance Request', 'Inspection', 'Work Order'], 'Operational maintenance'),
  candidate(FUTURE_DOMAIN_NAMES.MARKETING, ['Campaign Management', 'Promotions', 'Audience Segmentation', 'Customer Engagement'], ['Campaign', 'Promotion', 'Audience Segment'], 'Marketing engagement'),
  candidate(FUTURE_DOMAIN_NAMES.AI_MANAGEMENT, ['AI Agent Registry', 'Agent Capabilities', 'Prompt Governance', 'Agent Lifecycle', 'AI Policy Enforcement'], ['AI Agent', 'Prompt Template', 'Capability Profile', 'Agent Session'], 'AI operational management'),
  candidate(FUTURE_DOMAIN_NAMES.COMPLIANCE, ['Regulatory Policies', 'Audit Controls', 'Data Governance', 'Retention Policies'], ['Compliance Policy', 'Audit Finding', 'Regulatory Record'], 'Compliance and governance'),
  candidate(FUTURE_DOMAIN_NAMES.ANALYTICS, ['Predictive Analytics', 'Operational Forecasting', 'Capacity Optimization', 'Customer Insights', 'Business Intelligence'], [], 'Analytics and insight', { consumesDomainEvents: true, ownsOperationalBusinessData: false })
]);

export class FutureDomainEvolutionRegistry {
  constructor({ candidates = DEFAULT_CANDIDATES } = {}) {
    this.candidates = new Map();

    for (const candidateDefinition of candidates) {
      this.registerCandidate(candidateDefinition);
    }
  }

  principles() {
    return Object.freeze(Object.values(FUTURE_DOMAIN_EVOLUTION_PRINCIPLES));
  }

  objectives() {
    return Object.freeze(Object.values(FUTURE_DOMAIN_EVOLUTION_OBJECTIVES));
  }

  stabilityRules() {
    return Object.freeze(Object.values(FUTURE_DOMAIN_STABILITY_RULES));
  }

  decisions() {
    return Object.freeze(Object.values(FUTURE_DOMAIN_EVALUATION_DECISIONS));
  }

  listCandidates() {
    return Object.freeze([...this.candidates.values()]);
  }

  registerCandidate(candidateInput) {
    const futureCandidate = candidateInput instanceof FutureDomainCandidate
      ? candidateInput
      : new FutureDomainCandidate(candidateInput);
    const result = this.validateCandidate(futureCandidate);

    if (!result.isValid) {
      throw new PlatformError(
        DOMAIN_MODEL_ERROR_CODES.FUTURE_DOMAIN_CANDIDATE_INVALID,
        'Future domain candidate violates ARCH-006-10.',
        { errors: result.errors }
      );
    }

    this.candidates.set(futureCandidate.domainName, futureCandidate);
    return this;
  }

  getCandidate(domainName) {
    const futureCandidate = this.candidates.get(domainName);

    if (!futureCandidate) {
      throw new PlatformError(
        DOMAIN_MODEL_ERROR_CODES.FUTURE_DOMAIN_CANDIDATE_NOT_FOUND,
        `Future Domain candidate "${domainName}" is not defined.`
      );
    }

    return futureCandidate;
  }

  validateCandidate(candidateInput) {
    const futureCandidate = candidateInput instanceof FutureDomainCandidate
      ? candidateInput
      : new FutureDomainCandidate(candidateInput);
    const errors = [];

    if (!futureCandidate.domainName) errors.push('Future Domain candidate must have a business name.');
    if (futureCandidate.responsibilities.length === 0) errors.push('Future Domain candidate must define potential responsibilities.');
    if (!futureCandidate.businessCapability) errors.push('Future Domain candidate must represent a distinct business capability.');
    if (!futureCandidate.expansionReason) errors.push('Future Domain candidate must explain business expansion reason.');
    if (futureCandidate.modifiesForeignBusinessState === true) errors.push('Future Domains must not directly modify foreign business state.');
    if (futureCandidate.aiOwnsBusinessPolicy === true) errors.push('AI may augment decisions but must not become owner of business policies.');
    if (futureCandidate.technologyDriven === true) errors.push('Future Domain evolution must be measured by business capability, not technology.');
    if (futureCandidate.implemented === true) errors.push('Future Domain candidates are placeholders and must not be marked implemented by ARCH-006-10.');
    if (containsTechnicalTerm(futureCandidate.domainName) || futureCandidate.responsibilities.some(containsTechnicalTerm)) {
      errors.push('Future Domain candidates must preserve ubiquitous business language.');
    }

    return result(errors, FUTURE_DOMAIN_EVALUATION_DECISIONS.DEFER);
  }

  evaluate(evaluationInput) {
    const evaluation = evaluationInput instanceof FutureDomainEvaluation
      ? evaluationInput
      : new FutureDomainEvaluation(evaluationInput);
    const candidateExists = this.candidates.has(evaluation.domainName);
    const errors = [];

    if (!candidateExists) errors.push(`Future Domain evaluation references unknown candidate: ${evaluation.domainName}.`);
    if (!this.decisions().includes(evaluation.decision)) errors.push(`Unsupported Future Domain evaluation decision: ${evaluation.decision}.`);
    if (evaluation.preservesBoundedContexts !== true) errors.push('Future Domain Evolution must preserve bounded contexts.');
    if (evaluation.protectsUbiquitousLanguage !== true) errors.push('Future Domain Evolution must protect ubiquitous language.');
    if (evaluation.maintainsExplicitOwnership !== true) errors.push('Future Domain Evolution must maintain explicit ownership.');
    if (evaluation.favorsNewDomainOverOversizedDomain !== true) errors.push('Future growth should favor new domains over oversized domains.');
    if (evaluation.preservesAggregateConsistency !== true) errors.push('Future Domain Evolution must preserve Aggregate consistency.');
    if (evaluation.keepsDomainEventsMeaningful !== true) errors.push('Future Domain Evolution must keep Domain Events meaningful.');
    if (evaluation.technologyIndependent !== true) errors.push('Future Domain Evolution must remain independent of implementation technology.');
    if (evaluation.strengthensBusinessArchitecture !== true) errors.push('Every new capability should strengthen the business architecture.');
    if (evaluation.aiAugmentsButDoesNotOwnPolicy !== true) errors.push('AI should augment business decisions without owning business policies.');
    if (evaluation.measuredByBusinessCapability !== true) errors.push('Evolution is measured by business capability, not system size.');

    return result(errors, evaluation.decision);
  }

  acceptedEvolution(evaluationInput) {
    const evaluation = evaluationInput instanceof FutureDomainEvaluation
      ? evaluationInput
      : new FutureDomainEvaluation(evaluationInput);
    const evaluationResult = this.evaluate(evaluation);

    if (!evaluationResult.isValid || evaluationResult.decision !== FUTURE_DOMAIN_EVALUATION_DECISIONS.ACCEPT) {
      throw new PlatformError(
        DOMAIN_MODEL_ERROR_CODES.FUTURE_DOMAIN_EVALUATION_INVALID,
        'Future domain evolution cannot be accepted under ARCH-006-10.',
        { errors: evaluationResult.errors, decision: evaluationResult.decision }
      );
    }

    return evaluationResult;
  }
}

function candidate(domainName, responsibilities, potentialEntities, businessCapability, options = {}) {
  return new FutureDomainCandidate({
    domainName,
    responsibilities,
    potentialEntities,
    businessCapability,
    expansionReason: `${domainName} expands a distinct business capability.`,
    ...options
  });
}

function result(errors, decision) {
  return new FutureDomainEvaluationResult({
    isValid: errors.length === 0,
    errors,
    decision
  });
}

function containsTechnicalTerm(value) {
  return /\b(database|framework|runtime|queue|broker|api|cache|table|service mesh|kubernetes)\b/i.test(String(value ?? ''));
}
