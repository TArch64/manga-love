import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { DatabaseUser } from '@manga-love/database';
import { SuccessResponse } from '@manga-love/core';
import { LibraryFolderService } from '../services';

@Controller()
export class MangaLibraryController {
    constructor(private readonly libraryFolderService: LibraryFolderService) {}

    @MessagePattern('create-defaults')
    public async createDefaults(user: DatabaseUser): Promise<SuccessResponse> {
        await this.libraryFolderService.createUserDefaults(user);
        return { success: true };
    }
}
