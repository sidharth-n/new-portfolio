/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        "dark-depth": "#000000",
        "dark-surface": "#111111",
        "dark-elevated": "#1A1A1A",
        "primary-mint": "#00FFA3",
        "secondary-slate": "#94A3B8",
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
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Poppins", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      fontSize: {
        hero: ["3.815rem", { lineHeight: "1.1", letterSpacing: "-0.03em" }],
        section: ["2.359rem", { lineHeight: "1.1", letterSpacing: "-0.03em" }],
        subheading: [
          "1.458rem",
          { lineHeight: "1.3", letterSpacing: "-0.01em" },
        ],
        body: ["1rem", { lineHeight: "1.6", letterSpacing: "0.01em" }],
        secondary: ["0.878rem", { lineHeight: "1.6" }],
        caption: ["0.694rem", { lineHeight: "1.6" }],
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(135deg, #2E6AFF 0%, #36EBCA 100%)",
        "dark-depth": "linear-gradient(180deg, #0F1A42 0%, #0A0F29 100%)",
        glassy:
          "linear-gradient(120deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 100%)",
      },
    },
  },
  plugins: [],
}
