import React, { useState } from "react";
import styled from "@emotion/styled";
// import { FiPlus, FiMinus } from 'react-icons/fi';

const AccordionWrapper = styled.div`
  width: 50%;
  box-shadow: 5px ​5px 15px rgba(50, 50, 50, 0.5);
`;

const Question = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #5cdb95;
  padding: 1rem;
  border-bottom: 1px solid #05385b;
  cursor: pointer;
  h3 {
    margin: 0;
    font-size: 1.5rem;
    color: #05385b;
  }
`;

const Answer = styled.div`
  width: 100%;
  padding: 0.5rem 1rem;
  background-color: #343a40;
  p {
    font-size: 1.2rem;
    color: white;
  }
`;

export default function Accordion({ data }) {
  const [show, setShow] = useState(null);

  const handlerOnClick = (index) => {
    if (show === index) {
      console.log(index);
      return setShow(null);
    }

    setShow(index);
  };
  return (
    <div>
      <AccordionWrapper>
        {data.map((item, index) => (
          <>
            <Question onClick={() => handlerOnClick(index)}>
              <h3>{item.question}</h3>
              {/* <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span> */}
            </Question>
            {show === index ? (
              <Answer>
                <p>{item.answer}</p>
              </Answer>
            ) : null}
          </>
        ))}
      </AccordionWrapper>
    </div>
  );
}
