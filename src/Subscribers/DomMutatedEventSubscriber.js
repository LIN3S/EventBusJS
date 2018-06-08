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

import EventSubscriber from '../Core/EventSubscriber';
import DomMutatedEvent from './../Events/DomMutatedEvent';
import isDomNodeDescendantOfDomNode from './../Dom/isDomNodeDescendantOfDomNode';

class DomMutatedEventSubscriber extends EventSubscriber {
  constructor(aCallback, aPriority, selector, rootNode) {
    super(aCallback, aPriority);

    this.selector = selector;
    this.rootNode = rootNode;
  }

  isSubscribedTo(anEvent) {
    const event = new DomMutatedEvent();

    return anEvent.getName() === event.getName()
      && anEvent.selector === this.selector
      && (anEvent.target === this.rootNode || isDomNodeDescendantOfDomNode(anEvent.target, this.rootNode));
  }

  handle(domMutatedEvent) {
    if (!this.isSubscribedTo(domMutatedEvent)) {
      return;
    }

    this.callback(domMutatedEvent);
  }
}

export default DomMutatedEventSubscriber;
