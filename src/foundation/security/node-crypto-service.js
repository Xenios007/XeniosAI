import { createHash, randomBytes } from 'node:crypto';
import { CryptoService } from './crypto-service.js';

export class NodeCryptoService extends CryptoService {
  hash(value, algorithm = 'sha256') {
    return createHash(algorithm).update(value).digest('hex');
  }

  secureRandom(length = 32) {
    return randomBytes(length);
  }
}
