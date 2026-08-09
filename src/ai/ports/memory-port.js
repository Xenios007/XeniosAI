export class MemoryPort {
  async retrieveMemory() {
    throw new Error('MemoryPort.retrieveMemory must be implemented by a subclass.');
  }
}
