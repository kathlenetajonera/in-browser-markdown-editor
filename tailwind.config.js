/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                black: '#151619',
                white: '#feffff',
                orange: '#e56643',
                gray: '#2b2d31',
                'light-gray': '#f5f5f5',
                'lighter-gray': '#c1c4cb',
                'dark-gray': '#35393f',
                'gray-text': '#7c8187',
            },
        },
    },
    plugins: [],
};
