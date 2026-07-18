import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  FUTURE_RUNTIME_CAPABILITIES,
  RUNTIME_FAILURE_HANDLING_CAPABILITIES,
  RUNTIME_GOVERNANCE_CONTROLS,
  RUNTIME_INTERACTION_PATTERNS,
  RUNTIME_ISOLATION_AREAS,
  RUNTIME_LAYER_NAMES,
  RUNTIME_OBJECTIVES,
  RUNTIME_OBSERVABILITY_CAPABILITIES,
  RUNTIME_BOUNDARY_RESPONSIBILITIES,
  WORKLOAD_CATEGORIES,
  DEPLOYMENT_MODEL_ERROR_CODES
} from '../constants.js';
import { RuntimeComponent } from '../contracts/runtime-component.js';
import { RuntimeInteraction } from '../contracts/runtime-interaction.js';
import { RuntimeValidationResult } from '../contracts/runtime-validation-result.js';
import { RuntimeWorkloadProfile } from '../contracts/runtime-workload-profile.js';

const RUNTIME_FLOW = Object.freeze([
  RUNTIME_LAYER_NAMES.CLIENTS,
  RUNTIME_LAYER_NAMES.EDGE_LAYER,
  RUNTIME_LAYER_NAMES.GATEWAY_LAYER,
  RUNTIME_LAYER_NAMES.APPLICATION_SERVICES,
  RUNTIME_LAYER_NAMES.AI_SERVICES,
  RUNTIME_LAYER_NAMES.INFRASTRUCTURE_SERVICES,
  RUNTIME_LAYER_NAMES.DATA_SERVICES
]);

const REQUEST_FLOW = Object.freeze([
  'Client',
  'Edge',
  'Gateway',
  'Application Service',
  'Domain Logic',
  'Infrastructure',
  'Storage'
]);

const DEFAULT_WORKLOADS = Object.freeze([
  workload(WORKLOAD_CATEGORIES.INTERACTIVE, ['User requests', 'APIs', 'Administrative actions']),
  workload(WORKLOAD_CATEGORIES.BACKGROUND, ['Scheduled jobs', 'Batch processing', 'Workflow execution']),
  workload(WORKLOAD_CATEGORIES.AI, ['Model inference', 'Embedding generation', 'Context retrieval', 'Agent execution']),
  workload(WORKLOAD_CATEGORIES.OPERATIONAL, ['Monitoring', 'Backups', 'Maintenance'])
]);

export class RuntimeTopologyDescriptor {
  constructor({ workloads = DEFAULT_WORKLOADS } = {}) {
    this.workloads = new Map();

    for (const workloadProfile of workloads) {
      this.registerWorkload(workloadProfile);
    }
  }

  objectives() {
    return Object.freeze(Object.values(RUNTIME_OBJECTIVES));
  }

  runtimeFlow() {
    return RUNTIME_FLOW;
  }

  requestFlow() {
    return REQUEST_FLOW;
  }

  interactionPatterns() {
    return Object.freeze(Object.values(RUNTIME_INTERACTION_PATTERNS));
  }

  boundaryResponsibilities() {
    return Object.freeze(Object.values(RUNTIME_BOUNDARY_RESPONSIBILITIES));
  }

  isolationAreas() {
    return Object.freeze(Object.values(RUNTIME_ISOLATION_AREAS));
  }

  failureHandlingCapabilities() {
    return Object.freeze(Object.values(RUNTIME_FAILURE_HANDLING_CAPABILITIES));
  }

  observabilityCapabilities() {
    return Object.freeze(Object.values(RUNTIME_OBSERVABILITY_CAPABILITIES));
  }

  governanceControls() {
    return Object.freeze(Object.values(RUNTIME_GOVERNANCE_CONTROLS));
  }

  futureCapabilities() {
    return Object.freeze(Object.values(FUTURE_RUNTIME_CAPABILITIES));
  }

  listWorkloads() {
    return Object.freeze([...this.workloads.values()]);
  }

  registerWorkload(workloadInput) {
    const workloadProfile = workloadInput instanceof RuntimeWorkloadProfile
      ? workloadInput
      : new RuntimeWorkloadProfile(workloadInput);
    const result = this.validateWorkload(workloadProfile);

    if (!result.isValid) {
      throw new PlatformError(
        DEPLOYMENT_MODEL_ERROR_CODES.RUNTIME_WORKLOAD_INVALID,
        'Runtime workload profile violates ARCH-007-03.',
        { errors: result.errors }
      );
    }

    this.workloads.set(workloadProfile.workloadCategory, workloadProfile);
    return this;
  }

  validateComponent(componentInput) {
    const component = componentInput instanceof RuntimeComponent ? componentInput : new RuntimeComponent(componentInput);
    const errors = [];

    if (!component.componentName) errors.push('Runtime component must have a name.');
    if (!RUNTIME_FLOW.includes(component.runtimeLayer)) errors.push(`Unsupported runtime layer: ${component.runtimeLayer}.`);
    if (!component.operationalResponsibility) errors.push('Runtime component must have a clearly defined operational responsibility.');
    if (!component.serviceOwner) errors.push('Runtime ownership should closely align with service ownership.');
    if (component.stateless !== true) errors.push('Application runtime components should be stateless whenever practical.');
    if (component.ownsProcessLifecycle !== true) errors.push('Runtime component must own process lifecycle.');
    if (component.ownsResourceAllocation !== true) errors.push('Runtime component must own resource allocation.');
    if (component.ownsRuntimeConfiguration !== true) errors.push('Runtime component must own runtime configuration.');
    if (component.ownsHealthReporting !== true) errors.push('Runtime component must own health reporting.');
    if (component.ownsScalingPolicy !== true) errors.push('Runtime component must own scaling policy.');
    if (component.altersBusinessBehavior === true) errors.push('Runtime placement must not alter business behavior.');
    if (component.vendorSpecific === true) errors.push('Runtime topology must remain vendor neutral.');

    return validation(errors);
  }

  validateInteraction(interactionInput) {
    const interaction = interactionInput instanceof RuntimeInteraction
      ? interactionInput
      : new RuntimeInteraction(interactionInput);
    const errors = [];

    if (!RUNTIME_FLOW.includes(interaction.sourceLayer)) errors.push(`Unsupported source runtime layer: ${interaction.sourceLayer}.`);
    if (!RUNTIME_FLOW.includes(interaction.targetLayer)) errors.push(`Unsupported target runtime layer: ${interaction.targetLayer}.`);
    if (!this.interactionPatterns().includes(interaction.pattern)) errors.push(`Unsupported runtime interaction pattern: ${interaction.pattern}.`);
    if (!interaction.businessJustification) errors.push('Runtime interaction style must depend on business requirements.');
    if (interaction.wellDefinedInterface !== true) errors.push('Runtime layers must communicate through well-defined interfaces.');
    if (interaction.clientsBypassGateway === true) errors.push('Clients must never communicate directly with internal runtime services.');
    if (interaction.infrastructurePreferenceDriven === true) errors.push('Runtime interaction must not be chosen by infrastructure preference alone.');
    if (interaction.modifiesBusinessOwnership === true) errors.push('Runtime interaction must not modify business ownership.');

    return validation(errors);
  }

  validateWorkload(workloadInput) {
    const workload = workloadInput instanceof RuntimeWorkloadProfile
      ? workloadInput
      : new RuntimeWorkloadProfile(workloadInput);
    const errors = [];

    if (!Object.values(WORKLOAD_CATEGORIES).includes(workload.workloadCategory)) {
      errors.push(`Unsupported workload category: ${workload.workloadCategory}.`);
    }
    if (workload.examples.length === 0) errors.push('Runtime workload profile must include workload examples.');
    if (workload.independentlyScalable !== true) errors.push('Workload categories should scale independently.');
    if (workload.isolated !== true) errors.push('Workload categories should execute independently.');
    if (workload.statelessWherePractical !== true) errors.push('Runtime workloads should be stateless where practical.');
    if (workload.sharesFailureDomain === true) errors.push('Workload separation should improve fault isolation.');
    if (workload.storesPersistentStateInRuntime === true) errors.push('Persistent state belongs within managed data services.');

    return validation(errors);
  }

  validateCapabilities({ isolation = [], failureHandling = [], observability = [], governance = [] } = {}) {
    const errors = [];

    appendMissing(errors, isolation, this.isolationAreas(), 'Runtime isolation must include');
    appendMissing(errors, failureHandling, this.failureHandlingCapabilities(), 'Runtime failure handling must support');
    appendMissing(errors, observability, this.observabilityCapabilities(), 'Runtime observability must expose');
    appendMissing(errors, governance, this.governanceControls(), 'Runtime governance must include');

    return validation(errors);
  }

  assertTopology() {
    const errors = [];

    if (this.objectives().length !== 8) errors.push('Runtime topology must include all documented objectives.');
    if (this.runtimeFlow().length !== 7) errors.push('Runtime topology must include all documented runtime layers.');
    if (this.requestFlow().length !== 7) errors.push('Runtime topology must include the documented request flow.');
    if (this.workloads.size !== 4) errors.push('Runtime topology must include all documented workload categories.');

    if (errors.length > 0) {
      throw new PlatformError(
        DEPLOYMENT_MODEL_ERROR_CODES.RUNTIME_TOPOLOGY_INVALID,
        'Runtime topology violates ARCH-007-03.',
        { errors }
      );
    }

    return validation(errors);
  }
}

function workload(workloadCategory, examples) {
  return new RuntimeWorkloadProfile({ workloadCategory, examples });
}

function appendMissing(errors, actual, expected, message) {
  for (const item of expected) {
    if (!actual.includes(item)) errors.push(`${message} ${item}.`);
  }
}

function validation(errors) {
  return new RuntimeValidationResult({
    isValid: errors.length === 0,
    errors
  });
}
