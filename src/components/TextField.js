import React, { useState } from "react";
import styled from "@emotion/styled";
import { font, primaryColors, shape } from "/config/styles";
import withProps from "recompose/withProps";

const Wrapper = styled.div`
  display: flex;
  position: relative;
  border: 4px solid white;
  outline: ${(props) =>
    props.themeColor ? `2px solid ${props.themeColor}` : "2px solid #05385b"};
  padding: 0.15rem;
  width: max-content;
  background-color: #eeeeee;
  input {
    padding: 0.8rem 0.4rem;
    background-color: transparent;
    z-index: 9;
    color: ${(props) => (props.textColor ? props.textColor : "#5cdb95")};
    font-size: 1.1rem;
    border: none;
    outline: none;
    border-radius: "2px";
  }
  .placeholder {
    position: absolute;
    left: 2%;
    top: 5px;
    transition: all ease 0.5s;
    transform: translateY(-50%);
  }
  input:focus + .placeholder {
    color: ${(props) => (props.textColor ? props.textColor : "#05385b")};
    top: 3px;
    font-size: 0.9rem;
  }
`;

export default function TextField(props) {
  return (
    <Wrapper {...props}>
      <input />
      <span className="placeholder">
        {props.placeholder ? props.placeholder : "Text Here"}
      </span>
    </Wrapper>
  );
}
