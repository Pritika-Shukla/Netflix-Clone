import React from "react";
import Backgroundimage from "../../components/Backgroundimage";
import "./Signup.css";
import Header from "../../components/Header";
export default function Signup() {
  return (
    <>
      <Backgroundimage />
      <div className="containerStyle">
      <div className="Header">
          <Header login/>
        </div>
        <div className="text">
          <h1>Unlimited movies, Tv shows and more</h1>
          <h4>Watch anywhere. Cancel anytime.</h4>
          <h6>
            Ready to watch? Enter your email to create or restart membership
          </h6>
        </div>
        <div className="form">
          <input type="email" name="email" placeholder="Email Address" className="inp"/>
          {/* <input type="password" name="password" placeholder="Password" /> */}
          <button className="btn" style={{padding:'1.1rem',}} >Get Started</button>
        </div>
        <button className="btn">Login</button>
      </div>
    </>
  );
}
