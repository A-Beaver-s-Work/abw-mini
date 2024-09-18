/** @type {import('tailwindcss').Config} */
module.exports = {
  mode : 'jit',
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/public/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'proxima': ['Proxima Nova', 'sans-serif'],
      },

      fontSize: {
        base: '0.700rem', // Smaller base font size (14px)
        lg: '0.900rem', // Smaller base font size (14px)
      },

      colors: {
        'custom-yellow': '#f3c851',
        background: "var(--background)",
        foreground: "var(--foreground)",
        'creme': "#f2ecdb",
        'dark-green': '#036a36',
        'dark-creme': '#ece4cc',
      },
    },
  },
  plugins: [],
};
