import React from "react";
import "../Top/Top.css";

/* img */
import thanos from "../../public/site/thanos.gif";
import avatar from "../../public/avatar.png";


class Top extends React.Component {
  render() {
    return <Body />;
  }
}

function Body() {
  return (
    <>
      <nav class="container mt-4">
        <div class="post">
          <div class="thanos">
            <img src={thanos} />
          </div>

          <hr />

          <div class="top-users">
            <table>
              <tr>
                <th>#</th>
                <th>Avatar</th>
                <th>Nickname</th>
                <th>Scores</th>
              </tr>
              <tr>
                <td>{1}</td>
                <td>
                  <img src={avatar} />
                </td>
                <td>Na_ACE</td>
                <td>1000</td>
              </tr>
              <tr>
                <td>{2}</td>
                <td>
                  <img src={avatar} />
                </td>
                <td>Na_ACE</td>
                <td>1000</td>
              </tr>
              <tr>
                <td>{3}</td>
                <td>
                  <img src={avatar} />
                </td>
                <td>Na_ACE</td>
                <td>1000</td>
              </tr>
            </table>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Top;