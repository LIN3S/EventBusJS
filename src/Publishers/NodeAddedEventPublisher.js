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

import LifeTimeEventPublisher from './../Core/EventPublisher/LifeTimeEventPublisher';
import Priority from './../Core/Priority/Priority';
import NodeAddedEventSubscriber from './../Subscribers/NodeAddedEventSubscriber';
import NodeAddedEvent from './../Events/NodeAddedEvent';

class NodeAddedEventPublisher {

  isMutationObserverInitialized;
  mutationObserver;
  subscribersSelectorClassNames;

  constructor() {
    this.subscribersSelectorClassNames = [];
    this.isMutationObserverInitialized = false;
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

    this.isMutationObserverInitialized = true;
  }

  subscribe(selectorClassName, onNodeAddedCallback, priority) {
    if (this.subscribersSelectorClassNames.find(subscriberSelectorClassName =>
      subscriberSelectorClassName === selectorClassName) !== undefined
    ) {
      return;
    }

    this.subscribersSelectorClassNames.push(selectorClassName);

    const nodeAddedSubscriber = new NodeAddedEventSubscriber(
      onNodeAddedCallback,
      new Priority(priority),
      selectorClassName
    );

    LifeTimeEventPublisher.subscribe(nodeAddedSubscriber);

    if (!this.isMutationObserverInitialized) {
      this.initMutationObserver();
    }

    return nodeAddedSubscriber;
  }

  onNodeMutated(mutations) {
    mutations.forEach(mutation =>
      Array.from(mutation.addedNodes)
        .forEach(node => {
          const
            matchedNodesByClassName = this.getMatchedNodesByClassName(node),
            matchedClassNames = Object.keys(matchedNodesByClassName);

          if (matchedClassNames.length === 0) {
            return;
          }

          matchedClassNames.forEach(className =>
            LifeTimeEventPublisher.publish(new NodeAddedEvent(matchedNodesByClassName[className], className))
          );
        })
    );
  }

  getMatchedNodesByClassName(rootNode) {
    let matchedNodesByClassName = {};

    const getMatchedNodesBySelectorClassName = (rootNode) => {
      this.subscribersSelectorClassNames.forEach(selectorClassName => {
        if (rootNode.classList !== undefined && rootNode.classList.contains(selectorClassName)) {
          matchedNodesByClassName[selectorClassName] = matchedNodesByClassName[selectorClassName] !== undefined
            ? matchedNodesByClassName[selectorClassName].concat(rootNode)
            : [rootNode];
        }
      });

      Array.from(rootNode.childNodes).forEach(node => getMatchedNodesBySelectorClassName(node));
    };

    getMatchedNodesBySelectorClassName(rootNode);
    return matchedNodesByClassName;
  }
}

const instance = new NodeAddedEventPublisher();

export default instance;
