<template>
    <div class="ml-layout">
        <div class="ml-layout__content">
            <Nuxt
                :next-child-key="$route.fullPath"
                :keep-alive-props="{ max: 10 }"
                keep-alive
            />
        </div>
        <MlLayoutNavigation class="ml-layout__navigation" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { MlLayoutNavigation } from '~/components/common/layout';
import { useAuthStore } from '~/store';

type MetaItem = Record<string, unknown> | undefined;

export default defineComponent({
    name: 'Default',

    components: {
        MlLayoutNavigation
    },

    async middleware({ redirect, route }) {
        const authStore = useAuthStore();

        if (!authStore.isCurrentUserLoaded) {
            await authStore.loadCurrentUser();
        }

        const meta = Array.isArray(route.meta) ? route.meta : [route.meta];
        const isPublic = meta.some((meta: MetaItem) => meta?.public) ?? false;

        if (!isPublic && !authStore.currentUser) {
            redirect('/auth/sign-in');
        }
    }
});
</script>

<style scoped>
.ml-layout {
    height: 100%;
    display: grid;
}

@media (min-width: 992px) {

    .ml-layout {
        grid-template-columns: max-content 1fr;
        grid-template-areas: "layout-navigation layout-content";
    }
}

@media (max-width: 991px) {

    .ml-layout {
        grid-template-rows: 1fr max-content;
        grid-template-areas: "layout-content" "layout-navigation";
    }
}

.ml-layout__content {
    grid-area: layout-content;
    position: relative;
    overflow: hidden;
}

.ml-layout-navigation {
    grid-area: layout-navigation;
    position: sticky;
    bottom: 0;
}
</style>
