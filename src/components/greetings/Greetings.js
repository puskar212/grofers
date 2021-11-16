import React from "react";
import {
  Greet,
  TextContainer,
  MainHeading,
  MainPara,
  DiscountCoupon,
  SecondPara,
  Coloring,
  ButtonColor,
  Image,
} from "./Styled.js";

const Greetings = () => {
  return (
    <Greet>
      <TextContainer>
        <MainHeading>welcome to grofers!</MainHeading>
        <MainPara>download grofers mobile app and get</MainPara>
        <DiscountCoupon>
          <MainPara>50% discount on your first order</MainPara>
          <SecondPara>
            use code : <Coloring>getfast</Coloring>
          </SecondPara>
        </DiscountCoupon>
        <ButtonColor>download the app</ButtonColor>
      </TextContainer>
      <Image src="https://www.pngitem.com/pimgs/m/16-168440_50-off-transparent-free-png-50-off-png.png" />
    </Greet>
  );
};

export default Greetings;
