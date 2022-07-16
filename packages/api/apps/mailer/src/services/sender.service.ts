import { Inject, Injectable } from '@nestjs/common';
import { Transporter, SentMessageInfo } from 'nodemailer';
import { MailConfig } from '../models';
import { TemplateRenderService } from './template-render.service';

export const MAIL_TRANSPORTER = Symbol('MAIL_TRANSPORTER');

@Injectable()
export class SenderService {
    constructor(
        @Inject(MAIL_TRANSPORTER)
        private readonly transporter: Transporter<SentMessageInfo>,
        private readonly templateRender: TemplateRenderService
    ) {}

    public async send(config: MailConfig): Promise<void> {
        const html = await this.templateRender.render(config.template.name, config.template.data);

        await this.transporter.sendMail({
            from: `MangaLove <${process.env.API_MAILER_USER}>`,
            to: config.email,
            subject: config.subject,
            html
        });
    }
}
