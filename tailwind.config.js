/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        /* === CORE SEMANTIC === */
        background:  'var(--color-background)',   // custom near-black navy
        foreground:  'var(--color-foreground)',   // custom warm white
        border:      'var(--color-border)',        // warm white 8%
        input:       'var(--color-input)',         // warm white 6%
        ring:        'var(--color-ring)',          // gold-500 equivalent

        /* === CARD & POPOVER === */
        card: {
          DEFAULT:    'var(--color-card)',           // dark navy card
          foreground: 'var(--color-card-foreground)', // warm white
        },
        popover: {
          DEFAULT:    'var(--color-popover)',           // dark navy
          foreground: 'var(--color-popover-foreground)', // warm white
        },

        /* === MUTED === */
        muted: {
          DEFAULT:    'var(--color-muted)',            // dark muted
          foreground: 'var(--color-muted-foreground)', // slate-blue muted text
        },

        /* === PRIMARY (Gold) === */
        primary: {
          DEFAULT:    'var(--color-primary)',            // warm gold
          foreground: 'var(--color-primary-foreground)', // near-black on gold
        },

        /* === SECONDARY (Emerald) === */
        secondary: {
          DEFAULT:    'var(--color-secondary)',            // deep emerald
          foreground: 'var(--color-secondary-foreground)', // light mint
        },

        /* === DESTRUCTIVE === */
        destructive: {
          DEFAULT:    'var(--color-destructive)',            // red-900
          foreground: 'var(--color-destructive-foreground)', // red-100
        },

        /* === ACCENT === */
        accent: {
          DEFAULT:    'var(--color-accent)',            // deep emerald accent
          foreground: 'var(--color-accent-foreground)', // gold on emerald
        },

        /* === STATUS === */
        success: {
          DEFAULT:    'var(--color-success)',            // green-800
          foreground: 'var(--color-success-foreground)', // green-100
        },
        warning: {
          DEFAULT:    'var(--color-warning)',            // amber-800
          foreground: 'var(--color-warning-foreground)', // amber-100
        },
        error: {
          DEFAULT:    'var(--color-error)',            // red-800
          foreground: 'var(--color-error-foreground)', // red-100
        },

        /* === BRAND SURFACES === */
        surface: {
          1: 'var(--color-surface-1)', // card bg
          2: 'var(--color-surface-2)', // slightly lighter
          3: 'var(--color-surface-3)', // hover state
        },
      },

      fontFamily: {
        sans:  ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Inter', 'ui-serif', 'Georgia', 'serif'],
        mono:  ['Inter', 'ui-monospace', 'monospace'],
      },

      fontSize: {
        '10': ['10px', { lineHeight: '1.4', letterSpacing: '0.1em' }],
        '11': ['11px', { lineHeight: '1.4', letterSpacing: '0.08em' }],
      },

      letterSpacing: {
        'ultra': '0.2em',
        'wide-plus': '0.12em',
      },

      borderRadius: {
        'xl2': '1.5rem',
        'xl3': '2rem',
      },

      maxWidth: {
        '8xl': '88rem',
      },

      animation: {
        'marquee': 'marquee-scroll 50s linear infinite',
        'fade-in': 'fadeIn 0.8s ease forwards',
        'slide-up': 'slideUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },

      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%':   { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },

      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C8A96E 0%, #D4B97A 50%, #B89458 100%)',
        'dark-gradient': 'linear-gradient(180deg, #080C10 0%, #0D1219 100%)',
        'hero-vignette': 'radial-gradient(ellipse at center, transparent 40%, #080C10 100%)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};