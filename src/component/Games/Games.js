import React from 'react';
import '../Games/Games.css';

/* icons */
import game_icons from '../../public/site/game icons/virus v2.png';


class Games extends React.Component {
  render() {
    return (
      <Body />
    )
  }
}

function Body() {
  return (
    <>
      <div class="container mt-4">
        <div class="row">
          <div class="col-md-4">
            <div class="product">
              <a href="/virus">
                <div class="image">
                  <img src={game_icons} />
                </div>

                <div>
                  <hr />
                  <div class="center">
                    <h3>Virus v3</h3>
                  </div>
                  <hr />
                  <small>"Addictive gameplay realistic graphics and all this is not in this game"</small>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Games;