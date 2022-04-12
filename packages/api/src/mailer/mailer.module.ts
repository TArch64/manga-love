import { Module } from '@nestjs/common';
import { createTransport, SentMessageInfo, Transporter } from 'nodemailer';
import { MAIL_TRANSPORTER, MailerService } from './mailer.service';
import { TemplateRenderService } from './template-render.service';

@Module({
    providers: [
        MailerService,
        TemplateRenderService,
        {
            provide: MAIL_TRANSPORTER,
            useFactory(): Transporter<SentMessageInfo> {
                const { API_MAILER_USER, API_MAILER_PASSWORD } = process.env;

                return createTransport({
                    service: 'gmail',
                    auth: { user: API_MAILER_USER, pass: API_MAILER_PASSWORD }
                });
            }
        }
    ],
    exports: [MailerService]
})
export class MailerModule {}
