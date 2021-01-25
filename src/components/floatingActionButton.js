import React from "react";
import styled from "@emotion/styled";

// const Wrapper = styled.button((props) => ({
//   ...props,
//   position: "block",
//   border: "none",
//   background: "#5cdb95",
//   borderRadius: "50%",
//   height: "40px",
//   width: "40px",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
// }));

const Wrapper = styled.button`
  background: #5cdb95;
  border: none;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => ({ ...props })}
`;

export default function FloatingActionButton(props) {
  console.log(props);
  return <Wrapper {...props}>{props.children}</Wrapper>;
}
