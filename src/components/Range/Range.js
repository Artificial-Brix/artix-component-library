import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { font } from "/config/styles";

const Title = styled.h2`
  ${font}
`;

const Wrapper = styled.div`
  width: 100%;
  height: 20px;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  background: linear-gradient(to right, #05385b, #5cdb95);
  z-index: 10;
`;

const AnimateTrack = styled.div`
  background-color: rgb(204, 204, 204);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(0%);
  pointer-events: none;
  z-index: 5;
`;

const Range = styled.input`
  width: 100%;
  -webkit-appearance: none;
  background: transparent;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 16px;
    width: 16px;
  }

  &::-moz-range-thumb {
    -moz-appearance: none;
    background: transparent;
    border: none;
  }
`;

export default function SliderRange({ min, max }) {
  const [info, setInfo] = useState({
    currentPosition: 0,
    animationPercentage: 0,
  });

  const dragClickHandler = (e) => {
    const animationPercentage = Math.round(
      (Math.round(info.currentPosition) / Math.round(max)) * 100
    );

    setInfo({
      ...info,
      currentPosition: e.target.value,
      animationPercentage,
    });
  };

  const trackAnimation = {
    transform: `translateX(${info.animationPercentage}%)`,
  };

  return (
    <div>
      <Title>Drag me or Click me</Title>
      <Wrapper>
        <Range
          type="range"
          min={min}
          max={max}
          value={info.currentPosition}
          onChange={dragClickHandler}
          onClick={dragClickHandler}
        />
        <AnimateTrack style={trackAnimation} />
      </Wrapper>
    </div>
  );
}
