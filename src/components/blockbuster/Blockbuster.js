import Slider from "react-slick";

import { AppConsumer } from "../../provider/AppProvider";
import BlockbusterHeader from "./BlockbusterHeader";
import AddButton from "./AddButton";
import AddMinusButton from "./AddMinusButton";

import data from "../../assets/blockbuster.json";

import { ProductContainer } from "./styles";

const settings = {
  infinite: true,
  speed: 100,
  slidesToShow: 7,
  slidesToScroll: 1,
};

const Blockbuster = () => {
  return (
    <>
      {data.map((e) => {
        return (
          <>
            <BlockbusterHeader headerData={e} />
            <ProductContainer>
              <AppConsumer>
                {(context) => (
                  <Slider {...settings}>
                    {context.products.map((e) => {
                    console.log(context)

                      return (
                        <>
                          {!context.cart.some((ele) => ele._id === e._id) ? (
                            <AddButton e={e} context={context} />
                          ) : (
                            <AddMinusButton e={e} context={context} />
                          )}
                        </>
                      );
                    })}
                  </Slider>
                )}
              </AppConsumer>
            </ProductContainer>
          </>
        );
      })}
    </>
  );
};

export default Blockbuster;
