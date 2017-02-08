/*
 * This file is part of the EventBusJS library.
 *
 * Copyright (c) 2016 LIN3S <info@lin3s.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author Beñat Espiña <benatespina@gmail.com>
 */

'use strict';

import test from 'ava';
import 'babel-core/register';

import DOMLoadedEventSubscriber from './../src/DOMLoadedEventSubscriber';
import Event from './../src/Event';
import DOMLoadedEvent from './../src/DOMLoadedEvent';

test('it subscribes to handled event', (t) => {
  const
    domLoadedEventSubscriber = new DOMLoadedEventSubscriber(() => {
      console.log('callback');
    }),
    domLoadedEvent = new DOMLoadedEvent();

  domLoadedEventSubscriber.handle(domLoadedEvent);

  t.is(domLoadedEventSubscriber.isSubscribedTo(domLoadedEvent), true);
});

test('it does not subscribe to unhandled event', (t) => {
  const
    domLoadedEventSubscriber = new DOMLoadedEventSubscriber(() => {
      console.log('callback');
    }),
    domLoadedEvent = new DOMLoadedEvent(),
    otherEvent = new Event('OTHER_EVENT');

  domLoadedEventSubscriber.handle(domLoadedEvent);

  t.is(domLoadedEventSubscriber.isSubscribedTo(otherEvent), false);
});


