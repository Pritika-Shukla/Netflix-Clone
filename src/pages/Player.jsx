import React from "react";
import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";
import video from "../assets/trailer.mp4";
import { useNavigate } from "react-router-dom";
function Player() {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="player">
        <div className="back">
          <BsArrowLeft  onClick={()=> navigate(-1)}/>
        </div>
        <video src={video} autoPlay loop controls muted></video>
      </div>
    </Container>
  );
}

export default Player;

const Container = styled.div`
.player{
    height:100vh;
    width:100vw;

}
video{
    height:100vh;
    width:100vw;
}
.back{
    position:absolute;
    z-index:1;
    color:white;
    font-size:1.5rem;
    margin:3rem;
    cursor:pointer;
}

`;
