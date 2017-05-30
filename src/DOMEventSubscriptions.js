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

import EventPublisher from './EventPublisher';
import DOMReadyEventSubscriber from './DOMReadyEventSubscriber';
import DOMLoadedEventSubscriber from './DOMLoadedEventSubscriber';
import WindowResizedEventSubscriber from './WindowResizedEventSubscriber';
import Priority from './Priority/Priority';

const onDomReady = (onReadyCallback, priority) => {
  const domReadyEventSubscriber = new DOMReadyEventSubscriber(
    onReadyCallback,
    new Priority(priority)
  );

  EventPublisher.subscribe(domReadyEventSubscriber);

  return domReadyEventSubscriber;
};

const onDomLoaded = (onLoadedCallback, priority) => {
  const domLoadedEventSubscriber = new DOMLoadedEventSubscriber(
    onLoadedCallback,
    new Priority(priority)
  );

  EventPublisher.subscribe(domLoadedEventSubscriber);

  return domLoadedEventSubscriber;
};

const onWindowResized = (onWindowResizedCallback, priority) => {
  const windowResizedEventSubscriber = new WindowResizedEventSubscriber(
    onWindowResizedCallback,
    new Priority(priority)
  );

  EventPublisher.subscribe(windowResizedEventSubscriber);

  return windowResizedEventSubscriber;
};

export {onDomReady, onDomLoaded, onWindowResized};
