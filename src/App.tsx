import styled from "styled-components";
import React from "react";

import Heart from "./components/Heart";
import Message from "./components/Message";
import Payer from "./components/Payer";
import * as C from "./constants/constants";

import {
  placeItemsInCircle
} from "./utilities/functions";

/**
 * Sized Message
 */
const FixedMsg = styled(Message)`
  max-height: min(50vw, 50vh);
  height: min(50vw, 50vh);
  min-height: min(50vw, 50vh);
  max-width: min(50vw, 50vh);
  width: min(50vw, 50vh);
  min-width: min(50vw, 50vh);
`;

/**
 * Sized Payers
 */
const SizedPayer = styled(Payer)`
  max-height: 50px;
  height: 50px;
  min-height: 50px;
  max-width: 50px;
  width: 50px;
  min-width: 50px;
  position: absolute;
`;

/**
 * Main Screen
 */
const Main = styled.div`
  text-align: center;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

/**
 * App
 */
export default function App() {
  // Ref to payers Elements
  const payersRef = React.useRef<HTMLDivElement[]>([]);

  // Ref to the Message
  const msgRef = React.useRef<HTMLDivElement>(null);

  // list of payers
  const payers = C.payers.map((payer) => (
    <SizedPayer
      description={payer.description}
      url={payer.url}
      icon={payer.icon}
      ref={ref => ref && payersRef.current.push(ref)}
    />
  ));

  // On Ref Change
  React.useLayoutEffect(() => {
    if (msgRef.current && payersRef.current && payersRef.current.length === C.payers.length) {
      placeItemsInCircle(msgRef.current, payersRef.current);
    }
  });

  // on resize
  window.addEventListener("resize", () => {
    if (msgRef.current && payersRef.current && payersRef.current.length === C.payers.length) {
      placeItemsInCircle(msgRef.current, payersRef.current);
    }
  });

  // Render
  return (
    <Main>
      <FixedMsg message={C.message} ref={msgRef} />
      {payers}
    </Main>
  )
}
