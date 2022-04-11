import { useContext } from '@nuxtjs/composition-api';
import { useTranslate } from './use-translate';

interface Toaster {
    show(message: string, data?: Record<string, string>): void;
}

export function useToaster(): Toaster {
    const translate = useTranslate();
    const context = useContext();

    return {
        show(message: string, data?: Record<string, string>): void {
            context.$toast.show(translate.get(message, data));
        }
    };
}
