import { FactoryProvider, Injectable } from '@nestjs/common';

@Injectable()
export class PublicUrlService {
    public static API = Symbol('API_PUBLIC_URL');
    public static STOREFRONT = Symbol('STOREFRONT_PUBLIC_URL');

    public static provide(token: symbol, baseUrl: string): FactoryProvider {
        return {
            provide: token,

            useFactory(): PublicUrlService {
                return new PublicUrlService(baseUrl);
            }
        };
    }

    constructor(private readonly baseUrl: string) {}

    public resolve(paths: string[] | string, params?: Record<string, string>): string {
        let url = [this.baseUrl].concat(paths).join('/');
        if (params) url += `?${new URLSearchParams(params)}`;
        return url;
    }
}
