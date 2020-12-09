<template>
    <div class="app">
        <Toolbar />
        <Nuxt />
    </div>
</template>

<script lang="ts">
import Toolbar from "@/components/Toolbar.vue";
import { Component, Vue } from "nuxt-property-decorator";

@Component({
    components: {
        Toolbar,
    },
})
export default class Default extends Vue {}
</script>

<style lang="scss">
* {
    box-sizing: content-box;
}

body {
    margin: 0;
    padding: 0;
    background: $white2;
}
</style>
