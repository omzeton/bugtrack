<template>
    <div v-if="cardData" class="column-card mb-4">
        <div class="column-card__title">
            <h2>{{ cardData.title }}</h2>
        </div>
        <div class="column-card__tag">
            <p>{{ cardData.tag }}</p>
        </div>
        <div class="column-card__bottom-section">
            <div class="column-card__code">
                <p>{{ cardData.code }}</p>
            </div>
            <div class="column-card__assignee">
                <p>{{ cardData.assignee }}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import { Task, Column } from "~/models/models";
@Component
export default class ColumnCard extends Vue {
    @Prop() cardData!: Task;
}
</script>

<style lang="scss" scoped>
.column-card {
    width: 100%;
    height: 200px;
    background-color: $black3;
    display: block;
    overflow: hidden;
    border-radius: 8px;
    border: 1px solid $formWhite;
}
</style>
