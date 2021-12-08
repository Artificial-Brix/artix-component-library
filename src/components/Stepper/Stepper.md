A stepper with different steps.
<br/>
Note: You may need to maintain "currentStep" value using a state.

```jsx
import Stepper from "./Stepper";
import React, { useState } from "react";
import ButtonGroup from "./ButtonGroup";

const [currentStep, setCurrentStep] = useState(2);

const stepsArray = [
  "Add personal Info",
  "Add payment details",
  "Complete registration",
  "Registration complete",
];

<Stepper steps={stepsArray} currentStep={currentStep} />;
```

A stepper with custom props.

```jsx
import Stepper from "./Stepper";
import React, { useState } from "react";
import ButtonGroup from "./ButtonGroup";

const [currentStep, setCurrentStep] = useState(2);

const stepsArray = [
  "Add personal Info",
  "Add payment details",
  "Complete registration",
  "Registration complete",
];

<Stepper steps={stepsArray} currentStep={currentStep} stepColor="salmon" />;
```
