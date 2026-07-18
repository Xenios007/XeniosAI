import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  INTERACTION_ERROR_CODES,
  INTERACTION_STYLES,
  PLATFORM_LAYERS
} from '../constants.js';
import { InteractionValidationResult } from '../contracts/interaction-validation-result.js';
import { LayerInteraction } from '../contracts/layer-interaction.js';

const ALL_LAYERS = Object.freeze(new Set(Object.values(PLATFORM_LAYERS)));

const ALLOWED_INTERACTIONS = Object.freeze([
  [PLATFORM_LAYERS.EXPERIENCE, PLATFORM_LAYERS.GATEWAY],
  [PLATFORM_LAYERS.GATEWAY, PLATFORM_LAYERS.CONVERSATION],
  [PLATFORM_LAYERS.CONVERSATION, PLATFORM_LAYERS.AI_INTELLIGENCE],
  [PLATFORM_LAYERS.AI_INTELLIGENCE, PLATFORM_LAYERS.BUSINESS_SERVICES],
  [PLATFORM_LAYERS.BUSINESS_SERVICES, PLATFORM_LAYERS.DATA],
  [PLATFORM_LAYERS.BUSINESS_SERVICES, PLATFORM_LAYERS.INTEGRATION],
  [PLATFORM_LAYERS.INTEGRATION, PLATFORM_LAYERS.EXTERNAL_PROVIDERS]
]);

const FORBIDDEN_INTERACTIONS = Object.freeze([
  [PLATFORM_LAYERS.EXPERIENCE, 'database'],
  [PLATFORM_LAYERS.GATEWAY, PLATFORM_LAYERS.BUSINESS_SERVICES],
  [PLATFORM_LAYERS.GATEWAY, PLATFORM_LAYERS.AI_INTELLIGENCE],
  [PLATFORM_LAYERS.CONVERSATION, 'database'],
  [PLATFORM_LAYERS.AI_INTELLIGENCE, 'database'],
  [PLATFORM_LAYERS.AI_INTELLIGENCE, PLATFORM_LAYERS.EXTERNAL_PROVIDERS],
  [PLATFORM_LAYERS.INTEGRATION, 'database'],
  [PLATFORM_LAYERS.EXPERIENCE, PLATFORM_LAYERS.INTEGRATION]
]);

export class LayerInteractionPolicy {
  constructor({
    allowedInteractions = ALLOWED_INTERACTIONS,
    forbiddenInteractions = FORBIDDEN_INTERACTIONS
  } = {}) {
    this.allowedInteractions = new Set(allowedInteractions.map(formatPair));
    this.forbiddenInteractions = new Set(forbiddenInteractions.map(formatPair));
  }

  validate(interactionInput) {
    const interaction = interactionInput instanceof LayerInteraction
      ? interactionInput
      : new LayerInteraction(interactionInput);

    const invalidLayer = [interaction.sourceLayer, interaction.destinationLayer]
      .filter(layer => !ALL_LAYERS.has(layer) && layer !== 'database');

    if (invalidLayer.length > 0) {
      return InteractionValidationResult.rejected(interaction, [
        {
          code: INTERACTION_ERROR_CODES.INVALID_LAYER,
          message: `Unknown layer: ${invalidLayer.join(', ')}.`
        }
      ]);
    }

    if (interaction.destinationLayer === PLATFORM_LAYERS.FOUNDATION) {
      return InteractionValidationResult.allowed(interaction);
    }

    const key = formatPair([interaction.sourceLayer, interaction.destinationLayer]);
    if (this.forbiddenInteractions.has(key) || !this.allowedInteractions.has(key)) {
      return InteractionValidationResult.rejected(interaction, [
        {
          code: INTERACTION_ERROR_CODES.FORBIDDEN_INTERACTION,
          message: `${interaction.sourceLayer} may not directly depend on ${interaction.destinationLayer}.`
        }
      ]);
    }

    return InteractionValidationResult.allowed(interaction);
  }

  assertAllowed(interactionInput) {
    const validation = this.validate(interactionInput);
    if (!validation.isAllowed) {
      throw new PlatformError(
        validation.errors[0].code,
        validation.errors[0].message,
        { interaction: validation.interaction }
      );
    }

    return validation.interaction;
  }

  listAllowedDestinations(sourceLayer) {
    const destinations = [...this.allowedInteractions]
      .map(key => key.split('->'))
      .filter(([source]) => source === sourceLayer)
      .map(([, destination]) => destination);

    if (sourceLayer !== PLATFORM_LAYERS.FOUNDATION) {
      destinations.push(PLATFORM_LAYERS.FOUNDATION);
    }

    return Object.freeze([...new Set(destinations)]);
  }

  createInteraction(sourceLayer, destinationLayer, style = INTERACTION_STYLES.REQUEST_RESPONSE) {
    return this.assertAllowed({ sourceLayer, destinationLayer, style });
  }
}

function formatPair([sourceLayer, destinationLayer]) {
  return `${sourceLayer}->${destinationLayer}`;
}
