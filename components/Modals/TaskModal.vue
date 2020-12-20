<template>
    <ModalBase :modalName="modalName">
        <div class="task-form mt-8">
            <Input v-model="taskForm.name" name="task-name" label="Name" type="text" placeholder="What is your task title?" wrapperClass="mb-12" />
            <Select
                v-model="taskForm.category"
                :options="categoryOptions"
                name="task-category"
                label="Category"
                placeholder="What is the category of your task?"
                wrapperClass="mb-12"
                :value="taskForm.category"
            />
            <Textarea v-model="taskForm.description" name="task-description" label="Description" type="text" placeholder="What is the task description?" wrapperClass="mb-12" />
            <Select v-model="taskForm.status" :options="statusOptions" name="task-status" label="Status" placeholder="What is the task status?" wrapperClass="mb-16" :value="taskForm.status" />
        </div>
        <div class="submit-bar">
            <button class="submit-bar__button bg-accent px-4 font-roboto text-white accent-shadow accent-shadow-focus" @click="submitTask">Submit</button>
        </div>
    </ModalBase>
</template>

<script lang="ts">
import { Vue, Component, namespace } from "nuxt-property-decorator";
import { Task, TaskToSend } from "@/models";
import Input from "../Form/Input.vue";
import Select from "../Form/Select.vue";
import Textarea from "../Form/Textarea.vue";
import ModalBase from "./ModalBase.vue";

const task = namespace("task");
const modals = namespace("modals");

interface SelectOption {
    value: string | number;
    name: string;
}

@Component({
    components: {
        ModalBase,
        Input,
        Select,
        Textarea,
    },
})
export default class TaskModal extends Vue {
    taskForm: TaskToSend = {
        name: "",
        category: "",
        description: "",
        status: "",
    };
    modalName: string = "taskModal";
    categoryOptions: SelectOption[] = [
        {
            value: "Święta",
            name: "Święta",
        },
        {
            value: "Urlop",
            name: "Urlop",
        },
        {
            value: "Muzyka",
            name: "Muzyka",
        },
        {
            value: "Programowanie",
            name: "Programowanie",
        },
    ];
    statusOptions: SelectOption[] = [
        {
            value: 1,
            name: "TO DO",
        },
        {
            value: 2,
            name: "IN PROGRESS",
        },
        {
            value: 3,
            name: "TESTING",
        },
        {
            value: 4,
            name: "DONE",
        },
    ];

    @task.Action
    ADD_NEW_TASK!: ({ name, category, description }: TaskToSend) => void;
    @modals.Action
    HIDE_MODAL!: ({ modalName }: { modalName: string }) => void;

    async submitTask() {
        await this.ADD_NEW_TASK({
            name: this.taskForm.name,
            category: this.taskForm.category,
            description: this.taskForm.description,
            status: this.taskForm.status,
        });
        this.HIDE_MODAL({
            modalName: this.modalName,
        });
    }
}
</script>

<style lang="scss">
.submit-bar {
    position: absolute;
    bottom: 8px;
    left: 0;
    width: 100%;
    height: 50px;
    &__button {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 24px;
        border-radius: 6px;
    }
}
.task-form {
    display: flex;
    flex-direction: column;
    width: 100%;
}
</style>
