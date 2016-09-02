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

import EventTypes from './../src/EventTypes';

test('it returns the event types', (t) => {
  t.deepEqual(EventTypes, {'DOM_READY': 'DOM_READY'});
});
