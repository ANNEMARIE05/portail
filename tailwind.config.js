/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
                century: ['"Century Gothic"', 'var(--font-sans)', 'sans-serif'],
            },
            colors: {
                primary: {
                    50: '#e8f5fc',
                    100: '#cce9f7',
                    200: '#99d3ef',
                    300: '#66bde7',
                    400: '#33a7df',
                    500: '#1399D6',
                    600: '#1084bd',
                    700: '#0d6f9e',
                    800: '#0a5a7e',
                    900: '#07455f',
                },
                brandDark: '#263C7E',
            },
            boxShadow: {
                'card': '0 1px 3px 0 rgb(0 0 0 / 0.06), 0 1px 2px -1px rgb(0 0 0 / 0.06)',
                'card-hover': '0 10px 40px -10px rgb(0 0 0 / 0.12), 0 4px 12px -4px rgb(0 0 0 / 0.08)',
                'glow': '0 0 40px -10px rgb(19 153 214 / 0.35)',
            },
            borderRadius: {
                'card': '1rem',
                'btn': '0.75rem',
            },
        },
    },
    plugins: [],
}
