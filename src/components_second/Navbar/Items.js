import {
  VarietyItemContainer,
  SingleItemContainer,
  VarietyItemImages,
  VarietyItemPara1,
  VarietyItemPara2,
} from "./styles";

const ItemsList = ({ context }) => {
  return (
    <VarietyItemContainer>
      {context.products.map((e) => {
        return (
          <SingleItemContainer>
            <VarietyItemImages src={e.images[0]} alt="image" />
            <VarietyItemPara1>{e.productName}</VarietyItemPara1>
            <VarietyItemPara2>
              {e.unitStartPoint}
              {e.unitType}
            </VarietyItemPara2>
            <p>Rs.{e.unitPrice}</p>
            <button>Add To Cart</button>
          </SingleItemContainer>
        );
      })}
    </VarietyItemContainer>
  );
};

export default ItemsList;
