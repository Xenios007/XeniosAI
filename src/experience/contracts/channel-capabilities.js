export class ChannelCapabilities {
  constructor({
    supportsText = true,
    supportsImages = false,
    supportsButtons = false,
    supportsQuickReplies = false,
    supportsFileUploads = false,
    supportsRichCards = false
  } = {}) {
    this.supportsText = supportsText;
    this.supportsImages = supportsImages;
    this.supportsButtons = supportsButtons;
    this.supportsQuickReplies = supportsQuickReplies;
    this.supportsFileUploads = supportsFileUploads;
    this.supportsRichCards = supportsRichCards;
    Object.freeze(this);
  }
}
