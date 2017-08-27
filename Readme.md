# Webpack Init

[![Build Status](https://travis-ci.org/C4co/webpack-init.svg?branch=master)](https://travis-ci.org/C4co/webpack-init)

Initial configuration for webpack

Dependencies

+ [Node](https://github.com/creationix/nvm)
+ [NPM](https://github.com/creationix/nvm)

Install / Run

Install local packages: `$ npm install`

Install global packages: `$ npm run globals`

Run app: `$ npm start`

## Stack

### Code Quality/Review

+ [Standard JS](https://github.com/feross/standard)

### Build / Dev

+ [Webpack](https://webpack.github.io/)
+ [Browser Sync](https://www.browsersync.io/)
+ [Babel](https://babeljs.io/)

### Style

+ Autoprefix
+ [SASS Loader](http://sass-lang.com/)
+ [CSScomb](http://csscomb.com/)
+ [Postcss](https://www.postcss.parts/)
+ [Rucksack](https://simplaio.github.io/rucksack/)

Sort css: `$ csscomb src/`

### Test

+ [Jest (Unit)](https://facebook.github.io/jest/)

Run tests (watch): `$ npm tests`

Run tests once: `$ npm run tests:once`

+ [Codecept (e2e)](http://codecept.io/)

Install selenium drivers:  `$ selenium-standalone install`

Start selenium server: `$ selenium-standalone start`

Run tests: `$ npm run tests:e2e`

### Webpack Loaders

+ File loader
+ CSS loader
+ SASS loader

Licensed under the MIT License

2016 - C4co
