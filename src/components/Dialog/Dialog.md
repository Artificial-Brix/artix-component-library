Diagox box component. You need to include all the content you want to show inside a dialog box in between the "Dialog" tags.

```jsx
import styled from "@emotion/styled";
import React, { useState } from "react";
const [show, setShow] = useState(false);

const DialogButton = styled.button`
  outline: none;
  border: none;
  padding: 8px;
  margin-right: 10px;
  :hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

<>
  <Dialog show={show} dialogClosed={() => setShow(false)}>
    <h1>Hello Dialog box</h1>
    <DialogButton onClick={() => setShow(false)}>Ok</DialogButton>
    <DialogButton onClick={() => setShow(false)}>Cancel</DialogButton>
  </Dialog>
  <button onClick={() => setShow(true)}>Show Dialog</button>
</>;
```
