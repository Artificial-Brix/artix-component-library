import React, { useState } from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#334c66"};
  color: ${(props) => (props.color ? props.color : "white")};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "4px"};
  width: max-content;
  font-size: 1.2rem;
  padding: 0.4rem 0.8rem;
  cursor: pointer;
  position: fixed;
  bottom: 24px;
  left: 32px;
  z-index: 9;
  box-shadow: 2px 2px 8px #00000063;
`;

const Button = styled.button`
  outline: none;
  border: 1px solid #4a4a4a;
  background-color: transparent;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 4px;
  transition: all ease 0.2s;
  :hover {
    color: white;
    background-color: #0000004d;
  }
`;

const SnackBar = (props) => {
  const [render, setrender] = useState(false);
  return (
    <>
      <Button onClick={() => setrender(!render)}>
        click here for snackbar
      </Button>
      {render && <Wrapper {...props}>{props.msg}</Wrapper>}
    </>
  );
};

export default SnackBar;
