import React from "react";
import "./intro.css";
import stefanWithCamera from "./img/stefan_camera.png";
// import { styled } from "@mui/material/styles";

// import Container from "@mui/material/Container";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Grid";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

function Intro() {
  return (
    <div className="intro">
      <div className="nav-bar"></div>

      <div className="i-right">
        <div className="triangle-right"></div>
        <img className="stefan-camera" src={stefanWithCamera} alt="" /> 
      </div>

      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hi! My name is</h2>
          <h1 className="i-name">Ștefan Paiu</h1>
          <div className="i-title">
            <div className="i-title-circle"></div>
            <div className="i-title-wrapper">
              <div className="i-title-item">Content Creator</div>
              <div className="i-title-item">Filmmaker</div>
              <div className="i-title-item">Copywriter</div>
              <div className="i-title-item">Podcast Producer</div>
              <div className="i-title-item">Language Tutor</div>
            </div>
          </div>
        </div>
        <div className="i-button">
          <button className="i-button-glimpse">Take a Glimpse</button>
        </div>
      </div>
    </div>
    
  );
}

export default Intro;
