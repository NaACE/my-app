import React from "react";
import "phaser";

import Game from "../../public/games/Game.js";

/* img */
import wallpaper from '../../public/site/wallpaper/virus.png';
import dog_l from "../../public/site/dog l.gif";
import dog_r from "../../public/site/dog r.gif";

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