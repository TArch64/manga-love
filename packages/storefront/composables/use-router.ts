import { RawLocation } from 'vue-router';
import { useContext, useRouter as useNativeRouter } from '@nuxtjs/composition-api';

interface Router {
    push(location: RawLocation): Promise<void>;
}

export function useRouter(): Router {
    const router = useNativeRouter();
    const context = useContext();

    return {
        async push(location: RawLocation): Promise<void> {
            await router.push(context.localePath(location));
        }
    };
}
