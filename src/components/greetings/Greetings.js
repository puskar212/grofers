import React from "react";
import Slider from "react-slick";
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
        <div>
          <MainHeading>welcome to grofers!</MainHeading>
          <MainPara>download grofers mobile app and get</MainPara>
        </div>
        <DiscountCoupon>
          <MainPara>50% discount on your first order</MainPara>
          <SecondPara>
            use code : <Coloring>getfast</Coloring>
          </SecondPara>
        </DiscountCoupon>
        <div>
          <ButtonColor>download the app</ButtonColor>
        </div>
      </TextContainer>
      <div>
        <Image src="https://www.pngitem.com/pimgs/m/16-168440_50-off-transparent-free-png-50-off-png.png" />
      </div>
    </Greet>
  );
};

export default Greetings;
