<template>
    <div class="button accent-shadow" @click="callback">
        <Loader class="mt-2" v-if="isLoading" />
        <span v-else class="font-nunito font-bold text-white">
            <slot />
        </span>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import Loader from "./Loader.vue";
@Component({
    components: {
        Loader,
    },
})
export default class Button extends Vue {
    @Prop({ default: () => {} }) callback!: () => void;
    @Prop({ default: false }) isLoading!: boolean;
}
</script>

<style lang="scss" scoped>
.button {
    position: relative;
    box-sizing: border-box;
    padding: 8px 16px;
    background-color: $accent;
    min-width: 180px;
    display: flex;
    height: 40px;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
    &:hover {
        background-color: $accent-darker;
    }
}
</style>
