import "./App.css";
import { Switch, Route } from "react-router-dom";

import Navbar from "./navbar/Navbar";
import Home from "./Home";
import ItemSection from "./ItemSection";
import ParticularItem from "./ParticularItem";
import Cart from "./cart/Cart";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/itemsection" component={ItemSection} />
          <Route exact path="/particularitem" component={ParticularItem} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </div>
    </>
  );
};

export default App;
