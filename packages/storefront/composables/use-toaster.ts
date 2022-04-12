import { useContext } from '@nuxtjs/composition-api';
import { useTranslate } from './use-translate';

export interface ToastrMessage {
    path: string;
    data?: Record<string, string>;
}

interface Toaster {
    show(message: ToastrMessage): void;
}

export function useToaster(): Toaster {
    const translate = useTranslate();
    const context = useContext();

    return {
        show(message: ToastrMessage): void {
            context.$toast.show(translate.get(message.path, message.data));
        }
    };
}
