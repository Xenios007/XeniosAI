import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  COMMAND_CHARACTERISTICS,
  COMMAND_LIFECYCLE_STAGES,
  COMMAND_OUTCOMES,
  COMMAND_TELEMETRY_FIELDS,
  DATA_FLOW_ERROR_CODES,
  EXECUTION_PARTICIPANTS
} from '../constants.js';
import { CommandDefinition } from '../contracts/command-definition.js';
import { CommandEnvelope } from '../contracts/command-envelope.js';
import { CommandLifecycleStage } from '../contracts/command-lifecycle-stage.js';
import { CommandValidationResult } from '../contracts/command-validation-result.js';

const CANONICAL_STAGE_DEFINITIONS = Object.freeze([
  [COMMAND_LIFECYCLE_STAGES.REQUEST_RECEIVED, EXECUTION_PARTICIPANTS.EXPERIENCE_LAYER, 'Receive and normalize the originating request.'],
  [COMMAND_LIFECYCLE_STAGES.INTENT_IDENTIFIED, EXECUTION_PARTICIPANTS.AI_ORCHESTRATOR, 'Identify state-changing business intent.'],
  [COMMAND_LIFECYCLE_STAGES.DECISION_AUTHORIZED, EXECUTION_PARTICIPANTS.DECISION_ENGINE, 'Authorize command execution before creation.'],
  [COMMAND_LIFECYCLE_STAGES.COMMAND_CREATED, EXECUTION_PARTICIPANTS.AI_ORCHESTRATOR, 'Construct an explicit immutable command contract.'],
  [COMMAND_LIFECYCLE_STAGES.BUSINESS_VALIDATION, EXECUTION_PARTICIPANTS.BUSINESS_SERVICES, 'Validate business rules and domain invariants.'],
  [COMMAND_LIFECYCLE_STAGES.BUSINESS_EXECUTION, EXECUTION_PARTICIPANTS.BUSINESS_SERVICES, 'Execute the business operation within the owning service.'],
  [COMMAND_LIFECYCLE_STAGES.PERSIST_CHANGES, EXECUTION_PARTICIPANTS.DATA_LAYER, 'Persist durable state within the service ownership boundary.'],
  [COMMAND_LIFECYCLE_STAGES.PUBLISH_EVENTS, EXECUTION_PARTICIPANTS.BUSINESS_SERVICES, 'Publish domain events after successful execution when applicable.'],
  [COMMAND_LIFECYCLE_STAGES.RETURN_RESULT, EXECUTION_PARTICIPANTS.BUSINESS_SERVICES, 'Return the authoritative business outcome.']
]);

const DEFAULT_COMMANDS = Object.freeze([
  command('CreateReservation', 'Booking Service', ['guestId', 'propertyId', 'checkIn', 'checkOut', 'guests'], true, true),
  command('UpdateReservation', 'Booking Service', ['reservationId'], true, true),
  command('CancelReservation', 'Booking Service', ['reservationId'], true, true),
  command('RegisterGuest', 'Booking Service', ['guestId'], true, true),
  command('RecordPayment', 'Payment Service', ['paymentId', 'amount'], true, true),
  command('SendNotification', 'Notification Service', ['recipient', 'message'], true, false),
  command('UpdatePropertyInformation', 'Property Service', ['propertyId'], false, true),
  command('CalculatePrice', 'Pricing Service', ['propertyId', 'checkIn', 'checkOut'], false, false),
  command('UpdateCalendar', 'Calendar Service', ['propertyId', 'dateRange'], true, true),
  command('SendConfirmation', 'Notification Service', ['reservationId', 'recipient'], true, false)
]);

export class CommandFlowDescriptor {
  constructor({ commands = DEFAULT_COMMANDS } = {}) {
    this.stages = Object.freeze(
      CANONICAL_STAGE_DEFINITIONS.map(([stage, owner, responsibility], index) =>
        new CommandLifecycleStage({ sequence: index + 1, stage, owner, responsibility })
      )
    );
    this.commands = new Map();

    for (const commandDefinition of commands) {
      this.registerCommand(commandDefinition);
    }
  }

  describeLifecycle() {
    return this.stages;
  }

  canonicalStageNames() {
    return Object.freeze(this.stages.map((stage) => stage.stage));
  }

  characteristics() {
    return Object.freeze(Object.values(COMMAND_CHARACTERISTICS));
  }

  outcomes() {
    return Object.freeze(Object.values(COMMAND_OUTCOMES));
  }

  telemetryFields() {
    return Object.freeze(Object.values(COMMAND_TELEMETRY_FIELDS));
  }

  listCommands() {
    return Object.freeze([...this.commands.values()]);
  }

  registerCommand(commandInput) {
    const commandDefinition = commandInput instanceof CommandDefinition
      ? commandInput
      : new CommandDefinition(commandInput);
    const validation = this.validateCommandDefinition(commandDefinition);

    if (!validation.isValid) {
      throw new PlatformError(
        DATA_FLOW_ERROR_CODES.COMMAND_DEFINITION_INVALID,
        'Command definition violates ARCH-005-02.',
        { errors: validation.errors }
      );
    }

    this.commands.set(commandDefinition.commandName, commandDefinition);
    return this;
  }

  getStage(stage) {
    const lifecycleStage = this.stages.find((candidate) => candidate.stage === stage);

    if (!lifecycleStage) {
      throw new PlatformError(
        DATA_FLOW_ERROR_CODES.COMMAND_STAGE_NOT_FOUND,
        `Command lifecycle stage is not defined: ${stage}`,
        { stage }
      );
    }

    return lifecycleStage;
  }

  getCommand(commandName) {
    return this.commands.get(commandName);
  }

  validateLifecycle(stages) {
    const errors = [];
    const actualStages = Array.isArray(stages) ? stages : [];
    const expectedStages = this.canonicalStageNames();

    if (actualStages.length !== expectedStages.length) {
      errors.push(`Command lifecycle must include ${expectedStages.length} stages in canonical order.`);
    }

    expectedStages.forEach((expectedStage, index) => {
      if (actualStages[index] !== expectedStage) {
        errors.push(`Stage ${index + 1} must be ${expectedStage}; received ${actualStages[index] ?? 'missing'}.`);
      }
    });

    return validation(errors);
  }

  assertLifecycle(stages) {
    const result = this.validateLifecycle(stages);

    if (!result.isValid) {
      throw new PlatformError(
        DATA_FLOW_ERROR_CODES.COMMAND_LIFECYCLE_INVALID,
        'Command lifecycle does not match ARCH-005-02.',
        { errors: result.errors }
      );
    }

    return result;
  }

  validateCommandDefinition(commandInput) {
    const commandDefinition = commandInput instanceof CommandDefinition
      ? commandInput
      : new CommandDefinition(commandInput);
    const errors = [];

    if (!commandDefinition.commandName) {
      errors.push('Command must have a name.');
    }

    if (!commandDefinition.owningService) {
      errors.push('Command must have exactly one authoritative Business Service owner.');
    }

    if (Array.isArray(commandDefinition.owningService)) {
      errors.push('Command ownership must not be shared across multiple services.');
    }

    if (commandDefinition.requiredFields.length === 0) {
      errors.push('Command must define explicit required fields.');
    }

    return validation(errors);
  }

  createCommand(commandInput) {
    const command = commandInput instanceof CommandEnvelope
      ? commandInput
      : new CommandEnvelope(commandInput);
    const definition = this.getCommand(command.commandName);
    const errors = [];

    if (!definition) {
      errors.push(`Command definition is not registered: ${command.commandName}.`);
    }

    if (definition && command.owningService !== definition.owningService) {
      errors.push(`Command ${command.commandName} must be owned by ${definition.owningService}.`);
    }

    if (!command.authorized) {
      errors.push('Command must pass the Decision Engine before execution.');
    }

    for (const field of definition?.requiredFields ?? []) {
      if (command.payload[field] === undefined || command.payload[field] === null) {
        errors.push(`Command ${command.commandName} is missing required field ${field}.`);
      }
    }

    if (definition?.idempotencyRecommended && !command.idempotencyKey) {
      errors.push(`Command ${command.commandName} should include an idempotency key.`);
    }

    if (errors.length > 0) {
      throw new PlatformError(
        command.authorized ? DATA_FLOW_ERROR_CODES.COMMAND_DEFINITION_INVALID : DATA_FLOW_ERROR_CODES.COMMAND_AUTHORIZATION_INVALID,
        'Command envelope violates ARCH-005-02.',
        { errors }
      );
    }

    return command;
  }

  validateTelemetry(record) {
    const errors = [];

    for (const field of this.telemetryFields()) {
      if (field === COMMAND_TELEMETRY_FIELDS.FAILURE_REASON) {
        continue;
      }

      if (record?.[field] === undefined || record?.[field] === null) {
        errors.push(`Command telemetry is missing field ${field}.`);
      }
    }

    if (record?.executionDurationMs !== undefined && record.executionDurationMs < 0) {
      errors.push('Command execution duration must not be negative.');
    }

    if (record?.result && !this.outcomes().includes(record.result)) {
      errors.push(`Unsupported command result: ${record.result}.`);
    }

    if (record?.result && record.result !== COMMAND_OUTCOMES.SUCCESS && !record.failureReason) {
      errors.push('Unsuccessful command telemetry must include a failure reason.');
    }

    return validation(errors);
  }
}

function command(commandName, owningService, requiredFields, idempotencyRecommended, mayRequireTransaction) {
  return new CommandDefinition({
    commandName,
    owningService,
    requiredFields,
    idempotencyRecommended,
    mayRequireTransaction
  });
}

function validation(errors) {
  return new CommandValidationResult({
    isValid: errors.length === 0,
    errors
  });
}
