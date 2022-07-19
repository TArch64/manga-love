import { Module } from '@nestjs/common';
import { PrismaService } from '../../prisma';
import { ImagesRepository } from './images.repository';

@Module({
    providers: [
        PrismaService,
        ImagesRepository
    ],
    exports: [
        ImagesRepository
    ]
})
export class ImagesDatabaseModule {}
