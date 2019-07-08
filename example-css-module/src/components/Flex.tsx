import React, {
  Children,
  useMemo,
  Fragment,
  ReactElement,
  ComponentType,
  cloneElement,
  FC
} from "react";
// import styles from "./Flex.modules.scss";

interface FlexProps {
  direction?: "column" | "row";
  children: ReactElement<
    { className?: string },
    ComponentType<{ className?: string }>
  >;
}

export const Flex: FC<FlexProps> = ({ children, direction = "row" }) => {
  const parsedChildren = useMemo(() => Children.toArray(children), [children]);

  // Only allow one child
  if (parsedChildren.length !== 1) {
    throw Error(
      `Incorrect number of children passed to Flex: ${parsedChildren.length}`
    );
  }

  // Disallow fragments
  if (parsedChildren[0]!.type === Fragment) {
    throw Error(`Incorrect child type passed to Flex: Fragment`);
  }

  // Creates another instance of the child element and changes the className property
  return useMemo(() => {
    const directionClass = styles[`direction-${direction}`];
    return cloneElement(parsedChildren[0], {
      className: `${parsedChildren[0].props.className} ${
        styles.flex
      } ${directionClass}`
    });
  }, [parsedChildren, direction]);
};
