module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'sans-serif'], mono: ['JetBrains Mono', 'monospace'] },
      colors: {
        ink: { 900: '#020617', 950: '#01040f' },
        accent: { light: '#38bdf8', DEFAULT: '#0ea5e9' },
      }
    }
  }
};
