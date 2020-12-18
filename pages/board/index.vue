<template>
    <div class="task-board">
        <template v-if="userData">
            <h3 class="text-xs text-form">
                Welcome back <span class="text-accent">{{ userData.username }}</span
                >!
            </h3>
            <h2 class="splash__header font-roboto">
                Board
            </h2>
            <div class="task-board__tools mt-8">
                <button class="task-board__add box-border pl-4 pr-6 bg-black2">
                    <svg
                        xmlns:dc="http://purl.org/dc/elements/1.1/"
                        xmlns:cc="http://creativecommons.org/ns#"
                        xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                        xmlns:svg="http://www.w3.org/2000/svg"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
                        xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
                        version="1.1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 100 125"
                    >
                        <g transform="translate(0,-952.36218)">
                            <path
                                d="m 50,977.36218 c -3.3136,0 -6,2.6863 -6,6 l 0,13 -13,0 c -3.3137,0 -6,2.6862 -6,6.00002 0,3.3136 2.6863,6 6,6 l 13,0 0,13 c 0,3.3137 2.6864,6 6,6 3.3138,0 6,-2.6863 6,-6 l 0,-13 13,0 c 3.3137,0 6,-2.6864 6,-6 0,-3.31382 -2.6863,-6.00002 -6,-6.00002 l -13,0 0,-13 c 0,-3.3137 -2.6862,-6 -6,-6 z"
                                style="text-indent:0;text-transform:none;direction:ltr;block-progression:tb;baseline-shift:baseline;color:#ffffff;enable-background:accumulate;"
                                fill="#ffffff"
                                fill-opacity="1"
                                stroke="none"
                                marker="none"
                                visibility="visible"
                                display="inline"
                                overflow="visible"
                            />
                        </g>
                    </svg>
                    <p class="text-white font-roboto font-black text-xs uppercase">Add new task</p>
                </button>
            </div>
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
    &__tools {
        width: 100%;
        height: 35px;
        display: flex;
    }
    &__add {
        position: relative;
        display: flex;
        align-items: center;
        border: 1px solid $formWhite;
        border-radius: 4px;
        transition: all 0.2s ease-in-out;
        &:hover {
            background-color: #fff;
            p {
                color: #000;
            }
            svg {
                path {
                    fill: #000;
                }
            }
        }
        p {
            transition: all 0.2s ease-in-out;
        }
        svg {
            margin-top: 5px;
            width: 20px;
            height: auto;
            path {
                transition: all 0.2s ease-in-out;
            }
        }
    }
}
</style>
