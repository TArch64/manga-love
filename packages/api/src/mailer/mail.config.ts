export interface TemplateConfig {
    name: string;
    data: Record<string, string>;
}

export abstract class MailConfig {
    public from = `MangaLove <${this.email}>`;
    public abstract subject: string;
    public abstract template: TemplateConfig;

    protected constructor(
        public readonly email: string
    ) {}
}
