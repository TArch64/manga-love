import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { DatabaseUser } from '@manga-love/database';
import { Language, SuccessResponse } from '@manga-love/core';
import { LibraryFolderService } from '../services';

interface CreateDefaultsPayload {
    user: DatabaseUser;
    language: Language;
}

@Controller()
export class MangaLibraryController {
    constructor(private readonly libraryFolderService: LibraryFolderService) {}

    @MessagePattern('create-defaults')
    public async createDefaults(payload: CreateDefaultsPayload): Promise<SuccessResponse> {
        await this.libraryFolderService.createUserDefaults(payload.user, payload.language);
        return { success: true };
    }
}
