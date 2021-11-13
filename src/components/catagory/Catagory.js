import React from "react";
import Slider from "react-slick";
import { useHistory } from "react-router-dom";

import {MainHeading,ImageContainer,Image,CategoryMain,CategoryItems,Description} from "./styles"

import data from "../../assets/catagory.json";

function Catagory({category,setCategory}) {

  const history = useHistory();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
  };
  return (
    <div>
      <div>
        <MainHeading>shop by category</MainHeading>
      </div>
      <CategoryMain>
        {category.map((e) => {
          return (
            <CategoryItems onClick={() => {history.push("/itemsection")} }>
              <ImageContainer>
                <Image src={e.image} alt="image" />
              </ImageContainer>
              <Description>
                <p>UPTO 50% OFF</p>
                <p>{e.title}</p>
                </Description>
            </CategoryItems>
          );
        })}
      </CategoryMain>
      <div>
        <Slider {...settings}>
          {data.map((e) => {
            return (
              <div>
                <img src={e.imgUrl} alt="image" />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Catagory;
