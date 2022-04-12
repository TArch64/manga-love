import { MailConfig, TemplateConfig } from '../../../mailer';

export class ResetPasswordMail extends MailConfig {
    public subject = 'Reset account password';
    public template: TemplateConfig;

    constructor(email: string, resetUrl: string) {
        super(email);

        this.template = {
            name: 'auth-reset-password',
            data: { resetUrl }
        };
    }
}
