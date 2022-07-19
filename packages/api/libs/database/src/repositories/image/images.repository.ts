import { Injectable } from '@nestjs/common';
import { DatabaseImage, Prisma, PrismaService } from '../../prisma';

@Injectable()
export class ImagesRepository {
    constructor(private readonly prisma: PrismaService) {}

    public create(input: Prisma.DatabaseImageCreateInput): Promise<DatabaseImage> {
        return this.prisma.databaseImage.create({ data: input });
    }
}
