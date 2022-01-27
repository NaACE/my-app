import React from "react";
import "phaser";

import Game from '../Virus/Game.js';

/* img */
import wallpaper from '../Virus/wallpaper.png';
import dog_l from "../Virus/dog l.gif";
import dog_r from "../Virus/dog r.gif";

class Virus extends React.Component {
  render() {
    document.body.style.backgroundImage = "url(" + wallpaper + ")";
    return (
      <>
        <Body />
        <Game />
      </>
    )
  }
}

function Body() {
  return (
    <>
      <div className="container mt-5">
        <div className="row rowBg align-items-center">
          <img src={dog_l} style={{width: '200px'}}/>
          <div className="col">
            <div id="game"></div>
          </div>
          <img src={dog_r} style={{width: '200px'}}/>
        </div>
      </div>
    </>
  );
}

export default Virus;