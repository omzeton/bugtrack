export default {
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: "Track the bugs! - BugTracker: Tool for devs and not only!",
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
            { hid: "description", name: "description", content: "" },
        ],
        link: [
            {
                rel: "icon",
                type: "image/x-icon",
                href: "/favicon.ico",
            },
            {
                rel: "preconnect",
                href: "https://fonts.gstatic.com",
            },
            {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap",
            },
            {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700;800;900&display=swap",
            },
        ],
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: ["~assets/scss/colors.scss"],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: ["~/plugins/vee-validate.js", "~/plugins/nuxt-class-component.js"],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        "@nuxt/typescript-build",
        "@nuxtjs/tailwindcss",
        "@nuxtjs/apollo",
    ],

    apollo: {
        clientConfigs: {
            default: {
                httpEndpoint: "http://localhost:7000/graphql",
            },
        },
    },

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/axios
        "@nuxtjs/axios",
        "@nuxtjs/style-resources",
        "@nuxtjs/apollo",
    ],

    styleResources: {
        scss: ["./assets/scss/*.scss"],
    },

    // Axios module configuration (https://go.nuxtjs.dev/config-axios)
    axios: {},

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
        transpile: ["vee-validate/dist/rules"],
    },
};
