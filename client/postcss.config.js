const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss')('./tailwind.config.js');
const postcssPresetEnv = require('postcss-preset-env')({ stage: 0 });

module.exports = {
  plugins: [
    postcssPresetEnv,
    tailwindcss,
    autoprefixer,
  ],
};