<template>
    <div class="app">
        <Toolbar />
        <main class="main">
            <Nuxt />
        </main>
        <TaskModal />
        <div class="background-image"></div>
    </div>
</template>

<script lang="ts">
import Toolbar from "@/components/Toolbar.vue";
import TaskModal from "@/components/Modals/TaskModal.vue";
import { Component, Vue } from "nuxt-property-decorator";

@Component({
    components: {
        Toolbar,
        TaskModal,
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
    background: $black3;
}

.main {
    margin-top: 56px;
    width: 100%;
    height: 100%;
    position: relative;
    padding: 64px;
    box-sizing: border-box;
}

.background-image {
    position: fixed;
    width: 100vw;
    bottom: 0;
    left: 0;
    height: 100vh;
    z-index: -999;
    background-image: url("~assets/wave.svg");
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: bottom;
}
</style>
