export class ConversationPort {
  async forwardRequest() {
    throw new Error('ConversationPort.forwardRequest must be implemented by a subclass.');
  }
}
