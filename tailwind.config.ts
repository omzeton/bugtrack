module.exports = {
    plugins: [require("@tailwindcss/custom-forms")],
    theme: {
        extend: {
            fontFamily: {
                roboto: ["Roboto"],
                nunito: ["Nunito"],
            },
        },
        colors: {
            "super-green": "#0dff49",
        },
    },
};
