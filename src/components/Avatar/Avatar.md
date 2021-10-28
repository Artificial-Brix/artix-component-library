Default image in avatar.
```jsx
import Avatar from "./Avatar";

<Avatar/>

```

Profile pic as avatar with an onClick event handler. You can also specify the height and width with **height** and **width** props.
```jsx
import Avatar from "./Avatar";

<Avatar onClick={() => alert("hello")} imgSrc="/src/assets/luffyAvatar.jpg"/>

```