import { DynamicModule, FactoryProvider, InjectionToken } from '@nestjs/common';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';

export interface MicroserviceConfig {
    host: string;
}

export interface MicroservicesProvider<Config> {
    MICROSERVICES: Record<keyof Config, InjectionToken>;
    MicroservicesModule: DynamicModule;
}

export class MicroservicesFactoryModule {
    public static create<Config extends Record<string, MicroserviceConfig>>(microservices: Config): MicroservicesProvider<Config> {
        const tokens = {};
        const providers = [];

        for (const [name, config] of Object.entries(microservices)) {
            const service = this.provideMicroservice(name, config);

            tokens[name] = service.token;
            providers.push(service.provider);
        }

        return {
            MICROSERVICES: tokens as MicroservicesProvider<Config>['MICROSERVICES'],

            MicroservicesModule: {
                module: MicroservicesFactoryModule,
                providers,
                exports: providers,
                global: true
            }
        };
    }

    private static provideMicroservice(name: string, config: MicroserviceConfig): { token: InjectionToken, provider: FactoryProvider } {
        const token = Symbol(`${name}_MICROSERVICE`);

        const provider: FactoryProvider = {
            provide: token,

            useFactory: () => ClientProxyFactory.create({
                transport: Transport.TCP,
                options: { host: config.host, port: 3000 }
            })
        };

        return { token, provider };
    }
}
