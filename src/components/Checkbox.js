import React, { useState } from "react";
import styled from "@emotion/styled";
import { font, primaryColors, shape } from "/config/styles";
import withProps from "recompose/withProps";

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

const HiddenCheckbox = withProps({ type: "checkbox" })(styled("input")`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`);

const StyledCheckbox = withProps({ type: "checkbox" })(styled("input")`
  background-color: ${({ checked }) => (checked ? "salmon" : "papayawhip")};
  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`);

const StyledLabel = styled.label`
  ${font}
`;
export default function Checkbox({ text }) {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <CheckboxContainer>
      <HiddenCheckbox checked={checked} />
      <StyledLabel>
        <StyledCheckbox checked={checked} onChange={handleCheckboxChange}>
          <Icon viewBox="0 0 24 25">
            <polyline points="20 6 9 17 4 12" />
          </Icon>
        </StyledCheckbox>
        <span>{text}</span>
      </StyledLabel>
    </CheckboxContainer>
  );
}
