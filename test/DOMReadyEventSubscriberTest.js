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

import DOMReadyEventSubscriber from '../src/Domain/Event/Dom/DOMReadyEventSubscriber';
import Event from '../src/Domain/Model/Core/Event';
import DOMReadyEvent from '../src/Domain/Model/Dom/DomReadyEvent';

test('it subscribes to handled event', (t) => {
  const
    domReadyEventSubscriber = new DOMReadyEventSubscriber(() => {
      console.log('callback');
    }),
    domReadyEvent = new DOMReadyEvent();

  domReadyEventSubscriber.handle(domReadyEvent);

  t.is(domReadyEventSubscriber.isSubscribedTo(domReadyEvent), true);
});

test('it does not subscribe to unhandled event', (t) => {
  const
    domReadyEventSubscriber = new DOMReadyEventSubscriber(() => {
      console.log('callback');
    }),
    domReadyEvent = new DOMReadyEvent(),
    otherEvent = new Event('OTHER_EVENT');

  domReadyEventSubscriber.handle(domReadyEvent);

  t.is(domReadyEventSubscriber.isSubscribedTo(otherEvent), false);
});


