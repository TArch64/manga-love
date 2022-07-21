<template>
    <MlButton class="ml-button-back" :link="link">
        <MlIcon class="ml-button-back__arrow" name="arrow" size="20px" />

        <span class="ml-button-back__text">
            {{ $t('layout.back') }}
        </span>
    </MlButton>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import MlButton from './ml-button.vue';
import MlIcon from './ml-icon.vue';

export default defineComponent({
    name: 'MlButtonBack',

    components: {
        MlButton,
        MlIcon
    },

    props: {
        link: {
            type: [String, Array],
            required: true
        }
    }
});
</script>

<style scoped>
.ml-button-back {
    padding: 5px;
    border-radius: 3px;
    display: flex;
    align-items: center;
    transition: background-color 0.1s ease-out;
    will-change: background-color;
    --icon-foreground: #242424;

    &:hover,
    &:focus {
        --arrow-offset: -5px;
        --arrow-scale: 1.05;
    }
}

.ml-button-back__arrow {
    transform: translateX(var(--arrow-offset, 0)) scale(var(--arrow-scale, 1));
    transition: transform 0.1s ease-out;
    will-change: transform;
}

@media (max-width: 991px) {
    .ml-button-back__text { display: none }
}

@media (min-width: 991px) {

    .ml-button-back {
        padding-left: 10px;
        padding-right: 12px;
    }

    .ml-button-back__text {
        margin-left: 5px;
    }
}
</style>
