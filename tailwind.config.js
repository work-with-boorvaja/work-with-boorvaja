module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        surface: '#0b101f',
        soft: '#e7d7ff',
        vignette: '#0f172a',
      },
      boxShadow: {
        glow: '0 24px 80px rgba(139,92,246,0.20)',
        soft: '0 18px 50px rgba(15,23,42,0.28)',
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at 20% 20%, rgba(139,92,246,0.18), transparent 26%), radial-gradient(circle at 80% 20%, rgba(59,130,246,0.15), transparent 24%)',
      },
    },
  },
  plugins: [],
};
