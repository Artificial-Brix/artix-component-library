import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";

const BreadcrumbWrapperv1 = styled.div`
  display: inline-block;
  margin-left: 1.2em;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    background: #ddd;
    padding: 0.7em;
    font-weight: bold;
    text-decoration: none;
    color: #444;
    position: relative;
    :hover {
      background: #99db76;
    }
    ::before {
      content: "";
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      border-width: 1.2em 0 1.3em 1em;
      border-style: solid;
      left: -1em;
      border-color: #ddd #ddd #ddd transparent;
    }
    :hover::before {
      border-color: #99db76 #99db76 #99db76 transparent;
    }
    ::after {
      content: "";
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      border-top: 1.1em solid transparent;
      border-bottom: 1.2em solid transparent;
      border-left: 1em solid #ddd;
      right: -1em;
    }
    :hover::after {
      border-left-color: #99db76;
    }
  }
`;

const BreadcrumbWrapperv2 = styled.div`
  padding: 5px;
  line-height: 26px;
  position: relative;
  margin-left: 0.6em;
  display: flex;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    text-decoration: none;
    color: #444;
    position: relative;
    ::after {
      content: "\\203A";
      margin-left: 3px;
      font-size: 2em;
      display: ${(props) => (props.lastChild ? "none" : "inline-block")};
      position: absolute;
      left: 100%;
      top: 50%;
      transform: translate(0, -60%);
    }
  }
`;

const BreadcrumbsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

export const Breadcrumb = (props) => {
  if (props.variant === "triangle") {
    return (
      <BreadcrumbWrapperv1 {...props}>{props.children}</BreadcrumbWrapperv1>
    );
  }
  return <BreadcrumbWrapperv2 {...props}>{props.children}</BreadcrumbWrapperv2>;
};

export default function (props) {
  const [childrenWithProps, setChildrenWithProps] = useState(null);

  //this code is used to pass the props passed to this component to all its child components
  useEffect(() => {
    if (!childrenWithProps) {
      const childrenLen = props.children.length;
      let tempChildrenArray = React.Children.map(
        props.children,
        (child, index) => {
          // checking isValidElement is the safe way and avoids a typescript error too
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              variant: props.variant,
              lastChild: index === childrenLen - 1,
            });
          }
          return child;
        }
      );
      setChildrenWithProps(tempChildrenArray);
    }
  }, [childrenWithProps]);

  console.log(childrenWithProps);
  return (
    <BreadcrumbsWrapper {...props}>{childrenWithProps}</BreadcrumbsWrapper>
  );
}
