<script lang="ts">
import { defineComponent, h } from '@nuxtjs/composition-api';

export default defineComponent({
    name: 'MlButtonWrapper',

    props: {
        link: {
            type: String,
            required: true
        }
    },

    emits: ['click'],

    render() {
        const content = [this.$slots.default];

        if (this.link) {
            return h('NuxtLink', {
                attrs: { role: 'button' },
                props: { to: this.link }
            }, content);
        }
        return h('button', {
            attrs: { type: 'button' }
        }, content);
    }
});
</script>
