import { start } from 'repl';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { client } from './client-provider';

global.prisma = client;

const repl = start();
const historyLocation = '/app/tmp/console-history';

const historyContent = !existsSync(historyLocation) ? '' : readFileSync(historyLocation, { encoding: 'utf8' });
const history = historyContent.split('\n').filter((command) => command !== '.exit').join('\n');

writeFileSync(historyLocation, history);

repl.setupHistory(historyLocation, () => {});
