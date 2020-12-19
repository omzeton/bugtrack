<template>
    <transition name="fade">
        <div class="modal" v-if="modalIsVisible">
            <div class="modal__box bg-black2">
                <div class="modal__close-btn cursor-pointer" @click="closeModal">
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
                                style="text-indent:0;text-transform:none;direction:ltr;block-progression:tb;baseline-shift:baseline;color:#000000;enable-background:accumulate;"
                                fill="#000000"
                                fill-opacity="1"
                                stroke="none"
                                marker="none"
                                visibility="visible"
                                display="inline"
                                overflow="visible"
                            />
                        </g>
                    </svg>
                </div>
                <div class="content p-8 box-border">
                    <slot />
                </div>
            </div>
        </div>
    </transition>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch, namespace } from "nuxt-property-decorator";

const modals = namespace("modals");

@Component
export default class Modal extends Vue {
    modalIsVisible: boolean = false;

    @Prop({ required: true }) readonly modalName!: string;

    @modals.Action
    public HIDE_MODAL!: ({ modalName }: { modalName: string }) => void;

    @modals.Getter
    public GET_VISIBLE_MODAL!: string;

    get visibleModal(): string {
        return this.GET_VISIBLE_MODAL;
    }

    @Watch("visibleModal", {
        immediate: true,
        deep: true,
    })
    modalNameChanged(newVal: string, oldVal: string) {
        this.modalIsVisible = newVal === this.modalName;
    }

    closeModal() {
        this.HIDE_MODAL({
            modalName: this.modalName,
        });
    }
}
</script>

<style lang="scss">
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.7);
    z-index: 9;
    &__box {
        width: 50%;
        height: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
    }
    &__close-btn {
        width: 30px;
        height: 30px;
        position: absolute;
        top: 16px;
        right: 16px;
        svg {
            position: absolute;
            left: 35%;
            top: -12px;
            transform: translateX(-50%) rotate(45deg);
            width: 50px;
            height: auto;
        }
    }
}
.content {
    width: 100%;
    height: 100%;
}
</style>
