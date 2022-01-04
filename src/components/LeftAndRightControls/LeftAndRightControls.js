import React from "react";
import styled from "@emotion/styled";

const Image = styled.img`
  margin: 10px;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

const LeftAndRightArrowGroup = ({ next, prev }) => {
  return (
    <div>
      <Image
        alt="next"
        src="/leftChevron.svg"
        className="your classes here"
        onClick={prev}
      />
      <Image
        alt="next"
        src="/rightChevron.svg"
        className="your classes here"
        onClick={next}
      />
    </div>
  );
};

export default LeftAndRightArrowGroup;
