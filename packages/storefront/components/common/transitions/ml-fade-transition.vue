<template>
    <span class="ml-fade" :style="transitionStyles">
        <transition name="ml-fade-" :duration="duration">
            <slot />
        </transition>
    </span>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from '@nuxtjs/composition-api';
import { Duration } from './duration';

export default defineComponent({
    name: 'MlFadeTransition',

    props: {
        duration: {
            type: [Object, String, Number] as PropType<Duration | string | number>,
            required: true
        }
    },

    setup(props) {
        const duration = computed<Duration>(() => {
            if (typeof props.duration === 'object') {
                return props.duration;
            }
            const time = Number(props.duration);

            return { enter: time, leave: time };
        });

        const transitionStyles = computed(() => ({
            '--transition-enter-time': `${duration.value.enter}ms`,
            '--transition-leave-time': `${duration.value.leave}ms`
        }));

        return { transitionStyles };
    }
});
</script>

<style scoped>
.ml-fade {
    display: block;
    position: relative;
}

.ml-fade--enter-active,
.ml-fade--leave-active {
    transition: opacity ease-out;
}

.ml-fade--enter-active {
    transition-duration: var(--transition-enter-time);
    z-index: 2;
}

.ml-fade--leave-active {
    transition-duration: var(--transition-leave-time);
    z-index: 1;
    position: absolute;
}

.ml-fade--enter, .ml-fade--leave-to {
    opacity: 0;
}
</style>
