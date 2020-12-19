import User from "./users";
import { Task, TaskToSend } from "./tasks";

interface RegistrationForm {
    username: string;
    email: string;
    password: string;
}

interface LoginForm {
    username: string;
    password: string;
}

interface HTMLForm {
    username: string;
    email: string;
    password: string;
    retypedPassword: string;
}

interface LogInResult {
    user: User;
    token: string;
}

export { User, Task, TaskToSend, HTMLForm, RegistrationForm, LoginForm, LogInResult };
