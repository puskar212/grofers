import React from "react";
import Items from "./Items";
import { Scrollbars } from "react-custom-scrollbars-2";
import { AppConsumer } from "../provider/AppProvider";

const CartDetails = ({ item }) => {
  return (
    <div>
      <div>
        <h3>My Cart</h3>
        <button>X</button>
      </div>
      <div>
        <div>
          <div>
            <p>shipment 1 of 1</p>
            <p> 0 item(s)</p>
          </div>
          <div>
            <Scrollbars style={{ width: 500, height: 300 }}>
              <Items item={item} />;
            </Scrollbars>
          </div>
          <div>
            <h3>bill details</h3>
            <div>
              <p>bill total</p>
              <p>Rs.0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
