// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ["Pacifico", "cursive"],
        playwrite: ['"Playwrite IE"', "cursive"],
        // lobster: ["Lobster", "cursive"],
        // sans: ["Montserrat", "sans-serif"],
        // title: ['"Cormorant Garamond"', "serif"],
        momo: ['"Momo Signature"', "cursive"],
        "google-sans-flex": ['"Google Sans Flex"', "sans-serif"],
        playfair: ['"Playfair Display"', "serif"],
        // cormorant: ['"Cormorant Garamond"', "serif"],
        // serif: ["Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
