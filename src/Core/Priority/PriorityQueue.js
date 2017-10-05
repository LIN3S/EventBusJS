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

class PriorityQueue {
  constructor() {
    const queue = [];

    this.isSorted = true;

    this.sort = () => {
      queue.sort((aSubscriber, anotherSubscriber) => {
        return anotherSubscriber.priority.getPriority() - aSubscriber.priority.getPriority();
      });

      this.isSorted = true;
    };

    this.push = (aSubscriber) => {
      this.isSorted = false;
      queue.push(aSubscriber);
    };

    this.remove = (aSubscriber) => {
      const aSubscriberIndex = queue.indexOf(aSubscriber);
      if (aSubscriberIndex < 0) {
        return;
      }

      this.isSorted = false;
      queue.splice(aSubscriberIndex, 1);
    };

    this.getSubscribers = () => {
      if (!this.isSorted) {
        this.sort();
      }

      return [...queue];
    };
  }
}

export default PriorityQueue;
