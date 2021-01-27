import React from "react";
import styled from "@emotion/styled";
import { font, primaryColors, shape } from "/config/styles";

const Button = styled.button`
  ${font}
  color: ${(props) => (props.color ? props.color : "#05385b")};
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0.8rem;
  transition: all ease 0.4s;
  :not(:last-child) {
    border-right: 2px solid #05385b;
  }
  :hover {
    opacity: 0.7;
  }
`;
const Wrapper = styled.div`
  background: ${(props) => (props.background ? props.background : "#5cdb95")};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "1rem"};
  border: 1px solid #05385b;
  display: flex;
  width: max-content;
  z-index: 9;
  Button {
    color: ${(props) => (props.color ? props.color : "#05385b")};
  }
`;

export default function ButtonGroup(props) {
  return <Wrapper {...props}>{props.children}</Wrapper>;
}

export { Button };
