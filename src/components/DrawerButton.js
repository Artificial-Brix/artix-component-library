import React from "react";
import styled from "@emotion/styled";
import { font, primaryColors, shape } from "/config/styles";

const Button = styled.button`
  ${font}
  ${primaryColors}
  ${shape}
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #5cdb95ab;
    color: #05385bab;
  }
`;
export default function DrawerButton({ text, show, setShow }) {
  const handlerButtonClick = (e) => {
    setShow(!show);
  };
  return <Button onClick={handlerButtonClick}>{text}</Button>;
}
