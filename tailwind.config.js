/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // Primary colors
        Softred: "hsl(7, 99%, 70%)",
        Yellow: "hsl(51, 100%, 49%)",
        Darkdesaturatedcyan: "hsl(167, 40%, 24%)",
        Darkblue: "hsl(198, 62%, 26%)",
        Darkmoderatecyan: "hsl(168, 34%, 41%)",
        // Neutral colors
        Verydarkdesaturatedblue: "hsl(212, 27%, 19%)",
        Verydarkgrayishblue: "hsl(213, 9%, 39%)",
        Darkgrayishblue: "hsl(232, 10%, 55%)",
        Grayishblue: "hsl(210, 4%, 67%)",
        White: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        fraunces: ["Fraunces", "serif"],
      },
      backgroundImage: {
        imageheader: "URL('/images/desktop/image-header.jpg')",
        photography: "URL('/images/desktop/image-photography.jpg')",
        gdesign: "URL('/images/desktop/image-graphic-design.jpg')",
      },
    },
  },
  plugins: [],
};
