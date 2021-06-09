import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Topbar"
import Home from "./Components/Home"


function App() {
  return (
    <div className="App">
    <Router>
    <Fragment>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        
        
     
    </Fragment>
  </Router>
    </div>
  );
}

export default App;
