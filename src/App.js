import React from 'react';
import './App.css';
import Header from './components/headerComponent/header';
import Home from './components/homeComponent/home';
import About from './components/aboutusComponent/aboutUs';
import OurProject from './components/ourProject/project';
import Contact from './components/contactusComponent/contactUs';

import { BrowserRouter as Router,
  Switch,
  Route,
   } from "react-router-dom"
function App() {
  return (
    <div>
      <Header />
    <Router>
    <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/our_projects" component={OurProject} />
          <Route exact path="/contact" component={Contact} />
         

        </Switch>
    </Router>
      
     
      
    </div>
    
  );
}

export default App;
