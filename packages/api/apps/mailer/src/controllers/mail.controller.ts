import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { SuccessResponse } from '@manga-love/core';
import { MailConfig } from '../models';
import { SenderService } from '../services';

@Controller()
export class MailController {
    constructor(private readonly sender: SenderService) {}

    @MessagePattern('send')
    public async send(config: MailConfig): Promise<SuccessResponse> {
        await this.sender.send(config);
        return { success: true };
    }
}
