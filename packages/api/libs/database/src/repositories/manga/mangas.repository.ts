import { Injectable } from '@nestjs/common';
import { PrismaService, DatabaseManga, Prisma } from '../../prisma';

type MangaQuery = Prisma.Prisma__DatabaseMangaClient<DatabaseManga>;

@Injectable()
export class MangasRepository {
    constructor(private readonly prisma: PrismaService) {}

    public getById(id: string): MangaQuery {
        return this.prisma.databaseManga.findUnique({ where: { id } });
    }
}
