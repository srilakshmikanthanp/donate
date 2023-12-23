import styled from "styled-components";
import React from "react";
import gsap from "gsap";

import Navbar from "./components/Navbar";
import Note from "./components/Note";
import Payer from "./components/Payer";
import * as C from "./constants/constants";

/**
 * Main Screen
 */
const Main = styled.div`
  text-align: center;
  height: 100%;
  width: 100%;
  display: flex;
  gap: 25px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Row = styled.div`
  justify-content: center;
  position: absolute;
  bottom: 20px;
  flex-wrap: wrap;
  gap: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

/**
 * App
 */
export default function App() {
  // payers ref for animation
  const payersRef = React.useRef<HTMLDivElement[]>([]);

  // list of payers
  const payers = C.payers.map((payer) => (
    <Payer description={payer.description} url={payer.url} icon={payer.icon} ref={(ref) => payersRef.current.push(ref!!)} />
  ));

  // Animate wave effect up and down
  React.useLayoutEffect(() => {
    // Animate wave effect up and down
    const tl = gsap.timeline({ repeat: -1, yoyo: false });

    // Add animation to each payer
    payersRef.current.forEach((payer) => {
      tl.to(payer, {
        duration: 0.4,
        scale: 1.2,
        y: -25,
        ease: "linear",
      }).to(payer, {
        duration: 0.4,
        scale: 1,
        y: 0,
        ease: "linear",
      });
    });
  }, []);

  // Render
  return (
    <Main>
      <Navbar />
      <Note />
      <Row>
        {payers}
      </Row>
    </Main>
  )
}
