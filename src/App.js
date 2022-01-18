import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./header/Header";

/* Страницы */
import Home from "./component/Home/Home";
import Games from "./component/Games/Games";
import Top from "./component/Top/Top";
import Virus from "./component/Virus/Virus";
import Identification from "./component/Identification/Identification";

/* <!-- Bootstrap --> */
import "./public/bootstrap-reboot.min.css";
import "./public/bootstrap-grid.min.css";

/* <!-- Шрифты --> */
import "./public/fonts/fonts.css";

// <-- Стили сайта -->
import "./Main.css";

function App() {
  return (
    <>
      <Header username="Name" />

      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/games" component={Games} />
          <Route path="/top" component={Top} />          
          <Route path="/virus" component={Virus} /> 
          <Route path="/identification" component={Identification} />
        </Switch>
      </Router>
    </>
  );
}

export default App;