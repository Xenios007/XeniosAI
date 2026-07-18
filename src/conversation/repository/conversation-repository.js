export class ConversationRepository {
  findByParticipant() {
    throw new Error('ConversationRepository.findByParticipant must be implemented by a subclass.');
  }

  saveConversation() {
    throw new Error('ConversationRepository.saveConversation must be implemented by a subclass.');
  }

  getSession() {
    throw new Error('ConversationRepository.getSession must be implemented by a subclass.');
  }

  saveSession() {
    throw new Error('ConversationRepository.saveSession must be implemented by a subclass.');
  }
}
