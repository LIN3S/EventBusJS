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

import Event from './Core/Event';
import EventPublisher from './Core/EventPublisher';
import EventSubscriber from './Core/EventSubscriber';
import Priority from './Core/Priority/Priority';
import onDomReady from './Subscriptions/DomReadyEventSubscription';
import onDomLoaded from './Subscriptions/DomLoadedEventSubscription';
import onWindowResized from './Subscriptions/WindowResizedEventSubscription';
import onNodeAdded from './Subscriptions/NodeAddedEventSubscription';
import listenDomReady from './Publishers/DomReadyEventPublisher';
import listenDomLoaded from './Publishers/DomLoadedEventPublisher';
import listenWindowResized from './Publishers/WindowResizedEventPublisher';

const init = () => {
  listenDomReady();
  listenDomLoaded();
  listenWindowResized();
};

const
  Core = {
    Event,
    EventPublisher,
    EventSubscriber,
    Priority
  },
  Subscriptions = {
    onDomReady,
    onDomLoaded,
    onWindowResized,
    onNodeAdded
  };

export {
  Core,
  Subscriptions,
  init,
  Event,
  EventPublisher,
  EventSubscriber,
  Priority,
  onDomReady,
  onDomLoaded,
  onWindowResized,
  onNodeAdded
};
