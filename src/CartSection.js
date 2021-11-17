import { AppConsumer } from "./provider/AppProvider";
import Cart from "./cart/Cart";
import "./CartSection.css";

const CartSection = () => {
  return (
    <>
      <AppConsumer>
        {(context) => (
          <>
            {context.open && (
              <div className="abc">
                <div className="black" onClick={()=>context.closeCart()}></div>
                <div className="cart1">
                  <Cart />
                </div>
              </div>
            )}
          </>
        )}
      </AppConsumer>
    </>
  );
};
export default CartSection;
