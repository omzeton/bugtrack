import { extend } from "vee-validate";
import { required, email, min } from "vee-validate/dist/rules";

extend("required", {
    ...required,
    message: "This field is required",
});

extend("email", {
    ...email,
    message: "Please input a valid email address",
});
extend("min", {
    ...min,
    message: "Password should be at least 5 characters long",
});
