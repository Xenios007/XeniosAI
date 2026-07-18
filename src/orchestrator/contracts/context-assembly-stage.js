export class ContextAssemblyStage {
  constructor({ sequence, stage, purpose }) {
    this.sequence = sequence;
    this.stage = stage;
    this.purpose = purpose;

    Object.freeze(this);
  }
}
