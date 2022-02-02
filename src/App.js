import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";

import {
  About,
  Auth,
  Cart,
  CheckOut,
  Error,
  Home,
  Private,
  Products,
  SingleProduct,
} from "./pages";

function App() {
  return (
    <Auth>
      <Router>
        <Navbar />
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>

          <Private exact path="/checkout">
            <CheckOut />
          </Private>

          <Route exact path="/products">
            <Products />
          </Route>
          <Route exact path="/singleProduct/:id">
            <SingleProduct />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </Auth>
  );
}

export default App;
