import React from 'react';
import '../Library/Library.css';

/* icons */
import icon from './Icons/virus v2.png'
import wallpaper from '../Library/wallpaper.png';

class Games extends React.Component {
  render() {
    document.body.style.backgroundImage = "url(" + wallpaper + ")";

    return (
      <Body />
    )
  }
}

function Body() {
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4">
            <div className="product">
              <a href="/virus">
                <div className="image">
                  <img src={icon} />
                </div>

                <div>
                  <hr />
                  <div className="center">
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