import { ServiceCollection } from '../foundation/di/service-collection.js';
import { AggregateRegistry } from './aggregates/aggregate-registry.js';
import { BoundedContextRegistry } from './bounded-contexts/bounded-context-registry.js';
import { DomainEventRegistry } from './domain-events/domain-event-registry.js';
import { DomainRuleRegistry } from './domain-rules/domain-rule-registry.js';
import { DomainServiceRegistry } from './domain-services/domain-service-registry.js';
import { CoreEntityRegistry } from './entities/core-entity-registry.js';
import { DomainOverviewDescriptor } from './overview/domain-overview-descriptor.js';
import { ValueObjectRegistry } from './value-objects/value-object-registry.js';

export function addDomainModel(services) {
  if (!(services instanceof ServiceCollection)) {
    throw new Error('addDomainModel expects an instance of ServiceCollection.');
  }

  services.registerSingleton('AggregateRegistry', () => new AggregateRegistry());
  services.registerSingleton('BoundedContextRegistry', () => new BoundedContextRegistry());
  services.registerSingleton('CoreEntityRegistry', () => new CoreEntityRegistry());
  services.registerSingleton('DomainEventRegistry', () => new DomainEventRegistry());
  services.registerSingleton('DomainOverviewDescriptor', () => new DomainOverviewDescriptor());
  services.registerSingleton('DomainRuleRegistry', () => new DomainRuleRegistry());
  services.registerSingleton('DomainServiceRegistry', () => new DomainServiceRegistry());
  services.registerSingleton('ValueObjectRegistry', () => new ValueObjectRegistry());

  return services;
}
