interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    roles: string[];
    permissions: string[];
}

type Users = User[];

interface RegistrationForm {
    username: string;
    email: string;
    password: string;
}

interface LoginForm {
    email: string;
    password: string;
}

interface HTMLForm {
    username: string;
    email: string;
    password: string;
    retypedPassword: string;
}

export { User, Users, HTMLForm, RegistrationForm, LoginForm };
