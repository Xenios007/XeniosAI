import { ToolDefinition } from '../../ai/contracts/tool-definition.js';
import { addAiIntelligenceLayer } from '../../ai/service-registration.js';
import { addBusinessServicesLayer } from '../../business-services/service-registration.js';
import { addConversationLayer } from '../../conversation/service-registration.js';
import { addCrossCuttingConcerns } from '../../cross-cutting/service-registration.js';
import { addDataLayer } from '../../data/service-registration.js';
import { addExperienceLayer } from '../../experience/service-registration.js';
import { createFoundationServiceCollection } from '../../foundation/service-registration.js';
import { ServiceCollection } from '../../foundation/di/service-collection.js';
import { addGatewayLayer } from '../../gateway/service-registration.js';
import { addIntegrationLayer } from '../../integration/service-registration.js';
import { LayerInteractionPolicy } from '../policies/layer-interaction-policy.js';
import { RequestFlowDescriptor } from '../flow/request-flow-descriptor.js';

const DEFAULT_BUSINESS_TOOL_DEFINITIONS = Object.freeze([
  ['pricing.compute.default', 'pricing.compute', 'Computes pricing through the Pricing Service.'],
  ['booking.create.default', 'booking.create', 'Creates booking intent through the Booking Service.'],
  ['calendar.check.default', 'calendar.check', 'Checks calendar availability through the Calendar Service.'],
  ['knowledge.lookup.default', 'knowledge.lookup', 'Looks up property knowledge through the Knowledge Service.'],
  ['property.describe.default', 'property.describe', 'Retrieves property details through the Property Service.']
]);

export function composePlatformLayers(services = createFoundationServiceCollection(), { toolDefinitions } = {}) {
  if (!(services instanceof ServiceCollection)) {
    throw new Error('composePlatformLayers expects an instance of ServiceCollection.');
  }

  addCrossCuttingConcerns(services);
  addDataLayer(services);
  addIntegrationLayer(services);
  addBusinessServicesLayer(services);

  services.registerSingleton('ToolExecutorPort', provider =>
    provider.getRequiredService('BusinessToolExecutor')
  );

  addAiIntelligenceLayer(services, {
    toolDefinitions: toolDefinitions ?? createDefaultBusinessToolDefinitions()
  });
  addConversationLayer(services);
  addGatewayLayer(services);
  addExperienceLayer(services);
  addLayerInteractionGovernance(services);

  return services;
}

export function addLayerInteractionGovernance(services) {
  if (!(services instanceof ServiceCollection)) {
    throw new Error('addLayerInteractionGovernance expects an instance of ServiceCollection.');
  }

  services.registerSingleton('LayerInteractionPolicy', () => new LayerInteractionPolicy());
  services.registerSingleton('RequestFlowDescriptor', () => new RequestFlowDescriptor());

  return services;
}

function createDefaultBusinessToolDefinitions() {
  return DEFAULT_BUSINESS_TOOL_DEFINITIONS.map(
    ([toolId, capability, description]) =>
      new ToolDefinition({
        toolId,
        capability,
        description
      })
  );
}
