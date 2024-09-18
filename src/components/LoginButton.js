import React from "react";
import { useNavigate } from "react-router-dom";

const LoginButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <button
      style={{
        padding: "10px 20px",
        backgroundColor: "#007bff", // Bootstrap primary color
        color: "#fff",
        border: "none",
        borderRadius: "10px",
        cursor: "pointer",
        zIndex: 1000, // Ensure the button is on top
      }}
      onClick={handleClick}
    >
      Login
    </button>
  );
};

export default LoginButton;
