import { List, ListItem } from "@mui/material";
import styled from "styled-components";
import React from "react";
import Divider from "@mui/material/Divider";

import Note from "./components/Note";
import Payer from "./components/Payer";
import * as C from "./constants/constants";

/**
 * NoteContainer
 */
const NoteContainer = styled(Note)`
  max-width: 800px;
  padding: 10px;
`;

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

/**
 * App
 */
export default function App() {
  // list of payers
  const payers = C.payers.map((payer) => (
    <React.Fragment>
      <ListItem>
        <Payer description={payer.description} url={payer.url} icon={payer.icon} />
      </ListItem>
      <Divider />
    </React.Fragment>
  ));

  // Render
  return (
    <Main>
      <NoteContainer />
      <List>
        {payers}
      </List>
    </Main>
  )
}
