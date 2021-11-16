import { UnorderedList,ListItems } from "./styles";
import { AppConsumer } from "../../provider/AppProvider";


const TopNavbar = () => {
  return (
    <AppConsumer>
      {(context) => {
        return (
    <UnorderedList>
      {context.categories.map((e) => {
        return <ListItems>{e.title}</ListItems>;
      })}
    </UnorderedList>
    );
  }}
</AppConsumer>
  );
};

export default TopNavbar;
