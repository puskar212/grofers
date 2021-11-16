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
    e.stopPropagation();
    context.addCart(id);
  };

  const removeCart = (e, id) => {
    e.stopPropagation();
    context.removeCart(id);
  };

  return (
    <ProductItems
      onClick={() => history.push({ pathname: "/particularitem", state: e })}
    >
      <ImagesContainer>
        <Images style={{ backgroundImage: `url(${e.images[0]})` }}>
          {e.discount && <Discount>{e.discount}% OFF</Discount>}
          <ButtonContainer>
            <PlusMinusButton>
              <ButtonMinus onClick={(ele) => removeCart(ele, e._id)}>
                -
              </ButtonMinus>
              {context.cart.map((cartEle) => {
                return <Input type="text" placeholder={cartEle.Item} />;
              })}
              <ButtonPlus onClick={(ele) => handleAdd(ele, e._id)}>
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
