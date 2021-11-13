import React from "react";
import SecondPage from "./components/blockbuster/SecondPage";
import { useHistory } from "react-router";
import { MainContainer } from "./components/blockbuster/styles";

const ParticularItem = ({ product, category }) => {
  const history = useHistory();

  const item = history.location.state;

  return (
    <MainContainer>
      <div>
        <img src={item.images[0]} alt="img" />
      </div>
      <div>
        <p>{item.productName}</p>
        <div>
          <p>Product MRP : Rs.{item.unitPrice}</p>
          <p>(Inclusive of all taxes)</p>
          <div>
            <button>add</button>
          </div>
        </div>
        <hr></hr>

        <p>Unit</p>
        <p>
          {item.unitStartPoint}
          {item.unitType}
        </p>
      </div>
    </MainContainer>
  );
};
export default ParticularItem;
