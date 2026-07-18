import { MemoryPort } from '../ports/memory-port.js';

export class NullMemoryProvider extends MemoryPort {
  async retrieveMemory() {
    return [];
  }
}
