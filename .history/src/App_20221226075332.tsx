import React from "react";
import { Routes, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { CartPage } from "./pages/CartPage";
import { GamePage } from "./pages/GamePage";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/CartPage" element={<CartPage />} />
        <Route path="/GamePage" element={<GamePage />} />
      </Routes>
    </div>
  );
}

export default App;
