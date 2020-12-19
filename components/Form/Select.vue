<template>
    <div class="input py-2 bg-black3" :class="wrapperClass">
        <label :for="name" class="font-nunito text-white pl-4 text-sm pb-1">
            {{ label }}
        </label>
        <select class="font-roboto bg-black3 text-white mx-4" :name="name" v-model="innerModel" @input="emitValue($event)">
            <option disabled value="">{{ placeholder }}</option>
            <option v-for="(option, index) in options" :key="index" :value="option.value">{{ option.name }}</option>
        </select>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "nuxt-property-decorator";
@Component
export default class Input extends Vue {
    innerModel: string | number = "";

    @Prop(String) name!: string;
    @Prop(String) label!: string;
    @Prop(String) placeholder!: string;
    @Prop(String) wrapperClass!: string;
    @Prop(Array) options!: string[];
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
.input {
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: column;
    border: 1px solid $formWhite;
    border-radius: 6px;
    input {
        outline: none;
    }
}
</style>
