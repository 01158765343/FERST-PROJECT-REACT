import React from "react"
import './App.css';
import {Route , Switch } from "react-router-dom"

import Test from "./compnanet/test.jsx"
import Itms from "./compnanet/itms.jsx"
import Nav from "./compnanet/navBar.jsx"
import Cart from "./compnanet/cart"
import AApp from "./componant-hooks/app.jsx"


function App() {
  return (
    <div className="App">
      <Nav />
      <Test />
      <AApp />
      {/* <Switch> */}
      <Route path="/home" component={Itms} />
      <Route path="/myCart" component={Cart} />
      {/* </Switch> */}
      {/* <Cart /> */}

    </div>
  );
}

export default App;
