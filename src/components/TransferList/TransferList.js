import React, { useState } from "react";
import styled from "@emotion/styled";
import CheckboxTransferList from "./CheckboxTransferList";

const MainWrapper = styled.div`
  box-sizing: border-box;
  width: 90%;
  max-width: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.4);
  box-sizing: border-box;
  height: 15rem;
  width: 8rem;
  max-height: 15rem;
  max-width: 8rem;
  overflow-y: auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    margin: 0.5rem 0;
  }
`;

const Button = styled.button`
  outline: none;
  padding: 1rem;
  width: 3rem;
  height: 2rem;
  background-color: #05385b;
  color: #5cdb95;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function TransferList({}) {
  const [leftItems, setLeftItems] = useState([
    {
      name: "Item 1",
      isChecked: false,
    },
    {
      name: "Item 2",
      isChecked: false,
    },
    {
      name: "Item 3",
      isChecked: false,
    },
  ]);
  const [rightItems, setRightItems] = useState([
    {
      name: "Item 4",
      isChecked: false,
    },
    {
      name: "Item 5",
      isChecked: false,
    },
    {
      name: "Item 6",
      isChecked: false,
    },
  ]);
  const [someOneIsCheckedInRight, setSomeOneIsCheckedInRight] = useState(false);
  const [someOneIsCheckedInLeft, setSomeOneIsCheckedInLeft] = useState(false);

  const checkIfSomeOneIsChecked = (side) => {
    if (side === "right") {
      const isCheckedinRight = rightItems.some(
        (item) => item.isChecked === true
      );
      setSomeOneIsCheckedInRight(isCheckedinRight);
    } else if (side === "left") {
      const isCheckedinLeft = leftItems.some((item) => item.isChecked === true);
      setSomeOneIsCheckedInLeft(isCheckedinLeft);
    }
  };

  const handlerChecked = (isChecked, itemName, side) => {
    if (side === "right") {
      //find the item was checked or unchecked
      const found = rightItems.find((item) => item.name === itemName);
      // find the index of the item that was checked or unchecked
      const index = rightItems.indexOf(found);
      // create a copy of the array with the items
      let tempItems = rightItems;
      // change the checked status of the found item
      found.isChecked = isChecked;
      // replace the old item with the found item with new checked status
      tempItems[index] = found;
      // set the array with the new status
      setRightItems(tempItems);
      checkIfSomeOneIsChecked(side);
    } else if (side === "left") {
      //find the item was checked or unchecked
      const found = leftItems.find((item) => item.name === itemName);
      // find the index of the item that was checked or unchecked
      const index = leftItems.indexOf(found);
      // create a copy of the array with the items
      let tempItems = leftItems;
      // change the checked status of the found item
      found.isChecked = isChecked;
      // replace the old item with the found item with new checked status
      tempItems[index] = found;
      // set the array with the new status
      setLeftItems(tempItems);
      checkIfSomeOneIsChecked(side);
    }
  };

  const handlerToRight = (e) => {
    if (someOneIsCheckedInLeft) {
      const checkedInLeft = leftItems.filter((item) => item.isChecked === true);
      const tempItems = leftItems.filter((item) => {
        return checkedInLeft.some((checkedItem) => item.isChecked === false);
      });
      setLeftItems(tempItems);
      checkedInLeft.map((item) => (item.isChecked = false));
      setRightItems([...rightItems, ...checkedInLeft]);
      checkIfSomeOneIsChecked("left");
    }
  };

  const handlerToLeft = (e) => {
    if (someOneIsCheckedInRight) {
      const checkedInRight = rightItems.filter(
        (item) => item.isChecked === true
      );
      const tempItems = rightItems.filter((item) => {
        return checkedInRight.some((checkedItem) => item.isChecked === false);
      });
      setRightItems(tempItems);
      checkedInRight.map((item) => (item.isChecked = false));
      setLeftItems([...leftItems, ...checkedInRight]);
      checkIfSomeOneIsChecked("right");
    }
  };

  return (
    <MainWrapper>
      {/* Left Container */}
      <Container>
        {leftItems.map((item) => (
          <div key={item.name}>
            <CheckboxTransferList
              side="left"
              text={item.name}
              handlerChecked={handlerChecked}
            />
          </div>
        ))}
      </Container>
      {/* Controls */}
      <div className="controls">
        <div className="to-right">
          <Button onClick={handlerToRight} className="btn btn-to-right">
            {`>`}
          </Button>
        </div>
        <div className="to-left">
          <Button onClick={handlerToLeft} className="btn btn-to-left">
            {`<`}
          </Button>
        </div>
      </div>
      {/* Right Container */}
      <Container>
        {rightItems.map((item) => (
          <div key={item.name}>
            <CheckboxTransferList
              side="right"
              text={item.name}
              handlerChecked={handlerChecked}
            />
          </div>
        ))}
      </Container>
    </MainWrapper>
  );
}
