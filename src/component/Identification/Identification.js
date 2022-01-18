import React from "react";
import "../Identification/Identification.css";

import "../Identification/Script";

class Identification extends React.Component {
  render() {
    //const { register, formState: { errors }, handleSubmit } = userForm();

    

    return (
      <div></div>
    );
  }
}

function Body() {
  return (
    <>
      <nav class="container mt-4">
        <div class="post">
          <div class="container">
            <input id="signin" type="radio" name="tab" checked="checked" />
            <input id="register" type="radio" name="tab" />

            <div class="pages">
              <div class="page">
                <div class="input">
                  <div class="title">USERNAME</div>
                  <input
                    class="text"
                    type="text"
                    name="user_name"
                    id="user_name"
                    value="test1"
                  />
                </div>
                <div class="input">
                  <div class="title">PASSWORD</div>
                  <input
                    class="text"
                    type="password"
                    name="password"
                    id="password"
                    value="test1"
                  />
                </div>
                <div class="input">
                  <input type="submit" value="SING IN" id="sign_in" />
                </div>
              </div>

              <div class="page signup">
                <div class="input">
                  <div class="title">USERNAME</div>
                  <input
                    class="text"
                    type="text"
                    placeholder=""
                    name="user-name-1"
                    id="user_name_1"
                    value="test2"
                  />
                </div>
                <div class="input">
                  <div class="title">PASSWORD</div>
                  <input
                    class="text"
                    type="password"
                    placeholder=""
                    name="passsword-1"
                    id="password_1"
                    value="test2"
                  />
                </div>
                <div class="input">
                  <input type="submit" value="SIGN ME UP!" id="login" />
                </div>
              </div>
            </div>
            <div class="tabs">
              <label class="tab text" for="signin">
                Sign In
              </label>
              <label class="tab text" for="register">
                Register
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Identification;
