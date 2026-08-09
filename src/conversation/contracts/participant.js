export class Participant {
  constructor({
    participantId,
    role,
    displayName = undefined,
    channel = undefined,
    metadata = {}
  }) {
    this.participantId = participantId;
    this.role = role;
    this.displayName = displayName;
    this.channel = channel;
    this.metadata = Object.freeze({ ...metadata });
    Object.freeze(this);
  }
}
