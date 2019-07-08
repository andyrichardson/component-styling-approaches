import React, { FC } from "react";
import styled from "styled-components";
import { Card, CardHeading } from "./components";

// A project-scoped component created from component primitives
export const UserCard: FC = () => (
  <UserCardContainer>
    <SpecialCardHeading>My Card's heading</SpecialCardHeading>
  </UserCardContainer>
);

const UserCardContainer = styled(Card)`
  display: flex;
  flex-direction: row;
`;

const SpecialCardHeading = styled(CardHeading)`
  color: red;
`;
