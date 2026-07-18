export class RequestLifecycleStage {
  constructor({
    sequence,
    stage,
    responsibility,
    component,
    characteristics = [],
    telemetryFields = []
  }) {
    this.sequence = sequence;
    this.stage = stage;
    this.responsibility = responsibility;
    this.component = component;
    this.characteristics = Object.freeze([...characteristics]);
    this.telemetryFields = Object.freeze([...telemetryFields]);

    Object.freeze(this);
  }
}
