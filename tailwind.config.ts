import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#000000',
          900: '#030303',
          800: '#0A0A0A',
          700: '#141414',
          600: '#1F1F1F',
          500: '#2A2A2A',
        },
        vermilion: {
          DEFAULT: '#F04C1C',
          soft: '#ff6a3d',
          glow: 'rgba(240, 76, 28, 0.15)',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        serif: ['var(--font-newsreader)', 'serif'],
        mono: ['var(--font-jetbrains-mono)', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '60px 60px',
      },
      fontSize: {
        'display-1': ['clamp(3.25rem, 7vw, 7.25rem)', { lineHeight: '0.9', letterSpacing: '-0.04em' }],
        'display-2': ['clamp(2.15rem, 4.5vw, 4.8rem)', { lineHeight: '0.95', letterSpacing: '-0.035em' }],
        'display-3': ['clamp(1.4rem, 2.6vw, 2rem)', { lineHeight: '1.08', letterSpacing: '-0.025em' }],
      },
    },
  },
  plugins: [],
}

export default config
