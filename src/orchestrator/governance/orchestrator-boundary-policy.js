import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  ORCHESTRATION_DECISIONS,
  ORCHESTRATOR_ERROR_CODES
} from '../constants.js';
import { OrchestrationBoundaryResult } from '../contracts/orchestration-boundary-result.js';

const ALLOWED_RESPONSIBILITIES = Object.freeze([
  'request coordination',
  'execution planning',
  'tool selection',
  'context assembly',
  'memory retrieval coordination',
  'knowledge retrieval coordination',
  'business service orchestration',
  'response synthesis',
  'failure coordination'
]);

const FORBIDDEN_RESPONSIBILITIES = Object.freeze([
  'calculate pricing',
  'validate reservations',
  'determine business policy',
  'store persistent memory',
  'maintain conversations',
  'access databases directly',
  'communicate with external providers',
  'duplicate business logic',
  'bypass service ownership',
  'store permanent business state',
  'call infrastructure directly',
  'circumvent architectural layers'
]);

export class OrchestratorBoundaryPolicy {
  constructor({
    allowedResponsibilities = ALLOWED_RESPONSIBILITIES,
    forbiddenResponsibilities = FORBIDDEN_RESPONSIBILITIES
  } = {}) {
    this.allowedResponsibilities = new Set(allowedResponsibilities.map(normalize));
    this.forbiddenResponsibilities = new Set(forbiddenResponsibilities.map(normalize));
  }

  validateResponsibility(responsibility) {
    const normalized = normalize(responsibility);

    if (this.forbiddenResponsibilities.has(normalized) || !this.allowedResponsibilities.has(normalized)) {
      return OrchestrationBoundaryResult.rejected({
        responsibility,
        errors: [
          {
            code: ORCHESTRATOR_ERROR_CODES.FORBIDDEN_RESPONSIBILITY,
            message: `The orchestrator may not own responsibility "${responsibility}".`
          }
        ]
      });
    }

    return OrchestrationBoundaryResult.allowed(responsibility);
  }

  assertResponsibilityAllowed(responsibility) {
    const validation = this.validateResponsibility(responsibility);

    if (!validation.isAllowed) {
      throw new PlatformError(
        validation.errors[0].code,
        validation.errors[0].message,
        { responsibility }
      );
    }

    return responsibility;
  }

  listAllowedResponsibilities() {
    return Object.freeze([...this.allowedResponsibilities]);
  }

  listForbiddenResponsibilities() {
    return Object.freeze([...this.forbiddenResponsibilities]);
  }

  listDecisionBoundaries() {
    return Object.freeze(Object.values(ORCHESTRATION_DECISIONS));
  }
}

function normalize(value) {
  return String(value).trim().toLowerCase();
}
