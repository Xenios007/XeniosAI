import { PlatformError } from '../../foundation/errors/platform-error.js';
import { ORCHESTRATOR_COMPONENTS, ORCHESTRATOR_ERROR_CODES } from '../constants.js';
import { OrchestratorComponentDescriptor } from '../contracts/orchestrator-component-descriptor.js';

const DEFAULT_COMPONENTS = Object.freeze([
  descriptor(ORCHESTRATOR_COMPONENTS.REASONING_ENGINE, 'Intent understanding and reasoning'),
  descriptor(ORCHESTRATOR_COMPONENTS.MEMORY_SYSTEM, 'Historical context'),
  descriptor(ORCHESTRATOR_COMPONENTS.KNOWLEDGE_SERVICE, 'Authoritative information'),
  descriptor(ORCHESTRATOR_COMPONENTS.TOOL_ORCHESTRATOR, 'Capability execution'),
  descriptor(ORCHESTRATOR_COMPONENTS.BUSINESS_SERVICES, 'Business decisions'),
  descriptor(ORCHESTRATOR_COMPONENTS.WORKFLOW_ENGINE, 'Multi-step coordination'),
  descriptor(ORCHESTRATOR_COMPONENTS.RESPONSE_COMPOSER, 'Final response generation')
]);

export class OrchestratorComponentRegistry {
  constructor({ components = DEFAULT_COMPONENTS } = {}) {
    this.components = new Map();

    for (const component of components) {
      this.components.set(component.componentName, component);
    }
  }

  listComponents() {
    return Object.freeze([...this.components.values()]);
  }

  getComponent(componentName) {
    const component = this.components.get(componentName);

    if (!component) {
      throw new PlatformError(
        ORCHESTRATOR_ERROR_CODES.COMPONENT_NOT_FOUND,
        `Orchestrator component "${componentName}" is not registered.`
      );
    }

    return component;
  }
}

function descriptor(componentName, responsibility) {
  return new OrchestratorComponentDescriptor({
    componentName,
    responsibility,
    ownsImplementation: true
  });
}
