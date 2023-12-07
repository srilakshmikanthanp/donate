// Copyright (c) 2023 Sri Lakshmi Kanthan P
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import styled from 'styled-components';

/**
 * Message Props
 */
export interface MessageProps extends React.HTMLAttributes<HTMLDivElement> {
  message: string;
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
`;

/**
 * Heart Component
 */
export default function Message(props: MessageProps) {
  return (
    <Container {...props}>
      {props.message}
    </Container>
  );
}
