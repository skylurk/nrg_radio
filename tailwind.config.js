/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",

    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'image' : "url('/threeladies.jpg')",
        'imageOne' : "url('/split.jpg')",
        'imageTwo' : "url('/splitT.jpg')",
        'imageThree' : "url('/webby.png')",
      }),
    },
  },
};
