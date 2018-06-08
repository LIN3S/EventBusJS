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

import LifeTimeEventPublisher from './../Core/EventPublisher/LifeTimeEventPublisher';
import DomMutatedEventSubscriber from './../Subscribers/DomMutatedEventSubscriber';
import DomMutatedEvent from './../Events/DomMutatedEvent';

const filterNodes = ({nodes, target, rootNode, selector}) => {
  let nodesToFilter = [];

  nodes.forEach(node => {
    if (typeof node.querySelectorAll === 'function' && Array.from(node.childNodes).length > 0) {
      nodesToFilter = [...nodesToFilter, ...Array.from(node.querySelectorAll(selector))];
    } else {
      nodesToFilter = [...nodesToFilter, node];
    }
  });

  const parent = document.createElement('div');

  nodesToFilter.forEach(node => {
    const clonedNode = node.cloneNode(true);
    parent.appendChild(clonedNode);
  });

  const filteredNodes = Array.from(parent.querySelectorAll(selector));

  return nodesToFilter.filter(node => filteredNodes.find(filteredNode => filteredNode.innerHTML === node.innerHTML));
};

class DomMutatedEventPublisher {
  constructor() {
    this.mutationObserver = null;
    this.isMutationObserverInitialized = false;
    this.subscribers = [];
  }

  initMutationObserver() {
    const
      targetNode = document.body,
      observerConfig = {
        childList: true,
        subtree: true,
      };

    const MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
    this.mutationObserver = new MutationObserver(this.onMutations.bind(this));
    this.mutationObserver.observe(targetNode, observerConfig);

    this.isMutationObserverInitialized = true;
  }

  subscribe(rootNode, selector, onDomMutatedCallback, priority) {
    const domMutatedEventSubscriber = new DomMutatedEventSubscriber(onDomMutatedCallback, priority, selector, rootNode);

    LifeTimeEventPublisher.subscribe(domMutatedEventSubscriber);

    this.subscribers.push(domMutatedEventSubscriber);

    if (!this.isMutationObserverInitialized) {
      this.initMutationObserver();
    }

    return domMutatedEventSubscriber;
  }

  onMutations(mutations) {
    mutations.forEach(mutation => {
      const
        target = mutation.target,
        addedNodes = Array.from(mutation.addedNodes),
        removedNodes = Array.from(mutation.removedNodes);

      if (addedNodes.length === 0 && removedNodes.length === 0) {
        return;
      }

      this.subscribers.forEach(subscriber => {
        const
          matchedAddedNodes = filterNodes({
            nodes: addedNodes,
            target,
            rootNode: subscriber.rootNode,
            selector: subscriber.selector,
          }),
          matchedRemovedNodes = filterNodes({
            nodes: removedNodes,
            target,
            rootNode: subscriber.rootNode,
            selector: subscriber.selector,
          });

        if (matchedAddedNodes.length === 0 && matchedRemovedNodes.length === 0) {
          return;
        }

        const domMutatedEvent = new DomMutatedEvent({
          target,
          selector: subscriber.selector,
          addedNodes: matchedAddedNodes,
          removedNodes: matchedRemovedNodes,
        });

        LifeTimeEventPublisher.publish(domMutatedEvent);
      });
    });
  }
}

const instance = new DomMutatedEventPublisher();

export default instance;
