// Copyright (c) 2023 Sri Lakshmi Kanthan P
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Tooltip } from 'react-tooltip';
import React from 'react';
import styled from 'styled-components';

/**
 * Payer Props
 */
export interface PayerProps extends React.HTMLAttributes<HTMLDivElement> {
  description: string;
  icon: string;
}

/**
 * Container
 */
const Container = styled.div`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 50%;
  display: flex;
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 1.2rem;
  padding: 1rem;
  justify-content: center;
  align-items: center;

  &:hover {
    scale: 1.2;
  }
`;

/**
 * Container
 */
export default function Payer(props: PayerProps) {
  // render
  return (
    <Container {...props} data-data-tooltip-id='payer' data-data-tooltip-content={props.description}>
      <img src={props.icon} alt={props.description} />
      <Tooltip id='payer' />
    </Container>
  );
}
