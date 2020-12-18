<template>
    <ModalBase :modalName="modalName">
        <div class="task-form mt-32">
            <label for="task-name">
                Task name
            </label>
            <input v-model="taskForm.name" class="mb-8" type="text" name="task-name" placeholder="Task name" />
            <label for="task-name">
                Task category
            </label>
            <input v-model="taskForm.category" class="mb-8" type="text" name="task-category" placeholder="Task category" />
            <label for="task-category">
                Description
            </label>
            <textarea v-model="taskForm.description" class="mb-32" type="text" name="task-description" placeholder="Describe what needs to be done" />
        </div>
        <div class="submit-bar">
            <button class="submit-bar__button bg-accent px-4 font-roboto text-white accent-shadow accent-shadow-focus" @click="submitTask">Submit</button>
        </div>
    </ModalBase>
</template>

<script lang="ts">
import { Vue, Component, namespace } from "nuxt-property-decorator";
import ModalBase from "./ModalBase.vue";

const task = namespace("task");
const modals = namespace("modals");

interface TaskForm {
    name: string;
    category: string;
    description: string;
}

@Component({
    components: {
        ModalBase,
    },
})
export default class TaskModal extends Vue {
    taskForm: TaskForm = {
        name: "",
        category: "",
        description: "",
    };
    modalName: string = "taskModal";

    @task.Action
    ADD_NEW_TASK!: ({ name, category, description }: TaskForm) => void;
    @modals.Action
    HIDE_MODAL!: ({ modalName }: { modalName: string }) => void;

    async submitTask() {
        await this.ADD_NEW_TASK({
            name: this.taskForm.name,
            category: this.taskForm.category,
            description: this.taskForm.description,
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
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    box-shadow: 0px -8px 29px -10px rgba(0, 0, 0, 0.3);
    &__button {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 32px;
        border-radius: 6px;
    }
}
.task-form {
    display: flex;
    flex-direction: column;
}
</style>
