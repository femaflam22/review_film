module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            keyframes: {
                updown: {
                    '0%, 100%': {
                        backgroundPosition: 'top'
                    },
                    '45%, 55%': {
                        backgroundPosition: 'bottom'
                    },
                }
            },
            animation: {
                slider: 'updown 25s linear infinite',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}