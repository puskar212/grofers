import React from "react";
import { useHistory } from "react-router";
import { AppConsumer } from "../provider/AppProvider";
import NavbarCart from "./NavbarCart"


const Navbar = () => {
  const history = useHistory();

  

  return (
    <AppConsumer>
      {(context) => (
    <nav className="navbar">
      <h1 onClick={() => history.push("/")}>grofers </h1>
      <div>
        <div>
          <p>Location</p>
          <i className="fas fa-chevron-down"></i>
        </div>
        <p>Delivery in Minutes</p>
      </div>
      <div>
        <input type="text" placeholder="search for products" />
        <i className="fas fa-search"></i>
      </div>
      <div>
        <p>My Account</p>
        <div>
          <p>login/sign up</p>
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
      <NavbarCart context={context} />
      <div>
        <p>amount</p>
      </div>
    </nav>
      )}
    </AppConsumer>
  );
};
export default Navbar;
