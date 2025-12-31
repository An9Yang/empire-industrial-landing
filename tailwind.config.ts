import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary)',
          hover: 'var(--color-primary-hover)',
          light: 'var(--color-primary-light)',
        },
        accent: {
          yellow: 'var(--color-accent-yellow)',
          blue: 'var(--color-accent-blue)',
          gray: 'var(--color-accent-gray)',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
      },
      boxShadow: {
        'xs': 'var(--shadow-xs)',
        'sm': 'var(--shadow-sm)',
        'md': 'var(--shadow-md)',
        'lg': 'var(--shadow-lg)',
        'xl': 'var(--shadow-xl)',
      },
      borderRadius: {
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
        'xl': 'var(--radius-xl)',
      },
      transitionDuration: {
        'fast': 'var(--duration-fast)',
        'normal': 'var(--duration-normal)',
        'slow': 'var(--duration-slow)',
      },
      transitionTimingFunction: {
        'out': 'var(--ease-out)',
      },
      zIndex: {
        'dropdown': '10',
        'sticky': '20',
        'fixed': '30',
        'overlay': '40',
        'modal': '50',
        'toast': '60',
      },
    },
  },
  plugins: [],
}

export default config
