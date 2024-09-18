import React from "react";
import LoginButton from "./LoginButton";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ backgroundColor: "white", padding: "10px" }}
    >
      <div className="container-fluid">
        {/* Brand */}
        <a
          className="navbar-brand"
          href="#"
          style={{
            color: "#82257b",
            fontFamily: "Lora",
            fontSize: "30px",
            fontWeight: "bold",
          }}
        >
          <b>Institutions & Constitution</b>
        </a>

        {/* Navbar Toggler for Small Screens */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                style={{
                  fontSize: "18px",
                  color: "#82257b",
                  fontFamily: "Lora",
                  fontWeight: "bold",
                }}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                style={{
                  fontSize: "18px",
                  color: "#82257b",
                  fontFamily: "Lora",
                  fontWeight: "bold",
                  marginRight: "10px",
                }}
              >
                Features
              </a>
            </li>
          </ul>
        </div>

        {/* Login Button */}
        <div
          className="d-flex align-items-center"
          style={{ marginLeft: "auto" }}
        >
          <LoginButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
