import { start } from 'repl';
import { readFileSync, writeFileSync } from 'fs';
import { client } from './client-provider';

global.prisma = client;

const repl = start();
const historyLocation = '/app/tmp/console-history';

const history = readFileSync(historyLocation, { encoding: 'utf8' })
    .split('\n')
    .filter((command) => command !== '.exit')
    .join('\n');

writeFileSync(historyLocation, history);

repl.setupHistory(historyLocation, () => {});
