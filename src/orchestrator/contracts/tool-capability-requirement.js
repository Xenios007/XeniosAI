export class ToolCapabilityRequirement {
  constructor({
    capability,
    category,
    requiredPermissions = [],
    requiredOutputs = [],
    requiredVersion = undefined,
    policyContext = {},
    input = {}
  }) {
    this.capability = capability;
    this.category = category;
    this.requiredPermissions = Object.freeze([...requiredPermissions]);
    this.requiredOutputs = Object.freeze([...requiredOutputs]);
    this.requiredVersion = requiredVersion;
    this.policyContext = Object.freeze({ ...policyContext });
    this.input = Object.freeze({ ...input });

    Object.freeze(this);
  }
}
