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
  subscribersSelectors;
  selectorNodeMap;

  constructor() {
    this.subscribersSelectors = [];
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

  subscribe(selector, onNodeAddedCallback, priority) {
    if (this.subscribersSelectors.find(subscriberSelector => subscriberSelector === selector) !== undefined) {
      return;
    }

    this.subscribersSelectors.push(selector);

    const nodeAddedSubscriber = new NodeAddedEventSubscriber(
      onNodeAddedCallback,
      new Priority(priority),
      selector
    );

    LifeTimeEventPublisher.subscribe(nodeAddedSubscriber);

    if (!this.isMutationObserverInitialized) {
      this.initMutationObserver();
    }

    return nodeAddedSubscriber;
  }

  onNodeMutated(mutations) {
    this.mapSelectorNodes();

    mutations.forEach(mutation =>
      Array.from(mutation.addedNodes)
        .forEach(node => {
          const
            matchedNodesBySelector = this.getMatchedNodesBySelector(node),
            matchedSelectors = Object.keys(matchedNodesBySelector);

          if (matchedSelectors.length === 0) {
            return;
          }

          matchedSelectors.forEach(selector =>
            LifeTimeEventPublisher.publish(new NodeAddedEvent(matchedNodesBySelector[selector], selector))
          );
        })
    );
  }

  mapSelectorNodes() {
    this.selectorNodeMap = this.subscribersSelectors.map(selector => ({
      selector,
      nodes: Array.from(document.querySelectorAll(selector))
    }));
  }

  getMatchedNodesBySelector(rootNode) {
    let matchedNodesBySelector = {};

    const getMatchedNodesBySelector = (rootNode) => {
      this.selectorNodeMap.forEach(selectorNodes => {
        const rootNodeMatchesSelector = selectorNodes.nodes.find(matchingNode => matchingNode === rootNode);

        if (rootNodeMatchesSelector) {
          matchedNodesBySelector[selectorNodes.selector] = matchedNodesBySelector[selectorNodes.selector] !== undefined
            ? matchedNodesBySelector[selectorNodes.selector].concat(rootNode)
            : [rootNode];
        }
      });

      Array.from(rootNode.childNodes).forEach(node => getMatchedNodesBySelector(node));
    };

    getMatchedNodesBySelector(rootNode);
    return matchedNodesBySelector;
  }
}

const instance = new NodeAddedEventPublisher();

export default instance;
