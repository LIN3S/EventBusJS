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

import Event from './Event';
import EventPublisher from './EventPublisher';
import EventSubscriber from './EventSubscriber';
import {onDomReady, onDomLoaded} from './DOMEventSubscriptions';
import {listenDomReady, listenDomLoaded} from './DOMEventPublishers';

listenDomReady();
listenDomLoaded();

export {
  Event,
  EventPublisher,
  EventSubscriber,
  onDomReady,
  onDomLoaded
}
