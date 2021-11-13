import React from "react";
import {
  VarietyItemContainer,
  SingleItemContainer,
  VarietyItemImages,
  VarietyItemPara1,
  VarietyItemPara2,
} from "./styles";

const ItemsList = ({ product }) => {
  return (
    <VarietyItemContainer>
      {product.map((e) => {
        return (
          <SingleItemContainer>
            <div>
              <VarietyItemImages src={e.images[0]} alt="image" />
            </div>
            <div>
              <VarietyItemPara1>{e.productName}</VarietyItemPara1>
            </div>
            <div>
              <VarietyItemPara2>
                {e.unitStartPoint}
                {e.unitType}
              </VarietyItemPara2>
            </div>
            <div>
              <p>Rs.{e.unitPrice}</p>
              <button>Add To Cart</button>
            </div>
          </SingleItemContainer>
        );
      })}
    </VarietyItemContainer>
  );
};

export default ItemsList;
