import { INTERACTION_STYLES } from '../constants.js';

export class LayerInteraction {
  constructor({
    sourceLayer,
    destinationLayer,
    style = INTERACTION_STYLES.REQUEST_RESPONSE,
    description = '',
    metadata = {}
  }) {
    this.sourceLayer = sourceLayer;
    this.destinationLayer = destinationLayer;
    this.style = style;
    this.description = description;
    this.metadata = Object.freeze({ ...metadata });

    Object.freeze(this);
  }
}
