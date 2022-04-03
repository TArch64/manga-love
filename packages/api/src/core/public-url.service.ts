import { Injectable } from '@nestjs/common';

@Injectable()
export class PublicUrlService {
    public resolve(paths: string[] | string, params?: Record<string, string>): string {
        let url = [process.env.API_PUBLIC_URL].concat(paths).join('/');
        if (params) url += `?${new URLSearchParams(params)}`;
        return url;
    }
}
