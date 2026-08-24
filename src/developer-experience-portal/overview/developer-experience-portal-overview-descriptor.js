import { PlatformError } from '../../foundation/errors/platform-error.js';
import { DeveloperExperiencePortalOverviewProfile as Profile } from '../contracts/developer-experience-portal-overview-profile.js';
import * as constants from '../developer-experience-portal-overview-constants.js';

const metadata = Object.freeze({ responsibilities: constants.DEVELOPER_PORTAL_RESPONSIBILITIES, authorities: constants.DEVELOPER_PORTAL_AUTHORITIES, capabilities: constants.DEVELOPER_PORTAL_CAPABILITIES, consumers: constants.DEVELOPER_PORTAL_CONSUMERS, requestContextFields: constants.DEVELOPER_PORTAL_REQUEST_CONTEXT_FIELDS, resourceFields: constants.DEVELOPER_PORTAL_RESOURCE_FIELDS, lifecycleStates: constants.DEVELOPER_PORTAL_LIFECYCLE_STATES, boundaries: constants.DEVELOPER_PORTAL_BOUNDARIES, casaLluviaJourneys: constants.CASA_LLUVIA_DEVELOPER_JOURNEYS, governanceControls: constants.DEVELOPER_PORTAL_GOVERNANCE_CONTROLS, failureRecovery: constants.DEVELOPER_PORTAL_FAILURE_RECOVERY, successMeasures: constants.DEVELOPER_PORTAL_SUCCESS_MEASURES, observabilityFields: constants.DEVELOPER_PORTAL_OBSERVABILITY_FIELDS, assuranceEvidence: constants.DEVELOPER_PORTAL_ASSURANCE_EVIDENCE, invariants: constants.DEVELOPER_PORTAL_INVARIANTS });
const required = Object.freeze({ developerExperienceProductManaged: 'requires developer experience to be managed as a measurable product', arch013CoordinationPreserved: 'requires coordination of ARCH-013 capabilities', providerAuthorizationPreserved: 'requires provider authorization to remain authoritative', developerMetadataOwnershipBounded: 'requires bounded ownership of developer-facing state and metadata', humanMachineSemanticsCanonical: 'requires canonical human and machine contract semantics', accessibilityPreserved: 'requires accessibility', lifecycleGoverned: 'requires governed preview through retirement lifecycle', failuresTransparent: 'requires honest and actionable failure states', secretsExcluded: 'requires credentials and secrets to be excluded from exposed artifacts', machineApprovalProhibited: 'requires silent machine approval to be prohibited' });
const prohibited = Object.freeze({ secondControlPlane: 'prohibits the portal becoming a second control plane', portalAuthorizesProviderResources: 'prohibits portal authorization of provider resources', visibleControlImpliesPermission: 'prohibits visible controls from implying permission', embedsCredentialsOrSecrets: 'prohibits embedded credentials or secrets', selfServiceBypassesGuardrails: 'prohibits self-service bypassing guardrails', clientInfersCompletion: 'prohibits clients inferring completion', eventsExposeProtectedPayloads: 'prohibits events exposing credentials or protected payloads', supportAccessUnaudited: 'prohibits unaudited support access', generatedArtifactsUntraceable: 'prohibits untraceable generated artifacts', inaccessibleReviewOrSupport: 'prohibits inaccessible review or support paths', machineSilentlyApproves: 'prohibits machine assistance silently approving access publication or permission expansion', providerSpecificLockIn: 'prohibits provider-specific lock-in' });

export class DeveloperExperiencePortalOverviewDescriptor {
  responsibilities() { return values(metadata.responsibilities); }
  authorities() { return values(metadata.authorities); }
  capabilities() { return values(metadata.capabilities); }
  consumers() { return values(metadata.consumers); }
  requestContextFields() { return values(metadata.requestContextFields); }
  resourceFields() { return values(metadata.resourceFields); }
  lifecycleStates() { return values(metadata.lifecycleStates); }
  boundaries() { return values(metadata.boundaries); }
  casaLluviaJourneys() { return values(metadata.casaLluviaJourneys); }
  governanceControls() { return values(metadata.governanceControls); }
  failureRecovery() { return values(metadata.failureRecovery); }
  successMeasures() { return values(metadata.successMeasures); }
  observabilityFields() { return values(metadata.observabilityFields); }
  assuranceEvidence() { return values(metadata.assuranceEvidence); }
  invariants() { return values(metadata.invariants); }
  validateProfile(input) {
    const profile = input instanceof Profile ? input : new Profile(input);
    const errors = [];
    if (!profile.profileName) errors.push('Developer Experience and Portal Overview profile must have a name.');
    for (const [key, source] of Object.entries(metadata)) for (const item of values(source)) if (!profile[key].includes(item)) errors.push(`${key} must include ${item}.`);
    for (const [key, message] of Object.entries(required)) if (!profile[key]) errors.push(`ARCH-031-01 ${message}.`);
    for (const [key, message] of Object.entries(prohibited)) if (profile[key]) errors.push(`ARCH-031-01 ${message}.`);
    return Object.freeze({ isValid: errors.length === 0, errors: Object.freeze(errors) });
  }
  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(metadata)) if (this[key]().length !== Object.keys(source).length) errors.push(`${key} is incomplete.`);
    if (errors.length) throw new PlatformError(constants.DEVELOPER_EXPERIENCE_PORTAL_OVERVIEW_ERROR_CODE, 'Developer Experience and Portal Overview violates ARCH-031-01.', { errors });
    return Object.freeze({ isValid: true, errors: Object.freeze([]) });
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
