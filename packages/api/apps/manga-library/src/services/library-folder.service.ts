import { Injectable } from '@nestjs/common';
import { DatabaseUser, LibraryFolderRepository, Prisma } from '@manga-love/database';
import { Language } from '@manga-love/core';

type BulkCreateInput = Prisma.DatabaseLibraryFolderCreateManyInput;

type DefaultFolderName = Record<Language, string>;

const DEFAULT_FOLDERS: DefaultFolderName[] = [
    { en: 'Liked', ua: 'Вподобане' },
    { en: 'Read Later', ua: 'На потім' },
    { en: 'Reading', ua: 'Читаю' },
    { en: 'Trash', ua: 'Сміття' }
];

@Injectable()
export class LibraryFolderService {
    constructor(private readonly libraryFolderRepository: LibraryFolderRepository) {}

    public async createUserDefaults(user: DatabaseUser, language: Language): Promise<void> {
        const folders: BulkCreateInput[] = DEFAULT_FOLDERS.map((name) => ({
            name: name[language],
            userId: user.id
        }));

        await this.libraryFolderRepository.bulkCreate(folders);
    }
}
