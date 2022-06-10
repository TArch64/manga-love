import { MailConfig, TemplateConfig } from '../../../mailer';

export class EmailVerificationMail extends MailConfig {
    public subject = 'Email Verification';
    public template: TemplateConfig;

    constructor(email: string, verificationUrl: string) {
        super(email);

        this.template = {
            name: 'auth-email-verification',
            data: { verificationUrl }
        };
    }
}
