import { Injectable } from '@nestjs/common';

@Injectable()
export class AwsConfigService {
    public readonly region = process.env.API_AWS_REGION;
    public readonly accessKey = process.env.API_AWS_ACCESS_KEY;
    public readonly secretKey = process.env.API_AWS_SECRET_KEY;
    public readonly s3Bucket = process.env.API_AWS_S3_BUCKET;
}
