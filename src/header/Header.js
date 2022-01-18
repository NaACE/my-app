import React from "react";

class Header extends React.Component {
  render() {
    return (
      <nav class="navbar">
        <div class="container">
          <Left_components />

          <div class="navbar-wrap">
            <ul class="navbar-menu">
              <li>
                <a href="/identification">Sign In</a>
              </li>
              <li>
                <a href="/identification">Register</a>
              </li>

              <li>
                <a>{this.props.username}</a>
              </li>
              <li>
                <a href="/logout">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

function Left_components() {
  return (
    <div class="left_menu">
      <ul class="navbar-menu">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/games">Games</a>
        </li>
        <li>
          <a href="/top">Top players</a>
        </li>
      </ul>
    </div>
  );
}

export default Header;