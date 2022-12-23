import React from "react";
import { Header } from "./components/Header";
import logo from "./logo.svg";
import {HomePage} from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
