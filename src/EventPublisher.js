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

class EventPublisher {
  constructor() {
    this.id = 0;
    this.subscribers = {};
  }

  subscribe(aSubscriber) {
    let id = this.id;

    this.subscribers[id] = aSubscriber;
    this.id++;

    return id;
  }

  unsubscribe(aSubscriberId) {
    this.subscribers.removeProperty(aSubscriberId);
  }

  publish(anEvent) {
    for (let subscriber in this.subscribers) {
      if (this.subscribers[subscriber].isSubscribedTo(anEvent)) {
        this.subscribers[subscriber].handle(anEvent);
      }
    }
  }
}

const instance = new EventPublisher();

export default instance;
