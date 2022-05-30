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
import RequstedStatus from "./Components/RequstedStatus";
import FindMembers from "./Components/FindMembers";
import ViewDocuments from "./Components/ViewDocuments";
import StudentSubmition from "./Components/StudentSubmition";
import ViewMarks from "./Components/Marks_Management'/ViewMarks";
function App() {
  return (
    // <div className="App">
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/" element={<SignInSide />} />
    //       <Route path="/signup" element={<SignUpSide />} />
    //       <Route path="/signup" element={<SignUpSide />} />
    //       <Route path="/aboutus" element={<AboutUs />} />
    //     </Routes>
    //   </BrowserRouter>
    // </div>
    <>
      
   
      <ViewMarks />
    </>
  );
}

export default App;
