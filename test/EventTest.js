/*
 * This file is part of the EventBusJS library.
 *
 * Copyright (c) 2016-present LIN3S <info@lin3s.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author Beñat Espiña <benatespina@gmail.com>
 */

'use strict';

import test from 'ava';
import 'babel-core/register';

import Event from './../src/Event';

test('it builds event with a given name', (t) => {
  const event = new Event('EVENT_NAME');

  t.is(event.getName(), 'EVENT_NAME');
});
