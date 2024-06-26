import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--ru-border))",
        input: "hsl(var(--ru-input))",
        ring: "hsl(var(--ru-ring))",
        background: "hsl(var(--ru-background))",
        foreground: "hsl(var(--ru-foreground))",
        primary: {
          DEFAULT: "hsl(var(--ru-primary))",
          foreground: "hsl(var(--ru-primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--ru-secondary))",
          foreground: "hsl(var(--ru-secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--ru-destructive))",
          foreground: "hsl(var(--ru-destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--ru-muted))",
          foreground: "hsl(var(--ru-muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--ru-accent))",
          foreground: "hsl(var(--ru-accent-foreground))",
        },
      },
    },
  },
  plugins: [],
};
export default config;
