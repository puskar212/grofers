import React from "react";
import data from "../../assets/varieties.json";
import VarietyItem from "./VarietyItem";
import { AppConsumer } from "../../provider/AppProvider";
import {ProductType,Images,ItemDetails,Heading,Para1,Para2} from "./styles"

const Varieties = ({product,setProduct}) => {
  return (
    <AppConsumer>
      {(context) => {
        console.log(context);
        return (
          <div>
            {product.map((e) => {
              return (
                <>
                  <ProductType onClick={() => context.handleActive(e._id)}>
                    <div>
                      <Images src={e.images[0]} alt="image" />
                    </div>
                    <ItemDetails>
                      <div>
                        <Heading>Up to {e.discount}% OFF</Heading>
                        <Para1>{e.productName}</Para1>
                        <Para2>{e.description}</Para2>
                      </div>
                    </ItemDetails>
                  </ProductType>
                  {e._id === context.active && <VarietyItem product={product} setProduct={setProduct}/>}
                </>
              );
            })}
          </div>
        );
      }}
    </AppConsumer>
  );
};

export default Varieties;
