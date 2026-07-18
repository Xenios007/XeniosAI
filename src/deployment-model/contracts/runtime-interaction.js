export class RuntimeInteraction {
  constructor({
    sourceLayer,
    targetLayer,
    pattern,
    businessJustification,
    wellDefinedInterface = true,
    clientsBypassGateway = false,
    infrastructurePreferenceDriven = false,
    modifiesBusinessOwnership = false
  }) {
    this.sourceLayer = sourceLayer;
    this.targetLayer = targetLayer;
    this.pattern = pattern;
    this.businessJustification = businessJustification;
    this.wellDefinedInterface = Boolean(wellDefinedInterface);
    this.clientsBypassGateway = Boolean(clientsBypassGateway);
    this.infrastructurePreferenceDriven = Boolean(infrastructurePreferenceDriven);
    this.modifiesBusinessOwnership = Boolean(modifiesBusinessOwnership);

    Object.freeze(this);
  }
}
