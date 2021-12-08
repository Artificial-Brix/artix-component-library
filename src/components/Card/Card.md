Card component with action buttons at the bottom.

```jsx
import Card from "./Card.js";

const buttons = [
  {
    label: <>Comment</>,
    onClick: () => alert("comment button is clicked"),
  },
  {
    label: <>👍 Like</>,
    onClick: () => alert("like button is clicked"),
  },
];

<Card
  title="Benefits of apples"
  imgSrc="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
  date={new Date().toLocaleDateString()}
  description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
  actions={buttons}
/>;
```

Card component with some customisation using props and without any image.

```jsx
import Card from "./Card.js";

const buttons = [
  {
    label: <>Comment</>,
    onClick: () => alert("comment button is clicked"),
  },
  {
    label: <>👍 Like</>,
    onClick: () => alert("like button is clicked"),
  },
];

<Card
  title="Benefits of apples"
  date={new Date().toLocaleDateString()}
  description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
  actions={buttons}
  background="#5cdb95"
/>;
```
