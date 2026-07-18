import test from 'node:test';
import assert from 'node:assert/strict';

import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import {
  FUTURE_SECURITY_OVERVIEW_CAPABILITIES,
  SECURITY_ARCHITECTURE_ERROR_CODES,
  SECURITY_DOMAIN_NAMES,
  SECURITY_GOVERNANCE_ACTIVITIES,
  SECURITY_LIFECYCLE_STAGES,
  SECURITY_OBJECTIVES,
  SECURITY_PRINCIPLES,
  SECURITY_RESPONSIBILITY_OWNERS,
  SECURITY_RISK_FACTORS,
  SecurityDomain,
  SecurityOverviewDescriptor,
  SecurityResponsibility,
  SecurityRiskAssessment,
  TRUST_BOUNDARY_NAMES,
  TrustBoundary,
  addSecurityArchitecture
} from '../../src/security-architecture/index.js';

test('security overview exposes objectives, principles, domains, and lifecycle', () => {
  const descriptor = new SecurityOverviewDescriptor();

  assert.ok(descriptor.objectives().includes(SECURITY_OBJECTIVES.CONFIDENTIALITY));
  assert.ok(descriptor.objectives().includes(SECURITY_OBJECTIVES.PRIVACY));
  assert.ok(descriptor.principles().includes(SECURITY_PRINCIPLES.ZERO_TRUST));
  assert.deepEqual(descriptor.domainSequence(), [
    SECURITY_DOMAIN_NAMES.IDENTITY,
    SECURITY_DOMAIN_NAMES.AUTHENTICATION,
    SECURITY_DOMAIN_NAMES.AUTHORIZATION,
    SECURITY_DOMAIN_NAMES.TRUST,
    SECURITY_DOMAIN_NAMES.SECRETS,
    SECURITY_DOMAIN_NAMES.CRYPTOGRAPHY,
    SECURITY_DOMAIN_NAMES.AI_SECURITY,
    SECURITY_DOMAIN_NAMES.PLATFORM_SECURITY,
    SECURITY_DOMAIN_NAMES.COMPLIANCE,
    SECURITY_DOMAIN_NAMES.GOVERNANCE
  ]);
  assert.deepEqual(descriptor.lifecycle(), [
    SECURITY_LIFECYCLE_STAGES.DESIGN,
    SECURITY_LIFECYCLE_STAGES.DEVELOP,
    SECURITY_LIFECYCLE_STAGES.TEST,
    SECURITY_LIFECYCLE_STAGES.DEPLOY,
    SECURITY_LIFECYCLE_STAGES.OPERATE,
    SECURITY_LIFECYCLE_STAGES.MONITOR,
    SECURITY_LIFECYCLE_STAGES.IMPROVE
  ]);
});

test('security overview registers documented domains, boundaries, and responsibilities', () => {
  const descriptor = new SecurityOverviewDescriptor();

  assert.equal(descriptor.listDomains().length, 10);
  assert.equal(descriptor.listBoundaries().length, 8);
  assert.equal(descriptor.listResponsibilities().length, 8);
  assert.equal(descriptor.getDomain(SECURITY_DOMAIN_NAMES.AI_SECURITY).participatesInZeroTrust, true);
  assert.ok(descriptor.listBoundaries().some(boundary => boundary.boundaryName === TRUST_BOUNDARY_NAMES.AI_EXTERNAL_MODELS));
  assert.ok(descriptor.listResponsibilities().some(item => item.primaryOwner === SECURITY_RESPONSIBILITY_OWNERS.SECURITY_ARCHITECTURE));
});

test('security overview rejects invalid security domains', () => {
  assert.throws(
    () =>
      new SecurityOverviewDescriptor({
        domains: [
          new SecurityDomain({
            domainName: 'Product Firewall',
            responsibility: '',
            protectsPlatformWide: false,
            participatesInZeroTrust: false,
            supportsGovernance: false,
            vendorSpecific: true
          })
        ],
        boundaries: [],
        responsibilities: []
      }),
    error =>
      error instanceof PlatformError &&
      error.code === SECURITY_ARCHITECTURE_ERROR_CODES.SECURITY_DOMAIN_INVALID &&
      error.details.errors.some(message => message.includes('Unsupported security domain')) &&
      error.details.errors.some(message => message.includes('platform-wide')) &&
      error.details.errors.some(message => message.includes('Zero Trust')) &&
      error.details.errors.some(message => message.includes('vendor neutral'))
  );
});

test('security overview validates trust boundary controls', () => {
  const descriptor = new SecurityOverviewDescriptor();
  const valid = descriptor.validateBoundary(
    new TrustBoundary({
      boundaryName: TRUST_BOUNDARY_NAMES.GATEWAY_SERVICES,
      source: 'Gateway',
      target: 'Services',
      controls: [SECURITY_PRINCIPLES.ZERO_TRUST]
    })
  );
  const invalid = descriptor.validateBoundary({
    boundaryName: 'Trusted LAN',
    source: '',
    target: '',
    controls: [],
    authenticated: false,
    authorized: false,
    evaluated: false,
    loggedWhereAppropriate: false,
    trustsNetworkLocation: true,
    vendorSpecific: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /Unsupported trust boundary/);
  assert.match(invalid.errors.join('\n'), /appropriate security controls/);
  assert.match(invalid.errors.join('\n'), /authenticated/);
  assert.match(invalid.errors.join('\n'), /network location/);
});

test('security overview validates shared responsibilities', () => {
  const descriptor = new SecurityOverviewDescriptor();
  const valid = descriptor.validateResponsibility(
    new SecurityResponsibility({
      responsibility: 'Authorization',
      primaryOwner: SECURITY_RESPONSIBILITY_OWNERS.BUSINESS_SERVICES
    })
  );
  const invalid = descriptor.validateResponsibility({
    responsibility: '',
    primaryOwner: 'Vendor Console',
    clearlyAssigned: false,
    continuouslyReviewed: false,
    changesBusinessResponsibility: true,
    vendorSpecific: true
  });

  assert.equal(valid.isValid, true);
  assert.equal(invalid.isValid, false);
  assert.match(invalid.errors.join('\n'), /must be named/);
  assert.match(invalid.errors.join('\n'), /Unsupported security responsibility owner/);
  assert.match(invalid.errors.join('\n'), /clearly assigned/);
  assert.match(invalid.errors.join('\n'), /without changing their responsibilities/);
});

test('security overview validates risk and governance', () => {
  const descriptor = new SecurityOverviewDescriptor();
  const validRisk = descriptor.validateRiskAssessment(
    new SecurityRiskAssessment({
      assessmentName: 'New Capability Security Review',
      riskFactors: Object.values(SECURITY_RISK_FACTORS)
    })
  );
  const invalidRisk = descriptor.validateRiskAssessment({
    assessmentName: '',
    riskFactors: [SECURITY_RISK_FACTORS.THREAT_LIKELIHOOD],
    controlsProportional: false,
    includesSecurityReview: false,
    enablesBusinessOperations: false,
    unnecessarilyRestrictsCapabilities: true,
    vendorSpecific: true
  });
  const governance = descriptor.validateGovernance(Object.values(SECURITY_GOVERNANCE_ACTIVITIES));

  assert.equal(validRisk.isValid, true);
  assert.equal(governance.isValid, true);
  assert.equal(invalidRisk.isValid, false);
  assert.match(invalidRisk.errors.join('\n'), /business-impact/);
  assert.match(invalidRisk.errors.join('\n'), /associated security review/);
  assert.match(invalidRisk.errors.join('\n'), /enable business operations/);
});

test('security overview reports future capabilities without implementing them', () => {
  const descriptor = new SecurityOverviewDescriptor();

  assert.ok(descriptor.futureCapabilities().includes(FUTURE_SECURITY_OVERVIEW_CAPABILITIES.CONTINUOUS_ADAPTIVE_TRUST_EVALUATION));
  assert.ok(descriptor.futureCapabilities().includes(FUTURE_SECURITY_OVERVIEW_CAPABILITIES.POST_QUANTUM_CRYPTOGRAPHY));
  assert.ok(descriptor.futureCapabilities().includes(FUTURE_SECURITY_OVERVIEW_CAPABILITIES.PREDICTIVE_RISK_ANALYSIS));
});

test('security overview assertion rejects incomplete metadata', () => {
  assert.throws(
    () => new SecurityOverviewDescriptor({ domains: [], boundaries: [], responsibilities: [] }).assertOverview(),
    error =>
      error instanceof PlatformError &&
      error.code === SECURITY_ARCHITECTURE_ERROR_CODES.SECURITY_OVERVIEW_INVALID &&
      error.details.errors.some(message => message.includes('security domains')) &&
      error.details.errors.some(message => message.includes('trust boundaries'))
  );
});

test('security overview descriptor is available through DI registration', () => {
  const services = new ServiceCollection();

  addSecurityArchitecture(services);
  const provider = services.buildServiceProvider();
  const descriptor = provider.getRequiredService('SecurityOverviewDescriptor');

  assert.ok(descriptor instanceof SecurityOverviewDescriptor);
  assert.equal(descriptor.assertOverview().isValid, true);
});
