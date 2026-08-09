import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  FUTURE_SERVICE_TYPES,
  SERVICE_MAP_ERROR_CODES
} from '../constants.js';
import { FutureServiceCandidate } from '../contracts/future-service-candidate.js';
import { FutureServiceEvaluation } from '../contracts/future-service-evaluation.js';
import { FutureServiceEvaluationResult } from '../contracts/future-service-evaluation-result.js';

const DEFAULT_CANDIDATES = Object.freeze([
  candidate('loyalty', 'Loyalty Service', 'Guest loyalty and rewards', [
    'Membership tiers',
    'Reward points',
    'Promotions',
    'Guest benefits',
    'Redemption rules'
  ]),
  candidate('billing', 'Billing Service', 'Financial transactions', [
    'Invoices',
    'Receipts',
    'Taxes',
    'Refund records',
    'Financial reconciliation'
  ]),
  candidate('payment', 'Payment Service', 'Payment processing', [
    'Payment authorization',
    'Payment status',
    'Settlement tracking',
    'Refund execution',
    'Gateway coordination'
  ]),
  candidate('crm', 'CRM Service', 'Guest relationship management', [
    'Guest profiles',
    'Preferences',
    'Visit history',
    'Communication history',
    'Marketing segmentation'
  ]),
  candidate('housekeeping', 'Housekeeping Service', 'Cleaning operations', [
    'Cleaning schedules',
    'Room status',
    'Staff assignments',
    'Cleaning checklists',
    'Inspection records'
  ]),
  candidate('maintenance', 'Maintenance Service', 'Facility maintenance', [
    'Maintenance requests',
    'Work orders',
    'Asset maintenance',
    'Equipment history',
    'Preventive maintenance'
  ]),
  candidate('revenue-management', 'Revenue Management Service', 'Revenue optimization', [
    'Dynamic pricing recommendations',
    'Occupancy forecasting',
    'Demand analysis',
    'Seasonal adjustments',
    'Revenue reporting'
  ]),
  candidate('inventory', 'Inventory Service', 'Operational inventory', [
    'Supply tracking',
    'Stock levels',
    'Consumption records',
    'Procurement support',
    'Inventory alerts'
  ]),
  candidate('smart-property', 'Smart Property Service', 'Connected devices', [
    'Smart locks',
    'IoT sensors',
    'Environmental monitoring',
    'Device health',
    'Remote automation'
  ]),
  candidate('marketplace', 'Marketplace Service', 'Third-party ecosystem', [
    'External partner integrations',
    'Add-on services',
    'Marketplace listings',
    'Vendor management',
    'Service catalog'
  ]),
  candidate('recommendation', 'Recommendation Service', 'AI recommendations', [
    'Recommendation generation'
  ], FUTURE_SERVICE_TYPES.AI),
  candidate('forecasting', 'Forecasting Service', 'AI forecasting', [
    'Forecast generation'
  ], FUTURE_SERVICE_TYPES.AI),
  candidate('ai-evaluation', 'AI Evaluation Service', 'AI evaluation', [
    'Evaluation suites'
  ], FUTURE_SERVICE_TYPES.AI),
  candidate('memory', 'Memory Service', 'AI memory', [
    'Memory lifecycle'
  ], FUTURE_SERVICE_TYPES.AI),
  candidate('personalization', 'Personalization Service', 'AI personalization', [
    'Personalization rules'
  ], FUTURE_SERVICE_TYPES.AI),
  candidate('scheduling-intelligence', 'Scheduling Intelligence Service', 'AI scheduling intelligence', [
    'Scheduling recommendations'
  ], FUTURE_SERVICE_TYPES.AI)
]);

export class FutureServiceRegistry {
  constructor({ candidates = DEFAULT_CANDIDATES } = {}) {
    this.candidates = new Map();

    for (const serviceCandidate of candidates) {
      this.registerCandidate(serviceCandidate);
    }
  }

  registerCandidate(serviceCandidate) {
    if (this.candidates.has(serviceCandidate.serviceName)) {
      throw new PlatformError(
        SERVICE_MAP_ERROR_CODES.DUPLICATE_FUTURE_SERVICE,
        `Future service candidate "${serviceCandidate.serviceName}" already exists.`
      );
    }

    this.candidates.set(serviceCandidate.serviceName, serviceCandidate);
    return this;
  }

  listCandidates() {
    return Object.freeze([...this.candidates.values()]);
  }

  listByType(serviceType) {
    return Object.freeze(this.listCandidates().filter(candidate => candidate.serviceType === serviceType));
  }

  getCandidate(serviceName) {
    const serviceCandidate = this.candidates.get(serviceName);

    if (!serviceCandidate) {
      throw new PlatformError(
        SERVICE_MAP_ERROR_CODES.FUTURE_SERVICE_NOT_FOUND,
        `Future service candidate "${serviceName}" is not defined.`
      );
    }

    return serviceCandidate;
  }

  evaluateIntroduction(input) {
    const evaluation = input instanceof FutureServiceEvaluation
      ? input
      : new FutureServiceEvaluation(input);
    let serviceCandidate;

    try {
      serviceCandidate = this.getCandidate(evaluation.serviceName);
    } catch (error) {
      if (error instanceof PlatformError) {
        return FutureServiceEvaluationResult.rejected({
          evaluation,
          errors: [{ code: error.code, message: error.message }]
        });
      }

      throw error;
    }

    const errors = [];
    const checks = [
      ['ownsDistinctBusinessDomain', 'Future service must own a distinct business domain.'],
      ['existingServicesCannotAbsorb', 'Existing services must be unable to reasonably absorb the capability.'],
      ['independentEvolutionBeneficial', 'Independent lifecycle evolution must be beneficial.'],
      ['ownershipUnambiguous', 'Ownership must remain unambiguous.'],
      ['boundariesCohesive', 'Service boundaries must remain cohesive.'],
      ['respectsExistingOwnership', 'Future service must respect existing ownership boundaries.'],
      ['avoidsDirectDatabaseSharing', 'Future service must avoid direct database sharing.'],
      ['participatesInObservability', 'Future service must participate in platform observability.'],
      ['documentedBeforeImplementation', 'Future service must be documented before implementation.']
    ];

    for (const [field, message] of checks) {
      if (!evaluation[field]) {
        errors.push(rejection(message));
      }
    }

    if (evaluation.technologyOnlyJustification) {
      errors.push(rejection('Technology alone is not sufficient justification for a new service.'));
    }

    return errors.length === 0
      ? FutureServiceEvaluationResult.accepted({ evaluation, candidate: serviceCandidate })
      : FutureServiceEvaluationResult.rejected({ evaluation, candidate: serviceCandidate, errors });
  }

  getGrowthStrategy() {
    return Object.freeze([
      'New Business Capability',
      'New Domain',
      'New Service',
      'Published Contracts',
      'Platform Integration'
    ]);
  }
}

function candidate(serviceName, displayName, domain, potentialResponsibilities, serviceType = FUTURE_SERVICE_TYPES.BUSINESS) {
  return new FutureServiceCandidate({
    serviceName,
    displayName,
    domain,
    potentialResponsibilities,
    serviceType,
    implementationCommitted: false
  });
}

function rejection(message) {
  return {
    code: SERVICE_MAP_ERROR_CODES.FUTURE_SERVICE_EVALUATION_REJECTED,
    message
  };
}
