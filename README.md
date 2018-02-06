# EventBusJS
> Simple but powerful event bus written in ES2015

[![npm version](https://img.shields.io/npm/v/lin3s-event-bus.svg?style=flat-square)](https://www.npmjs.com/package/lin3s-event-bus)
[![Build Status](http://img.shields.io/travis/LIN3S/EventBusJS/master.svg?style=flat-square)](https://travis-ci.org/LIN3S/EventBusJS)
[![NPM Status](http://img.shields.io/npm/dm/lin3s-event-bus.svg?style=flat-square)](https://www.npmjs.org/package/lin3s-event-bus)
[![devDependency Status](https://img.shields.io/david/LIN3S/EventBusJS.svg?style=flat-square)](https://david-dm.org/LIN3S/EventBusJS#info=dependencies)

## Installation
The recommended and the most suitable way to install is through *Yarn*:
```bash
$ yarn add lin3s-event-bus
```
or alternatively through *NPM*:
```bash
$ npm install --save lin3s-event-bus
```

## Basic Usage
```js
// your-dom-js-file.js

import {onDomReady, onDomLoaded, onWindowResized} from 'lin3s-event-bus';

const onReady = (domReadyEvent) => {
  console.log('DOM is ready!');
};

const onLoaded = (domLoadedEvent) => {
  console.log('window is loaded!');
};

const onResized = (windowResizedEvent) => {
  const
    newWindowHeight = windowResizedEvent.windowWidth,
    newWindowWidth = windowResizedEvent.windowWidth;

  console.log('window is resized!', newWindowWidth, newWindowHeight);
};

onDomReady(onReady);
onDomLoaded(onLoaded);
onWindowResized(onResized);
```

## onNodeAdded

This helper method will subscribe to the *NodeAddedObserver* for DOM injection lookups. Each time a 
`css selector`-matching DOM node is added to the document's body, your passed callback wil be called. In other words, 
you will be notified if a DOM node is injected into the document's body and your provided `css selector` matches that 
DOM node.

This is really helpful for defining a component's behaviour independently of the time of the component being added to 
the page. For example, if we want to trigger some logic, or initialize a component after being injected to the DOM 
dinamically.

For instance:

```js
// your-dom-js-file.js

import {onDomReady, onNodeAdded} from 'lin3s-event-bus';
import MyComponent from './MyComponent';

const LOOKUP_CSS_SELECTOR = '.js-my-component';

const initMyComponent = (domNode) => {
  const myComponent = new MyComponent(domNode);
  
  // Whatever...
};

const onReady = () => {
  const myComponents = document.querySelectorAll(LOOKUP_CSS_SELECTOR);
  
  myComponents.forEach(myComponent => initMyComponent(myComponent));
  
  // `rootNode` is the `document` by default.
  onNodeAdded({selector: LOOKUP_CSS_SELECTOR, rootNode: document}, nodeAddedEvent => {
    nodeAddedEvent.nodes.forEach(myComponentNode => initMyComponent(myComponentNode));
  });
};

onDomReady(onReady);
```

## Unsubscribing a subscriber
In the following example we are showing how to unsubscribe a previously subscribed subscriber. Every shortcut method 
returns the associated subscriber, so we can unsubscribe it later on via the LifeTimeEventPublisher or the 
OneTimeEventPublisher.
```js
// your-dom-js-file.js

import {onWindowResized, LifeTimeEventPublisher} from 'lin3s-event-bus';

const onResized = (windowResizedEvent) => {
  const
    newWindowHeight = windowResizedEvent.windowWidth,
    newWindowWidth = windowResizedEvent.windowWidth;

  console.log('window is resized!', newWindowWidth, newWindowHeight);
};

const windowResizedSubscriber = onWindowResized(onResized);

// later on

LifeTimeEventPublisher.unsubscribe(windowResizedSubscriber);
```

## Usage with priorities
In the following example there are two modules that are listening the `WindowResizedEvent` event, but the `module-b.js`
is listening the event with higher priority than the `module-a.js` so, the `module-b.js`'s onResized subscriber
always is executed before the `module-a.js`'s subscriber.
```js
// module-a.js

import {onWindowResized} from 'lin3s-event-bus';

const onResized = (windowResizedEvent) => {
  // This will be called after module-a.js onResized callback

  const
    newWindowHeight = windowResizedEvent.windowWidth,
    newWindowWidth = windowResizedEvent.windowWidth;

  console.log('Module A - window is resized!', newWindowWidth, newWindowHeight);
};

onWindowResized(onResized, 0);
```
```js
// module-b.js

import {onWindowResized} from 'lin3s-event-bus';

const onResized = (windowResizedEvent) => {
  // This will be called before module-b.js onResized callback

  const
    newWindowHeight = windowResizedEvent.windowWidth,
    newWindowWidth = windowResizedEvent.windowWidth;

  console.log('Module B - window is resized!', newWindowWidth, newWindowHeight);
};

onWindowResized(onResized, 1);
```

## Extending the EventBus - Custom Events

In order to extend the `Core.Event` and publish/subscribe to them, you must firstly implement your custom Event:

```js
// CustomEvent module

import {Core} from 'lin3s-event-bus';

class CustomEvent extends Core.Event {
  
  static NAME = 'YOUR_CUSTOM_EVENT';
  
  constructor(payloadObject) {
    super(CustomEvent.NAME);

    this.payloadObject = payloadObject;
  }
}

export default CustomEvent;
```

After implementing `CustomEvent` class, you should code the custom `EventSubscriber`. Using the previously defined 
`CustomEvent` custom event:

```js
// CustomEventSubscriber module

import {Core} from 'lin3s-event-bus';
import CustomEvent from './CustomEvent';

class CustomEventSubscriber extends Core.EventSubscriber {
  constructor(aCallback, aPriority) {
    super(aCallback, aPriority);
  }

  isSubscribedTo(anEvent) {
    // You can define your own custom validation logic. But at least, the event's name must match.
    return anEvent.getName() === event.getName();
  }
}

export default CustomEventSubscriber;
```

Finally, you should publish the `CustomEvent` and subscribe to the `CustomEvent`. If your event will be published 
more than once you should publish it through the `LifeTimeEventPublisher` instance. Otherwise, if you need to publish 
the event just once (for example, a `ComponentHasBeenInitializedEvent`), you should publish it through 
the `OneTimeEventPublisher` instance. 

Publishing:

```js
// Publishing the CustomEvent

import {Core} from 'lin3s-event-bus';
// or
import {LifeTimeEventPublisher} from 'lin3s-event-bus';
import {OneTimeEventPublisher} from 'lin3s-event-bus';

import CustomEvent from './CustomEvent';

const payload = {
  // ...
};

const customEvent = new CustomEvent(payload);

Core.LifeTimeEventPublisher.publish(customEvent);
Core.OneTimeEventPublisher.publish(customEvent);
// or
LifeTimeEventPublisher.publish(customEvent);
OneTimeEventPublisher.publish(customEvent);
```

Subscribing:
```js
// Subscribing to the CustomEvent

import {Core} from 'lin3s-event-bus';
// or
import {LifeTimeEventPublisher} from 'lin3s-event-bus';
import {OneTimeEventPublisher} from 'lin3s-event-bus';

import CustomEventSubscriber from './CustomEventSubscriber';

const customEventSubscriber = new CustomEventSubscriber((customEventInstance) => {
  const payloadObject = customEventInstance.payloadObject;
  
  // Whatever...
});

Core.LifeTimeEventPublisher.subscribe(customEventSubscriber);
Core.OneTimeEventPublisher.subscribe(customEventSubscriber);
// or
LifeTimeEventPublisher.subscribe(customEventSubscriber);
OneTimeEventPublisher.subscribe(customEventSubscriber);
```

## Licensing Options
[![License](https://img.shields.io/badge/License-MIT-yellowgreen.svg?style=flat-square)](https://github.com/LIN3S/EventBusJS/blob/master/LICENSE)
