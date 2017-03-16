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
import DOMReadyEvent from './DOMReadyEvent';
import DOMLoadedEvent from './DOMLoadedEvent';
import WindowResizedEvent from './WindowResizedEvent';
import debounce from 'lodash.debounce';

const listenDomReady = () => {
  document.addEventListener('DOMContentLoaded', () => {
    EventPublisher.publish(
      new DOMReadyEvent()
    );
  });
};

const listenDomLoaded = () => {
  window.addEventListener('load', () => {
    EventPublisher.publish(
      new DOMLoadedEvent()
    );
  });
};

const listenWindowResized = (debounceDelay = 200) => {
  window.addEventListener('resize', debounce(() => {
    EventPublisher.publish(
      new WindowResizedEvent(window.innerHeight, window.innerWidth)
    );
  }, debounceDelay));
};

export {listenDomReady, listenDomLoaded, listenWindowResized};
