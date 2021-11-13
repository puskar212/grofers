import React from "react";
import ItemsList from "./Items";
import { AppConsumer } from "../../provider/AppProvider";

import { UnorderedListSide, ListItemsSide } from "./styles";

const SideNavbar = ({ product, category }) => {
  return (
    <AppConsumer>
      {(context) => {
        return (
          <UnorderedListSide>
            {category.map((e) => {
              return (
                <>
                  <ListItemsSide onClick={() => context.handleActive(e._id)}>
                    {e.title}
                  </ListItemsSide>
                  {e._id === context.active && <ItemsList product={product} />}
                </>
              );
            })}
          </UnorderedListSide>
        );
      }}
    </AppConsumer>
  );
};

export default SideNavbar;
