/*
 * This file is part of the EventBusJS library.
 *
 * Copyright (c) 2016 LIN3S <info@lin3s.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author Mikel Tuesta <mikel@lin3s.com>
 */

'use strict';

class PriorityQueue {

  queue = [];
  isSorted = false;

  sort() {
    this.queue.sort((aSubscriber, anotherSubscriber) => {
      return anotherSubscriber.priority.priority - aSubscriber.priority.priority;
    });

    this.isSorted = true;
  }

  push(aSubscriber) {
    this.isSorted = false;
    this.queue.push(aSubscriber);
  }

  remove(aSubscriber) {
    this.isSorted = false;
    this.queue.splice(this.findIndex(subscriber => aSubscriber === subscriber), 1);
  }

  [Symbol.iterator]() {
    if (!this.isSorted) {
      this.sort();
    }

    let index = -1;

    return {
      next: () => {
        return {
          value: this.queue[++index],
          done: !(index in this.queue)
        }
      }
    };
  }
}

export default PriorityQueue;
