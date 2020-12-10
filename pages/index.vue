<template>
    <div class="homepage">
        <div class="homepage-card">
            <img class="homepage-card__image" src="~/assets/logo.png" alt="Logo" />
            <div class="homepage-card__buttons flex-wrapper">
                <nuxt-link to="/login" class="homepage-card__button flex-wrapper">Login</nuxt-link>
                <nuxt-link to="/register" class="homepage-card__button flex-wrapper">Register</nuxt-link>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.homepage {
    width: 100%;
    height: calc(100vh - 56px);
    position: relative;
}

.homepage-card {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 500px;
    height: auto;
    background-color: $white1;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 150px;
    padding: 32px;
    box-sizing: border-box;
    border-radius: 8px;
    box-shadow: 0px 0px 23px -1px rgba(13, 255, 73, 0.1);

    &__image {
        width: 100%;
        height: auto;
    }
    &__text {
        font-family: $karla;
        text-align: justify;
        letter-spacing: 1px;
        font-size: 16px;
    }

    &__buttons {
        width: 100%;
        height: auto;
        margin-top: 32px;
    }
    &__button {
        border: none;
        width: 50%;
        margin: 0 8px;
        height: 32px;
        border-radius: 8px;
        background-color: $black;
        font-family: $rubik;
        color: $white1;
        box-shadow: 0px 10px 13px -1px rgba(255, 127, 17, 0.1);
        text-decoration: none;
        &:hover {
            background-color: $orange;
            cursor: pointer;
        }
    }
}
</style>
