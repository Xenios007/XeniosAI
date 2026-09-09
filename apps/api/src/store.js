import fs from 'node:fs/promises';
import path from 'node:path';

const EMPTY = Object.freeze({ users: [], businesses: [], knowledge: [], subscriptions: [], conversations: [] });

export class JsonStore {
  constructor(filePath) {
    this.filePath = path.resolve(process.cwd(), filePath || './data/xeniosai.json');
    this.state = structuredClone(EMPTY);
    this.writeChain = Promise.resolve();
  }

  async init() {
    try {
      this.state = { ...structuredClone(EMPTY), ...JSON.parse(await fs.readFile(this.filePath, 'utf8')) };
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;
      await this.persist();
    }
    return this;
  }

  snapshot() { return structuredClone(this.state); }

  async mutate(mutator) {
    let result;
    this.writeChain = this.writeChain.then(async () => {
      const draft = structuredClone(this.state);
      result = await mutator(draft);
      this.state = draft;
      await this.persist();
    });
    await this.writeChain;
    return result;
  }

  async persist() {
    await fs.mkdir(path.dirname(this.filePath), { recursive: true });
    const temp = `${this.filePath}.tmp`;
    await fs.writeFile(temp, JSON.stringify(this.state, null, 2));
    await fs.rename(temp, this.filePath);
  }
}
