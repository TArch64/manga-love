import { Module } from '@nestjs/common';
import { AwsS3Service } from './aws-s3.service';
import { AwsConfigService } from './aws-config.service';

@Module({
    providers: [
        AwsS3Service,
        AwsConfigService
    ],
    exports: [
        AwsS3Service
    ]
})
export class AwsModule {}
