import { PlatformError } from '../../foundation/errors/platform-error.js';
import { ExperienceBrandingComposableApplicationShellsProfile as Profile } from '../contracts/experience-branding-composable-application-shells-profile.js';
import * as constants from '../experience-branding-composable-application-shells-constants.js';

const metadata = Object.freeze({ shellFields: constants.COMPOSABLE_APPLICATION_SHELL_FIELDS, customerSurfaceFields: constants.CUSTOMER_SURFACE_FIELDS, staffSurfaceFields: constants.STAFF_SURFACE_FIELDS, navigationFields: constants.SHELL_NAVIGATION_FIELDS, designTokenFields: constants.DESIGN_TOKEN_FIELDS, localizationFields: constants.LOCALIZATION_PROFILE_FIELDS, brandFields: constants.BRAND_PROFILE_FIELDS, extensionSlotFields: constants.EXTENSION_SLOT_FIELDS, contractFields: constants.SHELL_CONTRACT_FIELDS, lifecycleStates: constants.SHELL_LIFECYCLE_STATES, controls: constants.SHELL_CONTROLS, failureRecovery: constants.SHELL_FAILURE_RECOVERY, observabilityFields: constants.SHELL_OBSERVABILITY_FIELDS, assuranceEvidence: constants.SHELL_ASSURANCE_EVIDENCE, invariants: constants.SHELL_INVARIANTS });
const required = Object.freeze({ customerSurfacesPurposeBound: 'requires purpose-bound customer surfaces', staffSurfacesAuthorized: 'requires authorized staff surfaces', navigationPolicyAware: 'requires policy-aware navigation', designTokensGoverned: 'requires governed design tokens', localizationComplete: 'requires complete critical-journey localization', brandingTenantScoped: 'requires tenant-scoped branding', extensionSlotsGoverned: 'requires governed extension slots', accessibilityRequired: 'requires accessibility', providerAuthorityPreserved: 'requires preserved provider authority' });
const prohibited = Object.freeze({ brandingOverridesSecurity: 'prohibits branding overriding security indicators', policyStateHidden: 'prohibits hidden policy state', unauthorizedNavigationExposed: 'prohibits unauthorized navigation exposure', tokensWeakenAccessibility: 'prohibits design tokens weakening accessibility', criticalJourneyUnlocalized: 'prohibits unlocalized critical journeys', crossTenantBrandLeak: 'prohibits cross-tenant brand leakage', extensionExecutesUnrestrictedCode: 'prohibits extension slots executing unrestricted code', shellOwnsBusinessState: 'prohibits shells owning business state', directDatabaseAccess: 'prohibits direct database access', clientInfersCompletion: 'prohibits clients inferring completion', generatedUiAsTruth: 'prohibits generated UI as source truth', protectedPayloadInTelemetry: 'prohibits protected payloads in telemetry' });

export class ExperienceBrandingComposableApplicationShellsDescriptor {
  shellFields() { return values(metadata.shellFields); }
  customerSurfaceFields() { return values(metadata.customerSurfaceFields); }
  staffSurfaceFields() { return values(metadata.staffSurfaceFields); }
  navigationFields() { return values(metadata.navigationFields); }
  designTokenFields() { return values(metadata.designTokenFields); }
  localizationFields() { return values(metadata.localizationFields); }
  brandFields() { return values(metadata.brandFields); }
  extensionSlotFields() { return values(metadata.extensionSlotFields); }
  contractFields() { return values(metadata.contractFields); }
  lifecycleStates() { return values(metadata.lifecycleStates); }
  controls() { return values(metadata.controls); }
  failureRecovery() { return values(metadata.failureRecovery); }
  observabilityFields() { return values(metadata.observabilityFields); }
  assuranceEvidence() { return values(metadata.assuranceEvidence); }
  invariants() { return values(metadata.invariants); }

  validateProfile(input) {
    const profile = input instanceof Profile ? input : new Profile(input);
    const errors = [];
    if (!profile.profileName) errors.push('Experience Branding and Composable Application Shells profile must have a name.');
    for (const [key, source] of Object.entries(metadata)) for (const item of values(source)) if (!profile[key].includes(item)) errors.push(`${key} must include ${item}.`);
    for (const [key, message] of Object.entries(required)) if (!profile[key]) errors.push(`ARCH-030-07 ${message}.`);
    for (const [key, message] of Object.entries(prohibited)) if (profile[key]) errors.push(`ARCH-030-07 ${message}.`);
    return Object.freeze({ isValid: errors.length === 0, errors: Object.freeze(errors) });
  }

  assertArchitecture() {
    const errors = [];
    for (const [key, source] of Object.entries(metadata)) if (this[key]().length !== Object.keys(source).length) errors.push(`${key} is incomplete.`);
    if (errors.length) throw new PlatformError(constants.EXPERIENCE_BRANDING_COMPOSABLE_APPLICATION_SHELLS_ERROR_CODE, 'Experience Branding and Composable Application Shells violates ARCH-030-07.', { errors });
    return Object.freeze({ isValid: true, errors: Object.freeze([]) });
  }
}

function values(source) { return Object.freeze(Object.values(source)); }
