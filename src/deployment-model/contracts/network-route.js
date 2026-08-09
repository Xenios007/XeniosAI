export class NetworkRoute {
  constructor({
    routeName,
    sourceZone,
    targetZone,
    trafficDirection,
    communicationMethod,
    businessPurpose,
    traversesControlledEntry = true,
    authenticated = true,
    authorized = true,
    observable = true,
    directDatabaseExposure = false,
    hardCodedAddressing = false,
    infrastructureSpecific = false
  }) {
    this.routeName = routeName;
    this.sourceZone = sourceZone;
    this.targetZone = targetZone;
    this.trafficDirection = trafficDirection;
    this.communicationMethod = communicationMethod;
    this.businessPurpose = businessPurpose;
    this.traversesControlledEntry = Boolean(traversesControlledEntry);
    this.authenticated = Boolean(authenticated);
    this.authorized = Boolean(authorized);
    this.observable = Boolean(observable);
    this.directDatabaseExposure = Boolean(directDatabaseExposure);
    this.hardCodedAddressing = Boolean(hardCodedAddressing);
    this.infrastructureSpecific = Boolean(infrastructureSpecific);

    Object.freeze(this);
  }
}
