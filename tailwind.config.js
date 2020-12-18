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
                black1: "#000000",
                black2: "#0e141b",
                black3: "#101821",
                white1: "#ffffff",
                white2: "#fbf8f7",
                white3: "#dddddd",
            },
        },
    },
};
