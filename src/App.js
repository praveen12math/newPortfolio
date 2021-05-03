import React from 'react';
import Home from './Home.';
import {Switch, BrowserRouter, Route} from "react-router-dom"
import Project from './Project';

const App = () => {
  return ( 
    <BrowserRouter>
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/project" component={Project} />
  </Switch>
  </BrowserRouter>
   );
}
 
export default App;