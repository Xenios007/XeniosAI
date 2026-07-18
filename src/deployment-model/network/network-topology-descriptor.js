import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  DEPLOYMENT_MODEL_ERROR_CODES,
  FUTURE_NETWORK_CAPABILITIES,
  NETWORK_COMMUNICATION_METHODS,
  NETWORK_DISCOVERY_CAPABILITIES,
  NETWORK_GOVERNANCE_CONTROLS,
  NETWORK_OBJECTIVES,
  NETWORK_OBSERVABILITY_CAPABILITIES,
  NETWORK_RESILIENCE_CAPABILITIES,
  NETWORK_SEGMENTATION_AREAS,
  NETWORK_TRAFFIC_DIRECTIONS,
  NETWORK_ZONE_NAMES
} from '../constants.js';
import { NetworkRoute } from '../contracts/network-route.js';
import { NetworkValidationResult } from '../contracts/network-validation-result.js';
import { NetworkZone } from '../contracts/network-zone.js';

const NETWORK_FLOW = Object.freeze([
  NETWORK_ZONE_NAMES.EDGE,
  NETWORK_ZONE_NAMES.GATEWAY,
  NETWORK_ZONE_NAMES.APPLICATION,
  NETWORK_ZONE_NAMES.AI,
  NETWORK_ZONE_NAMES.INFRASTRUCTURE,
  NETWORK_ZONE_NAMES.DATA
]);

const DEFAULT_ZONES = Object.freeze([
  zone(NETWORK_ZONE_NAMES.EDGE, 'Public platform entry', ['External endpoint exposure', 'TLS termination', 'DDoS protection', 'Traffic filtering', 'Request validation', 'Initial routing'], { acceptsUnrestrictedPublicTraffic: true }),
  zone(NETWORK_ZONE_NAMES.GATEWAY, 'API routing and traffic control', ['API routing', 'Authentication delegation', 'Authorization integration', 'Request transformation', 'Version management', 'Protocol translation']),
  zone(NETWORK_ZONE_NAMES.APPLICATION, 'Business service communication', ['Internal communication', 'Business workflows', 'Domain execution', 'Service collaboration', 'Event production']),
  zone(NETWORK_ZONE_NAMES.AI, 'AI processing services', ['Agent orchestration', 'Prompt execution', 'Semantic retrieval', 'Embedding generation', 'Knowledge augmentation', 'AI inference']),
  zone(NETWORK_ZONE_NAMES.INFRASTRUCTURE, 'Shared platform services', ['Message brokers', 'Service discovery', 'Configuration services', 'Secret management', 'Monitoring', 'Scheduling']),
  zone(NETWORK_ZONE_NAMES.DATA, 'Persistent storage systems', ['Transactional databases', 'Search indexes', 'Vector stores', 'Object storage', 'Analytical systems', 'Backup repositories'], { hostsPersistentStorage: true })
]);

const DEFAULT_ROUTES = Object.freeze([
  route('External Client Entry', NETWORK_ZONE_NAMES.EDGE, NETWORK_ZONE_NAMES.GATEWAY, NETWORK_TRAFFIC_DIRECTIONS.NORTH_SOUTH, NETWORK_COMMUNICATION_METHODS.REST_APIS, 'Client requests and public APIs traverse controlled entry points.'),
  route('Gateway Application Routing', NETWORK_ZONE_NAMES.GATEWAY, NETWORK_ZONE_NAMES.APPLICATION, NETWORK_TRAFFIC_DIRECTIONS.NORTH_SOUTH, NETWORK_COMMUNICATION_METHODS.REST_APIS, 'Gateway mediation isolates clients from internal service topology.'),
  route('Application Service Collaboration', NETWORK_ZONE_NAMES.APPLICATION, NETWORK_ZONE_NAMES.APPLICATION, NETWORK_TRAFFIC_DIRECTIONS.EAST_WEST, NETWORK_COMMUNICATION_METHODS.REST_APIS, 'Business services collaborate through defined contracts.'),
  route('Application Event Flow', NETWORK_ZONE_NAMES.APPLICATION, NETWORK_ZONE_NAMES.INFRASTRUCTURE, NETWORK_TRAFFIC_DIRECTIONS.EAST_WEST, NETWORK_COMMUNICATION_METHODS.EVENT_STREAMING, 'Domain events and workflow coordination use shared platform services.'),
  route('Application AI Interaction', NETWORK_ZONE_NAMES.APPLICATION, NETWORK_ZONE_NAMES.AI, NETWORK_TRAFFIC_DIRECTIONS.EAST_WEST, NETWORK_COMMUNICATION_METHODS.ASYNCHRONOUS_WORKFLOWS, 'Business workflows can invoke AI processing without coupling to AI runtime placement.'),
  route('Authorized Data Access', NETWORK_ZONE_NAMES.APPLICATION, NETWORK_ZONE_NAMES.DATA, NETWORK_TRAFFIC_DIRECTIONS.EAST_WEST, NETWORK_COMMUNICATION_METHODS.MESSAGING, 'Authorized services access persistent storage through governed service ownership.')
]);

export class NetworkTopologyDescriptor {
  constructor({ zones = DEFAULT_ZONES, routes = DEFAULT_ROUTES } = {}) {
    this.zones = new Map();
    this.routes = new Map();

    for (const networkZone of zones) {
      this.registerZone(networkZone);
    }

    for (const networkRoute of routes) {
      this.registerRoute(networkRoute);
    }
  }

  objectives() {
    return Object.freeze(Object.values(NETWORK_OBJECTIVES));
  }

  networkFlow() {
    return NETWORK_FLOW;
  }

  communicationMethods() {
    return Object.freeze(Object.values(NETWORK_COMMUNICATION_METHODS));
  }

  segmentationAreas() {
    return Object.freeze(Object.values(NETWORK_SEGMENTATION_AREAS));
  }

  discoveryCapabilities() {
    return Object.freeze(Object.values(NETWORK_DISCOVERY_CAPABILITIES));
  }

  resilienceCapabilities() {
    return Object.freeze(Object.values(NETWORK_RESILIENCE_CAPABILITIES));
  }

  observabilityCapabilities() {
    return Object.freeze(Object.values(NETWORK_OBSERVABILITY_CAPABILITIES));
  }

  governanceControls() {
    return Object.freeze(Object.values(NETWORK_GOVERNANCE_CONTROLS));
  }

  futureCapabilities() {
    return Object.freeze(Object.values(FUTURE_NETWORK_CAPABILITIES));
  }

  listZones() {
    return Object.freeze([...this.zones.values()]);
  }

  listRoutes() {
    return Object.freeze([...this.routes.values()]);
  }

  getZone(zoneName) {
    return this.zones.get(zoneName);
  }

  registerZone(zoneInput) {
    const networkZone = zoneInput instanceof NetworkZone ? zoneInput : new NetworkZone(zoneInput);
    const result = this.validateZone(networkZone);

    if (!result.isValid) {
      throw new PlatformError(
        DEPLOYMENT_MODEL_ERROR_CODES.NETWORK_ZONE_INVALID,
        'Network zone violates ARCH-007-06.',
        { errors: result.errors }
      );
    }

    this.zones.set(networkZone.zoneName, networkZone);
    return this;
  }

  registerRoute(routeInput) {
    const networkRoute = routeInput instanceof NetworkRoute ? routeInput : new NetworkRoute(routeInput);
    const result = this.validateRoute(networkRoute);

    if (!result.isValid) {
      throw new PlatformError(
        DEPLOYMENT_MODEL_ERROR_CODES.NETWORK_ROUTE_INVALID,
        'Network route violates ARCH-007-06.',
        { errors: result.errors }
      );
    }

    this.routes.set(networkRoute.routeName, networkRoute);
    return this;
  }

  validateZone(zoneInput) {
    const networkZone = zoneInput instanceof NetworkZone ? zoneInput : new NetworkZone(zoneInput);
    const errors = [];

    if (!Object.values(NETWORK_ZONE_NAMES).includes(networkZone.zoneName)) errors.push(`Unsupported network zone: ${networkZone.zoneName}.`);
    if (!networkZone.primaryResponsibility) errors.push('Network zone must define a primary responsibility.');
    if (networkZone.responsibilities.length === 0) errors.push('Network zone must define operational responsibilities.');
    if (networkZone.infrastructureSpecific === true) errors.push('Network Topology must remain infrastructure independent.');
    if (networkZone.acceptsUnrestrictedPublicTraffic === true && networkZone.zoneName !== NETWORK_ZONE_NAMES.EDGE) {
      errors.push('Only the Edge Zone should accept unrestricted public traffic.');
    }
    if (networkZone.exposesInternalTopology === true) errors.push('Network zones must not expose internal service topology.');
    if (networkZone.hostsPersistentStorage === true && networkZone.zoneName !== NETWORK_ZONE_NAMES.DATA) {
      errors.push('Persistent storage systems belong in the Data Zone.');
    }

    return validation(errors);
  }

  validateRoute(routeInput) {
    const networkRoute = routeInput instanceof NetworkRoute ? routeInput : new NetworkRoute(routeInput);
    const errors = [];

    if (!networkRoute.routeName) errors.push('Network route must define a route name.');
    if (!this.zones.has(networkRoute.sourceZone)) errors.push(`Network route references unknown source zone: ${networkRoute.sourceZone}.`);
    if (!this.zones.has(networkRoute.targetZone)) errors.push(`Network route references unknown target zone: ${networkRoute.targetZone}.`);
    if (!Object.values(NETWORK_TRAFFIC_DIRECTIONS).includes(networkRoute.trafficDirection)) errors.push(`Unsupported traffic direction: ${networkRoute.trafficDirection}.`);
    if (!Object.values(NETWORK_COMMUNICATION_METHODS).includes(networkRoute.communicationMethod)) errors.push(`Unsupported communication method: ${networkRoute.communicationMethod}.`);
    if (!networkRoute.businessPurpose) errors.push('Network route must be justified by a business purpose.');
    if (networkRoute.traversesControlledEntry !== true) errors.push('External traffic should always traverse the Edge and Gateway zones.');
    if (networkRoute.authenticated !== true) errors.push('Internal communication should remain authenticated.');
    if (networkRoute.authorized !== true) errors.push('Internal communication should remain authorized.');
    if (networkRoute.observable !== true) errors.push('Communication paths must be observable.');
    if (networkRoute.directDatabaseExposure === true) errors.push('Network Topology must avoid direct database exposure.');
    if (networkRoute.hardCodedAddressing === true) errors.push('Service addresses should never be hard-coded into application logic.');
    if (networkRoute.infrastructureSpecific === true) errors.push('Network routes must remain infrastructure independent.');

    return validation(errors);
  }

  validateSegmentation(areas = []) {
    const errors = [];

    appendMissing(errors, areas, this.segmentationAreas(), 'Network segmentation must separate');

    return validation(errors);
  }

  validateServiceDiscovery(capabilities = []) {
    const errors = [];

    appendMissing(errors, capabilities, this.discoveryCapabilities(), 'Service discovery should provide');

    return validation(errors);
  }

  validateResilience(capabilities = []) {
    const errors = [];

    appendMissing(errors, capabilities, this.resilienceCapabilities(), 'Network resilience should support');

    return validation(errors);
  }

  validateObservability(capabilities = []) {
    const errors = [];

    appendMissing(errors, capabilities, this.observabilityCapabilities(), 'Network observability must support');

    return validation(errors);
  }

  validateGovernance(controls = []) {
    const errors = [];

    appendMissing(errors, controls, this.governanceControls(), 'Network governance must include');

    return validation(errors);
  }

  assertTopology() {
    const errors = [];

    if (this.objectives().length !== 8) errors.push('Network Topology must include all documented objectives.');
    if (this.networkFlow().length !== 6) errors.push('Network Topology must include the documented layered zones.');
    if (this.zones.size !== 6) errors.push('Network Topology must include all documented network zones.');
    if (this.routes.size < 6) errors.push('Network Topology must include documented communication flows.');
    if (this.getZone(NETWORK_ZONE_NAMES.EDGE)?.acceptsUnrestrictedPublicTraffic !== true) errors.push('Edge Zone must be the controlled public entry point.');
    if (this.getZone(NETWORK_ZONE_NAMES.DATA)?.hostsPersistentStorage !== true) errors.push('Data Zone must contain persistent storage systems.');

    if (errors.length > 0) {
      throw new PlatformError(
        DEPLOYMENT_MODEL_ERROR_CODES.NETWORK_TOPOLOGY_INVALID,
        'Network Topology violates ARCH-007-06.',
        { errors }
      );
    }

    return validation(errors);
  }
}

function zone(zoneName, primaryResponsibility, responsibilities, options = {}) {
  return new NetworkZone({
    zoneName,
    primaryResponsibility,
    responsibilities,
    ...options
  });
}

function route(routeName, sourceZone, targetZone, trafficDirection, communicationMethod, businessPurpose) {
  return new NetworkRoute({
    routeName,
    sourceZone,
    targetZone,
    trafficDirection,
    communicationMethod,
    businessPurpose
  });
}

function appendMissing(errors, actual, expected, message) {
  for (const item of expected) {
    if (!actual.includes(item)) errors.push(`${message} ${item}.`);
  }
}

function validation(errors) {
  return new NetworkValidationResult({
    isValid: errors.length === 0,
    errors
  });
}
