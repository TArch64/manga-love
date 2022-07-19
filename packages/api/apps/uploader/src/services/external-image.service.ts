import { Injectable } from '@nestjs/common';
import { DatabaseImage } from '@manga-love/database';
import { HttpClient } from '@manga-love/core';
import { ImageUploaderService } from './image-uploader.service';


@Injectable()
export class ExternalImageService {
    constructor(
        private readonly httpClient: HttpClient,
        private readonly imageUploaderService: ImageUploaderService
    ) {}

    public async import(src: string): Promise<DatabaseImage> {
        const response = await this.httpClient.get<ArrayBuffer>(src, { responseType: 'arraybuffer' });
        return this.imageUploaderService.upload({ content: response.data });
    }
}
