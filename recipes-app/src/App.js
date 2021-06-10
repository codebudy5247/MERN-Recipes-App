import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Topbar"
import Home from "./Components/Home"
import Form from "./Components/Form"
import PostDetails from "./Components/RecipeDetails"



function App() {
  return (
    <div className="App">
    <Router>
    <Fragment>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/create-recipe" component={Form} />
            <Route exact path="/post/:id" component={PostDetails} />
          </Switch>
        
        
     
    </Fragment>
  </Router>
    </div>
  );
}

export default App;
