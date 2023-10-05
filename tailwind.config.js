/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                roboto: ['Roboto', ...defaultTheme.fontFamily.sans],
                'roboto-slab': [
                    'Roboto Slab',
                    ...defaultTheme.fontFamily.serif,
                ],
                'roboto-mono': ['Roboto Mono', ...defaultTheme.fontFamily.mono],
            },
            colors: {
                black: '#151619',
                white: '#feffff',
                orange: '#e56643',
                gray: '#2b2d31',
                'light-gray': '#f5f5f5',
                'lighter-gray': '#c1c4cb',
                'dark-gray': '#35393f',
                'gray-text': '#7c8187',
                sidebar: '#1d1f22',
            },
            translate: {
                sidebar: '15.625rem',
            },
            width: {
                sidebar: '15.625rem',
            },
        },
    },
    plugins: [],
};
