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

const onDomReady = (onReadySubscriber) => {
  EventPublisher.subscribe(
    new DOMReadyEventSubscriber(
      onReadySubscriber
    )
  );
};

const onDomLoaded = (onLoadedSubscriber) => {
  EventPublisher.subscribe(
    new DOMLoadedEventSubscriber(
      onLoadedSubscriber
    )
  );
};

export {onDomReady, onDomLoaded};
