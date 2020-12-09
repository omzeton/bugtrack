<template>
    <div class="app">
        <Toolbar />
        <main class="main">
            <Nuxt />
        </main>
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
    background-image: url("~assets/tic-tac-toe.png");
    background-repeat: repeat;
    background-size: 40%;
}

.main {
    margin-top: 56px;
    width: 100%;
    height: 100%;
    position: relative;
}
</style>
