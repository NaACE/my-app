import React from "react";
//import "../Virus/Virus.css";

import Phaser from '../../public/games/phaser.min.js';
import Index from '../../public/games/index.js';

/* img */
import dog_l from "../../public/site/dog l.gif";
import dog_r from "../../public/site/dog r.gif";

class Virus extends React.Component {
  render() {
    return <Body />;
  }
}

function Body() {
  return (
    <>
      <div class="container mt-5">
        <div class="row rowBg align-items-center">
          

          <div class="col">
            <div id="game"></div>
          </div>

          
        </div>
      </div>

      {Phaser}
      {Index}
    </>
  );
}

export default Virus;
