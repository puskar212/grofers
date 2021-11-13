import React from "react";
import Slider from "react-slick";
import { useHistory } from "react-router-dom";

import { Wrapper, Image } from "./styles.js";

const Header = ({ category, setCategory }) => {

  const history = useHistory();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
  };
  return (
    <div >
      <Slider {...settings}>
        {category.map((e) => {
          return (
            <Wrapper state={true} onClick={() => {history.push("/itemsection")} }>
              <div>
                <Image src={e.image} alt="image" />
              </div>
              <div>
                <p>{e.title}</p>
              </div>
            </Wrapper>
          );
        })}
      </Slider>
    </div>
  );
};

export default Header;
