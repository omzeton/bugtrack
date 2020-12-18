interface User {
    _id: string;
    username: string;
    email: string;
    password: string;
}

type Users = User[];

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

interface Task {
    name: string;
    category: string;
    description: string;
    status: number;
}

interface Column {
    name: string;
    tasks: Task[];
}

export { User, Users, HTMLForm, RegistrationForm, LoginForm, LogInResult, Task, Column };
