import React, { useRef } from "react";
import styled from "@emotion/styled";
import { font, primaryColors, shape } from "/config/styles";

const Wrapper = styled.input`
  display: flex;
  border: none;
  background-color: ${(props) =>
    props.background ? props.background : "#5cdb95"};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "4px"};
  color: ${(props) => (props.color ? props.color : "#05385b")};
  padding: 0.8rem 0.4rem;
  cursor: pointer;
  font-size: 1.5rem;
  overflow: hidden;
  position: relative;
  outline: none;
  ::-webkit-calendar-picker-indicator {
    position: absolute;
    top: 0;
    left: -25%;
    width: 500%;
    height: 300%;
    cursor: pointer;
    opacity: 0;
  }
`;

export default function DateTimePicker(props) {
  const inp = useRef(null);
  const onClickHandler = () => {
    const event = document.createEvent("KeyboardEvent");
    event.initEvent("keydown", true, true, document.defaultView, "F4", 0);
    inp.current.dispatchEvent(event);
    console.log("running");
  };
  return (
    <Wrapper
      ref={inp}
      onClick={onClickHandler}
      type="datetime-local"
      {...props}
    ></Wrapper>
  );
}
