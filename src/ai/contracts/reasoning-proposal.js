import { AI_DECISIONS } from '../constants.js';

export class ReasoningProposal {
  constructor({
    decision = AI_DECISIONS.RESPOND,
    confidence,
    rationale,
    requestedCapabilities = [],
    clarificationQuestion = undefined
  }) {
    this.decision = decision;
    this.confidence = confidence;
    this.rationale = rationale;
    this.requestedCapabilities = Object.freeze([...requestedCapabilities]);
    this.clarificationQuestion = clarificationQuestion;
    Object.freeze(this);
  }
}
