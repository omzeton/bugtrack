import { ObjectId } from "mongodb";

interface Task {
    _id: ObjectId | null;
    name: string;
    category: string;
    description: string;
    status: number;
}

interface TaskToSend {
    name: string;
    category: string;
    description: string;
    status: string;
}

export { Task, TaskToSend };
