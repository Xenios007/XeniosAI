import {
  CANONICAL_REQUEST_FLOW,
  INTERACTION_ERROR_CODES,
  PLATFORM_LAYERS
} from '../constants.js';
import { FlowStep } from '../contracts/flow-step.js';
import { InteractionValidationResult } from '../contracts/interaction-validation-result.js';

export class RequestFlowDescriptor {
  constructor({ flow = CANONICAL_REQUEST_FLOW } = {}) {
    this.flow = Object.freeze([...flow]);
  }

  describe() {
    const midpoint = this.flow.indexOf(PLATFORM_LAYERS.INTEGRATION);

    return Object.freeze(
      this.flow.map((layer, index) =>
        new FlowStep({
          sequence: index + 1,
          layer,
          direction: midpoint >= 0 && index > midpoint ? 'response' : 'request',
          description: index === 0 ? 'Request enters the platform.' : ''
        })
      )
    );
  }

  validateTraversal(layers) {
    const requestedFlow = [...layers];

    for (let index = 0; index < requestedFlow.length - 1; index += 1) {
      const sourceLayer = requestedFlow[index];
      const destinationLayer = requestedFlow[index + 1];
      const hasCanonicalHop = this.flow.some(
        (layer, flowIndex) =>
          layer === sourceLayer && this.flow[flowIndex + 1] === destinationLayer
      );

      if (!hasCanonicalHop) {
        return InteractionValidationResult.rejected(null, [
          {
            code: INTERACTION_ERROR_CODES.INVALID_TRAVERSAL,
            message: `Layer traversal is not canonical from ${sourceLayer} to ${destinationLayer}.`
          }
        ]);
      }
    }

    return InteractionValidationResult.allowed(null);
  }
}
