<template>
    <div class="toolbar accent-shadow">
        <nuxt-link to="/" tag="a" class="toolbar__logo flex-wrapper">
            <img src="~/assets/logo.svg" alt="Logo" />
        </nuxt-link>
        <div class="todo">
            <p class="text-accent font-roboto">4. Modal</p>
        </div>
        <nav class="toolbar__nav">
            <nuxt-link to="/" tag="div" class="toolbar__button flex-wrapper">Home</nuxt-link>
            <div class="toolbar__divider" />
            <div v-if="isLoggedIn" @click="logOut" class="toolbar__button flex-wrapper">Logout</div>
            <nuxt-link v-else to="/login" tag="div" class="toolbar__button flex-wrapper">Login</nuxt-link>
        </nav>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "~/plugins/nuxt-class-component";
import { namespace } from "nuxt-property-decorator";

const user = namespace("user");

@Component
export default class Toolbar extends Vue {
    @user.Getter
    public isLoggedIn!: boolean;
    @user.Action
    public LOGOUT!: () => void;

    logOut(): void {
        this.LOGOUT();
        this.$router.push("/");
    }
}
</script>

<style lang="scss" scoped>
.toolbar {
    position: fixed;
    z-index: 6;
    top: 0;
    width: 100%;
    height: 56px;
    background: $black2;
    display: inline-flex;
    box-sizing: border-box;
    &__logo {
        position: absolute;
        left: 14px;
        height: 56px;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
            height: 40px;
        }
    }
    &__nav {
        position: absolute;
        right: 14px;
        top: 0;
        height: 56px;
        display: inline-flex;
    }
    &__button {
        width: auto;
        font-size: 100%;
        padding: 0 10px;
        font-size: 14px;
        cursor: pointer;
        font-family: $rubik;
        outline: none;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        color: $white2;
        &:hover {
            color: $accent;
        }
    }
    &__divider {
        width: 1px;
        margin: auto 8px;
        height: 30px;
        background-color: $white3;
    }
}

.nuxt-link-exact-active {
    box-shadow: $accent 0 0.5px 0 0, inset $accent 0 -0.5px 0 0;
    color: $accent;
}

.todo {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 200px;
}
</style>
