import { Module } from '@nestjs/common';
import { createTransport, SentMessageInfo, Transporter } from 'nodemailer';
import { MAIL_TRANSPORTER, SenderService, TemplateRenderService } from './services';
import { MailController } from './controllers';

@Module({
    controllers: [
        MailController
    ],
    providers: [
        SenderService,
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
    ]
})
export class MailerModule {}
