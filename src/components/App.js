import React from "react";
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
          <Route path = "/Monday">
            <Monday />
          </Route>
          <Route path = "/Tuesday">
            <Tuesday />
          </Route>
          <Route path = "/Wednesday">
            <Wednesday />
          </Route>
          <Route path = "/Thursday">
            <Thursday />
          </Route>
          <Route path = "/Friday">
            <Friday />
          </Route>
          <Route path = "/Saturday">
            <Saturday />
          </Route>
          <Route path = "/Sunday">
            <Sunday />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
