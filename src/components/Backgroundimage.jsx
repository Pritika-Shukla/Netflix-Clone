import React from 'react';
import background from "../assets/login.jpg";

const containerStyle = {
  width: '100%',
  height: '100vh',
  overflow:'hidden',
  top:0,
 left:0,
};
const imageStyle = {
  width: '100%',
  height: '100%',

};

export default function BackgroundImage() {
  return (
    <div style={containerStyle}>
      <img src={background} alt={background} style={imageStyle} />
    </div>
  );
}
