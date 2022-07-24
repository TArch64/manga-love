<template>
    <nav class="ml-layout-navigation">
        <MlLayoutNavigationLink
            v-for="link of links"
            :key="link.id"
            :id="link.id"
            :url="link.url"
            :exact="link.exact"
        />
    </nav>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api';
import { Transition } from '@nuxt/types';
import { Route } from 'vue-router';
import { useRouter } from '~/composables';
import { useAuthStore } from '~/store';
import MlLayoutNavigationLink from './ml-layout-navigation-link.vue';

enum PageAccess {
    AUTH,
    INAUTH
}

interface Link {
    id: string;
    url: string;
    access?: PageAccess;
    exact?: boolean;
    children?: string[];
}

const LINKS: Link[] = [
    { id: 'index', url: '/', exact: true },
    {
        id: 'library',
        url: '/library',
        access: PageAccess.AUTH,
        children: ['library-id']
    },
    { id: 'notifications', url: '/notifications', access: PageAccess.AUTH },
    { id: 'profile', url: '/profile', access: PageAccess.AUTH },
    { id: 'sign-in', url: '/auth/sign-in', access: PageAccess.INAUTH }
];

function findLinkIndex(route: Route): number {
    return LINKS.findIndex((link) => link.id === route.name || link.children?.includes(route.name!));
}

type TransitionBuilder = (to: Route, from: Route | undefined) => string | Transition;

export function navigationPageTransition(children: string[] = []): TransitionBuilder {
    const childTransition = navigationSubpageTransition(children);

    return (to: Route, from: Route | undefined): string | Transition => {
        if (from?.name && children.includes(from.name)) {
            return childTransition(to, from);
        }

        const toIndex = findLinkIndex(to);
        const fromIndex = from ? findLinkIndex(from) : -1;
        const direction = toIndex > fromIndex ? 'next' : 'previous';

        return {
            name: `ml-transition-page-${direction}`,
            mode: 'out-in',
            // @ts-ignore
            duration: { enter: 150, leave: 100 }
        };
    };
}

export function navigationSubpageTransition(children: string[]): TransitionBuilder {
    return (to: Route): string | Transition => {
        const isChild = children.includes(to.name as string);
        const name = isChild ? 'in' : 'out';

        return {
            name: `ml-transition-subpage-${name}`,
            mode: 'out-in',
            duration: 150
        };
    };
}

export default defineComponent({
    name: 'MlLayoutNavigation',

    components: {
        MlLayoutNavigationLink
    },

    setup() {
        const router = useRouter();
        const authStore = useAuthStore();
        const activeUrl = computed(() => router.activatedRoute.value.path);

        const links = computed(() => LINKS.filter((link) => {
            if (!authStore.currentUser && link.access === PageAccess.AUTH) return false;
            if (authStore.currentUser && link.access === PageAccess.INAUTH) return false;
            return true;
        }));

        return { activeUrl, links };
    }
});
</script>

<style scoped>
.ml-layout-navigation {
    display: flex;
    background: #FFF;
    box-shadow: 0 -2px 50px rgba(0, 0, 0, 0.05);
    z-index: 100;
}

@media (min-width: 992px) {

    .ml-layout-navigation {
        flex-direction: column;
        padding: 20px 10px;
    }

    .ml-layout-navigation__link {
        margin-bottom: 15px;
    }
}

@media (max-width: 991px) {

    .ml-layout-navigation {
        padding: 10px 0;
        justify-content: space-evenly;
    }
}
</style>
