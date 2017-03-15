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

const priorityMap = new WeakMap();

class Priority {
  constructor(priority = 0) {
    this.priority = priority;
  }

  get priority() {
    return priorityMap.get(this);
  }

  set priority(priority) {
    if (this.priority !== undefined) {
      throw new Error('You cannot set the priority during execution.');
    }

    if (!(typeof priority === "number" && isFinite(priority) && Math.floor(priority) === priority && priority >= 0)) {
      throw new TypeError('Priority must be a positive integer.');
    }

    priorityMap.set(this, priority);
  }
}

export default Priority;
