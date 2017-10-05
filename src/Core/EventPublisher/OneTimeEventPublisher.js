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

import EventPublisher from './EventPublisher';

class OneTimeEventPublisher extends EventPublisher {
  constructor() {
    super();

    this.registeredEvents = [];
  }

  subscribe(aSubscriber) {
    const subscriberAssociatedEvent = this.registeredEvents.find(registeredEvent => aSubscriber.isSubscribedTo(registeredEvent));

    if (subscriberAssociatedEvent !== undefined) {
      aSubscriber.handle(subscriberAssociatedEvent);
    } else {
      this.subscribers.push(aSubscriber);
    }
  }

  prePublish(anEvent) {
    this.registeredEvents.push(anEvent);
  }
}

const instance = new OneTimeEventPublisher();

export default instance;
