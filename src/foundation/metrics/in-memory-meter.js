import { Meter } from './meter.js';

export class InMemoryMeter extends Meter {
  constructor() {
    super();
    this.counters = new Map();
    this.histograms = new Map();
  }

  incrementCounter(name, amount = 1, tags = {}) {
    const key = JSON.stringify({ name, tags });
    const current = this.counters.get(key) ?? 0;
    this.counters.set(key, current + amount);
  }

  recordHistogram(name, value, tags = {}) {
    const key = JSON.stringify({ name, tags });
    const values = this.histograms.get(key) ?? [];
    values.push(value);
    this.histograms.set(key, values);
  }

  snapshot() {
    return {
      counters: new Map(this.counters),
      histograms: new Map(
        [...this.histograms.entries()].map(([key, values]) => [key, [...values]])
      )
    };
  }
}
