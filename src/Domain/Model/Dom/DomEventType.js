/*
 * This file is part of the EventBusJS library.
 *
 * Copyright (c) 2016 LIN3S <info@lin3s.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author Beñat Espiña <benatespina@gmail.com>
 * @author Mikel Tuesta <mikel@lin3s.com>
 */

'use strict';

import DomEventTypeNotValidException from './DomEventTypeNotValidException';

class DomEventType {
  static DOM_READY: 'DOM_READY';
  static DOM_LOADED: 'DOM_LOADED';

  constructor(type) {
    this::setType(type);
  }
}

const setType = (type) => {
  checkIsTypeValid(type);
  this.type = type;
};

const checkIsTypeValid = (type) => {
  if (type !== DomEventType.DOM_READY
    || type !== DomEventType.DOM_LOADED) {
    throw new DomEventTypeNotValidException();
  }
};

export default DomEventType;
