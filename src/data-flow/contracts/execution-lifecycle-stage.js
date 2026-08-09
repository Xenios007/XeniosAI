export class ExecutionLifecycleStage {
  constructor({ sequence, stage, participant, responsibility, description }) {
    this.sequence = sequence;
    this.stage = stage;
    this.participant = participant;
    this.responsibility = responsibility;
    this.description = description;

    Object.freeze(this);
  }
}
