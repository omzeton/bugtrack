<template>
    <div class="textarea py-2 bg-black3" :class="wrapperClass">
        <label :for="name" class="font-nunito text-white mx-4 text-sm pb-1">
            {{ label }}
        </label>
        <textarea v-model="innerModel" @input="emitValue($event)" :type="type" :name="name" :placeholder="placeholder" class="font-roboto bg-black3 text-white pl-4" />
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "nuxt-property-decorator";
@Component
export default class Input extends Vue {
    innerModel: string | number = "";

    @Prop(String) name!: string;
    @Prop(String) label!: string;
    @Prop(String) type!: string;
    @Prop(String) placeholder!: string;
    @Prop(String) wrapperClass!: string;
    @Prop() value!: string | number;
    @Watch("value")
    changedValue(newVal) {
        this.innerModel = newVal;
    }
    created() {
        this.innerModel = this.value;
    }
    emitValue(event) {
        this.innerModel = event.target.value;
        this.$emit("input", this.innerModel);
    }
}
</script>

<style lang="scss" scoped>
.textarea {
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    border: 1px solid $formWhite;
    border-radius: 6px;
    textarea {
        outline: none;
        height: 100% !important;
    }
}
</style>
