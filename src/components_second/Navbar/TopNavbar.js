import React from "react";
import { UnorderedList,ListItems } from "./styles";

const TopNavbar = ({ product, category }) => {
  return (
    <UnorderedList>
      {category.map((e) => {
        return <ListItems>{e.title}</ListItems>;
      })}
    </UnorderedList>
  );
};

export default TopNavbar;
