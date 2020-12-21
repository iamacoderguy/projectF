import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Watchlist from "./components/Watchlist";
import Watched from "./components/Watched";
import Add from "./components/Add";
import { GlobalProvider } from "./context/GlobalState";

// TODO https://medium.com/better-programming/how-to-deploy-your-react-app-to-heroku-aedc28b218ae
// heroku git:remote -a az-projecta
// git subtree push --prefix path-to-sub-direction heroku master

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />

        <Switch>
          <Route path="/" exact>
            <Watchlist />
          </Route>

          <Route path="/watched">
            <Watched />
          </Route>

          <Route path="/add">
            <Add />
          </Route>
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
