A Badge component

```jsx
import Badge, { Square } from "./Badge";

<Badge val={"2"}>
  <Square />
</Badge>;
```

A Badge with props

```jsx
import Badge, { Square } from "./Badge";

<Badge val={"2"} color="white" background="#343a40">
  <Square />
</Badge>;
```

give a additional prop bottom to set badge position to bottom (default: top)

```jsx
import Badge, { Square } from "./Badge";

<Badge val={"2"} color="white" bottom background="#343a40">
  <Square />
</Badge>;
```
