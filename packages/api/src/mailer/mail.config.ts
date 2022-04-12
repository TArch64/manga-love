export interface TemplateConfig {
    name: string;
    data: Record<string, string>;
}

export abstract class MailConfig {
    public abstract subject: string;
    public abstract template: TemplateConfig;

    protected constructor(
        public readonly email: string
    ) {}
}
