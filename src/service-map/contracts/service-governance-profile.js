import { SERVICE_MATURITY_LEVELS } from '../constants.js';

export class ServiceGovernanceProfile {
  constructor({
    serviceName,
    maturity = SERVICE_MATURITY_LEVELS.PROPOSED,
    architectureRefs = [],
    publicContractRefs = [],
    testRefs = [],
    operationalGuidanceRefs = [],
    versionHistoryRefs = [],
    ownerRef = ''
  }) {
    this.serviceName = serviceName;
    this.maturity = maturity;
    this.architectureRefs = Object.freeze([...architectureRefs]);
    this.publicContractRefs = Object.freeze([...publicContractRefs]);
    this.testRefs = Object.freeze([...testRefs]);
    this.operationalGuidanceRefs = Object.freeze([...operationalGuidanceRefs]);
    this.versionHistoryRefs = Object.freeze([...versionHistoryRefs]);
    this.ownerRef = ownerRef;

    Object.freeze(this);
  }
}
