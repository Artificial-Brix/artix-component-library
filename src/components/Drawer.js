import React, { useState, useRef } from "react";
import styled from "@emotion/styled";
import * as MdIcons from "react-icons/md";
import * as IoIcons from "react-icons/io";

import DrawerButton from "./DrawerButton.js";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100vh;
  background-color: white;
  box-shadow: 2px 2px 50px rgba(0, 0, 0, 0.6);
  z-index: 10;
  transform: translateX(-100%);
  transition: all 800ms ease-in-out;
  &.active {
    transform: translateX(0%);
  }
`;

const Title = styled.h3`
  font-size: 2rem;
  color: #05385b;
  margin: 0;
  padding: 1rem;
`;

const List = styled.ul`
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0 1rem;
  margin: 0;
  li {
    padding: 1rem 0.3rem;
    display: flex;
    align-items: center;
    transition: all 350ms ease;
    span {
      padding-left: 1.5rem;
    }

    &:hover {
      background-color: #5cdb95;
      border-radius: 0.3rem;
    }

    svg {
      color: #05385b;
    }
  }
`;

export default function Drawer() {
  const [show, setShow] = useState(true);

  return (
    <>
      <DrawerButton text="Click Me" setShow={setShow} show={show} />
      <Nav className={show ? "active" : ""}>
        <Title>Drawer</Title>
        <List>
          <li>
            <MdIcons.MdMoveToInbox />
            <span>Inbox</span>
          </li>
          <li>
            <MdIcons.MdStar />
            <span>Starred</span>
          </li>
          <li>
            <IoIcons.IoMdHeart />
            <span>Favorites</span>
          </li>
          <li>
            <MdIcons.MdLabel /> <span>Important</span>
          </li>
          <li>
            <MdIcons.MdDrafts />
            <span>Drafts</span>
          </li>
        </List>
      </Nav>
    </>
  );
}
