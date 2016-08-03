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

class EventSubscriber {
  constructor(aCallback) {
// Following code makes this class Abstract, but UglifyJS does not recognizes "new." operator yet.
//     if (new.target === Abstract) {
//       throw new TypeError('Cannot construct Abstract instances directly');
//     }

    this.callback = aCallback;
  }

  handle(anEvent) {
    return this.callback(anEvent);
  }

  isSubscribedTo(anEvent) {}
}

export default EventSubscriber;
