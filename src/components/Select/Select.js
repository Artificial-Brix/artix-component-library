import styled from "@emotion/styled";
import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

const Wrapper = styled.div`
  position: relative;
  margin: 10px;
  width: ${(props) => (props.width ? props.width : "70%")};
  user-select: none;
`;

const Select = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-width: 0 2px 0 2px;
  border-style: solid;
  border-color: #394a6d;
`;

const SelectTrigger = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3px;
  font-size: 20px;
  font-weight: 1.2rem;
  border-width: 2px 0 2px 0;
  border-style: solid;
  border-color: #394a6d;
  cursor: pointer;
`;

const Options = styled.div`
  display: block;
  z-index: 2;
  border-width: 0 0px 2px 0px;
  border-style: solid;
  border-color: #394a6d;
  display: "block";
  transition: all 0.5s;
  overflow: auto;
  max-height: 60vh;
`;

const Option = styled.div`
  display: block;
  padding: 2px 22px;
  font-size: 22px;
  font-weight: 300;
  cursor: pointer;
  transition: all 0.5s;
  color: ${(props) => (props.selected ? "white" : "black")};
  background-color: ${(props) =>
    props.selected ? (props.background ? props.background : "#305c91") : ""};

  :hover {
    background-color: #b2b2b2;
  }
`;

export default function (props) {
  const [toggle, setToggle] = useState(false);
  const [selectedItem, setSelectedItem] = useState(
    props.selected ? props.selected : "Please select"
  );

  const handleSelect = (optionName) => {
    setSelectedItem(optionName);
    setToggle(!toggle);
  };

  return (
    <Wrapper width={props.width}>
      <Select>
        <SelectTrigger onClick={() => setToggle(!toggle)}>
          <span>{selectedItem}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M16 11c0 0.266-0.109 0.516-0.297 0.703l-7 7c-0.187 0.187-0.438 0.297-0.703 0.297s-0.516-0.109-0.703-0.297l-7-7c-0.187-0.187-0.297-0.438-0.297-0.703 0-0.547 0.453-1 1-1h14c0.547 0 1 0.453 1 1z"></path>
          </svg>
        </SelectTrigger>

        {toggle && (
          <Options>
            {props.options?.map((optionName, index) => {
              return (
                <Option
                  key={index}
                  selected={selectedItem === optionName ? true : false}
                  onClick={() => handleSelect(optionName)}
                  background={props.background}
                >
                  {optionName}
                </Option>
              );
            })}
          </Options>
        )}
      </Select>
    </Wrapper>
  );
}
