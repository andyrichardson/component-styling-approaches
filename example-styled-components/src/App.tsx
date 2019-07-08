import React from "react";
import { ThemeProvider } from "styled-components";
import { UserCard } from "./UserCard";

// Theme could be imported from '@namely/theme' or similar library
const theme = {
  colors: {
    red: "#f00",
    blue: "#008"
  },
  spacing: {
    small: "20px"
  }
};

export const App = () => (
  <ThemeProvider theme={theme}>
    <UserCard />
  </ThemeProvider>
);

export default App;
