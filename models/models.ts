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

export { HTMLForm, RegistrationForm, LoginForm };
