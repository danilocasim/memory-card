import "./styles/App.css";
import { useState } from "react";
import { HelloWorld } from "./components/HelloWorld";

export function App() {
  return <HelloWorld name={"World"}></HelloWorld>;
}

export default App;
