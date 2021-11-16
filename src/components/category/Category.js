import Slider from "react-slick";
import { useHistory } from "react-router-dom";
import { AppConsumer } from "../../provider/AppProvider";

import {
  MainHeading,
  ImageContainer,
  Image,
  CategoryMain,
  CategoryItems,
  Description,
} from "./styles";

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
};

const Category = () => {
  const history = useHistory();

  return (
    <>
      <MainHeading>shop by category</MainHeading>
      <AppConsumer>
        {(context) => {
          return (
            <>
              <CategoryMain>
                {context.categories.map((e) => {
                  return (
                    <CategoryItems onClick={() => history.push("/itemsection")}>
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
              <Slider {...settings}>
                {context.products.map((e) => {
                  return (
                    <div>
                      <img src={e.images[0]} alt="image" />
                    </div>
                  );
                })}
              </Slider>
            </>
          );
        }}
      </AppConsumer>
    </>
  );
};

export default Category;
