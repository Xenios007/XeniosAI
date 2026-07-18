export class ExecutionParticipant {
  constructor({ participant, primaryResponsibility, responsibilities = [], boundaries = [] }) {
    this.participant = participant;
    this.primaryResponsibility = primaryResponsibility;
    this.responsibilities = Object.freeze([...responsibilities]);
    this.boundaries = Object.freeze([...boundaries]);

    Object.freeze(this);
  }
}
