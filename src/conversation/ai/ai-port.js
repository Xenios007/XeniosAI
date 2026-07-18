export class AiPort {
  async processConversation() {
    throw new Error('AiPort.processConversation must be implemented by a subclass.');
  }
}
