import React from "react";
import styled from "@emotion/styled";
import { font, primaryColors, shape } from "src/config/styles.js";

type Props = {
  text: string;
}

const Wrapper = styled.button`
  ${font}
  ${primaryColors}
  ${shape}
`;

export const Button: React.FC<Props> = ({text}) => {
  return  <Wrapper>{text}</Wrapper>
}
