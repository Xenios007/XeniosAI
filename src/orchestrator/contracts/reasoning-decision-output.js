export class ReasoningDecisionOutput {
  constructor({
    intent,
    goals = [],
    contextUsed = [],
    selectedTools = [],
    confidenceLevel,
    decisionCategory,
    executionStrategy = undefined,
    knowledgeRequired = false,
    rationale = undefined,
    clarificationQuestion = undefined,
    responsibilityClaims = []
  }) {
    this.intent = intent;
    this.goals = Object.freeze([...goals]);
    this.contextUsed = Object.freeze([...contextUsed]);
    this.selectedTools = Object.freeze([...selectedTools]);
    this.confidenceLevel = confidenceLevel;
    this.decisionCategory = decisionCategory;
    this.executionStrategy = executionStrategy;
    this.knowledgeRequired = Boolean(knowledgeRequired);
    this.rationale = rationale;
    this.clarificationQuestion = clarificationQuestion;
    this.responsibilityClaims = Object.freeze([...responsibilityClaims]);

    Object.freeze(this);
  }
}
