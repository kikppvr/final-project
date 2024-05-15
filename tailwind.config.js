/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
   theme: {
      extend: {
         fontFamily: {
            sans: ['Poppins', 'sans-serif'],
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
      },
   },
   plugins: [],
};
