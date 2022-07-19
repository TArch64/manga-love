import { Readable } from 'stream';
import { Inject, Injectable } from '@nestjs/common';
import { DatabaseImage, ImagesRepository } from '@manga-love/database';
import { AwsS3Service, HttpClient, PublicUrlService } from '@manga-love/core';
import probeImageSize from 'probe-image-size';
import { v4 as generateId } from 'uuid';


@Injectable()
export class ExternalImageService {
    constructor(
        private readonly httpClient: HttpClient,
        private readonly s3Service: AwsS3Service,
        private readonly imagesRepository: ImagesRepository,
        @Inject(PublicUrlService.CDN)
        private readonly cdnUrlService: PublicUrlService
    ) {}

    public async import(src: string): Promise<DatabaseImage> {
        const response = await this.httpClient.get<ArrayBuffer>(src, { responseType: 'arraybuffer' });
        const buffer = Buffer.from(new Uint8Array(response.data));
        const info = await probeImageSize(Readable.from(buffer));
        const id = generateId();
        const url = `images/${id}.${info.type}`;

        await this.s3Service.upload({
            path: url,
            content: buffer,
            contentType: info.mime,
            contentLength: info.length
        });

        return this.imagesRepository.create({
            id,
            originalSrc: this.cdnUrlService.resolve(url),
            originalWidth: info.width,
            originalHeight: info.height
        });
    }
}
