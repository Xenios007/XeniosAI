import { ERROR_CODES } from '../constants.js';
import { PlatformError } from '../errors/platform-error.js';

export class ServiceCollection {
  constructor() {
    this.registrations = new Map();
  }

  registerSingleton(key, factory) {
    this.#register(key, { lifetime: 'singleton', factory, instance: undefined });
    return this;
  }

  registerTransient(key, factory) {
    this.#register(key, { lifetime: 'transient', factory });
    return this;
  }

  hasRegistration(key) {
    return this.registrations.has(key);
  }

  buildServiceProvider() {
    return new ServiceProvider(this.registrations);
  }

  #register(key, registration) {
    if (this.registrations.has(key)) {
      throw new PlatformError(
        ERROR_CODES.SERVICE_ALREADY_REGISTERED,
        `Service "${String(key)}" is already registered.`
      );
    }

    this.registrations.set(key, registration);
  }
}

class ServiceProvider {
  constructor(registrations) {
    this.registrations = new Map(registrations);
  }

  getRequiredService(key) {
    const registration = this.registrations.get(key);

    if (!registration) {
      throw new PlatformError(
        ERROR_CODES.SERVICE_NOT_REGISTERED,
        `Service "${String(key)}" is not registered.`
      );
    }

    if (registration.lifetime === 'singleton') {
      if (registration.instance === undefined) {
        registration.instance = registration.factory(this);
      }

      return registration.instance;
    }

    return registration.factory(this);
  }
}
