/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{ts,tsx,js,jsx}", "./app/app.tsx"],
    theme: {
        borderRadius: {
            xs: "5px",
            sm: "10px",
        },
        fontSize: {
            xs: "12px",
            s: "14px",
            base: "16px",
            l: "18px",
            xl: "20px",
            xxl: "24px",
            "2xl": "32px",
            "3xl": "40px",
            "4xl": "48px",
        },
        colors: {
            primary: {
                black: "#000000",
                white: "#FFFFFF",
                darkPurple: "#421869",
                mediumPurple: "#491a74",
                purple: "#721cb8",
                lightPurple: "#995bd5",
                lighterPurple: "#bf99f2",
                fluoGreen: "#9cf945",
                lightGreen: "#8edf34",
                green: "#80c423",
                mediumGreen: "#509724",
                darkGreen: "#1f6924",
            },
            gray: {
                25: "#F9F9FB",
                50: "#EFF0F5",
                100: "#E0E1EB",
                200: "#C2C3D6",
                300: "#A3A6C2",
                400: "#8588AD",
                500: "#666A99",
                600: "#52557A",
                700: "#3D405C",
                800: "#292A3D",
                900: "#14151F",
            },
            otherPrimary: {
                25: "#F5F6FF",
                50: "#E5E7FF",
                100: "#CCD0FF",
                200: "#99A1FF",
                300: "#6672FF",
                400: "#3343FF",
                500: "#0014FF",
                600: "#0010CC",
                700: "#000C99",
                800: "#000866",
                900: "#000866",
            },
            accent: {
                50: "#EFE7FE",
                100: "#E0CFFC",
                200: "#C19EFA",
                300: "#A26EF7",
                400: "#833DF5",
                500: "#9B0DF2",
                600: "#500AC2",
                700: "#3C0891",
                800: "#280561",
                900: "#140330",
            },
            success: {
                25: "#F6FEFA",
                50: "#EDFDF4",
                100: "#C8F9DF",
                200: "#A3F5C9",
                300: "#7EF1B4",
                400: "#5AED9E",
                500: "#14B861",
                600: "#10934D",
                700: "#0C6E3A",
                800: "#084927",
                900: "#042513",
            },
            warning: {
                25: "#FEFAF6",
                50: "#FCF1E3",
                100: "#F5CFA3",
                200: "#F1BB7E",
                300: "#EDA85A",
                400: "#E99535",
                500: "#DC8118",
                600: "#B86B14",
                700: "#935610",
                800: "#6E400C",
                900: "#492B08",
            },
            danger: {
                50: "#FBE9EA",
                100: "#F7D4D5",
                200: "#F0A8AB",
                300: "#E87D81",
                400: "#E05256",
                500: "#DD3C41",
                600: "#AD1F23",
                700: "#82171B",
                800: "#660003",
                900: "#2B0809",
            },
            modal: {
                25: "rgba(0, 0, 0, 0.25)",
                600: "rgba(0, 0, 0, 0.6)",
            },
        },
        spacing: {
            5: "5px",
            10: "10px",
            12: "12px",
            15: "15px",
            16: "16px",
            20: "20px",
            25: "25px",
            30: "30px",
            35: "35px",
            40: "40px",
            45: "45px",
            50: "50px",
            55: "55px",
            60: "60px",
            65: "65px",
            70: "70px",
            75: "75px",
        },
        minHeight: {
            "1/2": "50%",
            "10/12": "80%",
        },
        maxHeight: {
            "1/2": "50%",
            "10/12": "80%",
        },
        extend: {
            boxShadow: {
                // input: "0px 0px 0px 4px rgba(0, 20, 255, 0.1)",
            },
            lineHeight: {
                tiny: "1.3",
                xl: "28px",
            },
            fontFamily: {
                title: ["Montserrat-SemiBold", "Inter var"],
                body: ["Montserrat-Regular", "Inter var"],
                light: ["Montserrat-Light", "Inter var"],
                bold: ["Montserrat-Bold", "Inter var"],
            },
        },
    },
    plugins: [],
};
