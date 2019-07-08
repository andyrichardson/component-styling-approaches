import React, { FC } from "react";
import { Card, CardHeading, Flex } from "./components";
import styles from "./UserCard.module.scss";

export const UserCard: FC = () => (
  <Flex direction="row">
    <Card>
      <CardHeading className={styles.heading} />
    </Card>
  </Flex>
);
