import React from "react";
import { Container } from "@material-ui/core";
import LeftDrawer from "./components/LeftDrawer";

function App() {
  return (
    <Container maxWidth="lg">
      <LeftDrawer />
      <div>Hello worlds</div>
    </Container>
  );
}

export default App;
