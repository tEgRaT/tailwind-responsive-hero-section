/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './*.js',
        './*.css',
        '*.html',
    ],
    theme: {
        fontFamily: {
            sans: ['Nunito', 'sans-serif'],
            display: ['Nunito', 'sans-serif'],
            body: ['Nunito', 'sans-serif'],
        },
        extend: {
            colors: {
                primary: '#EA755E',
                secondary: '#BD675F',
            },
        },
    },
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
    ],
}
