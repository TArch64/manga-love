import { RawLocation, Route } from 'vue-router';
import {
    onMounted,
    onUnmounted,
    ref,
    Ref,
    useContext,
    useRoute,
    useRouter as useNativeRouter
} from '@nuxtjs/composition-api';

interface Router {
    activatedRoute: Ref<Route>;
    previousRoute: Ref<Route | null>;
    push(location: RawLocation): Promise<void>;
}

export function useRouter(): Router {
    let offBeforeEach: Function | null;
    const router = useNativeRouter();
    const previousRoute = ref<Route | null>(null);
    const activatedRoute = useRoute();
    const context = useContext();

    onMounted(() => {
        offBeforeEach = router.beforeEach((to, from, next) => {
            // @ts-ignore
            previousRoute.value = from;
            next();
        });
    });

    onUnmounted(() => offBeforeEach?.());

    return {
        // @ts-ignore
        previousRoute,
        activatedRoute,

        async push(location: RawLocation): Promise<void> {
            await router.push(context.localePath(location));
        }
    };
}
