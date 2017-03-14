/*
 * This file is part of the EventBusJS library.
 *
 * Copyright (c) 2016 LIN3S <info@lin3s.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author Mikel Tuesta <mikel@lin3s.com>
 */

'use strict';

import test from 'ava';
import 'babel-core/register';

import WindowResizedEvent from './../src/WindowResizedEvent';

test('it builds WindowResizedEvent with "WINDOW_RESIZED" name', (t) => {
  const windowResizedEvent = new WindowResizedEvent();

  t.is(windowResizedEvent.getName(), 'WINDOW_RESIZED');
});
