import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact>
          <div>Home</div>
        </Route>

        <Route path="/features" exact>
          <div>Features</div>
        </Route>

        <Route path="/docs" exact>
          <div>Docs</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
