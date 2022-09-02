/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
  },
    plugins: [
      require("daisyui"),
      require('flowbite/plugin')
  ],
}
