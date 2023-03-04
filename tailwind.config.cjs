/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "google-blue": "#4285f4",
        "google-red": "#db4437",
        "google-yellow": "#f4b400",
        "google-green": "#0f9d58",
        "twitter-blue": "#00acee",
        "dark-pink": "#C13584",
      },
    },
  },
  plugins: [],
};
