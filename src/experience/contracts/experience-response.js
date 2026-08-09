export class ExperienceResponse {
  constructor({
    text = '',
    attachments = [],
    buttons = [],
    quickReplies = [],
    cards = [],
    metadata = {}
  } = {}) {
    this.text = text;
    this.attachments = Object.freeze([...attachments]);
    this.buttons = Object.freeze([...buttons]);
    this.quickReplies = Object.freeze([...quickReplies]);
    this.cards = Object.freeze([...cards]);
    this.metadata = Object.freeze({ ...metadata });
    Object.freeze(this);
  }
}
