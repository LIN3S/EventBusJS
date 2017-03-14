/*
 * This file is part of the EventBusJS library.
 *
 * Copyright (c) 2016 LIN3S <info@lin3s.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author Beñat Espiña <benatespina@gmail.com>
 * @author Mikel Tuesta <mikel@lin3s.com>
 */

'use strict';

import test from 'ava';
import 'babel-core/register';

import WindowResizedEventSubscriber from './../src/WindowResizedEventSubscriber';
import Event from './../src/Event';
import WindowResizedEvent from './../src/WindowResizedEvent';

test('it subscribes to handled event', (t) => {
  const
    windowResizedEventSubscriber = new WindowResizedEventSubscriber(() => {
      console.log('callback');
    }),
    windowResizedEvent = new WindowResizedEvent();

  windowResizedEventSubscriber.handle(windowResizedEvent);

  t.is(windowResizedEventSubscriber.isSubscribedTo(windowResizedEvent), true);
});

test('it does not subscribe to unhandled event', (t) => {
  const
    windowResizedEventSubscriber = new WindowResizedEventSubscriber(() => {
      console.log('callback');
    }),
    windowResizedEvent = new WindowResizedEvent(),
    otherEvent = new Event('OTHER_EVENT');

  windowResizedEventSubscriber.handle(windowResizedEvent);

  t.is(windowResizedEventSubscriber.isSubscribedTo(otherEvent), false);
});


