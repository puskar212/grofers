import styled from "styled-components";

export const ProductType = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px;
  border: 1px solid #c9c9c9;
`;
export const Images = styled.img`
  height: 150px;
  width: 150px;
  margin: 20px;
`;
export const ItemDetails = styled.div`
  margin: 20px 40px;
`;
export const Heading = styled.h3`
font-size : 15px;
color : rgb(76, 174, 26)
margin : 0;
`;
export const Para1 = styled.p`
  font-size: 15px;
  font-weight: bold;
  margin: 0;
`;
export const Para2 = styled.p`
  font-size: 15px;
  color: lightgrey;
  font-weight: 300;
  margin: 0;
`;

// VarietyItem

export const VarietyItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

`;
export const SingleItemContainer = styled.div`
  padding : 20px 47px;
  text-align : center;
  border: 1px solid #c9c9c9;

`;
export const VarietyItemImages = styled.img`
  height: 75px;
  width: 75px;
`;
export const VarietyItemPara1 = styled.p`
  font-size: 15px;
  font-weight: 300;
  margin: 10px;
`;
export const VarietyItemPara2 = styled.p`
  font-size: 15px;
  color: rgb(76, 174, 26);
  font-weight: bold;
  margin: 10px;
`;
