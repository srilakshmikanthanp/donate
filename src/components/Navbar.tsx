// Copyright (c) 2022 Sri Lakshmi Kanthan P
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { getFeather } from '../utilities/functions';
import styled from 'styled-components';
import React from "react";

const Navigation = styled.div`
  position: absolute;
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  top: 0;
`;

const Logo = styled.img`
  border-radius: 20px;
  height: 30px;
  width: 30px;
  margin-left: 20px;
  margin-right: auto;
  cursor: pointer;
`;

const Menu = styled.img`
  @media (min-width: 768px) {
    display: none;
  }

  @media (max-width: 768px) {
    margin-left: auto;
    margin-right: 20px;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
`;

const NavLinks = styled.div<{
  isOpenOnMobile: boolean
}>`
  @media (max-width: 768px) {
    transform: translate(${(props) =>
    props.isOpenOnMobile ? '0px' : '250px'
  });
    background-color: white;
    justify-content: center;
    flex-direction: column;
    z-index: 10000000;
    height: 100vh;
    width: 250px;
    display: flex;
    right: 0%;
    top: 0%;
    gap: 20px;
    align-items: center;
    position: fixed;
    transition: all 0.5s ease-in-out;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  }

  @media (min-width: 768px) {
    flex-direction: row;
    display: flex;
    gap: 30px;
    margin-right: 20px;
    margin-left: auto;
  }
`;

const CloseIcon = styled.img`
  background-color: rgb(var(--pri-bg-color));
  color: rgb(var(--pri-fg-color));

  @media (min-width: 768px) {
    display: none;
  }

  @media (max-width: 768px) {
    position: absolute;
    height: 30px;
    width: 30px;
    top: 20px;
    right: 20px;
    cursor: pointer;
  }
`;

const NavLink = styled.a`
  position: relative;
  color: #202124;
  text-decoration: none;

  &::after {
    transition: width 0.3s ease-out;
    background-color: #4285f4;
    content: "";
    position: absolute;
    height: 4px;
    right: 0;
    width: 0;
    bottom: -10px;
    border-radius: 10px;
  }

  &:hover::after {
    width: 100%;
    left: 0%;
  }
`;

export default function Header() {
  // is Side bar Visible
  const [isOpenOnMobile, setIsOpenOnMobile] = React.useState(false);

  // Nav links ref
  const navRef = React.useRef<HTMLDivElement | null>(null);

  // Click out side
  const clickOutside = (evt: MouseEvent) => {
    if (!(evt?.target instanceof HTMLElement) || !navRef.current) {
      return;
    }

    if (!navRef.current.contains(evt.target)) {
      setIsOpenOnMobile(false);
    }
  }

  // Effect Handler
  const effectHandler = () => {
    // Removes the Click Listener
    const remover = () => {
      document.removeEventListener('click', clickOutside);
    }

    // Add the Click Listener
    const adder = () => {
      document.addEventListener('click', clickOutside);
    }

    // Add the Listener
    adder();

    // Return the Remover
    return remover;
  }

  // MenuClickHandler
  const menuClickHandler = () => {
    setIsOpenOnMobile(!isOpenOnMobile);
  }

  // Use Effect
  React.useEffect(effectHandler, [navRef]);

  // Render the NavBar
  return (
    <Navigation ref={navRef}>
      <a href="https://srilakshmikanthanp.github.io">
        <Logo src={process.env.PUBLIC_URL + "/logo.png"} alt="Sri Lakshmi Kanthan P" />
      </a>
      <Menu
        onClick={menuClickHandler}
        alt="Menu"
        src={getFeather('menu')}
      />
      <NavLinks isOpenOnMobile={isOpenOnMobile}>
        <CloseIcon
          onClick={menuClickHandler}
          alt="Close"
          src={getFeather('x')}
        />
        <NavLink href="https://instagram.com/srilakshmikanthanp">
          Instagram
        </NavLink>
        <NavLink href="https://github.com/srilakshmikanthanp">
          Github
        </NavLink>
        <NavLink href="https://twitter.com/itsmekanth">
          Twitter
        </NavLink>
        <NavLink href="https://www.facebook.com/srilakshmikanthanp">
          Facebook
        </NavLink>
      </NavLinks>
    </Navigation>
  );
}
