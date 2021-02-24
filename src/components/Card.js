import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  border: 3px solid black;
  padding: 10px 12px;
  width: ${(props) => (props.width ? props.width : "50%")};
  height: "40%";
  background: ${(props) => (props.background ? props.background : "#d8dcd6")};
  box-sizing: border-box;
`;

const Title = styled.h2`
  color: #000a17;
  font-weight: 600;
  margin-top: 3px;
`;

const Date = styled.p`
  color: #000a17;
  font-weight: 300;
  margin: 4px 0;
`;

const Description = styled.p`
  color: black;
  font-size: 1.2em;
  margin: 10px 0 8px 3px;
`;

const Actions = styled.div`
  color: black;
  display: flex;
  align-items: center;
`;

const Action = styled.button`
  margin: 10px 5px;
  padding: 8px 14px;
  color: black;
  border: 3px solid black;
  outline: 0;
  font-weight: 700;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;

const StyledPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 1px solid black;
`;

const Card = ({ title, date, description, actions, imgSrc, ...props }) => (
  <Wrapper {...props}>
    {imgSrc && <StyledPhoto src={imgSrc} />}
    <Title>{title}</Title>
    {date && <Date>{date}</Date>}
    <Description>{description}</Description>
    <Actions>
      {actions.map(({ label, ...props }) => (
        <Action {...props}>{label}</Action>
      ))}
    </Actions>
  </Wrapper>
);

export default Card;
