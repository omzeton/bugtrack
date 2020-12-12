module.exports = {
    plugins: [require("@tailwindcss/custom-forms")],
    theme: {
        extend: {
            fontFamily: {
                roboto: ["Roboto", "sans-serif"],
                nunito: ["Nunito", "sans-serif"],
            },
        },
        colors: {
            "super-green": "#0dff49",
        },
    },
};
