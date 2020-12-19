<template>
    <div class="input py-2" :class="wrapperClass">
        <label :for="name" class="font-nunito test-black2 pl-4 text-sm pb-1">
            {{ label }}
        </label>
        <input v-model="innerModel" @input="emitValue($event)" :type="type" :name="name" :placeholder="placeholder" :min="min" :max="max" class="font-roboto pl-4" />
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
    @Prop() min!: number;
    @Prop() max!: number;
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
.input {
    background-color: red;
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: column;
    border: 1px solid $black2;
    border-radius: 6px;
    background-color: $white1;
    input {
        outline: none;
    }
}
</style>
