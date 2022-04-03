import { start } from 'repl';
import { client } from './client-provider';

global.prisma = client;

start();
