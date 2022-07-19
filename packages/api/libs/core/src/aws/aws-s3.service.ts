import { Injectable } from '@nestjs/common';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { AwsConfigService } from './aws-config.service';

export interface AwsUploadObject {
    path: string;
    content: Buffer;
    contentType: string;
    contentLength: number;
}

@Injectable()
export class AwsS3Service {
    private readonly client = new S3Client({
        region: this.config.region,

        credentials: {
            secretAccessKey: this.config.secretKey,
            accessKeyId: this.config.accessKey
        }
    });

    constructor(private readonly config: AwsConfigService) {}

    public async upload(object: AwsUploadObject): Promise<void> {
        const command = new PutObjectCommand({
            Bucket: this.config.s3Bucket,
            Key: object.path,
            ACL: 'public-read',
            Body: object.content,
            ContentType: object.contentType,
            ContentLength: object.contentLength
        });

        await this.client.send(command);
    }
}
