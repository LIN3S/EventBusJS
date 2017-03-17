/*
 * This file is part of the EventBusJS library.
 *
 * Copyright (c) 2016-present LIN3S <info@lin3s.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author Beñat Espiña <benatespina@gmail.com>
 * @author Mikel Tuesta <mikeltuesta@gmail.com>
 */

'use strict';

import Event from './Event';
import EventPublisher from './EventPublisher';
import EventSubscriber from './EventSubscriber';
import Priority from './Priority/Priority';
import {onDomReady, onDomLoaded, onWindowResized} from './DOMEventSubscriptions';
import {listenDomReady, listenDomLoaded, listenWindowResized} from './DOMEventPublishers';

listenDomReady();
listenDomLoaded();
listenWindowResized();

export {
  Event,
  EventPublisher,
  EventSubscriber,
  Priority,
  onDomReady,
  onDomLoaded,
  onWindowResized
}
