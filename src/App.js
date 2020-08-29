import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Education from "./components/Education";
import {Route,Switch, Redirect} from 'react-router-dom';
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Error from "./components/Error";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
             <Route exact path="/portfolio" component={Home} />
              <Route exact path="/education" component={Education} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/contact" component={Contact} />
              <Route path="/error" component={Error} />
              <Redirect to="error" />
            </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
