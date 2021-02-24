import React, { useState } from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  height: max-content;
  width: max-content;
  box-shadow: ${(props) =>
    props.variant === "elevate" ? "2px 2px 8px #0000003d" : "none"};
  border: ${(props) =>
    props.variant === "outline" ? "1px solid black" : "none"};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "4px"};
  padding: ${(props) => (props.padding ? props.padding : "0.8rem")};
`;

export default function Paper(props) {
  return <Wrapper {...props}>{props.children}</Wrapper>;
}
