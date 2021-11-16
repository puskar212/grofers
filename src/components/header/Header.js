import Slider from "react-slick";
import { useHistory } from "react-router-dom";

import { AppConsumer } from "../../provider/AppProvider";
import { Wrapper, Image } from "./styles.js";

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 4,
};

const Header = () => {
  const history = useHistory();

  return (
    <AppConsumer>
      {(context) => (
        <Slider {...settings}>
          {context.categories.map((e) => (
            <Wrapper onClick={() => history.push("/itemsection")}>
              <Image src={e.image} alt="image" />
              <p>{e.title}</p>
            </Wrapper>
          ))}
        </Slider>
      )}
    </AppConsumer>
  );
};

export default Header;
