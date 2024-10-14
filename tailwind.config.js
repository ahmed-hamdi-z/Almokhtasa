/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGreen1: '#31B8B1',
        customGreen2: '#5AD3CC',
      },
      spacing: {
        '56.25%': '56.25%', // 16:9 aspect ratio
      },
      backgroundImage: {
        'choose': "url('/images/choose.svg')",
        'footer': "url('/images/footer.svg')",
        'about': "url('/images/about.svg')",
        'services-hero': "url('/images/services-hero.png')",
        'gradient-nav': 'linear-gradient(90deg, #31B8B1 0%, #5AD3CC 100%)',
      },
    },
  },
  plugins: [],
}

