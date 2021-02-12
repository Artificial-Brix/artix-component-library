import React, { useState } from "react";
import styled from "@emotion/styled";
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

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${(props) => (props.checked ? "#05385b" : "#5cdb95")};
  border-radius: 3px;
  transition: all 150ms;
  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;

const StyledLabel = styled.label`
  font-size: 1rem;
  display: flex;
  align-items: center;
  span {
    padding-left: 0.5rem;
  }
`;
export default function CheckboxTransferList({ text, handlerChecked, side }) {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setChecked(e.target.checked);
    handlerChecked(e.target.checked, text, side);
  };

  return (
    <CheckboxContainer>
      <StyledLabel>
        <HiddenCheckbox checked={checked} onChange={handleCheckboxChange} />
        <StyledCheckbox checked={checked}>
          <Icon viewBox="0 0 24 25">
            <polyline points="20 6 9 17 4 12" />
          </Icon>
        </StyledCheckbox>
        <span>{text}</span>
      </StyledLabel>
    </CheckboxContainer>
  );
}
