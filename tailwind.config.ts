import { Config } from 'tailwindcss';

module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
