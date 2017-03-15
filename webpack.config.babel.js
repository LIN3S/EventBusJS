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

import {join} from 'path';

const include = join(__dirname, 'src');

const isUmd = (options) => {
  return typeof options !== 'undefined'
    && typeof options.libraryTarget !== 'undefined'
    && options.libraryTarget === 'umd';
};

export default (options) => {
  return {
    entry: './src/index',
    output: {
      path: join(__dirname, 'dist'),
      libraryTarget: isUmd(options) ? 'window' : 'commonjs'
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.js$/,
          include,
          use: [
            {
              loader: 'babel-loader'
            }
          ]
        }
      ]
    }
  };
}
