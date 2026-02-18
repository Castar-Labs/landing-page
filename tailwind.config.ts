import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0A1A1A',
      },
      backgroundImage: {
        'grid-teal': "linear-gradient(rgba(20,184,166,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(20,184,166,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
    },
  },
  plugins: [],
}

export default config
