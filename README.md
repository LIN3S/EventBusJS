#EventBusJS
> Simple but powerful event bus written in ES2015

[![npm version](https://img.shields.io/npm/v/lin3s-event-bus.svg?style=flat-square)](https://www.npmjs.com/package/lin3s-event-bus)
[![Build Status](http://img.shields.io/travis/LIN3S/EventBusJS/master.svg?style=flat-square)](https://travis-ci.org/LIN3S/EventBusJS)
[![NPM Status](http://img.shields.io/npm/dm/lin3s-event-bus.svg?style=flat-square)](https://www.npmjs.org/package/lin3s-event-bus)
[![devDependency Status](https://img.shields.io/david/LIN3S/EventBusJS.svg?style=flat-square)](https://david-dm.org/LIN3S/EventBusJS#info=dependencies)

##Installation
The recommended and the most suitable way to install is through *Yarn*:
```bash
$ yarn add lin3s-event-bus
```
or alternatively through *NPM*:
```bash
$ npm install --save lin3s-event-bus
```
Also, you can install through *Bower*.
```bash
$ bower install --save lin3s-event-bus
```

##Usage
```js
// your-dom-js-file.js

import {onDomReady, onDomLoaded, onWindowResized} from 'lin3s-event-bus';

const onReady = (anEvent) => {
    console.log('DOM is ready!');
};

const onLoaded = (anEvent) => {
    console.log('window is loaded!');
};

const onResized = (anEvent) => {
    console.log('window is resized!');
};

onDomReady(onReady);
onDomLoaded(onLoaded);
onWindowResized(onResized);
```

##Licensing Options
[![License](https://img.shields.io/badge/License-MIT-yellowgreen.svg?style=flat-square)](https://github.com/LIN3S/EventBusJS/blob/master/LICENSE)
