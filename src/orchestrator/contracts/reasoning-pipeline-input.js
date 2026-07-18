export class ReasoningPipelineInput {
  constructor({
    normalizedRequest,
    executionContext = {},
    conversationState = undefined,
    userProfile = undefined,
    activeWorkflow = undefined,
    sessionMetadata = {},
    retrievedMemory = [],
    retrievedKnowledge = []
  }) {
    this.normalizedRequest = normalizedRequest;
    this.executionContext = Object.freeze({ ...executionContext });
    this.conversationState = conversationState;
    this.userProfile = userProfile;
    this.activeWorkflow = activeWorkflow;
    this.sessionMetadata = Object.freeze({ ...sessionMetadata });
    this.retrievedMemory = Object.freeze([...retrievedMemory]);
    this.retrievedKnowledge = Object.freeze([...retrievedKnowledge]);

    Object.freeze(this);
  }
}
