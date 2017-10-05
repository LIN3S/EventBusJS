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

import Priority from './Priority/Priority';

class EventSubscriber {
  constructor(aCallback, priority = new Priority()) {
    if (this.constructor.name === 'EventSubscriber') {
      throw new TypeError('Abstract class EventSubscriber cannot be instantiated directly.');
    }

    this.callback = aCallback;
    this.priority = priority;
  }

  handle(anEvent) {
    if (!this.isSubscribedTo(anEvent)) {
      return;
    }

    this.callback(anEvent);
  }

  isSubscribedTo(anEvent) {
    throw new TypeError('In order to extend EventSubscriber class you must implement isSubscribedTo method.');
  }
}

export default EventSubscriber;
