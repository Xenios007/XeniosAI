import { CONVERSATION_STATES } from '../constants.js';
import { StateTransition } from '../contracts/state-transition.js';

export class ConversationStateMachine {
  activate(currentState, timestamp, reason) {
    const nextState = currentState === CONVERSATION_STATES.NEW
      ? CONVERSATION_STATES.ACTIVE
      : currentState;

    return new StateTransition({
      fromState: currentState,
      toState: nextState,
      timestamp,
      reason
    });
  }
}
