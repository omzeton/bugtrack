<template>
    <div class="homescreen">
        <h2>Welcome {{ userInfo.user.username }}!</h2>
        <p>id: {{ userInfo.user._id }}</p>
        <p>email: {{ userInfo.user.email }}</p>
        <p>password: {{ userInfo.user.password }}</p>
        <p>username: {{ userInfo.user.username }}</p>
        <p>token: {{ userInfo.token }}</p>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "~/plugins/nuxt-class-component";
import { namespace } from "nuxt-property-decorator";
import { User } from "~/models/models";

const user = namespace("user");

@Component
export default class Board extends Vue {
    @user.State
    public userInfo!: object;
}
</script>
