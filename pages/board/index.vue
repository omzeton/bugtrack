<template>
    <div class="task-board">
        <template v-if="userData">
            <h3 class="text-xs text-form">
                Welcome back <span class="text-toxic">{{ userData.username }}</span
                >!
            </h3>
            <h2 class="splash__header font-roboto">
                Board
            </h2>
            <Columns />
        </template>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "~/plugins/nuxt-class-component";
import Columns from "@/components/Board/Columns.vue";
import { namespace } from "nuxt-property-decorator";
import { User } from "~/models/models";

const api = namespace("api");

@Component({
    components: {
        Columns,
    },
})
export default class Board extends Vue {
    @api.Action
    public FETCH_USER_DATA!: () => any;
    @api.Getter
    public GET_USER_DATA!: any;

    public userData: any = null;

    async mounted() {
        try {
            if (!this.userData) {
                await this.FETCH_USER_DATA();
                this.userData = this.GET_USER_DATA;
            }
        } catch (error) {
            throw error;
        }
    }

    async asyncData(context) {
        try {
            if (context && context.req) {
                // TODO: Maximum call stack erreicht
                // const userData = await context.store.dispatch("api/FETCH_USER_DATA", { _id: context.req.headers.cookie });
                // return userData;
            }
        } catch (error) {
            throw error;
        }
    }
}
</script>

<style lang="scss" scoped>
.task-board {
    width: 100%;
    height: 100%;
}
</style>
