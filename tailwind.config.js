module.exports = {
    plugins: [require("@tailwindcss/custom-forms")],
    theme: {
        extend: {
            fontFamily: {
                roboto: ["Roboto"],
                nunito: ["Nunito"],
            },
            colors: {
                accent: "#0dff49",
                form: "#56606b",
            },
        },
    },
};
