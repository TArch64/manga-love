import { Injectable } from '@nestjs/common';
import { DatabaseManga, PrismaService } from '../../prisma';

export interface MangaFilter {
    offset: number;
    limit: number;
}

@Injectable()
export class MangasRepository {
    constructor(private readonly prisma: PrismaService) {}

    public async filter(params: MangaFilter): Promise<DatabaseManga[]> {
        return this.prisma.databaseManga.findMany({
            skip: params.offset,
            take: params.limit,
            orderBy: { createdAt: 'desc' }
        });
    }
}
