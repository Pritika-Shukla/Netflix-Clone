import React, { useState } from 'react'
import Navbar from "../../components/Navbar";
import backgroundImage from "../../assets/home.jpg";
import MovieLogo from "../../assets/homeTitle.webp";
import { FaPlay } from 'react-icons/fa';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import styled from 'styled-components';
import { Navigate, useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../../utils/firebase-config';
export default function Netflix() {
const[isScrolled,setIsScrolled]=useState(false);
const navigate = useNavigate();

window.onscroll= () =>{
    setIsScrolled(window.pageYOffset === 0 ? false:true);
    return () =>(window.onscroll=null);
}
onAuthStateChanged(firebaseAuth, (currentUser) => {
  if (!currentUser) navigate("/login");
});
  return (
<Container>
    <Navbar isScrolled={isScrolled}/>
    <div className="hero">
      <img src={backgroundImage} alt="back" className="background-image" />
      <div className="container ">
        <div className="logo">
          <img src={MovieLogo} alt="logo" />
        </div>
        <div className="buttons">
          <button onClick={()=> navigate("/player")}>
            <FaPlay />
            Play
          </button>
          <button>
            <AiOutlineInfoCircle/>More info
          </button>
        </div>
        </div>
      </div>
      </Container>
    
  )
}
const Container = styled.div`
  background-color: black;
  .hero {
    position: relative;
    .background-image {
      filter: brightness(60%);
    }
    img {
      height: 100vh;
      width: 100vw;
    }
    .container{
      position:absolute;
      bottom:5rem;
    }

.logo{
  img{
    width:100%;
    height:100%;
    margin-left:4rem;
  }
}
.buttons{
  display:flex;
 margin:5rem;
 gap:2rem;

button{
  display:flex;
  align-items:center;
  justify-content:center;
  font-size: 1.4rem;
  padding: 0.5rem;
  padding-left: 2rem;
padding-right: 2.4rem;
gap:.5rem;
  border-radius: 0.2rem;
  border:none;
 cursor:pointer;
 &:hover{
  background-color:rgba(109,109,110,1);
 }
  &:nth-of-type(2){
    background-color:rgba(109,109,110,0.7);
    color:white;
  } 
}

}

    
    
    
    
    
    
    
    
    
    
    
    `;
