module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'account-svg': "url('./assets/svgs/happy_music.svg')",
        'genre-card-svg': "url('./assets/svgs/compose.svg')",
        'placeholder-img': "url('./assets/images/hero3.jpg')",
        'no-image': "url('./assets/svgs/no-image.svg')",
      },
      colors: {
        'primary': '#fcb363',
      },
      borderColor: {
        'primary': '#fcb363',
      },
      backgroundColor: {
        'primary': '#fcb363',
        'dark-100': 'rgba(0,0,0,0.1)',
        'dark-200': 'rgba(0,0,0,0.2)',
        'dark-300': 'rgba(0,0,0,0.3)',
        'dark-400': 'rgba(0,0,0,0.4)',
        'dark-500': 'rgba(0,0,0,0.5)',
        'dark-600': 'rgba(0,0,0,0.6)',
        'dark-700': 'rgba(0,0,0,0.7)',
        'dark-800': 'rgba(0,0,0,0.8)',
        'dark-900': 'rgba(0,0,0,0.9)',
        'dark-full': 'rgba(0,0,0,1)',
      }
    },
  },
  plugins: [],
}