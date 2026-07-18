import { PlatformError } from '../../foundation/errors/platform-error.js';
import {
  DOMAIN_MODEL_ERROR_CODES,
  VALUE_OBJECT_CHARACTERISTICS,
  VALUE_OBJECT_FUTURE_CANDIDATES,
  VALUE_OBJECT_NAMES,
  VALUE_OBJECT_OWNERSHIP_RULES
} from '../constants.js';
import { ValueObjectDefinition } from '../contracts/value-object-definition.js';
import { ValueObjectInstance } from '../contracts/value-object-instance.js';
import { ValueObjectValidationResult } from '../contracts/value-object-validation-result.js';

const DEFAULT_VALUE_OBJECTS = Object.freeze([
  definition(VALUE_OBJECT_NAMES.MONEY, 'Monetary value', ['amount', 'currency', 'precision'], ['amount-non-negative', 'currency-valid'], ['Add', 'Subtract', 'Compare'], ['Reservation', 'Payment', 'Pricing', 'Promotion']),
  definition(VALUE_OBJECT_NAMES.CURRENCY, 'Currency representation', ['code'], ['currency-valid'], [], ['Money']),
  definition(VALUE_OBJECT_NAMES.DATE_RANGE, 'Reservation period', ['startDate', 'endDate'], ['start-before-end'], ['Overlaps', 'Contains', 'Intersects'], ['Reservation']),
  definition(VALUE_OBJECT_NAMES.EMAIL_ADDRESS, 'Electronic contact', ['address'], ['email-format-valid'], ['Normalize', 'Compare'], ['Guest']),
  definition(VALUE_OBJECT_NAMES.PHONE_NUMBER, 'Contact information', ['number'], ['phone-format-valid'], ['Normalize'], ['Guest']),
  definition(VALUE_OBJECT_NAMES.ADDRESS, 'Physical location', ['street', 'city', 'province', 'postalCode', 'country'], ['address-complete'], ['Compare'], ['Property', 'Guest']),
  definition(VALUE_OBJECT_NAMES.TIME_ZONE, 'Regional time representation', ['identifier'], ['time-zone-valid'], [], ['Property']),
  definition(VALUE_OBJECT_NAMES.GUEST_COUNT, 'Occupancy information', ['adults', 'children', 'infants'], ['occupancy-non-negative'], ['Total Occupancy'], ['Reservation', 'Property']),
  definition(VALUE_OBJECT_NAMES.COORDINATES, 'Geographic location', ['latitude', 'longitude'], ['latitude-valid', 'longitude-valid'], ['Calculate Distance'], ['Property']),
  definition(VALUE_OBJECT_NAMES.DURATION, 'Time interval', ['amount', 'unit'], ['duration-positive'], ['Compare'], ['Reservation', 'Workflow Instance']),
  definition(VALUE_OBJECT_NAMES.PERCENTAGE, 'Discount or rate', ['value'], ['percentage-range-valid'], ['Compare'], ['Pricing', 'Promotion']),
  definition(VALUE_OBJECT_NAMES.LANGUAGE, 'Localization', ['code'], ['language-code-valid'], [], ['Guest', 'Notification'])
]);

export class ValueObjectRegistry {
  constructor({ valueObjects = DEFAULT_VALUE_OBJECTS } = {}) {
    this.valueObjects = new Map();

    for (const valueObjectDefinition of valueObjects) {
      this.registerDefinition(valueObjectDefinition);
    }
  }

  characteristics() {
    return Object.freeze(Object.values(VALUE_OBJECT_CHARACTERISTICS));
  }

  ownershipRules() {
    return Object.freeze(Object.values(VALUE_OBJECT_OWNERSHIP_RULES));
  }

  futureCandidates() {
    return Object.freeze(Object.values(VALUE_OBJECT_FUTURE_CANDIDATES));
  }

  listDefinitions() {
    return Object.freeze([...this.valueObjects.values()]);
  }

  registerDefinition(definitionInput) {
    const valueObjectDefinition = definitionInput instanceof ValueObjectDefinition
      ? definitionInput
      : new ValueObjectDefinition(definitionInput);
    const result = this.validateDefinition(valueObjectDefinition);

    if (!result.isValid) {
      throw new PlatformError(
        DOMAIN_MODEL_ERROR_CODES.VALUE_OBJECT_DEFINITION_INVALID,
        'Value object definition violates ARCH-006-04.',
        { errors: result.errors }
      );
    }

    this.valueObjects.set(valueObjectDefinition.valueObjectName, valueObjectDefinition);
    return this;
  }

  getDefinition(valueObjectName) {
    const valueObjectDefinition = this.valueObjects.get(valueObjectName);

    if (!valueObjectDefinition) {
      throw new PlatformError(
        DOMAIN_MODEL_ERROR_CODES.VALUE_OBJECT_NOT_FOUND,
        `Value object "${valueObjectName}" is not defined.`
      );
    }

    return valueObjectDefinition;
  }

  validateDefinition(definitionInput) {
    const valueObjectDefinition = definitionInput instanceof ValueObjectDefinition
      ? definitionInput
      : new ValueObjectDefinition(definitionInput);
    const errors = [];

    if (!valueObjectDefinition.valueObjectName) errors.push('Value object must have a business name.');
    if (!valueObjectDefinition.purpose) errors.push('Value object must represent meaningful business purpose.');
    if (valueObjectDefinition.attributes.length === 0) errors.push('Value object must be defined by attributes.');
    if (valueObjectDefinition.validationRules.length === 0) errors.push('Value object must enforce its own validation.');
    if (valueObjectDefinition.hasIdentity === true) errors.push('Value objects must have no independent identity.');
    if (valueObjectDefinition.immutable !== true) errors.push('Value objects must be immutable.');
    if (valueObjectDefinition.comparedByValue !== true) errors.push('Value objects must be compared by value.');
    if (valueObjectDefinition.persistenceConcern === true) errors.push('Value objects must remain independent of persistence technologies.');

    return validation(errors);
  }

  createValue(instanceInput) {
    const instance = instanceInput instanceof ValueObjectInstance
      ? instanceInput
      : new ValueObjectInstance(instanceInput);
    const valueObjectDefinition = this.valueObjects.get(instance.valueObjectName);
    const errors = [];

    if (!valueObjectDefinition) errors.push(`Value object definition is not registered: ${instance.valueObjectName}.`);
    if (!instance.ownerEntity) errors.push('Value object must be owned by the containing Entity.');
    if (instance.identity) errors.push('Value object instances must not carry independent identity.');
    if (instance.mutable === true) errors.push('Value object instances must be immutable and replaced rather than mutated.');
    if (instance.lifecycleIndependent === true) errors.push('Value objects have no lifecycle independent of their owner.');

    for (const attribute of valueObjectDefinition?.attributes ?? []) {
      if (instance.values[attribute] === undefined || instance.values[attribute] === null) {
        errors.push(`Value object ${instance.valueObjectName} is missing required attribute ${attribute}.`);
      }
    }

    errors.push(...validateBusinessRules(valueObjectDefinition, instance));

    if (errors.length > 0) {
      throw new PlatformError(
        DOMAIN_MODEL_ERROR_CODES.VALUE_OBJECT_INSTANCE_INVALID,
        'Value object instance violates ARCH-006-04.',
        { errors }
      );
    }

    return instance;
  }

  equals(leftInput, rightInput) {
    const left = leftInput instanceof ValueObjectInstance ? leftInput : new ValueObjectInstance(leftInput);
    const right = rightInput instanceof ValueObjectInstance ? rightInput : new ValueObjectInstance(rightInput);

    if (left.valueObjectName !== right.valueObjectName) return false;

    return stableStringify(left.values) === stableStringify(right.values);
  }
}

function definition(valueObjectName, purpose, attributes, validationRules, behaviors = [], reusableByEntities = []) {
  return new ValueObjectDefinition({
    valueObjectName,
    purpose,
    attributes,
    validationRules,
    behaviors,
    reusableByEntities
  });
}

function validateBusinessRules(definitionInput, instance) {
  if (!definitionInput) return [];

  const errors = [];

  switch (definitionInput.valueObjectName) {
    case VALUE_OBJECT_NAMES.MONEY:
      if (typeof instance.values.amount !== 'number' || instance.values.amount < 0) errors.push('Money amount must be non-negative.');
      if (!instance.values.currency) errors.push('Money currency must be valid.');
      break;
    case VALUE_OBJECT_NAMES.DATE_RANGE:
      if (String(instance.values.startDate) >= String(instance.values.endDate)) errors.push('Date Range start date must precede end date.');
      break;
    case VALUE_OBJECT_NAMES.EMAIL_ADDRESS:
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(instance.values.address ?? ''))) errors.push('Email Address must use a valid format.');
      break;
    case VALUE_OBJECT_NAMES.GUEST_COUNT:
      if (['adults', 'children', 'infants'].some((key) => instance.values[key] < 0)) errors.push('Guest Count occupancy values must be non-negative.');
      break;
    case VALUE_OBJECT_NAMES.COORDINATES:
      if (instance.values.latitude < -90 || instance.values.latitude > 90) errors.push('Coordinates latitude must be valid.');
      if (instance.values.longitude < -180 || instance.values.longitude > 180) errors.push('Coordinates longitude must be valid.');
      break;
    case VALUE_OBJECT_NAMES.DURATION:
      if (typeof instance.values.amount !== 'number' || instance.values.amount <= 0) errors.push('Duration amount must be positive.');
      break;
    case VALUE_OBJECT_NAMES.PERCENTAGE:
      if (instance.values.value < 0 || instance.values.value > 100) errors.push('Percentage value must be between 0 and 100.');
      break;
    default:
      break;
  }

  return errors;
}

function stableStringify(value) {
  return JSON.stringify(sortObject(value));
}

function sortObject(value) {
  if (Array.isArray(value)) return value.map(sortObject);
  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value)
        .sort(([left], [right]) => left.localeCompare(right))
        .map(([key, nestedValue]) => [key, sortObject(nestedValue)])
    );
  }

  return value;
}

function validation(errors) {
  return new ValueObjectValidationResult({
    isValid: errors.length === 0,
    errors
  });
}
