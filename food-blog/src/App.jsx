import React from "react";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import HomePage from "./pages/HomePage";


const App = () => {
  return (
    <>
      <div className="no-scrollbar">
        <BrowserRouter>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/ResetPassword" element={<ResetPassword />} />
            <Route path="/" element={<HomePage/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
