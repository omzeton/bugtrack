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

interface LogInResponse {
    userExists: boolean;
    token: string;
}

export { User, Users, HTMLForm, RegistrationForm, LoginForm, LogInResponse };
