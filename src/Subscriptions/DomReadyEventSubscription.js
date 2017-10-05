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

import OneTimeEventPublisher from './../Core/EventPublisher/OneTimeEventPublisher';
import Priority from './../Core/Priority/Priority';
import DomReadyEventSubscriber from './../Subscribers/DomReadyEventSubscriber';

export default (onReadyCallback, priority) => {
  const domReadyEventSubscriber = new DomReadyEventSubscriber(
    onReadyCallback,
    new Priority(priority)
  );

  OneTimeEventPublisher.subscribe(domReadyEventSubscriber);

  return domReadyEventSubscriber;
};
