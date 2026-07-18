export class DeploymentLayer {
  constructor({ layerName, sequence, responsibility, dependsOn = [] }) {
    this.layerName = layerName;
    this.sequence = sequence;
    this.responsibility = responsibility;
    this.dependsOn = Object.freeze([...dependsOn]);

    Object.freeze(this);
  }
}
