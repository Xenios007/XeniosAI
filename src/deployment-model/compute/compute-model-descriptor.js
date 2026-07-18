import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  COMPUTE_CATEGORY_NAMES,
  COMPUTE_ISOLATION_AREAS,
  COMPUTE_LIFECYCLE_STAGES,
  COMPUTE_OBJECTIVES,
  COMPUTE_OPERATIONAL_CHARACTERISTICS,
  COMPUTE_RESOURCE_OWNERSHIP,
  COMPUTE_SCHEDULING_CONSIDERATIONS,
  COMPUTE_WORKLOAD_CLASSIFICATIONS,
  DEPLOYMENT_MODEL_ERROR_CODES,
  FUTURE_COMPUTE_CAPABILITIES
} from '../constants.js';
import { ComputeCategory } from '../contracts/compute-category.js';
import { ComputeLifecycleRecord } from '../contracts/compute-lifecycle-record.js';
import { ComputeResourceAllocation } from '../contracts/compute-resource-allocation.js';
import { ComputeSchedulingPolicy } from '../contracts/compute-scheduling-policy.js';
import { ComputeValidationResult } from '../contracts/compute-validation-result.js';

const COMPUTE_FLOW = Object.freeze([
  'Client Requests',
  COMPUTE_CATEGORY_NAMES.API_COMPUTE,
  COMPUTE_CATEGORY_NAMES.BUSINESS_COMPUTE,
  COMPUTE_CATEGORY_NAMES.AI_COMPUTE,
  COMPUTE_CATEGORY_NAMES.BACKGROUND_COMPUTE,
  COMPUTE_CATEGORY_NAMES.INFRASTRUCTURE_COMPUTE
]);

const DEFAULT_CATEGORIES = Object.freeze([
  category(COMPUTE_CATEGORY_NAMES.API_COMPUTE, 'Client-facing request processing', COMPUTE_WORKLOAD_CLASSIFICATIONS.INTERACTIVE, ['HTTP request handling', 'Authentication delegation', 'Request validation', 'Response generation', 'API coordination'], ['Low latency', 'High concurrency', 'Stateless execution', 'Rapid horizontal scaling']),
  category(COMPUTE_CATEGORY_NAMES.BUSINESS_COMPUTE, 'Application and domain execution', COMPUTE_WORKLOAD_CLASSIFICATIONS.INTERACTIVE, ['Commands', 'Queries', 'Domain orchestration', 'Business workflows', 'Aggregate coordination'], ['Service Map execution', 'Domain Model execution']),
  category(COMPUTE_CATEGORY_NAMES.AI_COMPUTE, 'Model inference and intelligent processing', COMPUTE_WORKLOAD_CLASSIFICATIONS.AI_WORKLOADS, ['Large Language Model inference', 'Embedding generation', 'Semantic retrieval', 'Agent reasoning', 'Prompt execution', 'Context assembly'], ['Variable execution time', 'High compute demand', 'Specialized resource requirements']),
  category(COMPUTE_CATEGORY_NAMES.BACKGROUND_COMPUTE, 'Asynchronous jobs and workflows', COMPUTE_WORKLOAD_CLASSIFICATIONS.ASYNCHRONOUS, ['Workflow execution', 'Scheduled jobs', 'Event processing', 'Batch processing', 'Report generation', 'Data synchronization'], ['Queue-driven', 'Eventually consistent', 'Background execution']),
  category(COMPUTE_CATEGORY_NAMES.INFRASTRUCTURE_COMPUTE, 'Shared platform services', COMPUTE_WORKLOAD_CLASSIFICATIONS.OPERATIONAL_WORKLOADS, ['Message brokers', 'Search engines', 'Configuration services', 'Monitoring systems', 'Service discovery', 'Secret management'], ['Platform support', 'Reusable across business domains'])
]);

export class ComputeModelDescriptor {
  constructor({ categories = DEFAULT_CATEGORIES } = {}) {
    this.categories = new Map();

    for (const computeCategory of categories) {
      this.registerCategory(computeCategory);
    }
  }

  objectives() {
    return Object.freeze(Object.values(COMPUTE_OBJECTIVES));
  }

  computeFlow() {
    return COMPUTE_FLOW;
  }

  workloadClassifications() {
    return Object.freeze(Object.values(COMPUTE_WORKLOAD_CLASSIFICATIONS));
  }

  resourceOwnership() {
    return Object.freeze(Object.values(COMPUTE_RESOURCE_OWNERSHIP));
  }

  isolationAreas() {
    return Object.freeze(Object.values(COMPUTE_ISOLATION_AREAS));
  }

  schedulingConsiderations() {
    return Object.freeze(Object.values(COMPUTE_SCHEDULING_CONSIDERATIONS));
  }

  lifecycleStages() {
    return Object.freeze(Object.values(COMPUTE_LIFECYCLE_STAGES));
  }

  operationalCharacteristics() {
    return Object.freeze(Object.values(COMPUTE_OPERATIONAL_CHARACTERISTICS));
  }

  futureCapabilities() {
    return Object.freeze(Object.values(FUTURE_COMPUTE_CAPABILITIES));
  }

  listCategories() {
    return Object.freeze([...this.categories.values()]);
  }

  registerCategory(categoryInput) {
    const computeCategory = categoryInput instanceof ComputeCategory ? categoryInput : new ComputeCategory(categoryInput);
    const result = this.validateCategory(computeCategory);

    if (!result.isValid) {
      throw new PlatformError(
        DEPLOYMENT_MODEL_ERROR_CODES.COMPUTE_CATEGORY_INVALID,
        'Compute category violates ARCH-007-04.',
        { errors: result.errors }
      );
    }

    this.categories.set(computeCategory.categoryName, computeCategory);
    return this;
  }

  getCategory(categoryName) {
    return this.categories.get(categoryName);
  }

  validateCategory(categoryInput) {
    const computeCategory = categoryInput instanceof ComputeCategory ? categoryInput : new ComputeCategory(categoryInput);
    const errors = [];

    if (!Object.values(COMPUTE_CATEGORY_NAMES).includes(computeCategory.categoryName)) errors.push(`Unsupported compute category: ${computeCategory.categoryName}.`);
    if (!computeCategory.primaryResponsibility) errors.push('Compute category must define a primary responsibility.');
    if (!this.workloadClassifications().includes(computeCategory.workloadClassification)) errors.push(`Unsupported workload classification: ${computeCategory.workloadClassification}.`);
    if (computeCategory.responsibilities.length === 0) errors.push('Compute category must define workload responsibilities.');
    if (computeCategory.characteristics.length === 0) errors.push('Compute category must define execution characteristics.');
    if (computeCategory.independentlyScalable !== true) errors.push('Each compute category should be scalable independently.');
    if (computeCategory.isolated !== true) errors.push('Compute categories must preserve workload isolation.');
    if (computeCategory.ownsBusinessLogic === true) errors.push('Compute supports execution but does not own business logic.');
    if (computeCategory.technologySpecific === true) errors.push('Compute Model must remain independent of specific hardware, cloud, OS, or orchestration platforms.');

    return validation(errors);
  }

  validateResourceAllocation(allocationInput) {
    const allocation = allocationInput instanceof ComputeResourceAllocation
      ? allocationInput
      : new ComputeResourceAllocation(allocationInput);
    const errors = [];

    if (!this.categories.has(allocation.computeCategory)) errors.push(`Resource allocation references unknown compute category: ${allocation.computeCategory}.`);
    if (allocation.ownsCpuAllocation !== true) errors.push('Compute unit must own CPU allocation.');
    if (allocation.ownsMemoryAllocation !== true) errors.push('Compute unit must own memory allocation.');
    if (allocation.ownsStorageLimits !== true) errors.push('Compute unit must own storage limits.');
    if (allocation.ownsNetworkAccess !== true) errors.push('Compute unit must own network access.');
    if (allocation.ownsRuntimeConfiguration !== true) errors.push('Compute unit must own runtime configuration.');
    if (allocation.independentBetweenWorkloads !== true) errors.push('Resource ownership should remain independent between workloads.');
    if (allocation.predictableUtilization !== true) errors.push('Compute allocation must support predictable resource utilization.');
    if (allocation.resourceContention === true) errors.push('Compute isolation must prevent resource contention.');

    return validation(errors);
  }

  validateScheduling(policyInput) {
    const policy = policyInput instanceof ComputeSchedulingPolicy ? policyInput : new ComputeSchedulingPolicy(policyInput);
    const errors = [];

    if (!policy.policyName) errors.push('Compute scheduling policy must have a name.');
    appendMissing(errors, policy.considerations, this.schedulingConsiderations(), 'Compute scheduling must consider');
    if (policy.optimizesPlatformStability !== true) errors.push('Scheduling decisions should optimize platform stability.');
    if (policy.optimizesIndividualThroughputOnly === true) errors.push('Scheduling must not optimize individual workload throughput at the expense of platform stability.');
    if (policy.respectsFaultDomains !== true) errors.push('Scheduling must respect fault domains.');
    if (policy.respectsCapacityConstraints !== true) errors.push('Scheduling must respect capacity constraints.');
    if (policy.preservesWorkloadIsolation !== true) errors.push('Scheduling must preserve workload isolation.');

    return validation(errors);
  }

  validateLifecycle(recordInput) {
    const record = recordInput instanceof ComputeLifecycleRecord ? recordInput : new ComputeLifecycleRecord(recordInput);
    const errors = [];

    if (!this.categories.has(record.computeCategory)) errors.push(`Compute lifecycle references unknown category: ${record.computeCategory}.`);
    if (record.stages.length !== this.lifecycleStages().length) errors.push(`Compute lifecycle must include ${this.lifecycleStages().length} stages.`);
    this.lifecycleStages().forEach((stage, index) => {
      if (record.stages[index] !== stage) errors.push(`Compute lifecycle step ${index + 1} must be ${stage}; received ${record.stages[index] ?? 'missing'}.`);
    });
    if (record.independentOfApplicationLifecycle !== true) errors.push('Compute lifecycle must remain independent of application lifecycle.');
    if (record.supportsAutomatedRecovery !== true) errors.push('Compute resources should support automated recovery.');
    if (record.supportsGracefulShutdown !== true) errors.push('Compute resources should support graceful shutdown.');
    if (record.supportsRollingUpdates !== true) errors.push('Compute resources should support rolling updates.');
    if (record.supportsIndependentReplacement !== true) errors.push('Compute resources should support independent replacement.');
    if (record.predictableStartup !== true) errors.push('Compute resources should support predictable startup.');

    return validation(errors);
  }

  assertModel() {
    const errors = [];

    if (this.objectives().length !== 8) errors.push('Compute Model must include all documented objectives.');
    if (this.computeFlow().length !== 6) errors.push('Compute Model must include the documented compute architecture flow.');
    if (this.categories.size !== 5) errors.push('Compute Model must include all primary compute categories.');

    if (errors.length > 0) {
      throw new PlatformError(
        DEPLOYMENT_MODEL_ERROR_CODES.COMPUTE_MODEL_INVALID,
        'Compute Model violates ARCH-007-04.',
        { errors }
      );
    }

    return validation(errors);
  }
}

function category(categoryName, primaryResponsibility, workloadClassification, responsibilities, characteristics) {
  return new ComputeCategory({
    categoryName,
    primaryResponsibility,
    workloadClassification,
    responsibilities,
    characteristics
  });
}

function appendMissing(errors, actual, expected, message) {
  for (const item of expected) {
    if (!actual.includes(item)) errors.push(`${message} ${item}.`);
  }
}

function validation(errors) {
  return new ComputeValidationResult({
    isValid: errors.length === 0,
    errors
  });
}
