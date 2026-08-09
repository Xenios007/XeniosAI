export class TelemetrySource {
  constructor({
    sourceName,
    sourceLayer,
    evidenceTypes = [],
    correlationRequired = true,
    governed = true,
    explainable = true,
    vendorSpecific = false
  }) {
    this.sourceName = sourceName;
    this.sourceLayer = sourceLayer;
    this.evidenceTypes = Object.freeze([...evidenceTypes]);
    this.correlationRequired = Boolean(correlationRequired);
    this.governed = Boolean(governed);
    this.explainable = Boolean(explainable);
    this.vendorSpecific = Boolean(vendorSpecific);

    Object.freeze(this);
  }
}
