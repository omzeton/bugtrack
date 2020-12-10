import Component from "vue-class-component";

Component.registerHooks([
    // Apollo & Nuxt
    "apollo",
    "asyncData",
    "beforeRouteEnter",
    "beforeRouteLeave",
    "fetch",
    "head",
    "layout",
    "middleware",
    "scrollToTop",
    "transition",
    "validate",
]);

export default Component;
