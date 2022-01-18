import React from "react";
import Phaser from "phaser";

//import Phaser from 'phaser3-react';
//import "../Virus/Virus.css";

//import Phaser from '../../public/games/phaser.min.js';
import Index from '../../public/games/index.js';

//import Index from '../../public/games/index.js';

/* img */
import wallpaper from '../../public/site/wallpaper/virus.png';
import dog_l from "../../public/site/dog l.gif";
import dog_r from "../../public/site/dog r.gif";

class Virus extends React.Component {
  render() {
    document.body.style.backgroundImage = "url(" + wallpaper + ")";

    return(
    <>
    <Body/>

    {Phaser}
    {Index}
    </>
    )}
}

function Body() {
  return (
    <>
      <div className="container mt-5">
        <div className="row rowBg align-items-center">
          <div className="col">
            <div id="game"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Virus;