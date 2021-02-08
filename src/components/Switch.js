import React, { useState } from "react";
import styled from "@emotion/styled";
import { font, primaryColors, shape } from "/config/styles";
import withProps from "recompose/withProps";

const Wrapper = styled.input`
  position: relative;
  width: 64px;
  height: 32px;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0px 0px 8px 0.1px #7c7c7c4a inset;
  cursor: pointer;
  outline: none;
  -webkit-appearance: none;
  transition: all ease 0.4s;
  :checked {
    background: ${(props) => (props.background ? props.background : "#5cdb95")};
  }
  ::before {
    content: "";
    position: absolute;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    top: 0;
    left: 0;
    background: ${(props) => (props.color ? props.color : "#05385b")};
    transition: all ease 0.4s;
    transform: scale(1.1);
    box-shadow: -2px 2px 4px 2px #0000002e;
    filter: blur(${(props) => (props.glass ? "32px" : 0)});
    -webkit-filter: blur(${(props) => (props.glass ? "32px" : 0)});
  }
  :checked::before {
    left: 32px;
  }
`;

export default function Switch(props) {
  return (
    <Wrapper
      {...props}
      type="checkbox"
      onClick={() => setIsClicked(!isclicked)}
    />
  );
}
