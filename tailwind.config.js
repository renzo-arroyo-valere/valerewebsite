/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        screens: {
            mbl: '360px',
            ...defaultTheme.screens,
        },
        extend: {
            fontFamily: {
                body: ['AvenirNextLTPro-Demi', 'sans-serif'],
                heading: ['AvenirNextLTPro-Bold', 'sans-serif'],
            },
            backgroundColor: {
                // 'custom-gray': '#33353b',
                'custom-gray': '#2D2F33',
            },
            fontPath: ['./src/assets/fonts'],
        },

        letterSpacing: {
            widest: '.25em',
        },
    },
    plugins: [],
}
