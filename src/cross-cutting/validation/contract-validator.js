import { CrossCuttingValidationResult } from '../contracts/validation-result.js';

export class ContractValidator {
  requireFields(value, fields) {
    const errors = fields
      .filter(field => value[field] === undefined || value[field] === null || value[field] === '')
      .map(field => `${field} is required.`);

    return new CrossCuttingValidationResult({
      isValid: errors.length === 0,
      errors
    });
  }
}
