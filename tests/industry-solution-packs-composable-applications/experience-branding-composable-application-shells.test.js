import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError } from '../../src/foundation/index.js';
import { EXPERIENCE_BRANDING_COMPOSABLE_APPLICATION_SHELLS_ERROR_CODE, ExperienceBrandingComposableApplicationShellsDescriptor as Descriptor, ExperienceBrandingComposableApplicationShellsProfile as Profile } from '../../src/industry-solution-packs-composable-applications/index.js';

const keys = ['shellFields', 'customerSurfaceFields', 'staffSurfaceFields', 'navigationFields', 'designTokenFields', 'localizationFields', 'brandFields', 'extensionSlotFields', 'contractFields', 'lifecycleStates', 'controls', 'failureRecovery', 'observabilityFields', 'assuranceEvidence', 'invariants'];
const complete = descriptor => { const profile = {}; for (const key of keys) profile[key] = descriptor[key](); return new Profile({ profileName: 'Casa Lluvia composable application shell', ...profile }); };

test('ARCH-030-07 exposes customer staff navigation tokens localization branding and extension slots', () => {
  const descriptor = new Descriptor();
  assert.ok(descriptor.customerSurfaceFields().includes('consent-notice-and-preference-state'));
  assert.ok(descriptor.staffSurfaceFields().includes('approval-and-separation-state'));
  assert.ok(descriptor.navigationFields().includes('validated-context-preserving-deep-link'));
  assert.ok(descriptor.designTokenFields().includes('motion-and-reduced-motion-tokens'));
  assert.ok(descriptor.localizationFields().includes('critical-journey-completeness-result'));
  assert.ok(descriptor.brandFields().includes('verified-domain-and-channel-bindings'));
  assert.ok(descriptor.extensionSlotFields().includes('host-owned-rendering-and-lifecycle-contract'));
});

test('ARCH-030-07 validates shell branding accessibility and extension safeguards', () => {
  const descriptor = new Descriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);
  const result = descriptor.validateProfile({ brandingOverridesSecurity: true, policyStateHidden: true, unauthorizedNavigationExposed: true, tokensWeakenAccessibility: true, criticalJourneyUnlocalized: true, crossTenantBrandLeak: true, extensionExecutesUnrestrictedCode: true, shellOwnsBusinessState: true, clientInfersCompletion: true });
  assert.equal(result.isValid, false);
  assert.match(result.errors.join('\n'), /branding overriding security indicators/);
  assert.match(result.errors.join('\n'), /design tokens weakening accessibility/);
  assert.match(result.errors.join('\n'), /cross-tenant brand leakage/);
  assert.match(result.errors.join('\n'), /extension slots executing unrestricted code/);
});

test('ARCH-030-07 detects incomplete metadata and preserves immutability', () => {
  class Incomplete extends Descriptor { localizationFields() { return []; } }
  assert.throws(() => new Incomplete().assertArchitecture(), error => error instanceof PlatformError && error.code === EXPERIENCE_BRANDING_COMPOSABLE_APPLICATION_SHELLS_ERROR_CODE);
  assert.throws(() => complete(new Descriptor()).extensionSlotFields.push('x'), TypeError);
});
