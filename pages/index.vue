<template>
    <div class="homepage">
        <div class="splash mt-32">
            <h2 class="splash__header font-roboto">Best way<br />to <span class="text-toxic">manage</span> your next project</h2>
            <p class="splash__sub font-nunito mt-8 font-light text-sm text-white">
                A tool to help you work smarter! BugTrack is app that lets you segregate all your tasks and problems into small chunks that you can tackle respectively at your own pace. By setting
                ticket status you'll never loose track of your progress and be able to evaluate your efforts with greater precision.
                <br />This app has been created with help of TypeScript, Nuxt and GraphQL.
            </p>
            <div class="mt-16 splash__button-wrapper">
                <ButtonLink target="/login">
                    Login
                </ButtonLink>
                <ButtonLink target="/register">
                    Register
                </ButtonLink>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "~/plugins/nuxt-class-component";
import ButtonLink from "@/components/ButtonLink.vue";

@Component({
    components: {
        ButtonLink,
    },
})
export default class IndexPage extends Vue {}
</script>

<style lang="scss">
.splash {
    &__header {
        font-size: 64px;
        color: $white2;
        font-weight: 900;
        line-height: 1.2;
    }
    &__sub {
        width: 400px;
    }
    &__button-wrapper {
        width: 400px;
        display: flex;
        justify-content: space-between;
    }
}
</style>
