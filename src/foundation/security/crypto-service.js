export class CryptoService {
  hash() {
    throw new Error('CryptoService.hash must be implemented by a subclass.');
  }

  secureRandom() {
    throw new Error('CryptoService.secureRandom must be implemented by a subclass.');
  }
}
