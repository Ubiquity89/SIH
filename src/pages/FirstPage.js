import React from "react";
import { Navbar, Nav } from "react-bootstrap"; // Import Bootstrap components
// import LoginButton from "../components/LoginButton";
import Navbar1 from "../components/Navbar1";

const FirstPage = () => {
  return (
    <div className="page-container">
      <video className="background-video" autoPlay muted loop>
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Navbar1 />
      {/* <LoginButton /> */}
    </div>
  );
};

export default FirstPage;
