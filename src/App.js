import React, { Component } from "react";
import "./App.css";
import Header from "./components/headerComponent/header";
import Home from "./components/homeComponent/home";
import About from "./components/aboutusComponent/aboutUs";
import OurProject from "./components/ourProject/project";
import Contact from "./components/contactusComponent/contactUs";
import HouseList from "./components/houseListComponent/houseList";


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
 class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    }
  }
 render() {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home cardItem={this.state.cardItem} />
          </Route>   
          <Route exact path="/about" component={About} />
          <Route exact path="/our_projects" component={OurProject} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/:cardId/:cardTitle"  component={HouseList} />
         
          
        </Switch>
      </Router>
    </div>
  );
}
}

export default App;
