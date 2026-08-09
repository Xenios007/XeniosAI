export class Meter {
  incrementCounter() {
    throw new Error('Meter.incrementCounter must be implemented by a subclass.');
  }

  recordHistogram() {
    throw new Error('Meter.recordHistogram must be implemented by a subclass.');
  }
}
