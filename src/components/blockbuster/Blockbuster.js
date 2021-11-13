import React from "react";
import Slider from "react-slick";
import { useState } from "react";
import { useHistory } from "react-router";
import { AppConsumer } from "../../provider/AppProvider";

import data from "../../assets/blockbuster.json";
import {
  Header,
  Heading,
  SeeMoreContainer,
  SeeMore,
  ProductContainer,
  ProductItems,
  ImagesContainer,
  Images,
  Discount,
  ButtonContainer,
  Button,
  ParaDiv,
  Para1,
  Para2,
  PlusMinusButton,
  Input,
  ButtonMinus,
  ButtonPlus,
} from "./styles";

function Blockbuster({ product, setProduct, item }) {
  const [id, setId] = useState(0);
  const handleClick = (e) => {
    setId(e._id);
  };
  const history = useHistory();

  const settings = {
    infinite: true,
    speed: 100,
    slidesToShow: 7,
    slidesToScroll: 1,
  };

  const handleAdd = (e, id, context) => {
    e.stopPropagation();
    context.addCart(id);
  };
  const removeCart = (e, id, context) => {
    e.stopPropagation();
    context.removeCart(id);
  };
  // const handleButton = (e, id, context) => {
  //   context.handleButton(id);
  // };
  return (
    <>
      {data.map((e) => {
        return (
          <div>
            <Header>
              <Heading>{e.title}</Heading>
              <SeeMoreContainer>
                <SeeMore type="button" value="see more" />
              </SeeMoreContainer>
            </Header>
            <ProductContainer>
              <AppConsumer>
                {(context) => {
                  console.log("CONTEXT ................ ", context);
                  return (
                    <>
                      <Slider {...settings}>
                        {product.map((e) => {
                          return (
                            <>
                              {!context.cart.some((ele) => ele._id === e._id) ? (
                                <ProductItems
                                  onClick={() => {
                                    handleClick(e);
                                    history.push({
                                      pathname: "/particularitem",
                                      state: e,
                                    });
                                  }}
                                >
                                  <ImagesContainer>
                                    <Images
                                      style={{
                                        backgroundImage: `url(${e.images[0]})`,
                                      }}
                                    >
                                      {e.discount && (
                                        <Discount>{e.discount}% OFF</Discount>
                                      )}
                                      {/* <div>
                  <Images src={e.images} alt="image" />
                </div> */}
                                      <ButtonContainer>
                                        <Button
                                          onClick={(ele) =>
                                            handleAdd(ele, e._id, context)
                                          }
                                        >
                                          +
                                        </Button>
                                      </ButtonContainer>
                                    </Images>
                                  </ImagesContainer>
                                  <ParaDiv>
                                    <Para1>{e.productName}</Para1>
                                    <Para2>1 Kg</Para2>
                                    <Para1>Rs.{e.unitPrice}</Para1>
                                  </ParaDiv>
                                </ProductItems>
                              ) : (
                                <ProductItems
                                  onClick={() => {
                                    handleClick(e);
                                    history.push({
                                      pathname: "/particularitem",
                                      state: e,
                                    });
                                  }}
                                >
                                  <ImagesContainer>
                                    <Images
                                      style={{
                                        backgroundImage: `url(${e.images[0]})`,
                                      }}
                                    >
                                      {e.discount && (
                                        <Discount>{e.discount}% OFF</Discount>
                                      )}
                                      {/* <div>
                <Images src={e.images} alt="image" />
              </div> */}
                                      <ButtonContainer>
                                        <PlusMinusButton>
                                          <ButtonMinus
                                            onClick={(ele) =>
                                              removeCart(ele, e._id, context)
                                            }
                                          >
                                            -
                                          </ButtonMinus>
                                          <Input type="text" placeholder="0" />
                                          <ButtonPlus
                                            onClick={(ele) =>
                                              handleAdd(ele, e._id, context)
                                            }
                                          >
                                            +
                                          </ButtonPlus>
                                        </PlusMinusButton>
                                      </ButtonContainer>
                                    </Images>
                                  </ImagesContainer>
                                  <ParaDiv>
                                    <Para1>{e.productName}</Para1>
                                    <Para2>1 Kg</Para2>
                                    <Para1>Rs.{e.unitPrice}</Para1>
                                  </ParaDiv>
                                </ProductItems>
                              )}
                            </>
                          );
                        })}
                      </Slider>
                    </>
                  );
                }}
              </AppConsumer>
            </ProductContainer>
          </div>
        );
      })}
    </>
  );
}

export default Blockbuster;
