A list with list items.

```jsx
import List, { ListItem } from "./List";

<List>
    <ListItem>Home</ListItem>
    <ListItem>About</ListItem>
</List>
```

A list with **width**, **backgroundColor** and **color** props for customisation. Pass the icon with **icon** prop in the **ListItem** component.

```jsx
import List, { ListItem } from "./List";
import AboutIcon from "../assets/aboutIcon";
import HomeIcon from "../assets/homeIcon";



<List backgroundColor="#5cdb95" width="30" color="black">
    <ListItem icon={HomeIcon}>Home</ListItem>
    <ListItem icon={AboutIcon}>About</ListItem>
</List>
```
