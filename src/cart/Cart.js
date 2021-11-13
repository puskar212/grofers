import React from "react";
import { AppConsumer } from "../provider/AppProvider";
import CartDetails from "./CartDetails";

const Cart = () => {
  return (
    <AppConsumer>
      {(context) => {
        return (
          <>
            {context.cart.map((e) => {
              return <CartDetails item={e} key={e._id} />;
            })}
          </>
        );
      }}
    </AppConsumer>
  );
};

export default Cart;
