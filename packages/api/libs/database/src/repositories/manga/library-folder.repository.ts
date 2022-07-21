import { Injectable } from '@nestjs/common';
import { PrismaService, Prisma, DatabaseLibraryFolder } from '../../prisma';
import { UsersRepository } from '../user';

@Injectable()
export class LibraryFolderRepository {
    constructor(
        private readonly prisma: PrismaService,
        private readonly usersRepository: UsersRepository
    ) {}

    public async bulkCreate(folders: Prisma.DatabaseLibraryFolderCreateManyInput[]): Promise<void> {
        await this.prisma.databaseLibraryFolder.createMany({ data: folders });
    }

    public findByUserId(userId: string): Promise<DatabaseLibraryFolder[]> {
        return this.usersRepository.getUserById(userId).libraryFolders();
    }

    public getScopedById(userId: string, folderId: string): Promise<DatabaseLibraryFolder> {
        return this.prisma.databaseLibraryFolder.findUnique({
            where: { libraryFolderUser: { id: folderId, userId } }
        });
    }
}
