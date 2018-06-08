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
import EventPublisher from './Core/EventPublisher/EventPublisher';
import OneTimeEventPublisher from './Core/EventPublisher/OneTimeEventPublisher';
import LifeTimeEventPublisher from './Core/EventPublisher/LifeTimeEventPublisher';
import EventSubscriber from './Core/EventSubscriber';
import Priority from './Core/Priority/Priority';
import onDomReady from './Subscriptions/DomReadyEventSubscription';
import onDomLoaded from './Subscriptions/DomLoadedEventSubscription';
import onDomMutated from './Subscriptions/DomMutatedEventSubscription';
import onWindowResized from './Subscriptions/WindowResizedEventSubscription';
import listenDomReady from './Publishers/DomReadyEventPublisher';
import listenDomLoaded from './Publishers/DomLoadedEventPublisher';
import listenWindowResized from './Publishers/WindowResizedEventPublisher';
import initComponent from './Subscriptions/Combined/initComponent';

listenDomReady();
listenDomLoaded();
listenWindowResized();

const
  Core = {
    Event,
    EventPublisher,
    OneTimeEventPublisher,
    LifeTimeEventPublisher,
    EventSubscriber,
    Priority
  },
  Subscriptions = {
    onDomReady,
    onDomLoaded,
    onDomMutated,
    onWindowResized,
  };

export {
  Core,
  Subscriptions,
  Event,
  EventPublisher,
  OneTimeEventPublisher,
  LifeTimeEventPublisher,
  EventSubscriber,
  Priority,
  onDomReady,
  onDomLoaded,
  onDomMutated,
  onWindowResized,
  initComponent
};
