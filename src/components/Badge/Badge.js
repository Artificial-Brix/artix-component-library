import React from "react";
import styled from "@emotion/styled";
// import { font, primaryColors, shape } from "@config/styles";

const Wrapper = styled.div`
  position: relative;
  height: max-content;
  width: max-content;
  .badge {
    position: absolute;
    ${(props) => (props.bottom ? "top:0" : "bottom: 0")};
    right: 0;
    color: ${(props) => (props.color ? props.color : "white")};
    background: ${(props) => (props.background ? props.background : "red")};
    z-index: 9;
    height: 1rem;
    width: 1rem;
    padding: 0.1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }
`;

const Square = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: #5cdb95;
  position: relative;
`;

export default function Badge(props) {
  return (
    <Wrapper {...props}>
      <p className="badge">{props.val}</p>
      {props.children}
    </Wrapper>
  );
}

export { Square };
