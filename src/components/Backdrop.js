import React, { useState } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

import { font } from "/config/styles";

const BackdropStyles = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  ${font}
  outline: none;
  color: #5cdb95;
  background-color: #05385b;
  padding: 0.8rem;
  border-radius: 0.8rem;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: #05385be8;
    color: #5cdb95e8;
  }
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 2px solid gray;
  border-right: 2px solid gray;
  border-bottom: 2px solid gray;
  border-left: 4px solid white;
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

export default function Backdrop() {
  const [show, setShow] = useState(false);

  const handleBackdrop = () => {
    setShow(!show);
  };

  return (
    <>
      <Button onClick={handleBackdrop}>Click Me!!</Button>
      {show ? (
        <BackdropStyles onClick={handleBackdrop}>
          <Spinner />
        </BackdropStyles>
      ) : null}
    </>
  );
}
