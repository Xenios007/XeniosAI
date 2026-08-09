import { AI_INTENTS } from '../constants.js';
import { KnowledgeItem } from '../contracts/knowledge-item.js';
import { KnowledgePort } from '../ports/knowledge-port.js';

export class StaticKnowledgeProvider extends KnowledgePort {
  async retrieveKnowledge(contextPacket, intentAnalysis) {
    if (intentAnalysis.intent === AI_INTENTS.POLICY) {
      return [
        new KnowledgeItem({
          source: 'knowledge-base',
          title: 'Property Policy Guidance',
          content: 'Property policies must be confirmed from authoritative sources before answering.',
          metadata: {
            conversationId: contextPacket.conversationId
          }
        })
      ];
    }

    return [];
  }
}
