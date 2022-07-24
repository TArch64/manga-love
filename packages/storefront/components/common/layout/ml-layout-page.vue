<template>
    <div class="ml-layout-page">
        <header class="ml-layout-page__header">
            <MlButton class="ml-layout-page__action" link="/search">
                <MlIcon name="search" size="20px" />
            </MlButton>

            <h2 class="ml-layout-page__title">
                {{ title }}
            </h2>

            <MlButton class="ml-layout-page__action" @click="signOut">
                <MlIcon name="sign-out" size="20px" />
            </MlButton>
        </header>

        <slot />
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import MlButton from '../ml-button.vue';
import MlIcon from '../ml-icon.vue';

export default defineComponent({
    name: 'MlLayoutPage',

    components: {
        MlButton,
        MlIcon
    },

    props: {
        title: {
            type: String,
            required: true
        }
    },

    setup() {
        async function signOut(): Promise<void> {}

        return { signOut };
    }
});
</script>

<style scoped>
.ml-layout-page {
    background-color: #FFF;
    padding: 15px;
}

.ml-layout-page__header {
    display: flex;
    align-items: center;
}

.ml-layout-page__title {
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    font-family: var(--font-serif);
    color: #242424;
    margin: 0;
}

.ml-layout-page__action {
    padding: 5px;
    transition: transform 100ms ease-out;
    will-change: transform;
    --icon-foreground: #242424;

    &:hover,
    &:focus {
        transform: scale(1.1);
    }
}

@media (max-width: 991px) {

    .ml-layout-page__header {
        margin-bottom: 20px;
        padding: 5px 15px;
        justify-content: space-between;
    }
}

@media (min-width: 992px) {

    .ml-layout-page__header {
        margin-bottom: 30px;
        padding: 15px 20px;
        justify-content: space-evenly;
    }
}
</style>
