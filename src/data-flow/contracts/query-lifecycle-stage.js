export class QueryLifecycleStage {
  constructor({ sequence, stage, owner, responsibility }) {
    this.sequence = sequence;
    this.stage = stage;
    this.owner = owner;
    this.responsibility = responsibility;

    Object.freeze(this);
  }
}
