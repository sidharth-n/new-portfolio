/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },
    extend: {
      colors: {
        // Premium dark palette
        "dark-depth": "#0A0A0F",
        "dark-surface": "#12121A",
        "dark-elevated": "#1A1A24",
        "dark-border": "#2A2A3A",
        // Primary accent - warm gold/amber
        "primary": {
          DEFAULT: "#F59E0B",
          light: "#FBBF24",
          dark: "#D97706",
          muted: "rgba(245, 158, 11, 0.15)",
        },
        // Secondary accent - cool blue
        "accent": {
          DEFAULT: "#3B82F6",
          light: "#60A5FA",
          dark: "#2563EB",
          muted: "rgba(59, 130, 246, 0.15)",
        },
        // Text colors
        "text": {
          primary: "#FFFFFF",
          secondary: "#A1A1AA",
          muted: "#71717A",
        },
        // Legacy support
        "primary-mint": "#F59E0B",
        "secondary-slate": "#A1A1AA",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        sans: ["'Space Grotesk'", "Inter", "system-ui", "sans-serif"],
        display: ["'Space Grotesk'", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
      fontSize: {
        // Premium typography scale
        "display-xl": ["4.5rem", { lineHeight: "1.05", letterSpacing: "-0.04em", fontWeight: "700" }],
        "display-lg": ["3.75rem", { lineHeight: "1.1", letterSpacing: "-0.03em", fontWeight: "700" }],
        "display": ["3rem", { lineHeight: "1.1", letterSpacing: "-0.025em", fontWeight: "600" }],
        "heading-xl": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "600" }],
        "heading-lg": ["1.875rem", { lineHeight: "1.25", letterSpacing: "-0.015em", fontWeight: "600" }],
        "heading": ["1.5rem", { lineHeight: "1.3", letterSpacing: "-0.01em", fontWeight: "600" }],
        "subheading": ["1.25rem", { lineHeight: "1.4", letterSpacing: "-0.005em", fontWeight: "500" }],
        "body-lg": ["1.125rem", { lineHeight: "1.6", fontWeight: "400" }],
        "body": ["1rem", { lineHeight: "1.6", fontWeight: "400" }],
        "body-sm": ["0.875rem", { lineHeight: "1.5", fontWeight: "400" }],
        "caption": ["0.75rem", { lineHeight: "1.5", fontWeight: "500" }],
        // Legacy
        hero: ["3.75rem", { lineHeight: "1.1", letterSpacing: "-0.03em" }],
        section: ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      boxShadow: {
        "glow": "0 0 20px rgba(245, 158, 11, 0.15)",
        "glow-lg": "0 0 40px rgba(245, 158, 11, 0.2)",
        "card": "0 4px 24px rgba(0, 0, 0, 0.4)",
        "card-hover": "0 8px 40px rgba(0, 0, 0, 0.5)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-primary": "linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)",
        "gradient-accent": "linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)",
        "gradient-dark": "linear-gradient(180deg, #12121A 0%, #0A0A0F 100%)",
        "gradient-card": "linear-gradient(180deg, rgba(26, 26, 36, 0.8) 0%, rgba(18, 18, 26, 0.9) 100%)",
        "noise": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "fade-in-down": "fadeInDown 0.6s ease-out forwards",
        "scale-in": "scaleIn 0.4s ease-out forwards",
        "slide-in-left": "slideInLeft 0.6s ease-out forwards",
        "slide-in-right": "slideInRight 0.6s ease-out forwards",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(245, 158, 11, 0.15)" },
          "50%": { boxShadow: "0 0 40px rgba(245, 158, 11, 0.3)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      transitionTimingFunction: {
        "smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
        "bounce": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
  plugins: [],
}
