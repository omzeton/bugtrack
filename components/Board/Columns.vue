<template>
    <div class="columns mt-8">
        <div class="columns__wrapper">
            <div v-for="(column, index) in columns" :key="index" class="column mr-12 p-4">
                <h2 class="font-nunito font-hairline text-white mb-4">
                    {{ column.name }} <span class="ml-1 font-roboto font-bold text-form">{{ taskPerStatus(column.statusId).length }}</span>
                </h2>
                <div class="columns__ticker-wrapper" v-if="tasks">
                    <ColumnCard v-for="(task, index) in taskPerStatus(column.statusId)" :key="index" :cardData="task" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, namespace } from "nuxt-property-decorator";
import ColumnCard from "./ColumnCard.vue";
import { User, Task } from "@/models";

const user = namespace("user");

interface Column {
    statusId: number;
    name: string;
}

@Component
export default class Columns extends Vue {
    @user.Action
    FETCH_USER_DATA!: () => User;
    @user.Getter
    GET_USER_DATA!: User;

    columns: Column[] = [
        {
            statusId: 1,
            name: "TO DO",
        },
        {
            statusId: 2,
            name: "IN PROGRESS",
        },
        {
            statusId: 3,
            name: "TESTING",
        },
        {
            statusId: 4,
            name: "DONE",
        },
    ];
    tasks: Task[] = [];

    async mounted() {
        try {
            const userData = await this.FETCH_USER_DATA();
            this.tasks = userData.tasks;
        } catch (e) {
            throw e;
        }
    }

    taskPerStatus(taskStatus: number) {
        if (!this.tasks) {
            return [];
        }
        const result = this.tasks.filter(el => el.status === taskStatus);
        return result;
    }
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
