import { Module } from '@nestjs/common';
import { ImagesDatabaseModule } from '@manga-love/database';
import { AwsModule, HttpClient, PublicUrlService } from '@manga-love/core';
import { UploaderController } from './controlers';
import { ExternalImageService, ImageUploaderService } from './services';

@Module({
    imports: [
        ImagesDatabaseModule,
        AwsModule
    ],
    controllers: [
        UploaderController
    ],
    providers: [
        ImageUploaderService,
        ExternalImageService,
        HttpClient.provide(),
        PublicUrlService.provide(PublicUrlService.CDN, process.env.API_CLOUDFRONT_URL)
    ]
})
export class UploaderModule {}
