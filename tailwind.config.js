/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dusty-pink': '#D98C9A',
        'muted-red': '#B5525C',
        'washed-blue': '#6F8FAF',
        'navy': '#1F2A44',
        'cream': '#F6F1EA',
        'light-gray': '#D9D9D9',
        'ink': '#1A1A1A',
        'tape-yellow': '#F2E8C6',
        'paper-warm': '#EDE8DF',
        'paper-light': '#FAF7F2',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'hand': ['Caveat', 'cursive'],
      },
      rotate: {
        '1': '1deg',
        '2': '2deg',
        '3': '3deg',
        '-1': '-1deg',
        '-2': '-2deg',
        '-3': '-3deg',
        '-4': '-4deg',
        '4': '4deg',
      },
      backgroundImage: {
        'paper-texture': "url('/textures/paper.svg')",
        'dots': "radial-gradient(circle, #1A1A1A08 1px, transparent 1px)",
        'lines': "repeating-linear-gradient(transparent, transparent 24px, #1A1A1A08 24px, #1A1A1A08 25px)",
      },
      backgroundSize: {
        'dots-sm': '20px 20px',
        'lines-sm': '100% 25px',
      },
      boxShadow: {
        'polaroid': '0 3px 6px rgba(0,0,0,0.12), 0 1px 3px rgba(0,0,0,0.10)',
        'card': '2px 3px 8px rgba(0,0,0,0.10)',
        'pin': '1px 1px 4px rgba(0,0,0,0.25)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        }
      }
    },
  },
  plugins: [],
}
