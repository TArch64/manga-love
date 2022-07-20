<template>
    <div class="ml-layout">
        <Nuxt class="ml-layout__content" />
        <MlLayoutNavigation class="ml-layout__navigation" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { MlLayoutNavigation } from '~/components/common/layout';

export default defineComponent({
    name: 'Default',

    components: {
        MlLayoutNavigation
    }
});
</script>

<style scoped>
.ml-layout {
    height: 100%;
    display: grid;
    grid-template-rows: 1fr max-content;
    grid-template-areas: "layout-content" "layout-navigation";
}

@media (min-width: 992px) {

    .ml-layout {
        grid-template-rows: 1fr;
        grid-template-columns: max-content 1fr;
        grid-template-areas: "layout-navigation layout-content";
    }
}

.ml-layout__content {
    grid-area: layout-content;
}

.ml-layout-navigation {
    grid-area: layout-navigation;
    position: sticky;
    bottom: 0;
}
</style>
