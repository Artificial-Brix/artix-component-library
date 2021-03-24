import React from "react";
import styled from "@emotion/styled";
import { font, primaryColors, shape } from "/config/styles";

const Wrapper = styled.button`
  border: none;
  display: flex;
  align-items: center;
  height: max-content;
  width: max-content;
  padding: 0 1rem;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  color: ${(props) => (props.color ? props.color : "black")};
  background: ${(props) => (props.background ? props.background : "#e0e0e0")};
  border-radius: 1rem;
  box-shadow: ${(props) => (props.disabled ? "none" : "2px 2px 1px 1px #0003")};
  outline: none;
  :active {
    transform: translateY(1%);
  }
  :active .ico {
    margin-right: 0.3rem;
  }
  .txt {
    line-height: 0;
  }
  .ico {
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    margin-right: 0.4rem;
    display: ${(props) => (props.img ? "block" : "none")};
  }
`;

export default function Chip(props) {
  return (
    <Wrapper {...props}>
      <img className="ico" src={props.img} alt="" />
      <p className="txt">{props.val}</p>
    </Wrapper>
  );
}
