import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";
import Alert from "./components/alert/Alert";
const Wrap = styled.section``;
function App() {
  return <Wrap>
    <Alert closed>1111</Alert>
  </Wrap>;
}

export default App;
