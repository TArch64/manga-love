import { useContext } from '@nuxtjs/composition-api';

interface Translate {
    get(path: string, data?: Record<string, string>): string;
}

export function useTranslate(): Translate {
    const context = useContext();

    return {
        get(path: string, data?: Record<string, string>): string {
            return context.i18n.t(path, data || {}) as string;
        }
    };
}
