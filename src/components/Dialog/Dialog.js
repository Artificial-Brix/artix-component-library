import styled from "@emotion/styled";
import React from "react";

const BackdropWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 3;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Backdrop = (props) => {
  return props.show ? <BackdropWrapper onClick={props.clicked} /> : null;
};

const DiaglogWrapper = styled.div`
  position: fixed;
  z-index: 5;
  background-color: white;
  width: 70%;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 16px;
  left: 15%;
  top: 30%;
  box-sizing: border-box;
  transition: all 0.3s ease-out;
  opacity: ${(props) => (props.show ? 1 : 0)};
  transform: ${(props) =>
    props.show ? "translateY(0)" : "translateY(-100vh)"};

  @media (min-width: 600px) {
    width: 500px;
    left: calc(50% - 250px);
  }
`;

export default function (props) {
  return (
    <div>
      <Backdrop show={props.show} clicked={props.dialogClosed} />
      <DiaglogWrapper show={props.show}>{props.children}</DiaglogWrapper>
    </div>
  );
}
