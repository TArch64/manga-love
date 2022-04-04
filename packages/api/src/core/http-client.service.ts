import { FactoryProvider, Injectable } from '@nestjs/common';
import { Axios } from 'axios';

export interface HttpClientOptions {
    baseUrl: string;
    headers: Record<string, string>;
}

@Injectable()
export class HttpClient extends Axios {
    public static provide(options: HttpClientOptions): FactoryProvider {
        return {
            provide: HttpClient,

            useFactory(): HttpClient {
                return new HttpClient({
                    baseURL: options.baseUrl
                });
            }
        };
    }
}
