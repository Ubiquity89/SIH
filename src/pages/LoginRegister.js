import React from "react";
import { useNavigate } from "react-router-dom";

function LoginRegister() {
  function SwitchContent() {
    const content = document.getElementById("content");
    const registerBtn = document.getElementById("register");
    const loginBtn = document.getElementById("login");

    registerBtn.addEventListener("click", () => {
      content.classList.add("active");
    });

    loginBtn.addEventListener("click", () => {
      content.classList.remove("active");
    });
  }

  // State for registration
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [dob, setDob] = React.useState("");

  // State for login
  const [loginEmail, setLoginEmail] = React.useState("");
  const [loginPassword, setLoginPassword] = React.useState("");

  const navigate = useNavigate();

  function register(event) {
    event.preventDefault();
    // Simulate registration success
    alert("Registration successful!");
    navigate("/homepage");
  }

  function login(event) {
    event.preventDefault();
    // Simulate login success
    alert("Login successful!");
    navigate("/homepage");
  }

  return (
    <div
      className="content justify-content-center align-items-center d-flex shadow-lg"
      id="content"
    >
      {/* register form */}
      <div className="col-md-6 d-flex justify-content-center">
        <form onSubmit={register}>
          <div className="header-text mb-4">
            <h1>Create Account</h1>
          </div>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control form-control-lg bg-light fs-6"
              placeholder="Name"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="email"
              className="form-control form-control-lg bg-light fs-6"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="password"
              className="form-control form-control-lg bg-light fs-6"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="date"
              className="form-control form-control-lg bg-light fs-6"
              placeholder="Date of Birth"
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
          <div className="input-group mb-3 justify-content-center">
            <button className="btn border-white text-white w-50 fs-6">
              Register
            </button>
          </div>
        </form>
      </div>

      {/* login form */}
      <div className="col-md-6 right-box">
        <form onSubmit={login}>
          <div className="header-text mb-4">
            <h1>Sign In</h1>
          </div>
          <div className="input-group mb-3">
            <input
              type="email"
              className="form-control form-control-lg bg-light fs-6"
              placeholder="Email"
              onChange={(e) => setLoginEmail(e.target.value)}
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="password"
              className="form-control form-control-lg bg-light fs-6"
              placeholder="Password"
              onChange={(e) => setLoginPassword(e.target.value)}
            />
          </div>
          <div className="input-group mb-5 d-flex justify-content-between">
            <div className="form-check">
              <input type="checkbox" className="form-check-input" />
              <label className="form-check-label text-secondary">
                <small>Remember me</small>
              </label>
            </div>
            <div className="forgot">
              <small>
                <a href="#">Forgot Password?</a>
              </small>
            </div>
          </div>
          <div className="input-group mb-3 justify-content-center">
            <button className="btn border-white text-white w-50 fs-6">
              Login
            </button>
          </div>
        </form>
      </div>

      {/* switch panel */}
      <div className="switch-content">
        <div className="switch">
          <div className="switch-panel switch-left">
            <h1>Hello, Again</h1>
            <p>We are happy to see you back</p>
            <button
              className="hidden btn border-white text-white w-50 fs-6"
              id="login"
              onClick={SwitchContent}
            >
              Login
            </button>
          </div>

          <div className="switch-panel switch-right">
            <h1>Welcome</h1>
            <p>Join Our Unique Platform, Explore a new Experience </p>
            <button
              className="hidden btn border-white text-white w-50 fs-6"
              id="register"
              onClick={SwitchContent}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginRegister;
