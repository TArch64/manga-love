import { readFile } from 'fs/promises';
import { resolve } from 'path';
import { Injectable } from '@nestjs/common';
import { render } from 'ejs';

@Injectable()
export class TemplateRenderService {
    private readonly templateCache = new Map<string, string>();

    public async render(name: string, data: Record<string, string>): Promise<string> {
        const template = await this.loadTemplate(name);
        return render(template, data, { async: true });
    }

    private async loadTemplate(name: string): Promise<string> {
        if (this.templateCache.has(name)) {
            return this.templateCache.get(name);
        }
        return readFile(this.buildTemplatePath(name), 'utf8');
    }

    private buildTemplatePath(name: string): string {
        return resolve('./dist/apps/api-mailer/views', `${name}.ejs`);
    }
}
