import { Injectable } from '@nestjs/common';
import { DatabaseImage, DatabaseManga, PrismaService } from '../../prisma';

export interface MangaFilter {
    offset: number;
    limit: number;
}

@Injectable()
export class MangasRepository {
    constructor(private readonly prisma: PrismaService) {}

    public async filter(params: MangaFilter): Promise<Array<DatabaseManga>> {
        return this.prisma.databaseManga.findMany({
            skip: params.offset,
            take: params.limit,
            orderBy: { createdAt: 'desc' }
        });
    }

    public async getPostersByMangaId(mangaId: string): Promise<DatabaseImage[]> {
        const edge = this.prisma.databaseManga.findUnique({
            where: { id: mangaId }
        });

        return edge.posters();
    }
}
