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

import NodeAddedEventPublisher from './../Publishers/NodeAddedEventPublisher';

export default (selector, onNodeAddedCallback, priority) => {
  return NodeAddedEventPublisher.subscribe(selector, onNodeAddedCallback, priority);
};
