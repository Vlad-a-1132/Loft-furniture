/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        "gray-light": "var(--gray-light)",
        "gray-medium": "var(--gray-medium)",
        "gray-dark": "var(--gray-dark)",
        error: "var(--error)",
        success: "var(--success)",
      },
      fontFamily: {
        sans: ["var(--font-roboto)", "sans-serif"],
        playfair: ["var(--font-playfair)", "serif"],
        bwgradual: ["BwGradual", "sans-serif"],
      },
      backgroundColor: {
        "oakame-white": "var(--color-white)",
      },
    },
  },
  plugins: [],
}; 