/*
 * This file is part of the EventBusJS library.
 *
 * Copyright (c) 2016 LIN3S <info@lin3s.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author Beñat Espiña <benatespina@gmail.com>
 */

'use strict';

import test from 'ava';
import 'babel-core/register';

import DomReadyEvent from '../src/Domain/Model/Dom/DomReadyEvent';

test('it builds DOMReadyEvent with "DOM_READY" name', (t) => {
  const domReadyEvent = new DomReadyEvent();

  t.is(domReadyEvent.getName(), 'DOM_READY');
});
