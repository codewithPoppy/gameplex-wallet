module.exports = {
  darkMode: 'class',
  content: [
    "./renderer/src/**/*.{js,ts,jsx,tsx}",
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}