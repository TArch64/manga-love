import { DatabaseImage } from '@manga-love/database';
import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { ExternalImageService } from '../services';

@Controller()
export class UploaderController {
    constructor(private readonly externalImageService: ExternalImageService) {}

    @MessagePattern('import')
    public importExternal(src: string): Promise<DatabaseImage> {
        return this.externalImageService.import(src);
    }
}
