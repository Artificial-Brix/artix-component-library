import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
  span {
    padding-left: 1rem;
    font-size: 1.3rem;
    font-weight: lighter;
  }
`;

const ProgressBar = styled.progress`
  width: 100%;
  height: 30px;
  &[value] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    position: relative;

    &::-webkit-progress-bar {
      background-color: #cececeab;
      border-radius: 30px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3) inset;
    }

    &::-webkit-progress-value {
      border-radius: 30px;
      background: linear-gradient(to right, #05385b, #5cdb95);
      position: relative;
    }

    /* &::before {
      content: "${(props) => props.value}%";
      position: absolute;
      left: ${(props) => props.value}%;
      top: -60%;
      transform: translateX(-100%);
    } */

    &::-moz-progress-bar {
      background: linear-gradient(to right, #05385b, #5cdb95);
    }
  }
`;

export default function Progress({ value }) {
  return (
    <Wrapper>
      <ProgressBar value={value} max={100} />
      <span>{value}%</span>
    </Wrapper>
  );
}
