import { ServiceCollection } from '../foundation/di/service-collection.js';
import { ReferenceImplementationOverviewDescriptor } from './overview/reference-implementation-overview-descriptor.js';
import { ReferenceImplementationMethodologyDescriptor } from './methodology/reference-implementation-methodology-descriptor.js';
import { SinglePropertyHospitalityReferenceDescriptor } from './single-property-hospitality-reference/single-property-hospitality-reference-descriptor.js';
import { MultiPropertyEnterpriseReferenceDescriptor } from './multi-property-enterprise-reference/multi-property-enterprise-reference-descriptor.js';
import { ConversationalAiAgentAndKnowledgeReferenceDescriptor } from './conversational-ai-agent-and-knowledge-reference/conversational-ai-agent-and-knowledge-reference-descriptor.js';
import { WorkflowAndBusinessServiceReferenceDescriptor } from './workflow-and-business-service-reference/workflow-and-business-service-reference-descriptor.js';
import { ApiIntegrationAndExtensionReferenceDescriptor } from './api-integration-and-extension-reference/api-integration-and-extension-reference-descriptor.js';
import { MultiTenantSecurityDataAndOperationsReferenceDescriptor } from './multi-tenant-security-data-and-operations-reference/multi-tenant-security-data-and-operations-reference-descriptor.js';
import { DeliveryTestingAndConformanceReferenceDescriptor } from './delivery-testing-and-conformance-reference/delivery-testing-and-conformance-reference-descriptor.js';
import { FutureReferenceImplementationEvolutionDescriptor } from './future-reference-implementation-evolution/future-reference-implementation-evolution-descriptor.js';

export function addReferenceImplementations(services) {
  if (!(services instanceof ServiceCollection)) throw new Error('addReferenceImplementations expects an instance of ServiceCollection.');
  services.registerSingleton('ReferenceImplementationOverviewDescriptor', () => new ReferenceImplementationOverviewDescriptor());
  services.registerSingleton('ReferenceImplementationMethodologyDescriptor', () => new ReferenceImplementationMethodologyDescriptor());
  services.registerSingleton('SinglePropertyHospitalityReferenceDescriptor', () => new SinglePropertyHospitalityReferenceDescriptor());
  services.registerSingleton('MultiPropertyEnterpriseReferenceDescriptor', () => new MultiPropertyEnterpriseReferenceDescriptor());
  services.registerSingleton('ConversationalAiAgentAndKnowledgeReferenceDescriptor', () => new ConversationalAiAgentAndKnowledgeReferenceDescriptor());
  services.registerSingleton('WorkflowAndBusinessServiceReferenceDescriptor', () => new WorkflowAndBusinessServiceReferenceDescriptor());
  services.registerSingleton('ApiIntegrationAndExtensionReferenceDescriptor', () => new ApiIntegrationAndExtensionReferenceDescriptor());
  services.registerSingleton('MultiTenantSecurityDataAndOperationsReferenceDescriptor', () => new MultiTenantSecurityDataAndOperationsReferenceDescriptor());
  services.registerSingleton('DeliveryTestingAndConformanceReferenceDescriptor', () => new DeliveryTestingAndConformanceReferenceDescriptor());
  services.registerSingleton('FutureReferenceImplementationEvolutionDescriptor', () => new FutureReferenceImplementationEvolutionDescriptor());
  return services;
}
