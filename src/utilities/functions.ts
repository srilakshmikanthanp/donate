// Copyright (c) 2023 Sri Lakshmi Kanthan P
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as feather from "feather-icons";

/**
 * Converts the Svg Feather to Base 64
 *
 * @param name image name
 * @returns path
 */
export function getFeather(name: string) {
  // Svg Url String
  const svgUrlString = encodeURIComponent((feather.icons as { [key: string]: any })[name].toSvg({
    color: 'black'
  }));

  // Get back
  return `data:image/svg+xml;charset=utf-8, ${svgUrlString}`;
}
