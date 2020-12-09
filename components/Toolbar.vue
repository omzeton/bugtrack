<template>
    <div class="toolbar">
        <a class="toolbar__logo flex-wrapper">
            <img src="~/assets/logo_orange.png" alt="Logo" />
        </a>
        <nav class="toolbar__nav">
            <nuxt-link to="/" tag="div" class="toolbar__button flex-wrapper">Home</nuxt-link>
            <nuxt-link to="/about" tag="div" class="toolbar__button flex-wrapper">About</nuxt-link>
            <div class="toolbar__divider" />
            <nuxt-link to="login" tag="div" class="toolbar__button flex-wrapper">Login</nuxt-link>
        </nav>
    </div>
</template>

<style lang="scss" scoped>
.toolbar {
    position: absolute;
    z-index: 6;
    top: 0;
    width: 100%;
    height: 56px;
    background: $white1;
    display: inline-flex;
    box-sizing: border-box;
    &__logo {
        position: absolute;
        left: 14px;
        top: 0;
        height: 56px;
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
        &:hover {
            color: $orange;
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
    box-shadow: $orange 0 0.5px 0 0, inset $orange 0 -0.5px 0 0;
    color: $orange;
}
</style>
