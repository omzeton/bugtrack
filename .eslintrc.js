module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    extends: ["@nuxtjs/eslint-config-typescript", "plugin:nuxt/recommended"],
    plugins: [],
    rules: {
        quotes: ["error", "never"],
        semi: [1, "always"],
        indent: ["error", 4],
        "vue/html-indent": ["error", 4],
        "comma-dangle": [
            "error",
            {
                arrays: "never",
                objects: "never",
                imports: "never",
                exports: "never",
                functions: "never",
            },
        ],
        "import/extensions": ["error", "ignorePackages", { vue: "always" }],
    },
};
