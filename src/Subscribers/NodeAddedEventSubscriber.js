/*
 * This file is part of the EventBusJS library.
 *
 * Copyright (c) 2016-present LIN3S <info@lin3s.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author Beñat Espiña <benatespina@gmail.com>
 * @author Mikel Tuesta <mikeltuesta@gmail.com>
 */

import EventSubscriber from './../Core/EventSubscriber';
import NodeAddedEvent from './../Events/NodeAddedEvent';

class NodeAddedEventSubscriber extends EventSubscriber {

  domSelectorClassName;

  constructor(aCallback, aPriority, domSelectorClassName) {
    super(aCallback, aPriority);

    this.domSelectorClassName = domSelectorClassName;
  }

  isSubscribedTo(anEvent) {
    const event = new NodeAddedEvent();

    return anEvent.getName() === event.getName() && this.domSelectorClassName === anEvent.domSelectorClassName;
  }
}

export default NodeAddedEventSubscriber;
