import React from "react";
import "./App.scss";
import Layout from "./components/layouts/NavBar";
import Home from "./components/high-order/Home";
import Uno from "./components/high-order/1-Uno/Uno";
import Dos from "./components/high-order/2-Dos/Dos";
// import Jugadores from "./components/high-order/Jugadores";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App(): JSX.Element {
  return (
    <div className="App">
      <Router>
        <Layout></Layout>
        <Switch>
          {/* <Route path="/jugadores">
            <Jugadores></Jugadores>
          </Route> */}
          <Route path="/proyectos/dos" component={Dos}></Route>
          <Route path="/proyectos/uno" component={Uno}></Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
