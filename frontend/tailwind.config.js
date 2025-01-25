/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
  
    extend: {
      colors: {
        customGreen1: '#31B8B1',
        customGreen2: '#5AD3CC',
        customGreen3: '#60D8D1',
        customGreen4: '#30B7B0',
      },
      spacing: {
        '56.25%': '56.25%', 
      },
      backgroundImage: {
        'choose': "url('/images/choose.svg')",
        'footer': "url('/images/footer.svg')",
        'about': "url('/images/about.svg')",
        'blog-hero': "url('/images/blog-hero.svg')",
        'contact': "url('/images/contact.svg')",
        'services-hero': "url('/images/services-hero.png')",
        'gradient-nav': 'linear-gradient(90deg, #31B8B1 0%, #5AD3CC 100%)',
        'footer-text': 'linear-gradient(90deg, #60D8D1 0%, #30B7B0 100%)',
        'stuff-text': 'linear-gradient(90deg, #FF8E01 0%, #E14108 100%)',
      },
      fontFamily: {
        monotype: ['Monotype Corsiva', "serif"],
        cairo: [ "Cairo", "sans-serif"]
      },
    },
  },
  plugins: [],
}

