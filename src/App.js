import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';
import Team from './pages/team';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
import Blog from './pages/blog';


export default function App(){

  return (
    <Router>
    <Switch>

   
    <Route path = "/blog" component={Blog}/>
    <Route path = "/contact" component={Contact}/>
    <Route path = "/portfolio" component={Portfolio}/>
  <Route path = "/team" component={Team}/>
<Route path = "/services" component={Services}/>
    <Route path = "/about" component={About}/>
  <Route path = "/" component={Home}/>


    </Switch>

    </Router>
  );
}
