import styled from "@emotion/styled";
import React, { useState } from "react";

const Wrapper = styled.div`
  box-shadow: 1px 1px 40px 2px rgba(0, 0, 0, 0.4);
  padding: 10px;
  width: ${(props) => (props.width ? props.width : 70)}%;
  background: ${(props) => (props.backgroundColor ? props.backgroundColor : "white")};
  color: ${(props) => (props.color ? props.color : "black")}
`;

const ListItemWrapper = styled.div`
  padding: 3px;
  font-size: 1.2rem;
  padding: 10px 0 10px 15px;
  transition: all 0.5s;
  display: flex;
  align-items: center;
  svg {
    padding-right: 10px;
  }
  :hover {
    background: rgb(0, 0, 0, 0.1);
  }
`;

export const ListItem = function (props) {
  return (
    <ListItemWrapper>
      {props.icon && <props.icon />}
      {props.children}
    </ListItemWrapper>
  );
};

export default function (props) {
  return (
    <Wrapper {...props}>
        {props.children}
    </Wrapper>
  );
}
