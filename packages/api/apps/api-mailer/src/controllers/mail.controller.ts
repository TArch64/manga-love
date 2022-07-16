import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { MailConfig } from '../models';
import { SenderService } from '../services';

interface SuccessResponse {
    success: true;
}

@Controller()
export class MailController {
    constructor(private readonly sender: SenderService) {}

    @MessagePattern('send')
    public async send(config: MailConfig): Promise<SuccessResponse> {
        await this.sender.send(config);
        return { success: true };
    }
}
