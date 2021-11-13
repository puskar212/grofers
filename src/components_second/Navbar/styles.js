import styled from "styled-components";

export const UnorderedList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  box-shadow: 5px 5px 5px lightgrey;
  margin: 30px;
  padding : 20px;
  list-style: none;
`;
export const ListItems = styled.li`
  font-size: 10px;
  font-weight: bold;
`;
export const UnorderedListSide = styled.ul`
  margin: 30px;
  list-style: none;
`;
export const ListItemsSide = styled.li`
  font-size: 25px;
  font-weight: 300;
  height : auto;
  width : auto;
  border : 1px solid lightgrey;
`;

// Items

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