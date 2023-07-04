/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      primary: 'var(--font-orbitron)',
      secondary: 'var(--font-rajdhani)',
      tertiary: 'var(--font-aldrich)',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#ff3333',
      },
      backgroundImage: {
        site: "url('~/public/images/site-bg.jpg')",
        siteStar: "url('~/public/images/bg-stars.svg')",
        about: "url('~/public/images/raf.jpg')",
        services: "url('~/public/images/cart.jpg')",
      },
    },
  },
  plugins: [],
};
