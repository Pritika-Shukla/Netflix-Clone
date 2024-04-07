import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Backgroundimage from "../../components/Backgroundimage";
import "./Signup.css";
import Header from "../../components/Header";
import { firebaseAuth } from "../../utils/firebase-config";
export default function Signup() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleSignIn = async () => {
    try {
      const {email,password}=formValues
       await createUserWithEmailAndPassword(firebaseAuth,email,password);
    } catch (err) {
      console.log(err);
    }
  };
  onAuthStateChanged(firebaseAuth,(currentUser)=>{
    if(currentUser) navigate("/"); 
  })
  return (
    <>
      <Backgroundimage />
      <div className="containerStyle">
        <div className="Header">
          <Header login />
        </div>
        <div className="text">
          <h1>Unlimited movies, Tv shows and more</h1>
          <h4>Watch anywhere. Cancel anytime.</h4>
          <h6>
            Ready to watch? Enter your email to create or restart membership
          </h6>
        </div>
        <div className="form">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="inp"
            value={formValues.email}
            onChange={(e) =>
              setFormValues({
                ...formValues,
                [e.target.name]: e.target.value,
              })
            }
          />
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
          {/* <button className="btn" style={{ padding: "1.1rem" }}>
            Get Started
          </button> */}
        </div>
        <button
          className="btn"
          style={{ marginTop: "18px" }}
          onClick={handleSignIn}
        >
          Sign In
        </button>
      </div>
    </>
  );
}
