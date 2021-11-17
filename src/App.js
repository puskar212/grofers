import "./App.css";
import { Switch, Route } from "react-router-dom";

import Navbar from "./navbar/Navbar";
import Home from "./Home";
import ItemSection from "./ItemSection";
import ParticularItem from "./ParticularItem";
import CartSection from "./CartSection";

const App = () => {
  return (
    <>
      <Navbar />
      <CartSection />
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/itemsection" component={ItemSection} />
          <Route exact path="/particularitem" component={ParticularItem} />
        </Switch>
      </div>
    </>
  );
};

export default App;
