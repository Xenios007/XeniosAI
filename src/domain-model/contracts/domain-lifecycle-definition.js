export class DomainLifecycleDefinition {
  constructor({
    lifecycleName,
    aggregateName,
    aggregateRoot,
    initialState,
    validStates = [],
    transitions = {},
    terminalStates = [],
    lifecycleEvents = {},
    invariants = [],
    technologyIndependent = true,
    preservesHistory = true,
    externalStateMutationAllowed = false,
    technicalProcess = false
  }) {
    this.lifecycleName = lifecycleName;
    this.aggregateName = aggregateName;
    this.aggregateRoot = aggregateRoot;
    this.initialState = initialState;
    this.validStates = Object.freeze([...validStates]);
    this.transitions = deepFreeze(copyTransitions(transitions));
    this.terminalStates = Object.freeze([...terminalStates]);
    this.lifecycleEvents = deepFreeze({ ...lifecycleEvents });
    this.invariants = Object.freeze([...invariants]);
    this.technologyIndependent = Boolean(technologyIndependent);
    this.preservesHistory = Boolean(preservesHistory);
    this.externalStateMutationAllowed = Boolean(externalStateMutationAllowed);
    this.technicalProcess = Boolean(technicalProcess);

    Object.freeze(this);
  }
}

function copyTransitions(transitions) {
  return Object.fromEntries(
    Object.entries(transitions).map(([state, targets]) => [state, Object.freeze([...targets])])
  );
}

function deepFreeze(value) {
  if (value && typeof value === 'object') {
    for (const nestedValue of Object.values(value)) {
      deepFreeze(nestedValue);
    }

    Object.freeze(value);
  }

  return value;
}
