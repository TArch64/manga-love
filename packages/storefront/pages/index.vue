<template>
    <MlLayoutPage :title="$t('index.title')">
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid, corporis deserunt eum eveniet
            fugiat fugit hic necessitatibus non odit optio porro, possimus quo reprehenderit sunt vel veritatis
            voluptate voluptates!
        </div>
        <div>Blanditiis commodi consequatur debitis est exercitationem facere fugiat ipsam mollitia officiis quo. Dolore
            dolorem illum in ipsa tempora. A ab alias, enim eveniet ipsam necessitatibus odio qui quidem reprehenderit
            vitae!
        </div>
    </MlLayoutPage>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { navigationPageTransition, MlLayoutPage } from '~/components/common/layout';

export default defineComponent({
    name: 'Index',

    components: {
        MlLayoutPage
    },

    meta: {
        public: true
    },

    transition: navigationPageTransition(['search'])
});
</script>
