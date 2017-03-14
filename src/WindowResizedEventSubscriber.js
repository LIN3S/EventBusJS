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

import EventSubscriber from './EventSubscriber';
import WindowResizedEvent from './WindowResizedEvent';

class WindowResizedEventSubscriber extends EventSubscriber {
  constructor(aCallback) {
    super(aCallback);
  }

  isSubscribedTo(anEvent) {
    const event = new WindowResizedEvent();

    return anEvent.getName() === event.getName();
  }
}

export default WindowResizedEventSubscriber;
