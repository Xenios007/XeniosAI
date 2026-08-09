import { DEFAULT_LOG_LEVEL, PLATFORM_NAME } from '../constants.js';
import { Logger } from './logger.js';

const LEVEL_PRIORITY = Object.freeze({
  debug: 10,
  info: 20,
  warn: 30,
  error: 40
});

export class StructuredConsoleLogger extends Logger {
  constructor({ clock, level = DEFAULT_LOG_LEVEL, sink = console } = {}) {
    super();
    this.clock = clock;
    this.level = level;
    this.sink = sink;
  }

  debug(message, context = {}) {
    this.#write('debug', message, context);
  }

  info(message, context = {}) {
    this.#write('info', message, context);
  }

  warn(message, context = {}) {
    this.#write('warn', message, context);
  }

  error(message, context = {}) {
    this.#write('error', message, context);
  }

  #write(level, message, context) {
    if (LEVEL_PRIORITY[level] < LEVEL_PRIORITY[this.level]) {
      return;
    }

    const entry = {
      timestamp: this.clock?.now()?.toISOString?.() ?? new Date().toISOString(),
      platform: PLATFORM_NAME,
      level,
      message,
      ...context
    };

    const serialized = JSON.stringify(entry);
    const writer = this.sink[level] ?? this.sink.log ?? console.log;
    writer.call(this.sink, serialized);
  }
}
