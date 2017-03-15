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

import EventPublisher from './EventPublisher';
import DOMReadyEventSubscriber from './DOMReadyEventSubscriber';
import DOMLoadedEventSubscriber from './DOMLoadedEventSubscriber';
import WindowResizedEventSubscriber from './WindowResizedEventSubscriber';
import Priority from './Priority/Priority';

const onDomReady = (onReadyCallback, priority) => {
  EventPublisher.subscribe(
    new DOMReadyEventSubscriber(
      onReadyCallback,
      new Priority(priority)
    )
  );
};

const onDomLoaded = (onLoadedCallback, priority) => {
  EventPublisher.subscribe(
    new DOMLoadedEventSubscriber(
      onLoadedCallback,
      new Priority(priority)
    )
  );
};

const onWindowResized = (onWindowResizedCallback, priority) => {
  EventPublisher.subscribe(
    new WindowResizedEventSubscriber(
      onWindowResizedCallback,
      new Priority(priority)
    )
  );
};

export {onDomReady, onDomLoaded, onWindowResized};
