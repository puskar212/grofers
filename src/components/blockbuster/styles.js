import styled from "styled-components";

export const Header = styled.div`
  display: flex;
`;
export const Heading = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin: 20px 0px;
  text-transform: capitalize;
`;
export const SeeMoreContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;
export const SeeMore = styled.input`
  //   justify-content: flex-end;
  border: none;
  background-color: transparent;
  color: red;
  font-weight: bold;
`;
export const ProductContainer = styled.div`
  //   display: flex;
  //   justify-content: space-evenly;
  //   gap: 20px;
  margin: 20px;
`;
export const ProductItems = styled.div`
  background-color: red;
  border: 1px solid red;
  //   height : 500px;
  //   width : auto;
`;
export const ImagesContainer = styled.div`
  height: 150px;
  width: 150px;
  border: 1px solid #c9c9c9;
  border-radius: 5px;
`;
export const Images = styled.div`
  height: 150px;
  width: auto;
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
  border: 1px solid #c9c9c9;
  border-radius: 10px;
`;
export const Discount = styled.div`
  background-color: #1991ff;
  width: 20%;
  font-size: 10px;
  color: white;
  border-radius: 5px;
  text-align: center;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  bottom: -10px;
  right: -10px;
`;
export const Button = styled.button`
  background-color: green;
  border: 1px solid #c9c9c9;
  padding: 0px 10px;
  font-size: 30px;
  color: #e96125;
  border-radius: 5px;
`;
export const ParaDiv = styled.div`
`;
export const Para1 = styled.p`
  margin-top: 20px;
  font-weight: bold;
`;
export const Para2 = styled(Para1)`
  font-weight: 200;
  color: lightgrey;
`;

// SecondPage styling

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
// plus minus Button styling

export const PlusMinusButton = styled.div`
  display: flex;
  justify-content: space-around;
  width : 160px;
  background-color: #e96125;
  border-radius: 10px;
`;
export const Input = styled.input`
  width: 20px;
  text-align: center;
  background: transparent;
  color: white;
  border: none;
`;
export const ButtonMinus = styled.button`
  background: transparent;
  width : 50px;
  font-size: 30px;
  color: white;
  border: none;
`;
export const ButtonPlus = styled.button`
  background: transparent;
  width : 50px;
  font-size: 30px;
  color: white;
  border: none;
`;