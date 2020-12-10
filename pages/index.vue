<template>
    <div class="homepage">
        <div class="homepage-card">
            <img class="homepage-card__image" src="~/assets/logo.png" alt="Logo" />
            <span>{{ characters }}</span>
            <div class="flex">
                <nuxt-link
                    to="/login"
                    class="font-roboto mx-8 signup-card__submit mt-6 bg-green-200 hover:bg-green-300 hover:text-black focus:outline-none py-2 px-4 rounded text-gray-600"
                >
                    Login
                </nuxt-link>
                <nuxt-link
                    to="/register"
                    class="font-roboto mx-8 signup-card__submit mt-6 bg-green-200 hover:bg-green-300 hover:text-black focus:outline-none py-2 px-4 rounded text-gray-600"
                >
                    Register
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "~/plugins/nuxt-class-component";

import { Character } from "~/apollo/schemas";
import gqlGetCharacters from "~/apollo/queries/getCharacters.gql";

@Component
export default class IndexPage extends Vue {
    characters: Character[] = [];

    get apollo() {
        return {
            characters: {
                query: gqlGetCharacters,
                prefetch: true,
            },
        };
    }
}
</script>

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
