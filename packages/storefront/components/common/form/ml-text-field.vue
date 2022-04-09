<template>
    <MlFormField :name="name" :label="label">
        <template #input="{ value, setValue }">
            <MlInput
                :value="value"
                :placeholder="placeholder"
                :type="type"
                @input="setValue"
            />
        </template>
    </MlFormField>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import MlFormField from './ml-form-field.vue';
import MlInput from './ml-input.vue';

export default defineComponent({
    name: 'MlTextField',

    components: {
        MlFormField,
        MlInput
    },

    props: {
        name: MlFormField.props!.name,
        label: MlFormField.props!.label,
        type: MlInput.props!.type,
        placeholder: MlInput.props!.placeholder
    }
});
</script>
