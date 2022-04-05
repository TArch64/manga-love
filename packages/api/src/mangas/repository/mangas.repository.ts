import { Injectable } from '@nestjs/common';
import { DatabaseImage, DatabaseImageEdgeTarget, DatabaseManga, PrismaService } from '../../prisma';

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
        const edge = this.prisma.databaseImageEdge.findUnique({
            where: {
                imageEdgeIdentifier: {
                    targetId: mangaId,
                    type: DatabaseImageEdgeTarget.MANGA
                }
            }
        });

        return edge.images();
    }
}
