import { Injectable } from '@nestjs/common';
import { DatabaseUser, LibraryFolderRepository, Prisma } from '@manga-love/database';

type BulkCreateInput = Prisma.DatabaseLibraryFolderCreateManyInput;
const DEFAULT_FOLDERS = ['Liked', 'Read Later', 'Reading', 'Trash'];

@Injectable()
export class LibraryFolderService {
    constructor(private readonly libraryFolderRepository: LibraryFolderRepository) {}

    public async createUserDefaults(user: DatabaseUser): Promise<void> {
        const folders: BulkCreateInput[] = DEFAULT_FOLDERS.map((name) => ({ name, userId: user.id }));
        await this.libraryFolderRepository.bulkCreate(folders);
    }
}
