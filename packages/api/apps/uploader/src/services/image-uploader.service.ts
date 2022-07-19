import { Readable } from 'stream';
import { Inject, Injectable } from '@nestjs/common';
import { DatabaseImage, ImagesRepository } from '@manga-love/database';
import { AwsS3Service, PublicUrlService } from '@manga-love/core';
import probeImageSize from 'probe-image-size';
import { v4 as generateId } from 'uuid';

export interface ImageUploadObject {
    id?: string;
    content: ArrayBuffer;
}

@Injectable()
export class ImageUploaderService {
    constructor(
        private readonly s3Service: AwsS3Service,
        private readonly imagesRepository: ImagesRepository,
        @Inject(PublicUrlService.CDN)
        private readonly cdnUrlService: PublicUrlService
    ) {}

    public async upload(object: ImageUploadObject): Promise<DatabaseImage> {
        const buffer = Buffer.from(new Uint8Array(object.content));
        const info = await probeImageSize(Readable.from(buffer));
        const id = object.id || generateId();
        const url = `images/${id}.${info.type}`;

        await this.s3Service.upload({
            path: url,
            content: buffer,
            contentType: info.mime,
            contentLength: info.length
        });

        return this.imagesRepository.create({
            id: id,
            originalSrc: this.cdnUrlService.resolve(url),
            originalWidth: info.width,
            originalHeight: info.height
        });
    }
}
