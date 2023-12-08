// Copyright (c) 2023 Sri Lakshmi Kanthan P
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { ThemeProvider, Typography, createTheme } from '@mui/material';

/**
 * Container
 */
const Container = styled.div`
  font-family: 'Oxygen', sans-serif;
  justify-content: center;
  display: flex;
  text-align: center;
  align-items: center;
`;

/**
 * green
 */
const Green = styled.span`
  color: green;
`;

/**
 * Blue
 */
const Blue = styled.span`
  color: blue;
`;

/**
 * Orange
 */
const Red = styled.span`
  color: red;
`;

/**
 * Oxygen font family theme
 */
const theme = createTheme({
  typography: {
    fontFamily: ['Oxygen', 'sans-serif'].join(','),
  },
});

/**
 * Heart Component
 */
const Note = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => {
  return (
    <Container {...props} ref={ref}>
      <ThemeProvider theme={theme}>
        <Typography variant="h5" component="h2">
          <Green>Thanks a bunch</Green> for your support, <Blue>whether big or small. </Blue>
          Your contribution is a key part of making my
          project happen, and <Red>I really appreciate it!</Red>
        </Typography>
      </ThemeProvider>
    </Container>
  );
});

// export
export default Note;
