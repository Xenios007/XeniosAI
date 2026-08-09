export class Logger {
  debug() {
    throw new Error('Logger.debug must be implemented by a subclass.');
  }

  info() {
    throw new Error('Logger.info must be implemented by a subclass.');
  }

  warn() {
    throw new Error('Logger.warn must be implemented by a subclass.');
  }

  error() {
    throw new Error('Logger.error must be implemented by a subclass.');
  }
}
