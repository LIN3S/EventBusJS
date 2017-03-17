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

'use strict';

class Priority {
  constructor(priority = 0) {
    if (!(typeof priority === "number" && isFinite(priority) && Math.floor(priority) === priority && priority >= 0)) {
      throw new TypeError('Priority must be a positive integer.');
    }

    const privatePriority = priority;

    this.getPriority = () => {
      return privatePriority;
    };
  }
}

export default Priority;
