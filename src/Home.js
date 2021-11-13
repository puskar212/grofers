import React from "react";
import { useHistory } from "react-router-dom";


import Header from "./components/header/Header";
import Greetings from "./components/greetings/Greetings";
import Category from "./components/catagory/Catagory";
import Blockbuster from "./components/blockbuster/Blockbuster";
import Snacks from "./components/snacks/Snacks";
import Bank from "./components/bank/Bank";
import Offers from "./components/offers/Offers";
import Varieties from "./components/varieties/Varieties";


const Home = ({product,setProduct,category,setCategory}) => {
    

    return(
        <>
        <Header category={category} setCategory={setCategory}  />
              <Greetings />
              <Category category={category} setCategory={setCategory} />
              <Blockbuster product={product} setProduct={setProduct} />
              {/* <Snacks />
              <Bank />
              <Offers /> */}
              <Varieties product={product} setProduct={setProduct} />
              </>
    )
}

export default Home