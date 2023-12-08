// Copyright (c) 2023 Sri Lakshmi Kanthan P
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import gsap from "gsap";
import $ from 'jquery';

/**
 * Function used to place the items in a circle around the content
 */
export function placeItemsInCircle(origin: HTMLElement, items: HTMLElement[]) {
  // get the origin position and size
  const originPos = origin.getBoundingClientRect();

  // check width and height
  if (originPos.width !== originPos.height) {
    throw new Error(`${originPos.width} !== ${originPos.height}`);
  }

  // get the radius
  const radius = $(origin).innerWidth()!! / 2;

  // get the center
  const center = {
    x: originPos.left + $(origin).innerWidth()!! / 2,
    y: originPos.top + $(origin).innerHeight()!! / 2,
  };

  // set the initial position
  for (let item of items) {
    gsap.set(item, {
      position: "absolute",
      opacity: 0,
      top: center.y - $(item).innerHeight()!! / 2,
      left: center.x - $(item).innerWidth()!! / 2,
    });
  }

  // get the step
  const step = 2 * Math.PI / items.length;

  // timeline
  const tl = gsap.timeline();

  // place the items
  items.forEach((item, index) => {
    // infer the radius of the item
    let inferredRadius = $(item).innerWidth()!! / 2 + radius + 30;

    // calculate the position
    const pos = {
      y: center.y + inferredRadius * Math.sin(step * index),
      x: center.x + inferredRadius * Math.cos(step * index),
    };

    // set the position
    tl.to(item, {
      position: "absolute",
      top: pos.y - $(item).innerHeight()!! / 2,
      left: pos.x - $(item).innerWidth()!! / 2,
      opacity: 1,
    });
  });
}
