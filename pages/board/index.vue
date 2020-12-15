<template>
    <div class="task-board">
        <template v-if="userData.username">
            <h2 class="splash__header font-roboto">
                Welcome back <span class="text-toxic">{{ userData.username }}</span
                >.
            </h2>
        </template>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "~/plugins/nuxt-class-component";
import { namespace } from "nuxt-property-decorator";
import { User } from "~/models/models";

const api = namespace("api");

@Component
export default class Board extends Vue {
    @api.Action
    public FETCH_USER_DATA!: () => any;
    @api.Getter
    public userData!: any;

    mounted() {
        this.FETCH_USER_DATA();
    }
}
</script>

<style lang="scss" scoped>
.task-board {
    width: 100%;
    height: 100%;
}
</style>
