import { RawLocation, Route } from 'vue-router';
import { Ref, useContext, useRoute, useRouter as useNativeRouter } from '@nuxtjs/composition-api';

interface Router {
    activatedRoute: Ref<Route>;
    push(location: RawLocation): Promise<void>;
}

export function useRouter(): Router {
    const router = useNativeRouter();
    const activatedRoute = useRoute();
    const context = useContext();

    return {
        activatedRoute,

        async push(location: RawLocation): Promise<void> {
            await router.push(context.localePath(location));
        }
    };
}
