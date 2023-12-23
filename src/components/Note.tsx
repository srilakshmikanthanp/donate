// Copyright (c) 2023 Sri Lakshmi Kanthan P
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React, { forwardRef } from 'react';
import styled from 'styled-components';

/**
 * Container
 */
const Container = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
  display: flex;
  max-width: 800px;
  padding: 20px;
`;

/**
 * green
 */
const Green = styled.span`
  color: #34a853;
`;

/**
 * Blue
 */
const Blue = styled.span`
  color: #4285f4;
`;

/**
 * Orange
 */
const Red = styled.span`
  color: #ea4335;
`;


/**
 * Heart Component
 */
const Note = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => {
  return (
    <Container {...props} ref={ref}>
      <h2>
        <Green>Thanks a bunch</Green> for your support,&nbsp;
        <Blue>whether big or small.</Blue>&nbsp;
        Your contribution is a key part of making my&nbsp;
        project happen, and&nbsp;
        <Red>I really appreciate it!</Red>
      </h2>
    </Container>
  );
});

// export
export default Note;
