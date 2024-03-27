import { walk } from './lib/walker';

const path = 'out-fragments/http';
const origin = 'localhost_3000';
const config = walk(path, origin);
await Bun.write("config.json", JSON.stringify(config));