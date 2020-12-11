<template>
    <div class="homescreen">
        <h2>Welcome</h2>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "~/plugins/nuxt-class-component";

// @Component({
//     apollo: {
//         user: gql`
//             query {
//                 user(id: "28") {
//                     name
//                     email
//                     password
//                 }
//             }
//         `,
//     },
// })
@Component
export default class Board extends Vue {}
</script>
