<template>
    <MlLayoutSubpage :title="$t('search.title')" :back-link="backLink">
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid, corporis deserunt eum eveniet
            fugiat fugit hic necessitatibus non odit optio porro, possimus quo reprehenderit sunt vel veritatis
            voluptate voluptates!
        </div>
        <div>Blanditiis commodi consequatur debitis est exercitationem facere fugiat ipsam mollitia officiis quo. Dolore
            dolorem illum in ipsa tempora. A ab alias, enim eveniet ipsam necessitatibus odio qui quidem reprehenderit
            vitae!
        </div>
    </MlLayoutSubpage>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api';
import { MlLayoutSubpage, navigationSubpageTransition } from '~/components/common/layout';
import { useRouter } from '~/composables';

export default defineComponent({
    name: 'Search',

    components: {
        MlLayoutSubpage
    },

    meta: {
        public: true
    },

    transition: navigationSubpageTransition(['search']),

    setup() {
        const router = useRouter();
        const backLink = computed(() => router.previousRoute.value?.name ?? '/');

        return { backLink };
    }
});
</script>
