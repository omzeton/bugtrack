<template>
    <div class="columns mt-8">
        <div class="columns__wrapper">
            <div v-for="(column, index) in columnLabels" :key="index" class="column mr-12 p-4">
                <h2 class="font-nunito font-hairline text-white mb-4">
                    {{ column.name }} <span class="ml-1 font-roboto font-bold text-form">{{ column.tasks.length }}</span>
                </h2>
                <div class="columns__ticker-wrapper">
                    <ColumnCard v-for="task in column.tasks" :key="task.id" :cardData="task" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "nuxt-property-decorator";
import ColumnCard from "./ColumnCard.vue";
import { Task, Column } from "~/models/models";

@Component
export default class Columns extends Vue {
    columnLabels: Column[] = [
        {
            name: "TO DO",
            tasks: [
                {
                    id: 1,
                    title: "Kupić więcej lampek na choinkę",
                    tag: "URLOP",
                    code: "W-CA-01",
                    assignee: "Adam Rolczyk",
                    type: "task",
                    priority: "high",
                },
            ],
        },
        {
            name: "IN PROGRESS",
            tasks: [
                {
                    id: 2,
                    title: "Kupić więcej lampek na choinkę",
                    tag: "URLOP",
                    code: "W-CA-01",
                    assignee: "Adam Rolczyk",
                    type: "task",
                    priority: "high",
                },
                {
                    id: 3,
                    title: "Kupić więcej lampek na choinkę",
                    tag: "URLOP",
                    code: "W-CA-01",
                    assignee: "Adam Rolczyk",
                    type: "task",
                    priority: "high",
                },
            ],
        },
        {
            name: "CODE REVIEW",
            tasks: [
                {
                    id: 4,
                    title: "Kupić więcej lampek na choinkę",
                    tag: "URLOP",
                    code: "W-CA-01",
                    assignee: "Adam Rolczyk",
                    type: "task",
                    priority: "high",
                },
            ],
        },
        {
            name: "DONE",
            tasks: [
                {
                    id: 5,
                    title: "Kupić więcej lampek na choinkę",
                    tag: "URLOP",
                    code: "W-CA-01",
                    assignee: "Adam Rolczyk",
                    type: "task",
                    priority: "high",
                },
                {
                    id: 6,
                    title: "Kupić więcej lampek na choinkę",
                    tag: "URLOP",
                    code: "W-CA-01",
                    assignee: "Adam Rolczyk",
                    type: "task",
                    priority: "high",
                },
                {
                    id: 7,
                    title: "Kupić więcej lampek na choinkę",
                    tag: "URLOP",
                    code: "W-CA-01",
                    assignee: "Adam Rolczyk",
                    type: "task",
                    priority: "high",
                },
            ],
        },
    ];
}
</script>

<style lang="scss" scoped>
.columns {
    width: 100%;
    height: calc(100vh - 400px);
    overflow-y: hidden;
    overflow-x: hidden;
    &__wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
    }
}

.column {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: $black2;
    border-radius: 8px;
    box-sizing: border-box;
    border: 1px solid $black3;
    &__ticker-wrapper {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
    }
}
</style>
