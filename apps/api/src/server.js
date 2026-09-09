import path from 'node:path';
import { fileURLToPath } from 'node:url';
import dotenv from 'dotenv';
import { createApp } from './app.js';

const here = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(here, '../../../.env') });
dotenv.config({ path: path.resolve(here, '../.env'), override: false });

const port = Number(process.env.PORT || 3001);
const app = await createApp();
app.listen(port, () => console.log(`XeniosAI API listening on http://localhost:${port}`));
