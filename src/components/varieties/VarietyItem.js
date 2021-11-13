import React from "react";
import data from "../../assets/varieties.json";
import {VarietyItemContainer,SingleItemContainer,VarietyItemImages, VarietyItemPara1, VarietyItemPara2} from "./styles"

const VarietyItem =({product,setProduct}) => {
   
    return (
      <VarietyItemContainer>
        {product.map((e) => {
          return (
            <SingleItemContainer>
              <div>
                <VarietyItemImages src={e.images[0]} alt="image" />
                
              </div>
              <div>
                < VarietyItemPara1>{e.productName}</ VarietyItemPara1>
              </div>
              <div>
                < VarietyItemPara2>Up to {e.discount}% OFF</ VarietyItemPara2>
              </div>
            </SingleItemContainer>
          );
        })}
      </VarietyItemContainer>
    );
  }


export default VarietyItem;
