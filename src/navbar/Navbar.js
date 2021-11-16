import React from "react";
import { useHistory } from "react-router";

const Navbar = () => {
  const history = useHistory();

  return (
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
      <div>
        <i
          className="fas fa-shopping-cart"
          onClick={() => history.push("./cart")}
        ></i>
        <p>0</p>
      </div>
      <div>
        <p>amount</p>
      </div>
    </nav>
  );
};
export default Navbar;
