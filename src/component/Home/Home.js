import React from "react";
import "../Home/Home.css";

/* img */
import avatar from "../../public/avatar.png";
import fire from "../../public/site/fire.gif";

class Home extends React.Component {
  render() {
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
    <nav class="container mt-4">
      <div class="post">
        <div class="info">
          <div>
            <img src={avatar} />
            <span>Na_ACE</span>
          </div>
        </div>
        <hr />
        <div class="message">
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

      <div class="post">
        <div class="info">
          <div>
            <img src={avatar} />
            <span>Na_ACE</span>
          </div>
        </div>
        <hr />
        <div class="message">
          <span>Welcome! Our site is at the beta testing stage</span>
        </div>
      </div>

      <div class="post">
        <div class="info">
          <div>
            <img src={avatar} />
            <span>Na_ACE</span>
          </div>
        </div>
        <hr />
        <div class="message">
          <span>Welcome! Our site is at the beta testing stage</span>
        </div>
      </div>

      <div class="post">
        <div class="info">
          <div>
            <img src={avatar} />
            <span>Na_ACE</span>
          </div>
        </div>
        <hr />
        <div class="message">
          <span>Welcome! Our site is at the beta testing stage</span>
        </div>
      </div>

      <div class="post">
        <div class="info">
          <div>
            <img src={avatar} />
            <span>Na_ACE</span>
          </div>
        </div>
        <hr />
        <div class="message">
          <span>We have this wonderful site</span>
        </div>
      </div>
    </nav>
  );
}

function Fire() {
  return (
    <div class="style_ignore">
      <img src={fire} />
      <img src={fire} />
      <img src={fire} />
      <img src={fire} />
      <img src={fire} />
    </div>
  );
}

export default Home;