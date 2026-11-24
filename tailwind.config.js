/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
    "./content/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "2rem",
        lg: "2.5rem",
        xl: "3rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      fontSize: {
        'xs': ['12px', { lineHeight: '16px' }],
        'sm': ['14px', { lineHeight: '20px' }],
        'base': ['16px', { lineHeight: '24px' }],
        'lg': ['20px', { lineHeight: '28px' }],
        'xl': ['24px', { lineHeight: '32px' }],
        '2xl': ['32px', { lineHeight: '40px' }],
        '3xl': ['48px', { lineHeight: '56px' }],
        '4xl': ['64px', { lineHeight: '72px' }],
        '5xl': ['80px', { lineHeight: '88px' }],
      },
      colors: {
        // Core enterprise brand tokens
        'navy-950': '#0B1B3A',
        'navy-900': '#0F244C',
        'navy-800': '#173366',
        'navy-700': '#1E4080',
        'blue-600': '#2563EB',
        'blue-700': '#1D4ED8',
        'cyan-400': '#22D3EE',
        'cyan-500': '#06B6D4',
        'cyan-600': '#0891B2',
        'amber-500': '#F59E0B', // Primary CTA only
        'amber-600': '#D97706',
        'amber-400': '#FBBF24',
        'bg-slate': '#F8FAFC',
        'text-slate': '#0F172A',
        'muted-slate': '#475569',
        'border-subtle': '#E2E8F0',
        'border-dark': 'rgba(255, 255, 255, 0.08)',
        
        // Semantic standard tokens
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        '2xl': '1rem', // 16px
        '3xl': '1.5rem', // 24px
      },
      boxShadow: {
        'enterprise': '0 1px 3px 0 rgba(11, 27, 58, 0.05), 0 1px 2px -1px rgba(11, 27, 58, 0.05)',
        'enterprise-md': '0 4px 6px -1px rgba(11, 27, 58, 0.08), 0 2px 4px -2px rgba(11, 27, 58, 0.08)',
        'enterprise-lg': '0 10px 15px -3px rgba(11, 27, 58, 0.08), 0 4px 6px -4px rgba(11, 27, 58, 0.08)',
        'enterprise-xl': '0 20px 25px -5px rgba(11, 27, 58, 0.1), 0 8px 10px -6px rgba(11, 27, 58, 0.1)',
        'cyan-glow': '0 0 20px -2px rgba(6, 182, 212, 0.35)',
        'amber-cta': '0 4px 14px 0 rgba(245, 158, 11, 0.39)',
      },
      maxWidth: {
        'content': '1280px',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
