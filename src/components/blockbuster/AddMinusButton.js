import { useState } from "react";
import { useHistory } from "react-router";

import {
  ProductItems,
  ImagesContainer,
  Images,
  Discount,
  ButtonContainer,
  ParaDiv,
  Para1,
  Para2,
  PlusMinusButton,
  Input,
  ButtonMinus,
  ButtonPlus,
} from "./styles";

const AddMinusButton = ({ e, context }) => {
  const history = useHistory();

  const handleAdd = (e, id) => {
    console.log("ADDD");
    e.stopPropagation();
    context.addCart(id);
  };

  const removeCart = (e, id) => {
    console.log("REMOVE");
    e.stopPropagation();
    context.removeCart(id);
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
            <PlusMinusButton>
              <ButtonMinus onClick={(ele) => {removeCart(ele, e._id);AddTotal(ele,e._id);}}>
                -
              </ButtonMinus>
              <div>{context.cart.find((e1) => e1._id === e._id).count}</div>

              <ButtonPlus onClick={(ele) => {handleAdd(ele, e._id);AddTotal(ele,e._id);}}>
                +
              </ButtonPlus>
            </PlusMinusButton>
          </ButtonContainer>
        </Images>
      </ImagesContainer>
      <Para1>{e.productName}</Para1>
      <Para2>1 Kg</Para2>
      <Para1>Rs.{e.unitPrice}</Para1>
    </ProductItems>
  );
};

export default AddMinusButton;
