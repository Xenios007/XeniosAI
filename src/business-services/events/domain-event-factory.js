import { DomainEvent } from '../contracts/domain-event.js';

export class DomainEventFactory {
  constructor({ clock, idGenerator }) {
    this.clock = clock;
    this.idGenerator = idGenerator;
  }

  create({ eventName, owningService, aggregateId, payload = {}, metadata = {} }) {
    return new DomainEvent({
      eventId: this.idGenerator.generate(),
      eventName,
      owningService,
      occurredAt: this.clock.now().toISOString(),
      aggregateId,
      payload,
      metadata
    });
  }
}
