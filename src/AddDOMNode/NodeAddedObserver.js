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

'use strict';

import NodeAddedEvent from './NodeAddedEvent';
import NodeAddedEventSubscriber from './NodeAddedEventSubscriber';
import EventPublisher from './../EventPublisher';
import Priority from './../Priority/Priority';

class NodeAddedObserver {

  mutationObserver;
  subscribersSelectorClassNames;

  constructor() {
    this.subscribersSelectorClassNames = [];
    this.initMutationObserver();
  }

  initMutationObserver() {
    const
      targetNode = document.body,
      observerConfig = {
        childList: true,
        subtree: true
      };

    const MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
    this.mutationObserver = new MutationObserver(this.onNodeMutated.bind(this));
    this.mutationObserver.observe(targetNode, observerConfig);
  }

  subscribe(selectorClassName, onNodeAddedCallback, priority) {
    if (this.subscribersSelectorClassNames.find(subscriberSelectorClassName =>
      subscriberSelectorClassName === selectorClassName) !== undefined
    ) {
      return;
    }

    this.subscribersSelectorClassNames.push(selectorClassName);

    EventPublisher.subscribe(
      new NodeAddedEventSubscriber(
        onNodeAddedCallback,
        new Priority(priority),
        selectorClassName
      )
    );
  }

  onNodeMutated(mutations) {
    mutations.forEach(mutation =>
      Array.from(mutation.addedNodes)
        .forEach(node => {
          const nodeSelectorClassName = this.subscribersSelectorClassNames.filter(selectorClassName =>
            node.classList !== undefined && node.classList.contains(selectorClassName)
          );

          if (nodeSelectorClassName.length > 0) {
            EventPublisher.publish(
              new NodeAddedEvent(node, nodeSelectorClassName[0])
            );
          }
        })
    );
  }
}

const instance = new NodeAddedObserver();

export default instance;
