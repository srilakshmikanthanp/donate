// Copyright (c) 2023 Sri Lakshmi Kanthan P
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React, { forwardRef } from 'react';
import styled from 'styled-components';

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
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 50%;
  display: flex;
  width: 100%;
  height: 100%;
  padding: 10px;
  text-align: center;
  justify-content: center;
  align-items: center;

  &:hover {
    scale: 1.2;
  }
`;

/**
 * Image
 */
const Image = styled.img`
  max-height: 100%;
  display: block;
  max-width: 100%;
`;

/**
 * Payer
 */
const Payer = forwardRef<HTMLDivElement, PayerProps>((props, ref) => {
  return (
    <Container {...props} data-tooltip-id='payer' data-tooltip-content={props.description} ref={ref}>
      <a href={props.url} target='_blank' rel='noreferrer'>
        <Image src={props.icon} alt={props.description} />
      </a>
    </Container>
  );
});

// export
export default Payer;
