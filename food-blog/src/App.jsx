import React from "react";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import HomePage from "./pages/HomePage";
import FoodNavbar from "./components/FoodNavbar";
import Footer from "./components/Footer";
import AddBlog from "./pages/AddBlog";
import AboutPage from "./pages/AboutPage";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";

const App = () => {
  const location = useLocation();

  const hideComponent = ["/login", "/register", "/ResetPassword"];
  const condition = hideComponent.includes(location.pathname);
  return (
    <>
      <div className="no-scrollbar">
        {!condition && <FoodNavbar />}

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/ResetPassword" element={<ResetPassword />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/addblog" element={<AddBlog />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
        {!condition && <Footer />}
      </div>
    </>
  );
};

export default App;
