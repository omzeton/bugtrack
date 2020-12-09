<template>
    <div class="homepage">
        <div class="card">
            <img class="card__image" src="~/assets/logo.png" alt="Logo" />
            <p class="card__text">
                Bugtrack is an awesome app for tracking bugs and assigning developers to fix them. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis nunc ut iaculis
                consequat. Vivamus faucibus sollicitudin fermentum. Praesent lorem eros, tempor sed sapien eget, eleifend vulputate sem. Sed venenatis, tortor ut feugiat dignissim, arcu odio
                vestibulum ligula, id viverra dolor ex a eros. Curabitur eleifend, est eget tempus consectetur, ligula tellus pretium libero, lacinia placerat massa lacus at libero. Pellentesque ac mi
                eget ligula fermentum aliquet. In hac habitasse platea dictumst.
            </p>
            <div class="card__buttons flex-wrapper">
                <nuxt-link to="/login" class="card__button flex-wrapper">Start</nuxt-link>
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

.card {
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
    box-shadow: 0px 0px 23px -1px rgba(255, 127, 17, 0.1);

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
