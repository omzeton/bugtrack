<template>
    <ModalBase modalName="taskModal">
        <h2 class="font-roboto text-xl font-black">Ich bin in einem Modal!</h2>
    </ModalBase>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import ModalBase from "./ModalBase.vue";
@Component({
    components: {
        ModalBase,
    },
})
export default class TaskModal extends Vue {}
</script>
