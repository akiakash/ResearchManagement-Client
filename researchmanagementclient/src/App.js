import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInSide from "./auth/SignInSide";
import SignUpSide from "./auth/SignUpSide";
import NavBar from "./Bars/Header";
import AboutUs from "./Components/AboutUs";
import Footer from "./Bars/Footer";
import Home1 from "./Home/Home1";
import MainHome from "./Home/MainHome";
import RegisterTopic from "./Components/RegisterTopic";
import RequestedStatus from "./Components/RequstedStatus";
import Logout from "./Components/Logout";
import RegisterForm from "./Components/RegisterForm";
import Header from "./Bars/Header";
import Request_Supervisor from "./Components/Request_Supervisor";
import StudentSubmition from "./Components/StudentSubmition";
import ViewMarks from "./Components/Marks_Management'/ViewMarks";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInSide />} />
          <Route path="/signup" element={<SignUpSide />} />
          <Route path="/signup" element={<SignUpSide />} />
          <Route path="/mainhome" element={<MainHome />} />
          <Route path="/registerform" element={<RegisterForm />} />
          <Route path="/registertopic" element={<RegisterTopic />} />
          <Route path="/request" element={<Request_Supervisor />} />
          <Route path="/studentsubmission" element={<StudentSubmition />} />
          <Route path="/viewmarks" element={<ViewMarks />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
