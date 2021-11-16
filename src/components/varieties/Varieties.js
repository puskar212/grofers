import VarietyItem from "./VarietyItem";
import { AppConsumer } from "../../provider/AppProvider";
import {
  ProductType,
  Images,
  ItemDetails,
  Heading,
  Para1,
  Para2,
} from "./styles";

const Varieties = () => {
  return (
    <AppConsumer>
      {(context) => {
        return (
          <>
            {context.products.map((e) => {
              return (
                <>
                  <ProductType onClick={() => context.handleActive(e._id)}>
                    <div>
                      <Images src={e.images[0]} alt="image" />
                    </div>
                    <ItemDetails>
                      <Heading>Up to {e.discount}% OFF</Heading>
                      <Para1>{e.productName}</Para1>
                      <Para2>{e.description}</Para2>
                    </ItemDetails>
                  </ProductType>
                  {e._id === context.active && (
                    <VarietyItem context={context} />
                  )}
                </>
              );
            })}
          </>
        );
      }}
    </AppConsumer>
  );
};

export default Varieties;
