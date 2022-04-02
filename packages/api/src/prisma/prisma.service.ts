import {INestApplication, Injectable, OnModuleInit} from '@nestjs/common';
import {PrismaClient} from "./client";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    constructor() {
        super({
            log: [{ level: 'query', emit: 'event'}]
        });
    }

    async onModuleInit() {
        await this.$connect();
        this.useLogger();
    }

    async enableShutdownHooks(app: INestApplication) {
        this.$on('beforeExit', async () => await app.close());
    }

    useLogger() {
        // @ts-ignore
        this.$on<'query'>('query', (event) => {
            console.log('');
            console.log('Time: ' + event.timestamp);
            console.log('Query: ' + event.query);
            console.log('Params: ' + event.params);
            console.log('Duration: ' + event.duration + 'ms');
        });
    }
}
