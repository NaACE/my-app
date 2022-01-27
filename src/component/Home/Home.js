import React from "react";

/* img */
import wallpaper from '../Home/wallpaper.png'
import fire from "../Home/fire.gif";
import avatar from "../Home/avatar.png";

class Home extends React.Component {
  render() {
    document.body.style.backgroundImage = "url(" + wallpaper + ")";

    return (
      <div>
        <Body />

        <Fire />
      </div>
    );
  }
}

function Body() {
  return (
    <nav className="container mt-4">
      <div className="post">
        <div className="info">
          <div>
            <img src={avatar} />
            <span>Na_ACE</span>
          </div>
        </div>
        <hr />
        <div className="message">
          <span>
            Changes in the site:
            <li>
              The library began to be used for the site bootstrap, because of
              which the site had to be redone again.
            </li>
            <li>New features were added (this is how it should be).</li>
            <li>The game shows no signs of life.</li>
          </span>
        </div>
      </div>

      <div className="post">
        <div className="info">
          <div>
            <img src={avatar} />
            <span>Na_ACE</span>
          </div>
        </div>
        <hr />
        <div className="message">
          <span>Welcome! Our site is at the beta testing stage</span>
        </div>
      </div>

      <div className="post">
        <div className="info">
          <div>
            <img src={avatar} />
            <span>Na_ACE</span>
          </div>
        </div>
        <hr />
        <div className="message">
          <span>Welcome! Our site is at the beta testing stage</span>
        </div>
      </div>

      <div className="post">
        <div className="info">
          <div>
            <img src={avatar} />
            <span>Na_ACE</span>
          </div>
        </div>
        <hr />
        <div className="message">
          <span>Welcome! Our site is at the beta testing stage</span>
        </div>
      </div>

      <div className="post">
        <div className="info">
          <div>
            <img src={avatar} />
            <span>Na_ACE</span>
          </div>
        </div>
        <hr />
        <div className="message">
          <span>We have this wonderful site</span>
        </div>
      </div>
    </nav>
  );
}

function Fire() {
  return (
    <div className="style_ignore">
      <img src={fire} />
      <img src={fire} />
      <img src={fire} />
      <img src={fire} />
      <img src={fire} />
    </div>
  );
}

export default Home;