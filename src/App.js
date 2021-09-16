import "bootswatch/dist/lux/bootstrap.min.css";
import Nav from "./components/Nav";
import About from "./components/About"
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from "./components/Home";


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <div className='content'>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/aboutme">
              <About />
            </Route>
            <Route exact path="/portfolio">
              <Portfolio />
            </Route>
            <Route exact path="/resume">
              <Resume />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
