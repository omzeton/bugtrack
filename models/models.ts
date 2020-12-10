interface Form {
    username: string;
    email: string;
    password: string;
    retypedPassword: string;
}

interface RegistrationForm {
    username: string;
    email: string;
    password: string;
}

interface LoginForm {
    email: string;
    password: string;
}

export { Form, RegistrationForm, LoginForm };
