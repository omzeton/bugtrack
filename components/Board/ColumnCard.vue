<template>
    <div v-if="cardData" class="column-card mb-4 p-4 box-border cursor-pointer bg-black2 hover:bg-black3">
        <div class="column-card__title">
            <h2 class="text-white font-roboto text-xl font-bold mb-2">{{ cardData.name }}</h2>
        </div>
        <div class="column-card__tag mt-2 mb-12">
            <p class="column-card__tag-label px-4 text-sm text-white" :style="label(cardData.category)">{{ cardData.category }}</p>
        </div>
        <div class="column-card__description mb-6">
            <p class="text-nunito font-light text-white text-sm leading-6">{{ cardData.description }}</p>
        </div>
        <div class="column-card__bottom-section px-4 box-border">
            <div class="column-card__code">
                <p class="text-form font-nunito text-xs font-hairline">{{ cardData._id.slice(cardData._id.length - 5) }}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, mixins } from "nuxt-property-decorator";
import { Task } from "@/models";
import LabelResolver from "@/mixins/LabelResolver";
@Component
export default class ColumnCard extends mixins(LabelResolver) {
    @Prop() cardData!: Task;
}
</script>

<style lang="scss" scoped>
.column-card {
    position: relative;
    width: 100%;
    height: auto;
    display: block;
    overflow: hidden;
    border-radius: 8px;
    border: 1px dashed $formWhite;
    cursor: pointer;
    &__tag {
        display: block;
        position: relative;
        &-label {
            position: absolute;
            width: auto;
            border-radius: 8px;
            &--brown {
                background: brown;
                box-shadow: 0px 0px 13px -1px brown;
            }
            &--blue {
                background: blue;
                box-shadow: 0px 0px 13px -1px blue;
            }
            &--green {
                background: green;
                box-shadow: 0px 0px 13px -1px green;
            }
            &--default {
                background: rebeccapurple;
                box-shadow: 0px 0px 13px -1px rebeccapurple;
            }
        }
    }
    &__bottom-section {
        position: absolute;
        bottom: 12px;
        left: 0;
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
    }
}
</style>
