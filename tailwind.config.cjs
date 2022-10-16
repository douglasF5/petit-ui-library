/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    fontSize: {
      'heading-L': 32,
      'heading-M': 24,
      'heading-S': 20,
      'base-L': 18,
      'base-M': 16,
      'base-S': 14,
    },
    colors: {
      //BG
      'background': "#121214",
      'surface-primary': "#26262B",
      //ACCENT
      'accent-primary': "#72DAD6",
      'accent-over': "#40BAB4",
      'accent-surface': "rgba(114, 218, 214, 0.08)",
      'accent-surface-over': "rgba(114, 218, 214, 0.12)",
      'on-accent': "#121214",
      //OUTLINE
      'outline-primary': "#414149",
      'outline-secondary': "#60606C",
      'outline-accent-primary': "rgba(18, 18, 20, 0.45)",
      'outline-accent-secondary': "rgba(114, 218, 214, 0.12)",
      'focus-ring': "rgba(114, 218, 214, 0.2)",
      //ON SURFACE
      'on-surface-primary': "#FFFFFF",
      'on-surface-secondary': "#9191A1",
      'on-surface-tertiary': "#808093",
      //EXTRA
      'transparent': 'transparent'
    },
    extend: {
      fontFamily: {
        inter: 'Inter'
      }
    },
  },
  plugins: [],
};
