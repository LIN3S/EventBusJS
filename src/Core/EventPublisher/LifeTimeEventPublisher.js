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

class LifeTimeEventPublisher extends EventPublisher {
  subscribe(aSubscriber) {
    this.subscribers.push(aSubscriber);
  }

  unsubscribe(aSubscriber) {
    this.subscribers.remove(aSubscriber);
  }

  prePublish(anEvent) {}
}

const instance = new LifeTimeEventPublisher();

export default instance;
