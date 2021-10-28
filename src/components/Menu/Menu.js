import React, { useState } from "react";
import styled from "@emotion/styled";
import { font, primaryColors, shape } from "/config/styles";
import withProps from "recompose/withProps";

const Name = styled.p`
  user-select: none;
  font-size: 1rem;
  border-radius: 2px;
  padding: 0.4rem;
  cursor: pointer;
  width: max-content;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#5cdb95"};
  color: ${(props) => (props.color ? props.color : "#05385b")};
  box-shadow: 2px 2px 8px #dddddd;
`;
const Option = styled.p`
  padding: 0.4rem;
  cursor: pointer;
  border-radius: 2px;
  transition: all ease 0.2s;
  :hover {
    background-color: #00000040;
  }
  color: ${(props) => (props.color ? props.color : "#05385b")};
`;
const Wrapper = styled.div`
  position: relative;
  background-color: transparent;
  border-radius: 2px;
  width: max-content;
  min-width: 4rem;
  padding: 0.1rem 0.8rem;
  box-shadow: 2px 2px 8px #dddddd;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#5cdb95"};
  Option {
    color: ${(props) => (props.color ? props.color : "#red !important")};
  }
`;

export default function Switch(props) {
  const [renderOptions, setrenderOptions] = useState(false);
  return (
    <>
      <Name {...props} onClick={() => setrenderOptions(!renderOptions)}>
        {props.txt}
      </Name>
      {renderOptions && <Wrapper {...props}>{props.children}</Wrapper>}
    </>
  );
}
export { Option };
