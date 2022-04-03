<template>
    <div>
        {{ currentUser }}
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { currentUserQuery } from '~/graphql/user';

export default Vue.extend({
    name: 'Me',

    apollo: {
        currentUser: {
            query: currentUserQuery
        }
    },

    mounted() {
        if (!this.$isServer) {
            this.$apollo.query({ query: currentUserQuery, fetchPolicy: 'no-cache' }).then((result) => {
                console.log(result);
            });
        }
    }
});
</script>
