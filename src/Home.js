import React from "react";

import Header from "./components/header/Header";
import Greetings from "./components/greetings/Greetings";
import Category from "./components/category/Category";
import Blockbuster from "./components/blockbuster/Blockbuster";
import Bank from "./components/bank/Bank";
import Varieties from "./components/varieties/Varieties";

const Home = () => {
  return (
    <>
      <Header />
      <Greetings />
      <Category />
      <Blockbuster />
      <Bank />
      <Varieties />
    </>
  );
};

export default Home;
