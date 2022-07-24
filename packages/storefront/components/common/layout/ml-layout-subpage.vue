<template>
    <div class="ml-layout-subpage">
        <header class="ml-layout-subpage__header">
            <MlButtonBack :link="backLink" />

            <h2 class="ml-layout-subpage__title">
                {{ title }}
            </h2>
        </header>

        <slot />
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import MlButtonBack from '../ml-button-back.vue';

export default defineComponent({
    name: 'MlLayoutSubpage',

    components: {
        MlButtonBack
    },

    props: {
        title: {
            type: String,
            required: true
        },

        backLink: {
            type: String,
            required: true
        }
    }
});
</script>

<style scoped>
.ml-layout-subpage {
    background-color: #FFF;
    padding: 15px;
}

.ml-layout-subpage__header {
    display: flex;
    justify-content: space-between;

    &::after {
        content: "";
        display: block;
        width: 30px;
    }
}

.ml-layout-subpage__title {
    font-weight: 700;
    font-size: 18px;
    font-family: var(--font-serif);
    line-height: 25px;
    color: #242424;
    margin: 0;
}

@media (max-width: 991px) {

    .ml-layout-subpage__header {
        margin-bottom: 20px;
        padding: 5px 15px;
        justify-content: space-between;
    }
}

@media (min-width: 992px) {

    .ml-layout-subpage__header {
        margin-bottom: 30px;
        padding: 15px 20px;
        justify-content: space-evenly;
    }
}
</style>
