import React from "react";
import styled from "@emotion/styled";
import { font, primaryColors, shape } from "/config/styles";

const Wrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 4rem;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#5cdb95"};
  display: flex;
  align-items: center;
  Button {
    color: ${(props) => (props.color ? props.color : "#05385b")};
  }
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 1.2rem;
  cursor: pointer;
  :hover {
    transform: translateY(4%);
    filter: opacity(0.8);
  }
`;
export default function AppBar(props) {
  return <Wrapper {...props}>{props.children}</Wrapper>;
}

export { Button };
