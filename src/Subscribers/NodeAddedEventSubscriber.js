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
import isDomNodeDescendantOfDomNode from './../Dom/isDomNodeDescendantOfDomNode';

class NodeAddedEventSubscriber extends EventSubscriber {

  constructor(aCallback, aPriority, selector, rootNode) {
    super(aCallback, aPriority);

    this.selector = selector;
    this.rootNode = rootNode;
  }

  isSubscribedTo(anEvent) {
    const event = new NodeAddedEvent();

    return anEvent.getName() === event.getName()
      && this.selector === anEvent.selector
      && anEvent.nodes.every(node => isDomNodeDescendantOfDomNode(node, this.rootNode));
  }
}

export default NodeAddedEventSubscriber;
