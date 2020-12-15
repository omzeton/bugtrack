<template>
    <nuxt-link class="button accent-shadow" :to="target">
        <span class="font-nunito font-bold text-white">
            <slot />
        </span>
    </nuxt-link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
@Component
export default class Button extends Vue {
    @Prop({ default: "" }) target!: string | undefined;
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
