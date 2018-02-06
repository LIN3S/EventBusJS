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

import Event from './../Core/Event';
import EventTypes from './EventTypes';

class NodeAddedEvent extends Event {

  nodes;
  rootNode;
  selector;

  constructor(nodes, rootNode, selector) {
    super(EventTypes.NODE_ADDED);

    this.nodes = nodes;
    this.rootNode = rootNode;
    this.selector = selector;
  }
}

export default NodeAddedEvent;
