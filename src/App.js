import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "font-awesome/css/font-awesome.min.css";

//Pages
import UserDashboard from "./pages/UserDashboard/UserDashboard";
import LandingPage from "./pages/landingpage/landingpage";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword"
//Css Animation
import AOS from "aos";
import "aos/dist/aos.css";


const App = () => {
  /*Css Animation*/
  AOS.init({ duration: 1500, once: true });

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/userdashboard" element={<UserDashboard />} />
          <Route exact path="/admindashboard" element={<AdminDashboard />} />
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/forgetpassword" element={<ForgetPassword />} />




        </Routes>
      </Router>
    </div>
  );
};

export default App;
