/*
 * This file is part of the EventBusJS library.
 *
 * Copyright (c) 2018-present LIN3S <info@lin3s.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author Ander Rodriguez <AnderRodriguezVarela@gmail.com>
 */

import onDomReady from './Subscriptions/DomReadyEventSubscription';
import onNodeAdded from './Subscriptions/NodeAddedEventSubscription';

const initComponent = (selector, callback) => {
  onDomReady(() => Array.from(document.querySelectorAll(selector), callback));
  onNodeAdded(selector, nodesAddedEvent => Array.from(nodesAddedEvent.nodes, callback));
};

export {
  initComponent
};
