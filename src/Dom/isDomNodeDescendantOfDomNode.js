/*
 * This file is part of the EventBusJS library.
 *
 * Copyright (c) 2016-present LIN3S <info@lin3s.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author Mikel Tuesta <mikeltuesta@gmail.com>
 */

export default (needleDomNode, domNode) => {
  let parentNode = needleDomNode.parentNode;

  while (parentNode !== null) {
    if (parentNode === domNode) {
      return true;
    }

    parentNode = parentNode.parentNode;
  }

  return false;
};
