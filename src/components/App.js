import React from "react";
import {Route, Switch} from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import HomePage from "./HomePage";

function App() {


  return (
    <div className="App">
      <NavBar />
        <Switch>
          <Route exact path = "/">
            <HomePage />
          </Route>
          <Route exact path = "/library">
            <Home/>
          </Route>
        </Switch>  
    </div>
  );
}

export default App;
