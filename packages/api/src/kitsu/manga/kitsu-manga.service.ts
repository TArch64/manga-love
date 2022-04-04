import { Injectable } from '@nestjs/common';
import { HttpClient } from '../../core';

@Injectable()
export class KitsuMangaService {
    constructor(private httpClient: HttpClient) {}

    public loadList(): Promise<unknown> {
        return this.httpClient.get('/manga');
    }
}
