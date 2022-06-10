import { start } from 'repl';
import { client } from './client-provider';

global.prisma = client;

const repl = start();

repl.setupHistory('/app/tmp/console-history', () => {});
