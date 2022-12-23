import React from "react";
import { Routes, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { CartPage } from "./pages/CartPage";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/CartPage" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
