import Task from "./tasks";

export default interface User {
    _id: string;
    username: string;
    email: string;
    password: string;
    tasks: Task[];
}
