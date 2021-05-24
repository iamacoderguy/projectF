import "./Utilities.css";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./screens/Home";
import Footer from "./components/Footer";
import Features from "./screens/Features";
import Docs from "./screens/Docs";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/features" exact>
          <Features />
        </Route>

        <Route path="/docs" exact>
          <Docs />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
