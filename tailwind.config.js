/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#030014",
                primary: "#ff3b3b",
                secondary: "#ff7b00",
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            animation: {
                'glow': 'glow 2s ease-in-out infinite alternate',
            },
            keyframes: {
                glow: {
                    '0%': { boxShadow: '0 0 5px #ff3b3b, 0 0 10px #ff3b3b' },
                    '100%': { boxShadow: '0 0 20px #ff3b3b, 0 0 30px #ff7b00' },
                }
            }
        },
    },
    plugins: [],
}
