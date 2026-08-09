export class InMemoryMessageBus {
  constructor({ idGenerator, clock }) {
    this.idGenerator = idGenerator;
    this.clock = clock;
    this.messages = [];
    this.events = [];
  }

  async publishMessage(message) {
    const stored = {
      ...message,
      messageId: message.messageId ?? this.idGenerator.generate(),
      publishedAt: this.clock.now().toISOString()
    };
    this.messages.push(stored);
    return stored;
  }

  async publishEvent(event) {
    const stored = {
      ...event,
      eventId: event.eventId ?? this.idGenerator.generate(),
      occurredAt: event.occurredAt ?? this.clock.now().toISOString()
    };
    this.events.push(stored);
    return stored;
  }
}
