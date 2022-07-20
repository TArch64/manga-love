<template>
    <nav class="ml-layout-navigation">
        <MlLayoutNavigationLink
            v-for="link of $options.links"
            :key="link.id"
            :id="link.id"
            :url="link.url"
            :active="link.url === activeUrl"
        />
    </nav>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api';
import { useRouter } from '~/composables';
import MlLayoutNavigationLink from './ml-layout-navigation-link.vue';

export default defineComponent({
    name: 'MlLayoutNavigation',

    components: {
        MlLayoutNavigationLink
    },

    links: [
        { id: 'home', url: '/' },
        { id: 'library', url: '/library' },
        { id: 'notifications', url: '/notifications' },
        { id: 'profile', url: '/profile' }
    ],

    setup() {
        const router = useRouter();
        const activeUrl = computed(() => router.activatedRoute.value.path);

        return { activeUrl };
    }
});
</script>

<style scoped>
.ml-layout-navigation {
    display: flex;
    background: #FFF;
    box-shadow: 0 -2px 50px rgba(0, 0, 0, 0.05);
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
