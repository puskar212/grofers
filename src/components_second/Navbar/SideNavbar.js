import ItemsList from "./Items";
import { AppConsumer } from "../../provider/AppProvider";

import { UnorderedListSide, ListItemsSide } from "./styles";

const SideNavbar = () => {
  return (
    <AppConsumer>
      {(context) => {
        return (
          <UnorderedListSide>
            {context.categories.map((e) => {
              return (
                <>
                  <ListItemsSide onClick={() => context.handleActive(e._id)}>
                    {e.title}
                  </ListItemsSide>
                  {e._id === context.active && <ItemsList context={context} />}
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
