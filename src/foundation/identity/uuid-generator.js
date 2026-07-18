import { randomUUID } from 'node:crypto';
import { IdGenerator } from './id-generator.js';

export class UuidGenerator extends IdGenerator {
  generate() {
    return randomUUID();
  }
}
