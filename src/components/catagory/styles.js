import styled from "styled-components";

export const MainHeading = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin: 20px 0px;
  text-transform: capitalize;
`;
export const CategoryMain = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-evenly;
`;
export const CategoryItems = styled.div`
  display: flex;
  border: 1px solid red;
  min-width: 300px;
  border-radius: 20px;
  justify-content: space-around;
`;
export const ImageContainer = styled.div`
  max-height: 60px;
  margin: 20px -20px;
`;
export const Image = styled.img`
  max-height: 80px;
  max-width: auto;
`;
export const Description = styled.div`
  margin-top: 10px;
  max-width: 36%;
`;
