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

import Event from './../Core/Event';
import DomEventTypes from './DomEventTypes';

class DomEvent extends Event {
  constructor(domEventType) {
    this.type = domEventType;
    super(this.type.type);
  }
}

export default DomEvent;
