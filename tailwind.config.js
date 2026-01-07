/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./_layouts/**/*.html",
    "./_includes/**/*.html",
    "./_posts/**/*.md",
    "./*.html",
    "./*.md"
  ],
  theme: {
    extend: {
      colors: {
        'bg': '#ffffff',
        'text': '#121212',
        'muted': '#5a5a5a',
        'hairline': '#e9e9e9',
        'soft': '#f7f7f7',
        'link': '#0b57d0',
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      maxWidth: {
        'container': '860px',
      },
      spacing: {
        '6': '6px',
        '10': '10px',
        '14': '14px',
        '18': '18px',
        '22': '22px',
        '26': '26px',
        '28': '28px',
        '40': '40px',
        '80': '80px',
      },
      lineHeight: {
        'reading': '1.65',
      },
      letterSpacing: {
        'tight': '-0.02em',
        'normal': '-0.01em',
        'wide': '0.12em',
      },
      screens: {
        'lg': '900px',
      },
    },
  },
  plugins: [],
}

