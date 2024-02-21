import React, { useState } from "react";
import Backgroundimage from "../../components/Backgroundimage";
import "./Signup.css";
import Header from "../../components/Header";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../../utils/firebase-config";
export default function Signup() {
  const [formValues, setformValues] = useState({
    email: "",
  });
  const handleSignIn=async()=>{
  try{
const{email}=formValues;const password = prompt('Enter your password:');

await createUserWithEmailAndPassword(firebaseAuth,email,password);
  }catch(err){
console.log(err);
  }
  };
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
              setformValues({ ...formValues, [e.target.name]: e.target.value, })
            }
          />
          <input type="password" name="password" placeholder="Password" className="inp" />
          <button className="btn" style={{ padding: "1.1rem" }} onClick={handleSignIn}>
            Get Started
          </button>
        </div>
        <button className="btn" style={{marginTop:'18px'}}>Sign In</button>
      </div>
    </>
  );
}
