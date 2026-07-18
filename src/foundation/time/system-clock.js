import { Clock } from './clock.js';

export class SystemClock extends Clock {
  now() {
    return new Date();
  }
}
