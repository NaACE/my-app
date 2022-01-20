import React from "react";
import "phaser";

//import Phaser from 'phaser3-react';
//import "../Virus/Virus.css";

//import Phaser from '../../public/games/phaser.min.js';
//import Index from '../../public/games/index';
//import Game from '../../public/games/index.js';
//import '../../public/'

//import Index from '../../public/games/index.js';
import Game from "../../public/games/Game.js";
//import Index from "../../public/games/index.js";

/* img */
import wallpaper from '../../public/site/wallpaper/virus.png';
import dog_l from "../../public/site/dog l.gif";
import dog_r from "../../public/site/dog r.gif";

class Virus extends React.Component {
  render() {
    document.body.style.backgroundImage = "url(" + wallpaper + ")";
    return (
      <>
        {/* {Phaser} */}
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
          <img src={dog_l}/>
          <div className="col">
            <div id="game"></div>
          </div>
          <img src={dog_r}/>
        </div>
      </div>
    </>
  );
}

export default Virus;