<template>
    <div class="ml-auth-layout">
        <div class="ml-auth-layout__logo">
            <AppLogo type="outlined" size="64px" />
        </div>

        <div class="ml-auth-layout__content">
            <Nuxt />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { AppLogo } from '~/components/common';

export default defineComponent({
    name: 'Auth',

    components: {
        AppLogo
    }
});
</script>

<style scoped>
.ml-auth-layout {
    padding: 30px 20px;
    min-height: 100%;
    display: flex;
    flex-direction: column;
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

.ml-auth-layout__content {
    flex-grow: 1;
}
</style>
