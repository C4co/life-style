<p align='center'>
  <img width=100 src="https://dl.dropboxusercontent.com/s/3it7i9rhuopkk7y/lifestyle-logo.png?dl=0">
</p>

# Lifestyle

[![Build Status](https://travis-ci.org/C4co/lifestyle.svg?branch=master)](https://travis-ci.org/C4co/lifestyle)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Maintainability](https://api.codeclimate.com/v1/badges/ada996ffdfe68ab379cc/maintainability)](https://codeclimate.com/github/C4co/lifestyle/maintainability)

Lifestyle is a component based project to documentation your own styleguide.

[Live project](https://lifestyle.netlify.com/)

### Stack

+ [Webpack](https://webpack.js.org/)
+ [Preact](https://preactjs.com/)
+ [Babel](https://babeljs.io/)
+ [Jest](https://facebook.github.io/jest/)
+ [Codecept](http://codecept.io/)
+ [puppeteer](https://github.com/GoogleChrome/puppeteer)

### First Steps

```
$ git clone git@github.com:C4co/lifestyle.git myApp
$ cd myApp
$ rm -rf .git && git init
$ cp .env.example .env
$ npm init
```

### Dependencies

+ [Node](https://github.com/creationix/nvm)
+ [NPM](https://github.com/creationix/nvm)

### Install / Run

Install local packages:
```
$ npm install
```

Install global packages:
```
$ npm run globals
```

### Development

Run app:
```
$ npm start
```

### Build

```
$ npm run build
```

### Components

[See all component](https://github.com/C4co/lifestyle/wiki)

You can create a new page via comand line using:
```
$ npm run new:page YOUR-PAGE-NAME
```

### Tests

Unit tests:
```
$ npm test
```

Only once:
```
$ npm run test:once
```

End to End:
```
$ npm run test:e2e
```
---
Licensed under the ISC License | 2018 - C4co

