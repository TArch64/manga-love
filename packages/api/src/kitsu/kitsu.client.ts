import { Injectable } from '@nestjs/common';
import { KitsuMangaService } from './manga';

@Injectable()
export class KitsuClient {
    constructor(
        public readonly manga: KitsuMangaService
    ) {}
}
