<template>
    <div class="registration">
        <AuthForm :registrationForm="true" />
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import AuthForm from "@/components/AuthForm.vue";

@Component({
    components: {
        AuthForm,
    },
})
export default class Login extends Vue {}
</script>
