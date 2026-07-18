export class FlowStep {
  constructor({ sequence, layer, direction, description = '' }) {
    this.sequence = sequence;
    this.layer = layer;
    this.direction = direction;
    this.description = description;

    Object.freeze(this);
  }
}
