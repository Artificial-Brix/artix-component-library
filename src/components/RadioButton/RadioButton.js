import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: inline-block;
`;

const Circle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  border: none;
  border-radius: 50%;
  margin-right: 5px;
  background-color: #05385b;
  &::after {
    content: "";
    border-radius: 50%;
    background-color: #5cdb95;
    width: 8px;
    height: 8px;
    opacity: 0;
    /* position: absolute; */
    transition: all 0.5s;
  }
`;

const StyledRadioButton = styled.input`
  position: absolute;
  visibility: hidden;
  display: none;
  &:checked + ${Circle} {
    &::after {
      opacity: 1;
    }
  }
`;

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-right: 10px;
  ${(props) =>
    props.disabled &&
    `
      cursor: not-allowed;
      opacity: 0.4;
    `}
`;

export default function RadioButton({ name, children, disabled }) {
  return (
    <Wrapper>
      <StyledLabel disabled={disabled}>
        <StyledRadioButton disabled={disabled} name={name} type="radio" />
        <Circle />
        <span>{children}</span>
      </StyledLabel>
    </Wrapper>
  );
}
