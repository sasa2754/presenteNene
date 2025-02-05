import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        font: "var(--font)",
        fontPolaroid: "var(--fontPolaroid)",
        pink: "var(--pink)",
        button: "var(--button)",
        buttonHover: "var(--buttonHover)",
        polaroid: "var(--polaroid)",
      },
    },
  },
  plugins: [],
} satisfies Config;
