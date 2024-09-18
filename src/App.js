import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FirstPage from "./pages/FirstPage";
import LoginRegister from "./pages/LoginRegister";

//!--authentication

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/login" element={<LoginRegister />} />
      </Routes>
    </div>
  );
}

export default App;
