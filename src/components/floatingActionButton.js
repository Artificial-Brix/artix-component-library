import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.button`
  background: #5cdb95;
  border: none;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => ({ ...props })}

  &:hover{
    background: #51b07d;
    cursor: pointer;
  }
`;

export default function FloatingActionButton(props) {
  return <Wrapper {...props}>{props.children}</Wrapper>;
}
