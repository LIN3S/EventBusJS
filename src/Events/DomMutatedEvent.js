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

import Event from './../Core/Event';
import EventTypes from './EventTypes';

class DomMutatedEvent extends Event {
  constructor({target, selector, addedNodes, removedNodes} = {}) {
    super(EventTypes.DOM_MUTATED);

    this.target = target;
    this.selector = selector;
    this.addedNodes = addedNodes;
    this.removedNodes = removedNodes;
  }
}

export default DomMutatedEvent;
