import { BusinessRequest } from '../contracts/business-request.js';

export class BusinessToolExecutor {
  constructor({ businessRouter }) {
    this.businessRouter = businessRouter;
  }

  async executeTool(toolCall) {
    const response = await this.businessRouter.execute(
      new BusinessRequest({
        capability: toolCall.capability,
        serviceName: toolCall.capability.split('.')[0],
        operation: toolCall.capability.split('.')[1] ?? toolCall.capability,
        input: toolCall.input,
        correlationId: toolCall.correlationId,
        requestId: toolCall.input.requestId,
        metadata: {
          toolId: toolCall.toolId
        }
      })
    );

    return {
      toolId: toolCall.toolId,
      capability: toolCall.capability,
      success: response.outcome === 'success',
      output: {
        outcome: response.outcome,
        data: response.data,
        errors: response.errors
      }
    };
  }
}
