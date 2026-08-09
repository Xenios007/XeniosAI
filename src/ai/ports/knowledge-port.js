export class KnowledgePort {
  async retrieveKnowledge() {
    throw new Error('KnowledgePort.retrieveKnowledge must be implemented by a subclass.');
  }
}
