/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'dark-bg': '#000000',
                'dark-card': '#1a1a1a',
                'light-text': '#ffffff',
                'primary-red': '#ff0000',
            }
        },
    },
    plugins: [],
}