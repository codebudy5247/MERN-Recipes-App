import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Topbar"
import Home from "./Components/Home"
import Form from "./Components/Form"


function App() {
  return (
    <div className="App">
    <Router>
    <Fragment>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/create-recipe" component={Form} />
          </Switch>
        
        
     
    </Fragment>
  </Router>
    </div>
  );
}

export default App;
