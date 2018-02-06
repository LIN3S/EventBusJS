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
import NodeAddedEventSubscriber from './../Subscribers/NodeAddedEventSubscriber';
import NodeAddedEvent from './../Events/NodeAddedEvent';
import isDomNodeDescendantOfDomNode from '../Dom/isDomNodeDescendantOfDomNode';

class NodeAddedEventPublisher {

  mutationObserver;
  isMutationObserverInitialized;
  subscribers;
  subscribersMap;

  constructor() {
    this.subscribers = [];
    this.subscribersMap = [];
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

  subscribe({rootNode = document, selector} = {}, onNodeAddedCallback, priority) {
    const nodeAddedSubscriber = new NodeAddedEventSubscriber(onNodeAddedCallback, priority, selector, rootNode);

    LifeTimeEventPublisher.subscribe(nodeAddedSubscriber);

    this.subscribers.push(nodeAddedSubscriber);

    if (!this.isMutationObserverInitialized) {
      this.initMutationObserver();
    }

    return nodeAddedSubscriber;
  }

  onNodeMutated(mutations) {
    this.mapSubscribers();

    mutations.forEach(mutation =>
      Array.from(mutation.addedNodes)
        .forEach(node => this.getMatchedNodesAndSubscribers(node).forEach(subscriberAndNodes =>
          LifeTimeEventPublisher.publish(new NodeAddedEvent(
            subscriberAndNodes.nodes,
            subscriberAndNodes.subscriber.rootNode,
            subscriberAndNodes.subscriber.selector
          ))
        ))
    );
  }

  mapSubscribers() {
    this.subscribersMap = this.subscribers.map(subscriber => ({
      rootNode: subscriber.rootNode,
      selector: subscriber.selector,
      nodes: Array.from(subscriber.rootNode.querySelectorAll(subscriber.selector))
    }));
  }

  nodeMatchesSubscriberRequirements(node, subscriber) {
    if (node === subscriber.rootNode || !isDomNodeDescendantOfDomNode(node, subscriber.rootNode)) {
      return false;
    }

    const mappedSubscriber = this.subscribersMap.find(subscriberMap => subscriberMap.selector === subscriber.selector);

    if (mappedSubscriber === undefined) {
      return false;
    }

    return mappedSubscriber.nodes.find(subscriberNode => subscriberNode === node);
  }

  getMatchedNodesAndSubscribers(node) {
    let matchedSubscribersAndNodes = [];

    const getMatchedNodes = (rootNode) => {
      this.subscribers.forEach(subscriber => {
        if (this.nodeMatchesSubscriberRequirements(rootNode, subscriber)) {
          const matchedSubscriber = matchedSubscribersAndNodes.find(matchedSubscribersAndNode =>
            matchedSubscribersAndNode.subscriber.selector === subscriber.selector
            && matchedSubscribersAndNode.subscriber.rootNode === subscriber.rootNode);

          if (matchedSubscriber === undefined) {
            matchedSubscribersAndNodes.push({
              subscriber,
              nodes: [rootNode]
            });
          } else {
            matchedSubscriber.nodes.push(rootNode);
          }
        }
      });

      Array.from(rootNode.childNodes).forEach(childNode => getMatchedNodes(childNode));
    };

    getMatchedNodes(node);
    return matchedSubscribersAndNodes;
  }
}

const instance = new NodeAddedEventPublisher();

export default instance;
