<template>
    <div class="ml-auth-layout">
        <div class="ml-auth-layout__logo">
            <MlLogo skin="outlined" size="64px" />
        </div>

        <div class="ml-auth-layout__content">
            <Nuxt class="ml-height--full" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { MlLogo } from '~/components/common';

export default defineComponent({
    name: 'Auth',

    components: {
        MlLogo
    }
});
</script>

<style scoped>
.ml-auth-layout {
    padding: 30px 20px;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    max-width: 500px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 768px) {
        justify-content: center;
    }
}

.ml-auth-layout__logo {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    flex-shrink: 0;

    &::before,
    &::after {
        content: "";
        display: block;
        border-bottom: 1px solid #BDBDBD;
        flex-grow: 1;
    }

    &::before {
        margin-right: 30px;
    }

    &::after {
        margin-left: 30px;
    }
}

@media (max-width: 767.98px) {

    .ml-auth-layout__content {
        flex-grow: 1;
        flex-basis: 0;
    }
}
</style>
