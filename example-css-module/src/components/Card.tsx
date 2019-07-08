import React, { FC } from "react";
import styles from "./Card.modules.scss";

export const Card: FC<JSX.IntrinsicElements["section"]> = ({
  className = "",
  ...props
}) => {
  return <section {...props} className={`${styles.card} ${className}`} />;
};

export const CardHeading: FC<JSX.IntrinsicElements["section"]> = ({
  className,
  ...props
}) => {
  return <h3 {...props} className={`${styles.heading} ${className}`} />;
};
