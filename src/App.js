import React from "react";
import Home from "./Home";
import Header from "./Header";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Checkout from "./Checkout";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Route path={"/"}>
          <Home />
        </Route>
        <Route path={"/chekout"}>
          <Checkout />
        </Route>
      </Router>
    </div>
  );
}

export default App;
