// https://www.postcss.parts/

module.exports = {
  plugins: [
    require('precss'),
    require("postcss-color-function"),
    require('autoprefixer')({ browsers: ['last 20 versions'] }),
    require('rucksack-css')
  ]
}