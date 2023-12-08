// Copyright (c) 2023 Sri Lakshmi Kanthan P
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { Typography } from '@mui/material';

/**
 * Payer Props
 */
export interface PayerProps extends React.HTMLAttributes<HTMLDivElement> {
  description: string;
  url: string;
  icon: string;
}

/**
 * Container
 */
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem;
  gap: 0.5rem;
  cursor: pointer;
`;

/**
 * Icon
 */
const Icon = styled.img`
  max-height: 100%;
  max-width: 100%;
  height: 40px;
  width: 40px;
  object-fit: contain;
`;

/**
 * Payer
 */
const Payer = forwardRef<HTMLDivElement, PayerProps>((props, ref) => {
  return (
    <Container {...props} ref={ref} onClick={ () => window.open(props.url) }>
      <Icon src={props.icon} />
      <Typography variant="subtitle2">
        {props.description}
      </Typography>
      <KeyboardArrowRightIcon />
    </Container>
  );
});

// export
export default Payer;
