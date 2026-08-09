export class ReasoningPipelineStage {
  constructor({
    sequence,
    stage,
    purpose,
    responsibility,
    produces = []
  }) {
    this.sequence = sequence;
    this.stage = stage;
    this.purpose = purpose;
    this.responsibility = responsibility;
    this.produces = Object.freeze([...produces]);

    Object.freeze(this);
  }
}
