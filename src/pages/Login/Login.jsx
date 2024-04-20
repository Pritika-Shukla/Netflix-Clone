import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../../utils/firebase-config";
import BackgroundImage from "../../components/Backgroundimage";
import Header from "../../components/Header";

export default function Login() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleLogin = async () => { 
    try {
      await signInWithEmailAndPassword(firebaseAuth, formValues.email, formValues.password);
    } catch (error) {
      console.log(error.code);
    }
  };
  return (
    <>
      <BackgroundImage />
      <div className="Header">
      <Header/>
      </div>
      <div className="containerStyle">
      <h1>Login</h1>
        <div className="form">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="inp "
            value={formValues.email}
            onChange={(e) =>
              setFormValues({
                ...formValues,
                [e.target.name]: e.target.value,
              })
            }
          />
             <br />  <br />  <br />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="inp"
            value={formValues.password}
            onChange={(e) =>
              setFormValues({
                ...formValues,
                [e.target.name]: e.target.value,
              })
            }
          />
          <br />
          <button className="btn" style={{ marginTop: "18px" }} onClick={handleLogin}>
            Login
          </button>
        </div>
        {/* <p>Don't have an account?<a href="Signup" className="text-gray-400">SignUp</a></p> */}
      </div>
    </>
  );
}
