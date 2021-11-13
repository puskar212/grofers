import "./App.css";
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import Navbar1 from "./components/Navbar";
import Home from "./Home";
import ItemSection from "./ItemSection";
import ParticularItem from "./ParticularItem";
import Cart from "./cart/Cart";

import { AppConsumer } from "./provider/AppProvider";

const App = () => {
  const [category, setCategory] = useState([]);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    (async () => {
      const a = await fetch(
        "https://powerful-dawn-74322.herokuapp.com/api/category"
      );
      const b = await a.json();
      const x = await fetch(
        "https://powerful-dawn-74322.herokuapp.com/api/product"
      );
      const y = await x.json();
      setCategory(b);
      setProduct(y);
    })();
  }, []);

  return (
    <AppConsumer>
      {(context) => {
        console.log(context);

        return (
          <>
            <Navbar1 />
            <div className="App">
              <Switch>
                <Route
                  exact
                  path="/"
                  component={() => (
                    <Home
                      product={product}
                      setProduct={setProduct}
                      category={category}
                      setCategory={setCategory}
                    />
                  )}
                />
                <Route
                  exact
                  path="/itemsection"
                  component={() => (
                    <ItemSection
                      product={product}
                      setProduct={setProduct}
                      category={category}
                      setCategory={setCategory}
                    />
                  )}
                />
                <Route
                  exact
                  path="/particularitem"
                  component={() => (
                    <ParticularItem
                      product={product}
                      setProduct={setProduct}
                      category={category}
                      setCategory={setCategory}
                    />
                  )}
                />
                <Route exact path="/cart" component={Cart} />
              </Switch>
            </div>
          </>
        );
      }}
    </AppConsumer>
  );
};

export default App;
