module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.svelte'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto': 'repeat(auto-fit, minmax(8rem, auto))'
      },
      gridTemplateRows: {
        'auto': 'repeat(auto-fit, 1fr)'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
