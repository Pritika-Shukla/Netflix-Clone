import React from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
function Header(props) {
  const navigate = useNavigate();
  return (
    <>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <button
        onClick={() => navigate(props.login ? "/login" : "signup")}
        className="btn"
      >
        {props.login ? "Log In" : "Sign In"}
      </button>
    </>
  );
}

export default Header;
