import assert from 'node:assert/strict';
import test from 'node:test';
import { PlatformError, ServiceCollection } from '../../src/foundation/index.js';
import { DEVELOPER_EXPERIENCE_PRINCIPLES, PLUGIN_SDK_DEVELOPER_EXPERIENCE_AND_TESTING_ERROR_CODE, SDK_ARCHITECTURAL_RULES, SECURITY_TESTING_REQUIREMENTS, PluginSdkDeveloperExperienceAndTestingDescriptor, PluginSdkDeveloperExperienceAndTestingProfile, addPluginExtensionFramework } from '../../src/plugin-extension-framework/index.js';

const METADATA_KEYS = ['developerExperiencePrinciples', 'sdkScopeItems', 'sdkLayers', 'sdkProhibitedBehaviors', 'languageSdkReleaseDeclarations', 'sdkGenerationProperties', 'developerPortalCapabilities', 'extensionPointCatalogFields', 'projectTemplateElements', 'localSandboxEmulations', 'testTenantRequirements', 'unitTestingCoverageAreas', 'contractTestingAreas', 'integrationTestingAreas', 'securityTestingRequirements', 'failureTestingScenarios', 'compatibilityTestingDimensions', 'uninstallTestingRequirements', 'conformanceProfileResultFields', 'developerWorkflowSteps', 'packagingToolingCapabilities', 'publishingToolingBehaviors', 'documentationRequirements', 'referenceExtensionExamples', 'developerObservabilityElements', 'sdkLifecycleFields', 'architecturalRules'];

test('ARCH-019-07 exposes developer experience principles and SDK scope and layer metadata', () => { const descriptor = new PluginSdkDeveloperExperienceAndTestingDescriptor(); assert.ok(descriptor.developerExperiencePrinciples().includes(DEVELOPER_EXPERIENCE_PRINCIPLES.MULTI_TENANT_MANDATORY)); assert.ok(descriptor.sdkScopeItems().includes('test-fixtures-and-mock-providers')); assert.ok(descriptor.sdkLayers().includes('capability-layer')); assert.ok(descriptor.sdkProhibitedBehaviors().includes('bypass-host-mediation')); });

test('ARCH-019-07 exposes portal, template, sandbox, and test-tenant metadata', () => { const descriptor = new PluginSdkDeveloperExperienceAndTestingDescriptor(); assert.ok(descriptor.developerPortalCapabilities().includes('tenant-sandbox-management')); assert.ok(descriptor.projectTemplateElements().includes('tests-with-multiple-tenants')); assert.ok(descriptor.localSandboxEmulations().includes('capability-grants-and-denials')); assert.ok(descriptor.testTenantRequirements().includes('at-least-two-deliberately-distinct-tenant-fixtures')); });

test('ARCH-019-07 exposes testing category metadata across unit, contract, integration, and security', () => { const descriptor = new PluginSdkDeveloperExperienceAndTestingDescriptor(); assert.ok(descriptor.unitTestingCoverageAreas().includes('resource-budget-behavior')); assert.ok(descriptor.contractTestingAreas().includes('version-negotiation')); assert.ok(descriptor.integrationTestingAreas().includes('suspension-and-uninstall')); assert.ok(descriptor.securityTestingRequirements().includes(SECURITY_TESTING_REQUIREMENTS.MCP_TOOL_PROMPT_INJECTION_TESTS)); });

test('ARCH-019-07 exposes workflow, packaging, publishing, and lifecycle metadata', () => { const descriptor = new PluginSdkDeveloperExperienceAndTestingDescriptor(); assert.ok(descriptor.developerWorkflowSteps().includes('pilot-in-a-test-tenant')); assert.ok(descriptor.packagingToolingCapabilities().includes('compute-digest')); assert.ok(descriptor.publishingToolingBehaviors().includes('verify-namespace-ownership')); assert.ok(descriptor.sdkLifecycleFields().includes('compatible-contract-ranges')); assert.ok(descriptor.architecturalRules().includes(SDK_ARCHITECTURAL_RULES.SANDBOXES_NO_AMBIENT_AUTHORITY)); });

test('ARCH-019-07 validates profiles and rejects developer-experience shortcuts', () => {
  const descriptor = new PluginSdkDeveloperExperienceAndTestingDescriptor();
  assert.equal(descriptor.validateProfile(complete(descriptor)).isValid, true);
  const validation = descriptor.validateProfile({ manualEditsToGeneratedFilesProhibitedOrIsolated: false, templatesDefaultToMinimalCapabilityDenyByDefaultNetwork: false, singleTenantSuccessDemonstratesIsolation: true, credentialsBundledInToolsOrTemplates: true, developersCanQueryOtherPublishersPrivateEvidence: true, languageParityRequiresIdenticalApiShape: true });
  assert.equal(validation.isValid, false);
  assert.match(validation.errors.join('\n'), /manual edits to generated files/);
  assert.match(validation.errors.join('\n'), /minimal capability and deny-by-default network/);
  assert.match(validation.errors.join('\n'), /single-tenant success/);
  assert.match(validation.errors.join('\n'), /credentials from being bundled/);
  assert.match(validation.errors.join('\n'), /private evidence/);
  assert.match(validation.errors.join('\n'), /identical API shape/);
});

test('ARCH-019-07 detects incomplete plugin SDK and developer experience metadata', () => { class IncompleteDescriptor extends PluginSdkDeveloperExperienceAndTestingDescriptor { sdkLayers() { return []; } } assert.throws(() => new IncompleteDescriptor().assertArchitecture(), (error) => error instanceof PlatformError && error.code === PLUGIN_SDK_DEVELOPER_EXPERIENCE_AND_TESTING_ERROR_CODE); });

test('ARCH-019-07 profile is immutable and descriptor is registered', () => {
  const descriptor = addPluginExtensionFramework(new ServiceCollection()).buildServiceProvider().getRequiredService('PluginSdkDeveloperExperienceAndTestingDescriptor');
  assert.ok(descriptor instanceof PluginSdkDeveloperExperienceAndTestingDescriptor);
  assert.equal(descriptor.assertArchitecture().isValid, true);
  const profile = complete(descriptor);
  assert.ok(Object.isFrozen(profile));
  assert.throws(() => profile.sdkLayers.push('other'), TypeError);
});

function complete(descriptor) { const metadata = {}; for (const key of METADATA_KEYS) metadata[key] = descriptor[key](); return new PluginSdkDeveloperExperienceAndTestingProfile({ profileName: 'Plugin SDK, Developer Experience, and Testing', ...metadata }); }
