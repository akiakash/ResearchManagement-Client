import React from "react";
import Footer from "../Bars/Footer";
import Home1 from "./Home1";
import Home2 from "./Home2";
import NavBar from "../Bars/Header";
import Home3 from "./Home3";
import Home4 from "./Home4";

function MainHome() {
  return (
    <div>
      <NavBar />
      <Home1 />
      <Home2 />
      <Home3 />
      <Home4 />
      <Footer />
    </div>
  );
}

export default MainHome;
