import React, {useEffect, useState} from "react";
import {Route, Switch} from "react-router-dom";
import Home from "./Home";
import NavBar from './NavBar';
import Monday from './Monday';
import Tuesday from './Tuesday';
import Wednesday from './Wednesday';
import Thursday from './Thursday';
import Friday from './Friday';
import Saturday from './Saturday';
import Sunday from './Sunday';


function App() {


  return (
    <div className="App">
      <NavBar />
        <Switch>
          <Route exact path = "/">
            <Home/>
          </Route>
          <Route exact path = "/Monday">
            <Monday />
          </Route>
          <Route exact path = "/Tuesday">
            <Tuesday />
          </Route>
          <Route exact path = "/Wednesday">
            <Wednesday />
          </Route>
          <Route exact path = "/Thursday">
            <Thursday />
          </Route>
          <Route exact path = "/Friday">
            <Friday />
          </Route>
          <Route exact path = "/Saturday">
            <Saturday />
          </Route>
          <Route exact path = "/Sunday">
            <Sunday />
          </Route>
        </Switch>
      
    </div>
  );
}

export default App;
