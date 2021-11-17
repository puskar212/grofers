import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import {
  ProductItems,
  ImagesContainer,
  Images,
  Discount,
  ButtonContainer,
  Button,
  ParaDiv,
  Para1,
  Para2,
} from "./styles";

const AddButton = ({ e, context }) => {
  const history = useHistory();

  const handleAdd = (e, id) => {
    console.log("B ADDD ,............");
    e.stopPropagation();
    context.addCart(id);
  };
  
  const AddTotal = (e,id) => {
    context.Amount(id)
  }

  return (
    <ProductItems
      onClick={() => history.push({ pathname: "/particularitem", state: e })}
    >
      <ImagesContainer>
        <Images style={{ backgroundImage: `url(${e.images[0]})` }}>
          {e.discount && <Discount>{e.discount}% OFF</Discount>}

          <ButtonContainer>
            <Button onClick={(ele) => {handleAdd(ele, e._id);AddTotal(ele,e._id);}}>+</Button>
          </ButtonContainer>
        </Images>
      </ImagesContainer>
      <Para1>{e.productName}</Para1>
      <Para2>1 Kg</Para2>
      <Para1>Rs.{e.unitPrice}</Para1>
    </ProductItems>
  );
};

export default AddButton;
