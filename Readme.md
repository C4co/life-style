<h1 align='center'> 
  <img width=100 src="https://dl.dropboxusercontent.com/s/3it7i9rhuopkk7y/lifestyle-logo.png?dl=0">
</h1>

# Lifestyle

[![Build Status](https://travis-ci.org/C4co/lifestyle.svg?branch=master)](https://travis-ci.org/C4co/lifestyle)

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
$ rm -rf git && git init
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

Create a new page:
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

End to End
```
$ npm run test:e2e
```
