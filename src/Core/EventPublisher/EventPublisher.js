/*
 * This file is part of the EventBusJS library.
 *
 * Copyright (c) 2016-present LIN3S <info@lin3s.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author Mikel Tuesta <mikeltuesta@gmail.com>
 */

import EventSubscriberPriorityQueue from './../Priority/EventSubscriberPriorityQueue';

class EventPublisher {
  constructor() {
    if (this.constructor.name === 'EventPublisher') {
      throw new TypeError('Abstract class EventSubscriber cannot be instantiated directly.');
    }

    this.subscribers = new EventSubscriberPriorityQueue();
  }

  subscribe() {
    throw new TypeError('In order to extend EventPublisher class you must implement subscribe method.');
  }

  publish(anEvent) {
    this.prePublish(anEvent);

    const subscribers = this.subscribers.getSubscribers();
    subscribers.forEach((subscriber) => {
      subscriber.handle(anEvent);
    });
  }

  prePublish() {
    throw new TypeError('In order to extend EventPublisher class you must implement prePublish method.');
  }
}

export default EventPublisher;
