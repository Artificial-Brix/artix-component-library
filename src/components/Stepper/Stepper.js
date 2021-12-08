import styled from "@emotion/styled";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const SteppersWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StepWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  width: 23%;
`;

const StepNumber = styled.div`
  border-radius: 50%;
  border: 3px solid ${(props) => (props.active ? "black" : "#838383")};
  padding: 3px;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StepDescription = styled.div`
  margin-left: ${(props) => (props.direction === "vertical" ? 1.2 : 0)}rem;
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
`;

const calcWidth = (nSteps) => {
  let width;
  switch (nSteps) {
    case 2:
      width = 296;
      break;
    case 3:
      width = 125;
      break;
    case 4:
      width = 70;
      break;
    case 5:
      width = 60;
      break;
    default:
      width = 50;
  }
  return width;
};

const HorizontalDivider = styled.div`
  height: 1px;
  background-color: #bdbdbd;
  position: absolute;
  top: 30%;
  left: 70%;
  width: ${(props) => calcWidth(props.nSteps)}%;
`;

const Stepper = ({ steps, stepColor, currentStep = 1 }) => {
  const [stepState, setStepState] = useState([]);

  useEffect(() => {
    let createSteps = steps.map((step, idx) => ({
      description: step,
      completed: idx < currentStep - 1, //past steps
      selected: idx <= currentStep - 1, //past+current step
      highlighted: idx === currentStep - 1,
    }));
    setStepState(createSteps);
  }, [steps, currentStep]);

  return (
    <SteppersWrapper>
      {stepState.map(
        ({ selected, completed, highlighted, description }, idx) => (
          <StepWrapper>
            <StepNumber
              active={selected}
              style={{ background: stepColor ? stepColor : "lightgreen" }}
            >
              {completed ? "✔" : idx + 1}
            </StepNumber>
            <StepDescription active={selected}>{description}</StepDescription>
            {idx + 1 !== stepState.length && (
              <HorizontalDivider nSteps={stepState.length}></HorizontalDivider>
            )}
          </StepWrapper>
        )
      )}
    </SteppersWrapper>
  );
};

Stepper.propTypes = {
  currentStepNumber: PropTypes.number.isRequired,
  steps: PropTypes.array.isRequired,
  stepColor: PropTypes.string,
};

export default Stepper;
