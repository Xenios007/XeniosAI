import { ServiceCollection } from '../foundation/di/service-collection.js';
import { ReferenceImplementationOverviewDescriptor } from './overview/reference-implementation-overview-descriptor.js';
import { ReferenceImplementationMethodologyDescriptor } from './methodology/reference-implementation-methodology-descriptor.js';
import { SinglePropertyHospitalityReferenceDescriptor } from './single-property-hospitality-reference/single-property-hospitality-reference-descriptor.js';
import { MultiPropertyEnterpriseReferenceDescriptor } from './multi-property-enterprise-reference/multi-property-enterprise-reference-descriptor.js';
import { ConversationalAiAgentAndKnowledgeReferenceDescriptor } from './conversational-ai-agent-and-knowledge-reference/conversational-ai-agent-and-knowledge-reference-descriptor.js';

export function addReferenceImplementations(services) {
  if (!(services instanceof ServiceCollection)) throw new Error('addReferenceImplementations expects an instance of ServiceCollection.');
  services.registerSingleton('ReferenceImplementationOverviewDescriptor', () => new ReferenceImplementationOverviewDescriptor());
  services.registerSingleton('ReferenceImplementationMethodologyDescriptor', () => new ReferenceImplementationMethodologyDescriptor());
  services.registerSingleton('SinglePropertyHospitalityReferenceDescriptor', () => new SinglePropertyHospitalityReferenceDescriptor());
  services.registerSingleton('MultiPropertyEnterpriseReferenceDescriptor', () => new MultiPropertyEnterpriseReferenceDescriptor());
  services.registerSingleton('ConversationalAiAgentAndKnowledgeReferenceDescriptor', () => new ConversationalAiAgentAndKnowledgeReferenceDescriptor());
  return services;
}
