/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
   theme: {
      extend: {
         fontFamily: {
            sans: ['Open Sans', 'sans-serif'],
         },
         fontSize: {
            10: "10px",
            12: "12px",
            14: "14px",
            16: "16px",
            18: "18px",
            20: "20px",
            22: "22px",
            24: "24px",
            26: "26px",
            28: "28px",
            32: "32px",
            40: "40px",
         },
         screens: {
            'xxs': '320px',   // Mini-mobile devices
            'xs': '375px',    // Mobile devices
            'sm': '640px',    // Small devices
            'md': '768px',    // Tablets
            'lg': '1024px',   // Large devices
            'xl': '1280px',   // Extra large devices
            '2xl': '1440px',  // Larger devices
            '3xl': '1920px',  // Largest devices
         },
         colors: {
            'primary': '#91C788',
            'secondary': '#FF8473',
            'brown': '#573926',

         }
      },
   },
   plugins: [],
};
