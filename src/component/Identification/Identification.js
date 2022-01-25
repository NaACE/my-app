import React from "react";

import "../Identification/Identification.css";
import "../Identification/Script";

/* img */
import wallpaper from "../../public/site/wallpaper/identification.png";

class Identification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      radio: 'signin',
      gmail: '',
      pass: '',
      repass: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);

    this.handleRadio = this.handleRadio.bind(this);

    this.handleEmail = this.handleEmail.bind(this);
    this.handlePass = this.handlePass.bind(this);
    this.handleRepass = this.handleRepass.bind(this);
  }

  /////////////////////////////////////////////////////
  handleRadio(event) {
    this.setState({radio: event.target.value});
  }


  handleEmail(event) {
    this.setState({gmail: event.target.value});
  }

  handlePass(event) {
    this.setState({pass: event.target.value});
  }

  handleRepass(event) {
    this.setState({repass: event.target.value});
  }

  handleSubmit(event) {
    alert('radio: ' + this.state.radio + ', gmail: ' + this.state.gmail + ", pass: " + this.state.pass + ", repass: " + this.state.repass);
    // По идее сдесь должено быть обращение к bd

    


    event.preventDefault();
  }

  render() {
    document.body.style.backgroundImage = "url(" + wallpaper + ")";

    return (
      <nav className="container mt-4">
        <div className="post">
          <div className="container">
            <form onSubmit={this.handleSubmit}>
              <input id="signin" name="action" type="radio" value="signin" onChange={this.handleRadio} defaultChecked={true}/>
              <label htmlFor="signin">Sign in</label>
              <input id="signup" name="action" type="radio" value="signup" onChange={this.handleRadio} />
              <label htmlFor="signup">Sign up</label>
              <input id="reset" name="action" type="radio" value="reset" onChange={this.handleRadio} />
              <label htmlFor="reset">Reset</label>
              <div id="wrapper">
                <div id="arrow"></div>
                <input id="email" placeholder="Email" type="text" value={this.state.email} onChange={this.handleEmail} />
                <input id="pass" placeholder="Password" type="password" value={this.state.pass} onChange={this.handlePass} />
                <input id="repass" placeholder="Repeat password" type="password" value={this.state.repass} onChange={this.handleRepass} />
              </div>
              <button type="submit">
                <span>
                  Reset password
                  <br />
                  Sign in
                  <br />
                  Sign up
                </span>
              </button>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default Identification;