Default style without any icons.

```jsx
import Breadcrumbs, { Breadcrumb } from "./Breadcrumbs";
import { BrowserRouter as Router, Link } from "react-router-dom";

<Router>
  <Breadcrumbs>
    <Breadcrumb>
      <Link to="/">Home</Link>
    </Breadcrumb>
    <Breadcrumb>
      <Link to="/about">About</Link>
    </Breadcrumb>
    <Breadcrumb>
      <Link to="/author">Author</Link>
    </Breadcrumb>
  </Breadcrumbs>
</Router>;
```

Using icons with breadcrumbs.

```jsx
import Breadcrumbs, { Breadcrumb } from "./Breadcrumbs";
import { BrowserRouter as Router, Link } from "react-router-dom";

const HomeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 0 24 24"
    width="24"
  >
    <path d="M9.984 20.016h-4.969v-8.016h-3l9.984-9 9.984 9h-3v8.016h-4.969v-6h-4.031v6z"></path>
  </svg>
);

<Router>
  <Breadcrumbs>
    <Breadcrumb>
      <Link to="/">
        <HomeIcon />
        Home
      </Link>
    </Breadcrumb>
    <Breadcrumb>
      <Link to="/about">About</Link>
    </Breadcrumb>
    <Breadcrumb>
      <Link to="/author">Author</Link>
    </Breadcrumb>
  </Breadcrumbs>
</Router>;
```

You can also use another variant called "triangle" by passing the variant prop with the value "triangle".

```jsx
import Breadcrumbs, { Breadcrumb } from "./Breadcrumbs";
import { BrowserRouter as Router, Link } from "react-router-dom";

<Router>
  <Breadcrumbs variant="triangle">
    <Breadcrumb>
      <Link to="/">Home</Link>
    </Breadcrumb>
    <Breadcrumb>
      <Link to="/about">About</Link>
    </Breadcrumb>
    <Breadcrumb>
      <Link to="/author">Author</Link>
    </Breadcrumb>
  </Breadcrumbs>
</Router>;
```
